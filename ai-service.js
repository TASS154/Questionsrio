// Serviço Gemini — avaliação de justificativas e dissertativas.

const AIService = {
    _modelCandidates() {
        return [AI_CONFIG.model, ...(AI_CONFIG.fallbackModels || [])]
            .filter((m, i, arr) => m && arr.indexOf(m) === i);
    },

    _formatGeminiError(status, errText) {
        const snippet = errText.slice(0, 280);
        if (status === 429) {
            return (
                'Gemini (429): cota ou capacidade esgotada. ' +
                'Se o painel mostra pouco uso, o modelo antigo pode estar descontinuado — ' +
                'recarregue a página (Ctrl+F5). Detalhe: ' + snippet
            );
        }
        if (status === 404) {
            return 'Gemini (404): modelo não encontrado ou descontinuado. Detalhe: ' + snippet;
        }
        return `Gemini (${status}): ${snippet}`;
    },

    async _requestGemini(model, payload) {
        let response;

        if (AIConfig.usaProxy()) {
            response = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model, payload })
            });
        } else {
            const url =
                `${AI_CONFIG.baseUrl}/models/${model}:generateContent` +
                `?key=${encodeURIComponent(AI_CONFIG.apiKey)}`;

            response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        }

        if (!response.ok) {
            const err = await response.text();
            const error = new Error(this._formatGeminiError(response.status, err));
            error.status = response.status;
            throw error;
        }

        const data = await response.json();
        const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        return JSON.parse(raw);
    },

    async _gemini(systemPrompt, userPrompt) {
        if (!AIConfig.isReady()) {
            throw new Error(
                'IA indisponível. Em produção, configure GEMINI_API_KEY na Vercel. ' +
                'Localmente, crie ai-config.local.js a partir do .example.'
            );
        }

        const payload = {
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
            generationConfig: {
                temperature: 0.45,
                responseMimeType: 'application/json'
            }
        };

        return this._callWithFallback(payload);
    },

    async _geminiChat(systemPrompt, messages) {
        if (!AIConfig.isReady()) {
            throw new Error(
                'IA indisponível. Em produção, configure GEMINI_API_KEY na Vercel. ' +
                'Localmente, crie ai-config.local.js a partir do .example.'
            );
        }

        const contents = messages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
        }));

        const payload = {
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents,
            generationConfig: {
                temperature: 0.55,
                responseMimeType: 'application/json'
            }
        };

        return this._callWithFallback(payload);
    },

    async _callWithFallback(payload) {
        const models = this._modelCandidates();
        let lastError;

        for (let i = 0; i < models.length; i++) {
            try {
                return await this._requestGemini(models[i], payload);
            } catch (e) {
                lastError = e;
                const retryable = e.status === 429 || e.status === 404 || e.status === 503;
                if (!retryable || i === models.length - 1) throw e;
            }
        }

        throw lastError;
    },

    formatAlternativas(questao) {
        const letras = ['A', 'B', 'C', 'D'];
        return questao.alternativas
            .map((a, i) => `${letras[i]}) ${a}`)
            .join('\n');
    },

    async evaluateJustification(ctx) {
        const user = AI_PROMPTS.justificativa.buildUser({
            ...ctx,
            alternativasLista: ctx.alternativasLista || ''
        });
        return this._gemini(AI_PROMPTS.justificativa.system, user);
    },

    async chatJustification(ctx, historico, mensagem) {
        const historicoTexto = historico
            .map(h => `${h.role === 'user' ? 'Aluno' : 'Tutora'}: ${h.content}`)
            .join('\n');

        const user = AI_PROMPTS.justificativaChat.buildUser({
            ...ctx,
            historicoConversa: historicoTexto,
            mensagem
        });

        return this._gemini(AI_PROMPTS.justificativaChat.system, user);
    },

    async evaluateDissertative(ctx) {
        const user = AI_PROMPTS.dissertativa.buildUser(ctx);
        return this._gemini(AI_PROMPTS.dissertativa.system, user);
    },

    async chatRevisao(ctx, historico, mensagem) {
        const historicoTexto = historico
            .map(h => `${h.role === 'user' ? 'Aluno' : 'Tutora'}: ${h.content}`)
            .join('\n');

        const user = AI_PROMPTS.revisao.buildUser({
            ...ctx,
            historicoConversa: historicoTexto,
            mensagem
        });

        return this._gemini(AI_PROMPTS.revisao.system, user);
    },

    async chatAprofundamento(ctx, historico, mensagem) {
        const historicoTexto = historico
            .map(h => `${h.role === 'user' ? 'Aluno' : 'Tutora'}: ${h.content}`)
            .join('\n');

        const user = AI_PROMPTS.aprofundamento.buildUser({
            ...ctx,
            historicoConversa: historicoTexto,
            mensagem
        });

        return this._gemini(AI_PROMPTS.aprofundamento.system, user);
    }
};
