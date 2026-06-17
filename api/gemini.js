// Proxy serverless (Vercel) — chave em process.env.GEMINI_API_KEY

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Use POST' });
    }

    const key = process.env.GEMINI_API_KEY;
    if (!key) {
        return res.status(500).json({
            error: 'GEMINI_API_KEY não configurada. Adicione nas Environment Variables da Vercel.'
        });
    }

    const { model, payload } = req.body || {};
    if (!model || !payload) {
        return res.status(400).json({ error: 'Corpo inválido: envie model e payload.' });
    }

    const url =
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent` +
        `?key=${encodeURIComponent(key)}`;

    try {
        const upstream = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const text = await upstream.text();
        res.status(upstream.status).setHeader('Content-Type', 'application/json').send(text);
    } catch (err) {
        res.status(502).json({ error: err.message || 'Falha ao contactar Gemini' });
    }
}
