// =============================================================
// Lógica em Camadas — controlador do fluxo
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
    chatAtivo: false,
    iaCarregando: false,
    ultimaRespostaUsuario: '',
    ultimaNota: null
};

const revisao = {
    registro: null,
    chatHistorico: [],
    iaCarregando: false
};

const $ = (id) => document.getElementById(id);

const telas = {
    inicio: $('tela-inicio'),
    questao: $('tela-questao'),
    revisao: $('tela-revisao'),
    faseCompleta: $('tela-fase-completa'),
    final: $('tela-final')
};

function mostrarTela(nome) {
    Object.values(telas).forEach(t => t.classList.remove('ativa'));
    telas[nome].classList.add('ativa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (nome === 'questao') persistirProgresso();
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

function terminaComPergunta(texto) {
    return String(texto || '').trim().endsWith('?');
}

function obterDica(questao) {
    return questao.dica || 'Releia o enunciado e pense qual alternativa faz mais sentido no contexto real de um sistema.';
}

function persistirProgresso() {
    ProgressStore.salvarProgresso(estado);
}

function atualizarBotoesInicio() {
    const tem = ProgressStore.temProgresso();
    $('btn-continuar').hidden = !tem;
    $('btn-comecar-zero').hidden = !tem;
    if (tem) {
        $('btn-comecar').textContent = 'Começar do início →';
        $('btn-comecar').className = 'btn-secundario';
        $('btn-continuar').className = 'btn-primario';
    } else {
        $('btn-comecar').textContent = 'Começar →';
        $('btn-comecar').className = 'btn-primario';
    }
}

function restaurarProgresso() {
    const p = ProgressStore.carregarProgresso();
    if (!p) return false;
    Object.assign(estado, {
        faseIdx: p.faseIdx,
        blocoIdx: p.blocoIdx,
        questaoIdx: p.questaoIdx,
        acertos: p.acertos,
        respondidas: p.respondidas,
        acertosNaFase: p.acertosNaFase,
        respondidasNaFase: p.respondidasNaFase,
        questaoConcluida: false,
        aguardandoJustificativa: false,
        dicaVisivel: false,
        jaErrouNestaQuestao: false,
        modoJustificativa: null,
        indicePendente: null,
        ultimoIndiceErrado: null,
        chatHistorico: [],
        chatAtivo: false,
        iaCarregando: false,
        ultimaRespostaUsuario: '',
        ultimaNota: null
    });
    return true;
}

function ctxQuestaoAtual() {
    const q = questaoAtual();
    const fase = faseAtual();
    const bloco = blocoAtual();
    return {
        fase: fase.nome,
        bloco: bloco.nome,
        enunciado: q.enunciado,
        tipo: q.tipo,
        alternativasLista: q.tipo === 'alternativa' ? AIService.formatAlternativas(q) : '',
        respostaModelo: q.respostaModelo || '',
        respostaUsuario: estado.ultimaRespostaUsuario,
        nota: estado.ultimaNota
    };
}

function registrarQuestaoRespondida(meta) {
    const q = questaoAtual();
    const fase = faseAtual();
    const bloco = blocoAtual();
    const id = ProgressStore.chaveQuestao(estado.faseIdx, estado.blocoIdx, estado.questaoIdx);
    ProgressStore.salvarRespondida(id, {
        faseIdx: estado.faseIdx,
        blocoIdx: estado.blocoIdx,
        questaoIdx: estado.questaoIdx,
        fase: fase.nome,
        bloco: bloco.nome,
        enunciado: q.enunciado,
        tipo: q.tipo,
        ...meta
    });
}

function atualizarNumeradorQuestao() {
    const bloco = blocoAtual();
    $('placar-atual').textContent = estado.questaoIdx + 1;
    $('placar-total').textContent = bloco.questoes.length;
}

function podeVoltarQuestao() {
    return !(estado.faseIdx === 0 && estado.blocoIdx === 0 && estado.questaoIdx === 0);
}

function atualizarNavQuestao() {
    const btnVoltar = $('btn-voltar-questao');
    if (btnVoltar) btnVoltar.disabled = !podeVoltarQuestao();
}

function voltarQuestaoAnterior() {
    if (!podeVoltarQuestao() || estado.iaCarregando) return;

    if (estado.questaoIdx > 0) {
        estado.questaoIdx--;
    } else if (estado.blocoIdx > 0) {
        estado.blocoIdx--;
        estado.questaoIdx = blocoAtual().questoes.length - 1;
    } else if (estado.faseIdx > 0) {
        estado.faseIdx--;
        estado.blocoIdx = faseAtual().blocos.length - 1;
        estado.questaoIdx = blocoAtual().questoes.length - 1;
    }

    renderizarQuestao();
    persistirProgresso();
}

function irParaInicio() {
    persistirProgresso();
    atualizarBotoesInicio();
    mostrarTela('inicio');
}

function configurarEnterEnvia(textarea, onSend) {
    if (!textarea) return;
    textarea.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' || e.shiftKey) return;
        e.preventDefault();
        e.stopPropagation();
        onSend();
    });
}

function estaEmCampoChat() {
    const el = document.activeElement;
    return el === $('chat-input') || el === $('revisao-chat-input');
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
    $('feedback-ia').hidden = true;
    $('nota-ia-box').hidden = true;
    $('chat-ia-area').hidden = true;
    $('chat-mensagens').innerHTML = '';
    $('chat-input').value = '';
    $('btn-continuar-pos-chat').hidden = true;
    estado.modoJustificativa = null;
    estado.indicePendente = null;
    estado.chatHistorico = [];
    estado.chatAtivo = false;
}

function renderizarQuestao() {
    const fase = faseAtual();
    const bloco = blocoAtual();
    const q = questaoAtual();

    estado.questaoConcluida = false;
    estado.aguardandoJustificativa = false;
    estado.jaErrouNestaQuestao = false;
    estado.ultimoIndiceErrado = null;
    estado.chatHistorico = [];
    estado.chatAtivo = false;
    estado.iaCarregando = false;
    estado.ultimaRespostaUsuario = '';
    estado.ultimaNota = null;

    document.documentElement.style.setProperty('--fase-cor', fase.cor);

    $('badge-fase').textContent = fase.nome;
    $('caminho').textContent =
        `Bloco ${estado.blocoIdx + 1} de 4 · ${bloco.nome} · Questão ${estado.questaoIdx + 1} de ${bloco.questoes.length}`;
    atualizarNumeradorQuestao();

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

    atualizarNavQuestao();
    persistirProgresso();
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

function abrirChatJustificativa(prompt) {
    estado.aguardandoJustificativa = true;
    estado.modoJustificativa = 'pre-avaliacao';
    estado.chatAtivo = true;
    $('feedback').hidden = false;
    $('chat-ia-area').hidden = false;
    $('chat-input').placeholder = prompt;
    $('btn-continuar-pos-chat').hidden = true;
    $('chat-input').focus();
}

function abrirChatAprofundamento(respostaInicial) {
    estado.modoJustificativa = 'aprofundamento';
    estado.chatAtivo = true;
    $('chat-ia-area').hidden = false;
    $('chat-input').placeholder = 'Continue tirando dúvidas com a tutora...';
    $('btn-continuar-pos-chat').hidden = true;
    if (respostaInicial) {
        addChatMsg('assistant', respostaInicial);
        estado.chatHistorico.push({ role: 'assistant', content: respostaInicial });
    }
}

function mostrarFeedbackIA(html) {
    const el = $('feedback-ia');
    if (!html) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = html;
}

function exibirNotaSePresente(ia) {
    if (ia?.nota == null || Number.isNaN(Number(ia.nota))) return null;
    estado.ultimaNota = Number(ia.nota);
    return mostrarNotaIA(ia.nota);
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
    estado.chatAtivo = true;
    $('chat-ia-area').hidden = false;
    $('chat-input').placeholder = 'Converse com a tutora...';
    $('btn-continuar-pos-chat').hidden = !mostrarContinuar || estado.questaoConcluida;
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
    if (estado.questaoConcluida || estado.iaCarregando) return;

    const q = questaoAtual();

    if (estado.jaErrouNestaQuestao) {
        estado.indicePendente = idx;
        marcarAlternativaPendente(idx);
        $('feedback').hidden = false;
        $('feedback').className = 'feedback parcial';
        $('feedback-titulo').textContent = '✏️ Justifique sua nova escolha';
        $('feedback-conteudo').innerHTML =
            `<p>Você escolheu <strong>${LETRAS[idx]}) ${escapeHTML(q.alternativas[idx])}</strong>. Explique seu raciocínio no chat abaixo — a tutora avalia antes de confirmar.</p>`;
        $('btn-proxima').hidden = true;
        mostrarFeedbackIA('');
        $('nota-ia-box').hidden = true;
        $('chat-mensagens').innerHTML = '';
        estado.chatHistorico = [];
        abrirChatJustificativa(`Por que você está escolhendo a alternativa ${LETRAS[idx]} agora?`);
        return;
    }

    processarAlternativa(idx);
}

async function marcarCorretoPlausivel(idx, mensagemIA, ia, metaExtra = {}) {
    const q = questaoAtual();
    const botoes = document.querySelectorAll('.alternativa');
    botoes.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.remove('selecionada-pendente');
        if (i === idx) btn.classList.add('correta');
    });

    if (!estado.questaoConcluida) {
        estado.questaoConcluida = true;
        concluirQuestao(true, {
            nota: ia?.nota ?? estado.ultimaNota,
            respostaUsuario: estado.ultimaRespostaUsuario,
            acertou: true,
            ...metaExtra
        });
    }

    const feedback = $('feedback');
    feedback.hidden = false;
    feedback.className = 'feedback acerto';
    $('feedback-titulo').textContent = '✅ Raciocínio aceito!';
    $('feedback-conteudo').innerHTML =
        `<p>${escapeHTML(mensagemIA || 'Sua justificativa mostra que você entendeu o conceito.')}</p>`;
    $('btn-proxima').hidden = false;
    exibirNotaSePresente(ia);
    mostrarChatArea(false);
}

async function processarAlternativa(idxEscolhido, metaExtra = {}) {
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
        if (!estado.questaoConcluida) {
            estado.questaoConcluida = true;
            concluirQuestao(true, {
                nota: estado.ultimaNota,
                respostaUsuario: estado.ultimaRespostaUsuario || q.alternativas[idxEscolhido],
                acertou: true,
                ...metaExtra
            });
        }
        feedback.className = 'feedback acerto';
        $('feedback-titulo').textContent = '✅ Correto!';
        $('feedback-conteudo').innerHTML =
            `<p>Ótimo! A resposta certa é: <strong>${escapeHTML(q.alternativas[q.correta])}</strong>.</p>`;
        $('btn-proxima').hidden = false;
        if (estado.chatAtivo) mostrarChatArea(false);
    } else {
        estado.jaErrouNestaQuestao = true;
        estado.ultimoIndiceErrado = idxEscolhido;
        feedback.className = 'feedback erro';
        $('feedback-titulo').textContent = '❌ Ainda não é essa';
        $('feedback-conteudo').innerHTML =
            '<p>Essa alternativa não bate com o gabarito. Tente outra — na próxima escolha você justifica no chat antes de confirmar.</p>';
        $('btn-proxima').hidden = true;
        setTimeout(() => habilitarAlternativas(), 400);
    }
}

async function aplicarResultadoJustificativaIA(ia, idx, msgOriginal) {
    let html = `<strong>💬 Tutora:</strong> ${escapeHTML(ia.feedback || '')}`;
    if (ia.explicacao_breve) {
        html += `<br><br>${escapeHTML(ia.explicacao_breve)}`;
    }
    mostrarFeedbackIA(html);
    const aprovadaNota = exibirNotaSePresente(ia);
    const querAprofundar = terminaComPergunta(msgOriginal);

    if (ia.aceitar_como_correto) {
        await marcarCorretoPlausivel(idx, ia.feedback, ia, { respostaUsuario: msgOriginal });
        if (querAprofundar) {
            abrirChatAprofundamento(ia.feedback || ia.explicacao_breve || 'Conta mais — estou aqui!');
        }
        return;
    }

    if (ia.entendeu && ia.liberar_avaliacao) {
        await processarAlternativa(idx, { respostaUsuario: msgOriginal, nota: ia.nota });
        if (estado.chatAtivo || querAprofundar) {
            if (querAprofundar) {
                abrirChatAprofundamento(ia.feedback || 'Boa pergunta! Vamos aprofundar.');
            } else {
                mostrarChatArea(false);
            }
        }
        if (aprovadaNota && estado.questaoConcluida) $('btn-proxima').hidden = false;
        return;
    }

    if (ia.feedback) addChatMsg('assistant', ia.feedback);
    if (ia.explicacao_breve) addChatMsg('assistant', ia.explicacao_breve);
    if (querAprofundar) estado.modoJustificativa = 'aprofundamento';
    mostrarChatArea(!estado.questaoConcluida);
}

async function enviarChat() {
    if (estado.iaCarregando) return;

    const msg = $('chat-input').value.trim();
    if (msg.length < AI_CONFIG.minChatLength) return;

    const idx = estado.indicePendente;
    addChatMsg('user', msg);
    $('chat-input').value = '';
    estado.chatHistorico.push({ role: 'user', content: msg });
    estado.ultimaRespostaUsuario = msg;
    estado.iaCarregando = true;
    $('btn-enviar-chat').disabled = true;

    try {
        if (estado.modoJustificativa === 'pre-avaliacao') {
            estado.aguardandoJustificativa = false;
            estado.modoJustificativa = 'pos-avaliacao';
            $('feedback-titulo').textContent = '🤖 Tutora analisando...';
            $('feedback-conteudo').innerHTML = '<p>Um segundinho, miga...</p>';

            const ia = await AIService.evaluateJustification(ctxJustificativa(msg));
            await aplicarResultadoJustificativaIA(ia, idx, msg);
            return;
        }

        if (estado.modoJustificativa === 'aprofundamento' || estado.questaoConcluida) {
            const ctx = {
                ...ctxQuestaoAtual(),
                alternativaEscolhida: questaoAtual().alternativas[idx] || ''
            };
            const ia = await AIService.chatAprofundamento(ctx, estado.chatHistorico, msg);
            const resposta = ia.resposta || ia.feedback || 'Bora continuar explorando isso!';
            addChatMsg('assistant', resposta);
            estado.chatHistorico.push({ role: 'assistant', content: resposta });
            mostrarChatArea(false);
            return;
        }

        const ctx = {
            ...ctxJustificativa(estado.chatHistorico[0]?.content || ''),
            alternativaEscolhida: questaoAtual().alternativas[idx]
        };
        const ia = await AIService.chatJustification(ctx, estado.chatHistorico, msg);

        const resposta = ia.resposta || ia.feedback || 'Continua tentando, você consegue!';
        addChatMsg('assistant', resposta);
        estado.chatHistorico.push({ role: 'assistant', content: resposta });
        exibirNotaSePresente(ia);

        if (estado.questaoConcluida) {
            mostrarChatArea(false);
            return;
        }

        if (ia.aceitar_como_correto) {
            await marcarCorretoPlausivel(idx, resposta, ia, { respostaUsuario: msg });
            if (terminaComPergunta(msg)) abrirChatAprofundamento(resposta);
            return;
        }

        if (ia.liberar_avaliacao && ia.entendeu) {
            await processarAlternativa(idx, { respostaUsuario: msg, nota: ia.nota });
            if (terminaComPergunta(msg)) abrirChatAprofundamento(resposta);
            else if (estado.chatAtivo) mostrarChatArea(false);
            return;
        }

        if (terminaComPergunta(msg)) estado.modoJustificativa = 'aprofundamento';
        mostrarChatArea(true);
    } catch (e) {
        addChatMsg('assistant', `Ops, deu erro na conexão: ${e.message}`);
        if (estado.modoJustificativa === 'pre-avaliacao') {
            estado.aguardandoJustificativa = true;
        }
    } finally {
        estado.iaCarregando = false;
        $('btn-enviar-chat').disabled = false;
    }
}

async function continuarPosChat() {
    const idx = estado.indicePendente;
    if (idx == null || estado.questaoConcluida) return;
    await processarAlternativa(idx);
    if (estado.chatAtivo) mostrarChatArea(false);
}

async function enviarDissertativa() {
    if (estado.questaoConcluida || estado.iaCarregando) return;

    const texto = $('texto-resposta').value.trim();
    if (texto.length < AI_CONFIG.minDissertativeLength) {
        $('texto-resposta').style.borderColor = 'var(--erro)';
        setTimeout(() => { $('texto-resposta').style.borderColor = ''; }, 1200);
        return;
    }

    estado.ultimaRespostaUsuario = texto;
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
    $('chat-ia-area').hidden = true;
    $('btn-proxima').hidden = true;

    const ehCodigo = bloco.nome === 'Código';
    const classeModelo = ehCodigo ? 'resposta-modelo' : 'resposta-modelo texto';
    const querAprofundar = terminaComPergunta(texto);

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

        estado.ultimaNota = nota;
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
            concluirQuestao(true, { nota, respostaUsuario: texto, acertou: true });
            $('btn-proxima').hidden = false;
            if (querAprofundar) {
                abrirChatAprofundamento(ia.feedback || 'Adorei sua curiosidade! Vamos explorar isso.');
            }
        } else {
            $('texto-resposta').disabled = false;
            $('btn-enviar-dissertativa').disabled = false;
            if (querAprofundar) {
                abrirChatAprofundamento(ia.feedback || 'Mesmo abaixo da nota mínima, posso te ajudar a entender melhor.');
            } else {
                $('texto-resposta').focus();
            }
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

function concluirQuestao(correto, meta = {}) {
    estado.respondidas++;
    estado.respondidasNaFase++;
    if (correto) {
        estado.acertos++;
        estado.acertosNaFase++;
    }
    registrarQuestaoRespondida({
        acertou: correto,
        nota: meta.nota ?? estado.ultimaNota,
        respostaUsuario: meta.respostaUsuario ?? estado.ultimaRespostaUsuario
    });
    persistirProgresso();
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
    persistirProgresso();
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
        persistirProgresso();
        mostrarTela('final');
        return;
    }
    renderizarQuestao();
    mostrarTela('questao');
}

function reiniciarCurso(limparSalvo = true) {
    if (limparSalvo) ProgressStore.limparTudo();
    Object.assign(estado, {
        faseIdx: 0, blocoIdx: 0, questaoIdx: 0,
        acertos: 0, respondidas: 0, acertosNaFase: 0, respondidasNaFase: 0,
        questaoConcluida: false, aguardandoJustificativa: false, dicaVisivel: false,
        jaErrouNestaQuestao: false, modoJustificativa: null, indicePendente: null,
        ultimoIndiceErrado: null, chatHistorico: [], chatAtivo: false, iaCarregando: false,
        ultimaRespostaUsuario: '', ultimaNota: null
    });
    atualizarBotoesInicio();
    mostrarTela('inicio');
}

function abrirModalHistorico() {
    const lista = ProgressStore.listarRespondidas();
    const ul = $('lista-historico');
    ul.innerHTML = '';
    $('historico-vazio').hidden = lista.length > 0;
    $('modal-historico').hidden = false;

    lista.forEach(item => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.innerHTML = `
            <span class="historico-item-titulo">${escapeHTML(tituloQuestao(item.enunciado))}</span>
            <span class="historico-item-meta">${escapeHTML(item.fase)} · ${escapeHTML(item.bloco)} · Q${item.questaoIdx + 1}${item.nota != null ? ` · Nota ${item.nota}` : ''}</span>
        `;
        btn.addEventListener('click', () => {
            fecharModalHistorico();
            abrirRevisao(item.id);
        });
        li.appendChild(btn);
        ul.appendChild(li);
    });
}

function fecharModalHistorico() {
    $('modal-historico').hidden = true;
}

function ctxRevisao(registro, q) {
    return {
        fase: registro.fase,
        bloco: registro.bloco,
        enunciado: registro.enunciado,
        tipo: registro.tipo,
        alternativasLista: registro.tipo === 'alternativa' && q ? AIService.formatAlternativas(q) : '',
        respostaModelo: q?.respostaModelo || '',
        respostaUsuario: registro.respostaUsuario || '',
        nota: registro.nota
    };
}

function abrirRevisao(id) {
    const registro = ProgressStore.obterRespondida(id);
    if (!registro) return;

    const q = obterQuestaoPorId(registro.faseIdx, registro.blocoIdx, registro.questaoIdx);
    const fase = QUESTOES.fases[registro.faseIdx];
    if (fase) document.documentElement.style.setProperty('--fase-cor', fase.cor);

    revisao.registro = registro;
    revisao.chatHistorico = [];
    revisao.iaCarregando = false;

    $('revisao-badge').textContent = registro.fase;
    $('revisao-caminho').textContent = `${registro.bloco} · Questão ${registro.questaoIdx + 1}`;
    $('revisao-enunciado').textContent = registro.enunciado;

    let info = `Tipo: ${registro.tipo === 'alternativa' ? 'Alternativa' : 'Dissertativa'}`;
    if (registro.nota != null) info += ` · Nota: ${registro.nota}/10`;
    if (registro.respostaUsuario) {
        info += `<br><strong>Sua resposta:</strong> ${escapeHTML(tituloQuestao(registro.respostaUsuario, 200))}`;
    }
    $('revisao-info').innerHTML = info;

    $('revisao-chat-mensagens').innerHTML = '';
    addRevisaoMsg('assistant', 'Oi, miga! Esta questão você já respondeu. Pode perguntar o que quiser sobre ela 💜');
    revisao.chatHistorico.push({ role: 'assistant', content: 'Oi, miga! Esta questão você já respondeu. Pode perguntar o que quiser sobre ela 💜' });

    $('revisao-chat-input').value = '';
    mostrarTela('revisao');
}

function addRevisaoMsg(role, texto) {
    const div = document.createElement('div');
    div.className = `chat-msg ${role === 'user' ? 'aluno' : 'tutora'}`;
    div.textContent = texto;
    $('revisao-chat-mensagens').appendChild(div);
    $('revisao-chat-mensagens').scrollTop = $('revisao-chat-mensagens').scrollHeight;
}

async function enviarRevisaoChat() {
    if (revisao.iaCarregando || !revisao.registro) return;

    const msg = $('revisao-chat-input').value.trim();
    if (msg.length < AI_CONFIG.minChatLength) return;

    const registro = revisao.registro;
    const q = obterQuestaoPorId(registro.faseIdx, registro.blocoIdx, registro.questaoIdx);

    addRevisaoMsg('user', msg);
    $('revisao-chat-input').value = '';
    revisao.chatHistorico.push({ role: 'user', content: msg });
    revisao.iaCarregando = true;
    $('btn-revisao-enviar').disabled = true;

    try {
        const ia = await AIService.chatRevisao(ctxRevisao(registro, q), revisao.chatHistorico, msg);
        const resposta = ia.resposta || 'Conta mais — estou aqui!';
        addRevisaoMsg('assistant', resposta);
        revisao.chatHistorico.push({ role: 'assistant', content: resposta });
    } catch (e) {
        addRevisaoMsg('assistant', `Ops, deu erro: ${e.message}`);
    } finally {
        revisao.iaCarregando = false;
        $('btn-revisao-enviar').disabled = false;
    }
}

function iniciarEventos() {
    $('btn-comecar').addEventListener('click', () => {
        if (ProgressStore.temProgresso()) {
            if (!confirm('Recomeçar do início? Seu progresso salvo será substituído ao avançar.')) return;
        }
        reiniciarCurso(false);
        renderizarQuestao();
        mostrarTela('questao');
    });

    $('btn-continuar').addEventListener('click', () => {
        if (!restaurarProgresso()) return;
        renderizarQuestao();
        mostrarTela('questao');
    });

    $('btn-comecar-zero').addEventListener('click', () => {
        if (!confirm('Apagar todo o progresso e histórico de respostas?')) return;
        reiniciarCurso(true);
    });

    $('btn-historico').addEventListener('click', abrirModalHistorico);
    $('btn-fechar-historico').addEventListener('click', fecharModalHistorico);
    $('modal-historico').addEventListener('click', (e) => {
        if (e.target === $('modal-historico')) fecharModalHistorico();
    });

    $('btn-voltar-revisao').addEventListener('click', () => {
        revisao.registro = null;
        revisao.chatHistorico = [];
        irParaInicio();
    });

    $('btn-revisao-enviar').addEventListener('click', enviarRevisaoChat);

    $('btn-voltar-questao').addEventListener('click', voltarQuestaoAnterior);
    $('btn-home').addEventListener('click', irParaInicio);

    $('btn-dica').addEventListener('click', toggleDica);
    $('btn-enviar-dissertativa').addEventListener('click', enviarDissertativa);
    $('btn-enviar-chat').addEventListener('click', enviarChat);
    $('btn-continuar-pos-chat').addEventListener('click', continuarPosChat);
    $('btn-proxima').addEventListener('click', avancar);
    $('btn-proxima-fase').addEventListener('click', avancarFase);
    $('btn-reiniciar').addEventListener('click', () => {
        if (!confirm('Apagar todo o progresso e recomeçar?')) return;
        reiniciarCurso(true);
    });

    window.addEventListener('beforeunload', persistirProgresso);

    configurarEnterEnvia($('chat-input'), enviarChat);
    configurarEnterEnvia($('revisao-chat-input'), enviarRevisaoChat);

    document.addEventListener('keydown', (e) => {
        if (estaEmCampoChat()) return;

        if (e.key === 'Enter' && estado.questaoConcluida && !$('btn-proxima').hidden && !e.shiftKey) {
            avancar();
        }
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            if (questaoAtual()?.tipo === 'dissertativa' && !estado.questaoConcluida &&
                document.activeElement === $('texto-resposta')) {
                enviarDissertativa();
            }
        }
    });

    atualizarBotoesInicio();
}

document.addEventListener('DOMContentLoaded', iniciarEventos);
