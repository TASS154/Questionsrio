// Persistência de progresso e histórico de questões respondidas (localStorage).

const ProgressStore = {
    KEYS: {
        progresso: 'logica_camadas_progresso_v1',
        respondidas: 'logica_camadas_respondidas_v1'
    },

    chaveQuestao(faseIdx, blocoIdx, questaoIdx) {
        return `${faseIdx}-${blocoIdx}-${questaoIdx}`;
    },

    _ler(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch {
            return fallback;
        }
    },

    _gravar(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    temProgresso() {
        const p = this._ler(this.KEYS.progresso, null);
        return Boolean(p && p.iniciado);
    },

    salvarProgresso(estado) {
        this._gravar(this.KEYS.progresso, {
            faseIdx: estado.faseIdx,
            blocoIdx: estado.blocoIdx,
            questaoIdx: estado.questaoIdx,
            acertos: estado.acertos,
            respondidas: estado.respondidas,
            acertosNaFase: estado.acertosNaFase,
            respondidasNaFase: estado.respondidasNaFase,
            iniciado: true,
            savedAt: new Date().toISOString()
        });
    },

    carregarProgresso() {
        return this._ler(this.KEYS.progresso, null);
    },

    limparProgresso() {
        localStorage.removeItem(this.KEYS.progresso);
    },

    limparRespondidas() {
        localStorage.removeItem(this.KEYS.respondidas);
    },

    salvarRespondida(id, dados) {
        const mapa = this._ler(this.KEYS.respondidas, {});
        mapa[id] = {
            ...dados,
            id,
            respondidoEm: new Date().toISOString()
        };
        this._gravar(this.KEYS.respondidas, mapa);
    },

    listarRespondidas() {
        const mapa = this._ler(this.KEYS.respondidas, {});
        return Object.values(mapa).sort((a, b) => {
            if (a.faseIdx !== b.faseIdx) return a.faseIdx - b.faseIdx;
            if (a.blocoIdx !== b.blocoIdx) return a.blocoIdx - b.blocoIdx;
            return a.questaoIdx - b.questaoIdx;
        });
    },

    obterRespondida(id) {
        const mapa = this._ler(this.KEYS.respondidas, {});
        return mapa[id] || null;
    },

    limparTudo() {
        this.limparProgresso();
        this.limparRespondidas();
    }
};

function obterQuestaoPorId(faseIdx, blocoIdx, questaoIdx) {
    return QUESTOES.fases[faseIdx]?.blocos[blocoIdx]?.questoes[questaoIdx] || null;
}

function tituloQuestao(enunciado, max = 72) {
    const t = String(enunciado || '').trim();
    if (t.length <= max) return t;
    return t.slice(0, max - 1) + '…';
}
