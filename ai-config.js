// Configuração Gemini — chave em ai-config.local.js (não vai pro Git).

const AI_CONFIG = {
    provider: 'gemini',
    model: 'gemini-2.5-flash',
    fallbackModels: ['gemini-2.5-flash-lite'],
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',

    apiKey: '',
    enabled: false,

    /** Nota mínima (0–10) para liberar questão dissertativa ou justificativa aceita */
    notaMinimaDissertativa: 6,

    minJustificationLength: 15,
    minDissertativeLength: 10,
    minChatLength: 3,

    /**
     * Instrução extra em respostas de CHAT (justificativa, aprofundamento, revisão).
     * Ajuste aqui o tamanho/tom das respostas da tutora no chat.
     */
    chatConciso:
        'Responda de forma enxuta: cubra diretamente a dúvida ou comentário da última mensagem do aluno em no máximo 3 a 4 frases curtas, sem enrolação nem repetir o que já foi dito.'
};

const AIConfig = {
    isReady() {
        return Boolean(AI_CONFIG.apiKey);
    }
};
