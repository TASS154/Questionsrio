// =============================================================
// Lógica em Camadas — controlador do fluxo (Gemini obrigatório)
// =============================================================

const LETRAS = ['A', 'B', 'C', 'D'];

const estado = {
    faseIdx: 0,
    blocoIdx: 0,
    questaoIdx: 0,
    acertos: 0,
    respondidas: 0,
    acertosNaFase: 0,
    respondidasNaFase: 0,
    questaoConcluida: false,
    aguardandoJustificativa: false,
    dicaVisivel: false,
    jaErrouNestaQuestao: false,
    modoJustificativa: null,
    indicePendente: null,
    ultimoIndiceErrado: null,
    chatHistorico: [],
    iaCarregando: false
};

const $ = (id) => document.getElementById(id);

const telas = {
    inicio: $('tela-inicio'),
    questao: $('tela-questao'),
    faseCompleta: $('tela-fase-completa'),
    final: $('tela-final')
};

function mostrarTela(nome) {
    Object.values(telas).forEach(t => t.classList.remove('ativa'));
    telas[nome].classList.add('ativa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function faseAtual() { return QUESTOES.fases[estado.faseIdx]; }
function blocoAtual() { return faseAtual().blocos[estado.blocoIdx]; }
function questaoAtual() { return blocoAtual().questoes[estado.questaoIdx]; }

function totalDeQuestoesNaFase(faseIdx) {
    return QUESTOES.fases[faseIdx].blocos.reduce((b, bloco) => b + bloco.questoes.length, 0);
}

function escapeHTML(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function obterDica(questao) {
    return questao.dica || 'Releia o enunciado e pense qual alternativa faz mais sentido no contexto real de um sistema.';
}

function exigirIA() {
    if (!AIConfig.isReady()) {
        alert('Configure sua chave Gemini na tela inicial para continuar.');
        mostrarTela('inicio');
        return false;
    }
    return true;
}

function atualizarStatusIA() {
    const el = $('status-ia');
    const btn = $('btn-comecar');
    if (!el || !btn) return;

    if (AIConfig.isReady()) {
        el.textContent = 'Gemini conectado — pronta para avaliar';
        el.className = 'status-ia ativo';
        btn.disabled = false;
    } else {
        el.textContent = 'Gemini não configurado — obrigatório para começar';
        el.className = 'status-ia inativo';
        btn.disabled = true;
    }
}

function resetarPainelDica() {
    estado.dicaVisivel = false;
    $('painel-dica').hidden = true;
    $('painel-dica').textContent = '';
    $('btn-dica').textContent = '💡 Ver dica';
}

function toggleDica() {
    const q = questaoAtual();
    estado.dicaVisivel = !estado.dicaVisivel;
    const painel = $('painel-dica');
    if (estado.dicaVisivel) {
        painel.textContent = obterDica(q);
        painel.hidden = false;
        $('btn-dica').textContent = '💡 Ocultar dica';
    } else {
        painel.hidden = true;
        $('btn-dica').textContent = '💡 Ver dica';
    }
}

function esconderFeedback() {
    $('feedback').hidden = true;
    $('btn-proxima').hidden = true;
    $('justificativa-area').hidden = true;
    $('feedback-ia').hidden = true;
    $('nota-ia-box').hidden = true;
    $('chat-ia-area').hidden = true;
    $('texto-justificativa').value = '';
    $('chat-mensagens').innerHTML = '';
    $('chat-input').value = '';
    $('btn-continuar-pos-chat').hidden = true;
    estado.modoJustificativa = null;
    estado.indicePendente = null;
    estado.chatHistorico = [];
}

function renderizarQuestao() {
    if (!exigirIA()) return;

    const fase = faseAtual();
    const bloco = blocoAtual();
    const q = questaoAtual();

    estado.questaoConcluida = false;
    estado.aguardandoJustificativa = false;
    estado.jaErrouNestaQuestao = false;
    estado.ultimoIndiceErrado = null;
    estado.chatHistorico = [];
    estado.iaCarregando = false;

    document.documentElement.style.setProperty('--fase-cor', fase.cor);

    $('badge-fase').textContent = fase.nome;
    $('caminho').textContent =
        `Bloco ${estado.blocoIdx + 1} de 4 · ${bloco.nome} · Questão ${estado.questaoIdx + 1} de ${bloco.questoes.length}`;
    $('placar-acertos').textContent = estado.acertos;
    $('placar-total').textContent = estado.respondidas;

    const totalFase = totalDeQuestoesNaFase(estado.faseIdx);
    $('progresso-barra').style.width = `${((estado.blocoIdx * 10 + estado.questaoIdx) / totalFase) * 100}%`;

    $('bloco-icone').textContent = bloco.icone;
    $('bloco-nome').textContent = bloco.nome;
    $('bloco-descricao').textContent = bloco.descricao;
    $('bloco-header').style.borderLeftColor = fase.cor;

    const tipoEl = $('questao-tipo');
    tipoEl.textContent = q.tipo === 'alternativa' ? 'Alternativa' : 'Dissertativa';
    tipoEl.classList.toggle('dissertativa', q.tipo === 'dissertativa');
    $('enunciado').textContent = q.enunciado;

    resetarPainelDica();
    esconderFeedback();

    if (q.tipo === 'alternativa') {
        $('container-alternativas').hidden = false;
        $('container-dissertativa').hidden = true;
        renderizarAlternativas(q);
    } else {
        $('container-alternativas').hidden = true;
        $('container-dissertativa').hidden = false;
        $('texto-resposta').value = '';
        $('texto-resposta').disabled = false;
        $('btn-enviar-dissertativa').disabled = false;
        $('texto-resposta').focus();
    }
}

function renderizarAlternativas(q) {
    const container = $('container-alternativas');
    container.innerHTML = '';
    q.alternativas.forEach((alt, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'alternativa';
        btn.innerHTML = `<span class="letra">${LETRAS[idx]}</span><span>${escapeHTML(alt)}</span>`;
        btn.addEventListener('click', () => selecionarAlternativa(idx));
        container.appendChild(btn);
    });
}

function habilitarAlternativas() {
    document.querySelectorAll('.alternativa').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correta', 'errada', 'selecionada-pendente');
    });
}

function marcarAlternativaPendente(idx) {
    document.querySelectorAll('.alternativa').forEach((btn, i) => {
        btn.classList.toggle('selecionada-pendente', i === idx);
        btn.disabled = i !== idx;
    });
}

function mostrarJustificativa(prompt) {
    estado.aguardandoJustificativa = true;
    estado.modoJustificativa = 'pre-avaliacao';
    $('justificativa-prompt').textContent = prompt;
    $('justificativa-area').hidden = false;
    $('feedback').hidden = false;
    $('btn-enviar-justificativa').textContent = 'Enviar para a tutora avaliar';
    $('btn-enviar-justificativa').classList.add('confirmar');
    $('texto-justificativa').value = '';
    $('texto-justificativa').focus();
}

function mostrarFeedbackIA(html) {
    const el = $('feedback-ia');
    if (!html) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = html;
}

function mostrarNotaIA(nota) {
    const box = $('nota-ia-box');
    const val = $('nota-ia-valor');
    const min = AI_CONFIG.notaMinimaDissertativa;
    const aprovada = Number(nota) >= min;

    box.hidden = false;
    val.textContent = Number(nota).toFixed(1).replace(/\.0$/, '');
    val.className = 'nota-ia-valor ' + (aprovada ? 'aprovada' : 'reprovada');
    return aprovada;
}

function addChatMsg(role, texto) {
    const div = document.createElement('div');
    div.className = `chat-msg ${role === 'user' ? 'aluno' : 'tutora'}`;
    div.textContent = texto;
    $('chat-mensagens').appendChild(div);
    $('chat-mensagens').scrollTop = $('chat-mensagens').scrollHeight;
}

function mostrarChatArea(mostrarContinuar = true) {
    $('chat-ia-area').hidden = false;
    $('btn-continuar-pos-chat').hidden = !mostrarContinuar;
}

function ctxJustificativa(justificativa) {
    const q = questaoAtual();
    const fase = faseAtual();
    const bloco = blocoAtual();
    const idx = estado.indicePendente;
    return {
        fase: fase.nome,
        bloco: bloco.nome,
        enunciado: q.enunciado,
        alternativasLista: AIService.formatAlternativas(q),
        alternativaEscolhida: q.alternativas[idx],
        alternativaCorreta: q.alternativas[q.correta],
        justificativa
    };
}

function selecionarAlternativa(idx) {
    if (estado.questaoConcluida || estado.aguardandoJustificativa || estado.iaCarregando) return;
    if (!exigirIA()) return;

    const q = questaoAtual();

    if (estado.jaErrouNestaQuestao) {
        estado.indicePendente = idx;
        marcarAlternativaPendente(idx);
        $('feedback').hidden = false;
        $('feedback').className = 'feedback parcial';
        $('feedback-titulo').textContent = '✏️ Justifique sua nova escolha';
        $('feedback-conteudo').innerHTML =
            `<p>Você escolheu <strong>${LETRAS[idx]}) ${escapeHTML(q.alternativas[idx])}</strong>. A tutora vai ler seu raciocínio antes de confirmar.</p>`;
        $('btn-proxima').hidden = true;
        mostrarFeedbackIA('');
        esconderChatSemHistorico();
        mostrarJustificativa(`Por que você está escolhendo a alternativa ${LETRAS[idx]} agora?`);
        return;
    }

    processarAlternativa(idx);
}

function esconderChatSemHistorico() {
    $('chat-ia-area').hidden = true;
    $('chat-mensagens').innerHTML = '';
    $('btn-continuar-pos-chat').hidden = true;
    estado.chatHistorico = [];
}

async function marcarCorretoPlausivel(idx, mensagemIA) {
    const q = questaoAtual();
    const botoes = document.querySelectorAll('.alternativa');
    botoes.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.remove('selecionada-pendente');
        if (i === idx) btn.classList.add('correta');
    });

    estado.questaoConcluida = true;
    concluirQuestao(true);

    const feedback = $('feedback');
    feedback.hidden = false;
    feedback.className = 'feedback acerto';
    $('feedback-titulo').textContent = '✅ Raciocínio aceito!';
    $('feedback-conteudo').innerHTML =
        `<p>${escapeHTML(mensagemIA || 'Sua justificativa mostra que você entendeu o conceito.')}</p>`;
    $('btn-proxima').hidden = false;
    $('justificativa-area').hidden = true;
    $('chat-ia-area').hidden = true;
}

async function processarAlternativa(idxEscolhido) {
    const q = questaoAtual();
    const correto = idxEscolhido === q.correta;
    const botoes = document.querySelectorAll('.alternativa');

    botoes.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('selecionada-pendente');
        if (idx === idxEscolhido && !correto) btn.classList.add('errada');
    });

    const feedback = $('feedback');
    feedback.hidden = false;

    if (correto) {
        botoes[idxEscolhido].classList.add('correta');
        estado.questaoConcluida = true;
        concluirQuestao(true);
        feedback.className = 'feedback acerto';
        $('feedback-titulo').textContent = '✅ Correto!';
        $('feedback-conteudo').innerHTML =
            `<p>Ótimo! A resposta certa é: <strong>${escapeHTML(q.alternativas[q.correta])}</strong>.</p>`;
        $('btn-proxima').hidden = false;
        $('chat-ia-area').hidden = true;
    } else {
        estado.jaErrouNestaQuestao = true;
        estado.ultimoIndiceErrado = idxEscolhido;
        feedback.className = 'feedback erro';
        $('feedback-titulo').textContent = '❌ Ainda não é essa';
        $('feedback-conteudo').innerHTML =
            '<p>Essa alternativa não bate com o gabarito. Tente outra — na próxima escolha você justifica antes de confirmar.</p>';
        $('btn-proxima').hidden = true;
        setTimeout(() => habilitarAlternativas(), 400);
    }
}

async function aplicarResultadoJustificativaIA(ia, idx) {
    let html = `<strong>💬 Tutora:</strong> ${escapeHTML(ia.feedback || '')}`;
    if (ia.explicacao_breve) {
        html += `<br><br>${escapeHTML(ia.explicacao_breve)}`;
    }
    mostrarFeedbackIA(html);

    if (ia.aceitar_como_correto) {
        await marcarCorretoPlausivel(idx, ia.feedback);
        return;
    }

    if (ia.entendeu && ia.liberar_avaliacao) {
        await processarAlternativa(idx);
        return;
    }

    // Não entendeu bem — conversa ou seguir mesmo assim
    if (ia.feedback) addChatMsg('assistant', ia.feedback);
    if (ia.explicacao_breve) addChatMsg('assistant', ia.explicacao_breve);
    mostrarChatArea(true);
}

async function enviarJustificativa() {
    if (!exigirIA()) return;

    const texto = $('texto-justificativa').value.trim();
    if (texto.length < AI_CONFIG.minJustificationLength) {
        $('texto-justificativa').style.borderColor = 'var(--erro)';
        setTimeout(() => { $('texto-justificativa').style.borderColor = ''; }, 1200);
        return;
    }

    const idx = estado.indicePendente;
    estado.aguardandoJustificativa = false;
    $('justificativa-area').hidden = true;
    estado.iaCarregando = true;
    $('btn-enviar-justificativa').disabled = true;

    $('feedback-titulo').textContent = '🤖 Tutora analisando...';
    $('feedback-conteudo').innerHTML = '<p>Um segundinho, miga...</p>';

    try {
        const ia = await AIService.evaluateJustification(ctxJustificativa(texto));
        estado.chatHistorico.push({ role: 'user', content: texto });
        await aplicarResultadoJustificativaIA(ia, idx);
    } catch (e) {
        mostrarFeedbackIA(`<em>Erro ao falar com o Gemini: ${escapeHTML(e.message)}</em>`);
        $('justificativa-area').hidden = false;
        estado.aguardandoJustificativa = true;
    } finally {
        estado.iaCarregando = false;
        $('btn-enviar-justificativa').disabled = false;
    }
}

async function enviarChat() {
    if (!exigirIA() || estado.iaCarregando) return;

    const msg = $('chat-input').value.trim();
    if (msg.length < AI_CONFIG.minChatLength) return;

    const idx = estado.indicePendente;
    addChatMsg('user', msg);
    $('chat-input').value = '';
    estado.chatHistorico.push({ role: 'user', content: msg });
    estado.iaCarregando = true;
    $('btn-enviar-chat').disabled = true;

    try {
        const ctx = {
            ...ctxJustificativa(estado.chatHistorico[0]?.content || ''),
            alternativaEscolhida: questaoAtual().alternativas[idx]
        };
        const ia = await AIService.chatJustification(ctx, estado.chatHistorico, msg);

        const resposta = ia.resposta || ia.feedback || 'Continua tentando, você consegue!';
        addChatMsg('assistant', resposta);
        estado.chatHistorico.push({ role: 'assistant', content: resposta });

        if (ia.aceitar_como_correto) {
            await marcarCorretoPlausivel(idx, resposta);
            return;
        }

        if (ia.liberar_avaliacao && ia.entendeu) {
            await processarAlternativa(idx);
            return;
        }

        $('btn-continuar-pos-chat').hidden = false;
    } catch (e) {
        addChatMsg('assistant', `Ops, deu erro na conexão: ${e.message}`);
    } finally {
        estado.iaCarregando = false;
        $('btn-enviar-chat').disabled = false;
    }
}

async function continuarPosChat() {
    const idx = estado.indicePendente;
    if (idx == null) return;
    $('chat-ia-area').hidden = true;
    await processarAlternativa(idx);
}

async function enviarDissertativa() {
    if (estado.questaoConcluida || estado.aguardandoJustificativa || estado.iaCarregando) return;
    if (!exigirIA()) return;

    const texto = $('texto-resposta').value.trim();
    if (texto.length < AI_CONFIG.minDissertativeLength) {
        $('texto-resposta').style.borderColor = 'var(--erro)';
        setTimeout(() => { $('texto-resposta').style.borderColor = ''; }, 1200);
        return;
    }

    $('texto-resposta').disabled = true;
    $('btn-enviar-dissertativa').disabled = true;
    estado.iaCarregando = true;

    const q = questaoAtual();
    const fase = faseAtual();
    const bloco = blocoAtual();
    const feedback = $('feedback');
    feedback.hidden = false;
    feedback.className = 'feedback parcial';
    $('feedback-titulo').textContent = '🤖 Tutora analisando sua resposta...';
    $('feedback-conteudo').innerHTML = '<p>Aguarde, bestie...</p>';
    $('nota-ia-box').hidden = true;
    $('btn-proxima').hidden = true;

    const ehCodigo = bloco.nome === 'Código';
    const classeModelo = ehCodigo ? 'resposta-modelo' : 'resposta-modelo texto';

    try {
        const ia = await AIService.evaluateDissertative({
            enunciado: q.enunciado,
            respostaUsuario: texto,
            respostaModelo: q.respostaModelo,
            fase: fase.nome,
            bloco: bloco.nome
        });

        const nota = Number(ia.nota);
        if (Number.isNaN(nota)) {
            throw new Error('A IA não retornou o campo "nota". Tente enviar de novo.');
        }

        const aprovada = mostrarNotaIA(nota);
        const min = AI_CONFIG.notaMinimaDissertativa;

        feedback.className = `feedback ${aprovada ? 'acerto' : 'erro'}`;
        $('feedback-titulo').textContent = aprovada
            ? '✅ Aprovada pela tutora!'
            : `❌ Nota abaixo de ${min} — tente de novo`;

        let conteudo = `
            <p><strong>Sua resposta:</strong></p>
            <div class="${classeModelo}">${escapeHTML(texto)}</div>
        `;
        if (ia.feedback) {
            conteudo += `<p style="margin-top:14px"><strong>💬 Tutora:</strong> ${escapeHTML(ia.feedback)}</p>`;
        }
        if (ia.dica_melhoria) {
            conteudo += `<p style="margin-top:8px"><strong>✨ Dica extra:</strong> ${escapeHTML(ia.dica_melhoria)}</p>`;
        }
        $('feedback-conteudo').innerHTML = conteudo;

        if (aprovada) {
            estado.questaoConcluida = true;
            concluirQuestao(true);
            $('btn-proxima').hidden = false;
        } else {
            $('texto-resposta').disabled = false;
            $('btn-enviar-dissertativa').disabled = false;
            $('texto-resposta').focus();
        }
    } catch (e) {
        feedback.className = 'feedback erro';
        $('feedback-titulo').textContent = 'Erro na avaliação';
        $('feedback-conteudo').innerHTML = `<p>${escapeHTML(e.message)}</p>`;
        $('texto-resposta').disabled = false;
        $('btn-enviar-dissertativa').disabled = false;
    } finally {
        estado.iaCarregando = false;
    }
}

function concluirQuestao(correto) {
    estado.respondidas++;
    estado.respondidasNaFase++;
    if (correto) {
        estado.acertos++;
        estado.acertosNaFase++;
    }
    $('placar-acertos').textContent = estado.acertos;
    $('placar-total').textContent = estado.respondidas;
}

function avancar() {
    if (!estado.questaoConcluida) return;
    estado.questaoIdx++;
    const bloco = blocoAtual();
    if (estado.questaoIdx >= bloco.questoes.length) {
        estado.questaoIdx = 0;
        estado.blocoIdx++;
        if (estado.blocoIdx >= faseAtual().blocos.length) {
            mostrarConclusaoFase();
            return;
        }
    }
    renderizarQuestao();
}

function mostrarConclusaoFase() {
    const fase = faseAtual();
    $('fase-titulo').textContent = `Fase ${fase.nome} completada!`;
    $('fase-tema').textContent = `Tema conectado: ${fase.tema}`;
    $('resumo-acertos').textContent = estado.acertosNaFase;
    $('resumo-total').textContent = totalDeQuestoesNaFase(estado.faseIdx);
    document.documentElement.style.setProperty('--fase-cor', fase.cor);
    mostrarTela('faseCompleta');
}

function avancarFase() {
    estado.faseIdx++;
    estado.blocoIdx = 0;
    estado.questaoIdx = 0;
    estado.acertosNaFase = 0;
    estado.respondidasNaFase = 0;
    if (estado.faseIdx >= QUESTOES.fases.length) {
        $('final-acertos').textContent = estado.acertos;
        mostrarTela('final');
        return;
    }
    renderizarQuestao();
    mostrarTela('questao');
}

function reiniciar() {
    Object.assign(estado, {
        faseIdx: 0, blocoIdx: 0, questaoIdx: 0,
        acertos: 0, respondidas: 0, acertosNaFase: 0, respondidasNaFase: 0,
        questaoConcluida: false, aguardandoJustificativa: false, dicaVisivel: false,
        jaErrouNestaQuestao: false, modoJustificativa: null, indicePendente: null,
        ultimoIndiceErrado: null, chatHistorico: [], iaCarregando: false
    });
    mostrarTela('inicio');
}

function iniciarPainelIA() {
    const input = $('input-api-key');
    if (AI_CONFIG.apiKey) {
        input.value = '••••••••' + AI_CONFIG.apiKey.slice(-4);
    }

    $('btn-salvar-ia').addEventListener('click', () => {
        const val = input.value;
        if (!val.startsWith('••••')) {
            AIConfig.save(val);
            input.value = '••••••••' + AI_CONFIG.apiKey.slice(-4);
        }
        atualizarStatusIA();
    });

    $('btn-remover-ia').addEventListener('click', () => {
        AIConfig.clear();
        input.value = '';
        atualizarStatusIA();
    });

    atualizarStatusIA();
}

function iniciarEventos() {
    $('btn-comecar').addEventListener('click', () => {
        if (!exigirIA()) return;
        renderizarQuestao();
        mostrarTela('questao');
    });

    $('btn-dica').addEventListener('click', toggleDica);
    $('btn-enviar-dissertativa').addEventListener('click', enviarDissertativa);
    $('btn-enviar-justificativa').addEventListener('click', enviarJustificativa);
    $('btn-enviar-chat').addEventListener('click', enviarChat);
    $('btn-continuar-pos-chat').addEventListener('click', continuarPosChat);
    $('btn-proxima').addEventListener('click', avancar);
    $('btn-proxima-fase').addEventListener('click', avancarFase);
    $('btn-reiniciar').addEventListener('click', reiniciar);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && estado.questaoConcluida && !$('btn-proxima').hidden) {
            avancar();
        }
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            if (estado.aguardandoJustificativa) enviarJustificativa();
            else if (!$('chat-ia-area').hidden && document.activeElement === $('chat-input')) enviarChat();
            else if (questaoAtual()?.tipo === 'dissertativa' && !estado.questaoConcluida) enviarDissertativa();
        }
    });

    iniciarPainelIA();
}

document.addEventListener('DOMContentLoaded', iniciarEventos);
