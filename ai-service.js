// Serviço Gemini — avaliação de justificativas e dissertativas.

const AIService = {
    async _gemini(systemPrompt, userPrompt) {
        if (!AIConfig.isReady()) {
            throw new Error('Configure sua chave Gemini na tela inicial.');
        }

        const url = `${AI_CONFIG.baseUrl}/models/${AI_CONFIG.model}:generateContent?key=${encodeURIComponent(AI_CONFIG.apiKey)}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                systemInstruction: { parts: [{ text: systemPrompt }] },
                contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
                generationConfig: {
                    temperature: 0.45,
                    responseMimeType: 'application/json'
                }
            })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Gemini (${response.status}): ${err.slice(0, 280)}`);
        }

        const data = await response.json();
        const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        return JSON.parse(raw);
    },

    async _geminiChat(systemPrompt, messages) {
        if (!AIConfig.isReady()) {
            throw new Error('Configure sua chave Gemini na tela inicial.');
        }

        const url = `${AI_CONFIG.baseUrl}/models/${AI_CONFIG.model}:generateContent?key=${encodeURIComponent(AI_CONFIG.apiKey)}`;

        const contents = messages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
        }));

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                systemInstruction: { parts: [{ text: systemPrompt }] },
                contents,
                generationConfig: {
                    temperature: 0.55,
                    responseMimeType: 'application/json'
                }
            })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Gemini (${response.status}): ${err.slice(0, 280)}`);
        }

        const data = await response.json();
        const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        return JSON.parse(raw);
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
    }
};
