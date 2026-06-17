// Configuração Gemini — sem chave no repositório.
// Produção (Vercel): GEMINI_API_KEY nas Environment Variables → /api/gemini
// Local: copie ai-config.local.js.example → ai-config.local.js

const AI_CONFIG = {
    provider: 'gemini',
    model: 'gemini-2.5-flash',
    fallbackModels: ['gemini-2.5-flash-lite'],
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',

    /** Vazio no repo; preenchido só em ai-config.local.js (dev) */
    apiKey: '',

    /** true = chama /api/gemini quando apiKey estiver vazio (deploy Vercel) */
    useProxy: true,

    /** Nota mínima (0–10) para liberar questão dissertativa ou justificativa aceita */
    notaMinimaDissertativa: 6,

    minJustificationLength: 15,
    minDissertativeLength: 10,
    minChatLength: 3,

    chatConciso:
        'Responda de forma enxuta: cubra diretamente a dúvida ou comentário da última mensagem do aluno em no máximo 3 a 4 frases curtas, sem enrolação nem repetir o que já foi dito.'
};

const AIConfig = {
    isReady() {
        return Boolean(AI_CONFIG.apiKey) || Boolean(AI_CONFIG.useProxy);
    },

    usaProxy() {
        return !AI_CONFIG.apiKey && Boolean(AI_CONFIG.useProxy);
    }
};
