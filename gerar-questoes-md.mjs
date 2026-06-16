import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = __dirname;

function loadQuestoes() {
    const sandbox = {};
    let questionsJs = fs.readFileSync(path.join(dir, 'questions.js'), 'utf8');
    const patchesJs = fs.readFileSync(path.join(dir, 'question-patches.js'), 'utf8');
    questionsJs = questionsJs.replace(/const QUESTOES\s*=/, 'QUESTOES =');
    vm.createContext(sandbox);
    vm.runInContext(questionsJs + '\n' + patchesJs, sandbox);
    return sandbox.QUESTOES;
}

const LETRAS = ['a', 'b', 'c', 'd'];
const FASE_TITULOS = ['FASE 1 — FÁCIL', 'FASE 2 — MÉDIO', 'FASE 3 — DIFÍCIL'];
const BLOCO_NUM = ['Bloco 1', 'Bloco 2', 'Bloco 3', 'Bloco 4'];

function formatQuestao(q, num) {
    const tipo = q.tipo === 'alternativa' ? 'Alternativa' : 'Dissertativa';
    const conectada = q.conectada ? ' — CONECTADA' : '';
    let out = `**${num}. (${tipo}${conectada})** ${q.enunciado}\n`;

    if (q.tipo === 'alternativa') {
        q.alternativas.forEach((alt, i) => {
            out += `- ${LETRAS[i]}) ${alt}${i === q.correta ? ' ✅' : ''}\n`;
        });
    }

    if (q.dica) {
        out += `\n> **Dica:** ${q.dica}\n`;
    }

    if (q.tipo === 'dissertativa') {
        out += `\n> **Resposta:**\n`;
        if (q.respostaModelo.includes('\n') || q.respostaModelo.includes('def ') || q.respostaModelo.includes('class ')) {
            out += `> \`\`\`python\n${q.respostaModelo}\n\`\`\`\n`;
        } else {
            out += `> ${q.respostaModelo}\n`;
        }
    }

    return out + '\n';
}

function gerar() {
    const QUESTOES = loadQuestoes();
    let md = `# 120 Questões de Lógica de Programação (Python)

Documento gerado automaticamente a partir de \`questions.js\` + \`question-patches.js\`.

Cada fase tem **4 blocos** (UX → Lógica → Fluxo → Código), **10 questões** por bloco (6 alternativas + 4 dissertativas).

---

`;

    QUESTOES.fases.forEach((fase, fi) => {
        md += `## ${FASE_TITULOS[fi]} (Tema conectado: ${fase.tema})\n\n`;

        fase.blocos.forEach((bloco, bi) => {
            md += `### ${BLOCO_NUM[bi]} (${fase.nome}) — ${bloco.nome}\n\n`;
            md += `*${bloco.descricao}*\n\n`;

            bloco.questoes.forEach((q, qi) => {
                md += formatQuestao(q, qi + 1);
            });
        });

        md += '---\n\n';
    });

    md += `## Resumo das Conexões Implícitas

| Fase | Tema | Dissertativa conectada (questão 7) |
|------|------|-------------------------------------|
| Fácil | Sistema de Login | UX → Lógica → Fluxo → Código |
| Médio | Carrinho de Compras | UX → Lógica → Fluxo → Código |
| Difícil | Postagem em Rede Social | UX → Lógica → Fluxo → Código |
`;

    fs.writeFileSync(path.join(dir, 'QUESTOES.md'), md, 'utf8');
    console.log('QUESTOES.md gerado com sucesso.');
}

gerar();
