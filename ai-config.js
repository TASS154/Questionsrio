// Configuração — Gemini obrigatório para usar o site.

const AI_CONFIG = {
    provider: 'gemini',
    model: 'gemini-2.0-flash',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',

    /** Nota mínima (0–10) para liberar questão dissertativa */
    notaMinimaDissertativa: 6,

    storageKey: 'logica_camadas_gemini_key',

    minJustificationLength: 15,
    minDissertativeLength: 10,
    minChatLength: 3,

    apiKey: '',
    enabled: false
};

const AIConfig = {
    load() {
        const key = localStorage.getItem(AI_CONFIG.storageKey) || '';
        AI_CONFIG.apiKey = key;
        AI_CONFIG.enabled = Boolean(key);
        return { ...AI_CONFIG };
    },

    save(apiKey) {
        const trimmed = (apiKey || '').trim();
        if (trimmed) {
            localStorage.setItem(AI_CONFIG.storageKey, trimmed);
            AI_CONFIG.apiKey = trimmed;
            AI_CONFIG.enabled = true;
        } else {
            localStorage.removeItem(AI_CONFIG.storageKey);
            AI_CONFIG.apiKey = '';
            AI_CONFIG.enabled = false;
        }
        return { ...AI_CONFIG };
    },

    clear() {
        return this.save('');
    },

    isReady() {
        return Boolean(AI_CONFIG.apiKey);
    }
};

AIConfig.load();
