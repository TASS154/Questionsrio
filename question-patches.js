// Patches: alternativas plausíveis, dicas e ajustes nos blocos 1–3 (índices 0–2)
// Formato da chave: "fase-bloco-questao" (0-based)

(function aplicarPatches() {
  const P = {
    // ===== FASE 0 FÁCIL — LOGIN =====
    "0-0-0": {
      alternativas: [
        "Uma landing page pública com botão 'Entrar' no menu",
        "Uma tela de login com campos para usuário e senha",
        "O feed personalizado já carregado como visitante",
        "Um pop-up de cookies antes de qualquer outra interação"
      ],
      correta: 1,
      dica: "Pense no que impede o acesso ao conteúdo privado até você se identificar."
    },
    "0-0-1": {
      enunciado: "Em um cadastro típico, qual campo costuma ser opcional em vez de obrigatório?",
      alternativas: [
        "Email",
        "Senha",
        "Telefone",
        "Confirmação de senha"
      ],
      correta: 2,
      dica: "Email e senha quase sempre são exigidos; o que costuma ser 'se quiser'?"
    },
    "0-0-2": {
      alternativas: [
        "Usar o fluxo 'Esqueci minha senha' ou recuperação por email",
        "Tentar logar repetidamente até a conta bloquear",
        "Entrar com login social, se já vinculou a conta antes",
        "Criar outra conta com o mesmo email"
      ],
      correta: 0,
      dica: "Sites costumam oferecer um caminho específico para quem não lembra a senha."
    },
    "0-0-3": {
      alternativas: [
        "Um asterisco (*) ao lado do rótulo",
        "Placeholder com texto em negrito",
        "Ícone de calendário ao lado do campo",
        "Campo posicionado no topo do formulário"
      ],
      correta: 0,
      dica: "É um símbolo pequeno e universal em formulários web."
    },
    "0-0-4": {
      alternativas: [
        "É redirecionado para a área principal autenticada do sistema",
        "Permanece na tela de login com mensagem de boas-vindas",
        "É levado sempre para completar o perfil, em qualquer sistema",
        "Recebe um modal obrigatório antes de qualquer navegação"
      ],
      correta: 0,
      dica: "Após autenticar, o usuário costuma ir para onde o app realmente começa."
    },
    "0-0-5": {
      enunciado: "Em uma tela de login típica, qual combinação de elementos você esperaria encontrar juntos?",
      alternativas: [
        "Campo de email, campo de senha e botão de envio",
        "Lista de produtos, frete estimado e cupom de desconto",
        "Editor de código e console de depuração",
        "Gráfico de vendas e exportação para planilha"
      ],
      correta: 0,
      dica: "Foque no mínimo necessário para identificar e autenticar alguém."
    },
    "0-0-6": { dica: "Pense na sequência: abrir tela → preencher → confirmar → resultado." },
    "0-0-7": { dica: "O erro deve aparecer perto do problema e impedir o envio inválido." },
    "0-0-8": { dica: "Separe o que identifica, o que autentica e o que evita erro de digitação." },
    "0-0-9": { dica: "Por segurança, mensagens genéricas e campos tratados de forma diferente." },

    "0-1-0": {
      alternativas: [
        "Comparar se a idade é maior ou igual ao limite legal (ex.: 18)",
        "Verificar se a pessoa já possui documento com foto",
        "Checar se o ano de nascimento é anterior a um ano fixo",
        "Confirmar se a idade foi informada há menos de um ano"
      ],
      correta: 0,
      dica: "É uma comparação numérica simples contra um limite."
    },
    "0-1-1": {
      alternativas: [
        "Obter os dois valores e aplicar a operação de soma entre eles",
        "Converter ambos para texto e concatená-los",
        "Usar apenas o maior dos dois como resultado",
        "Guardar os números sem operação até pedirem o resultado"
      ],
      correta: 0,
      dica: "Soma precisa dos dois operandos — não confunda com texto."
    },
    "0-1-2": {
      alternativas: [
        "Percorrer a lista e contar quantos elementos ela possui",
        "Ordenar alfabeticamente e pegar o último",
        "Verificar se o primeiro nome tem mais de cinco letras",
        "Somar o tamanho em caracteres de cada nome"
      ],
      correta: 0,
      dica: "Quantos itens existem? Não confunda com tamanho do texto."
    },
    "0-1-3": {
      alternativas: [
        "Verificar se o resto da divisão por 2 é zero",
        "Verificar se o número é divisível por 10",
        "Checar se o último dígito é par, sem usar divisão",
        "Confirmar se o número é positivo"
      ],
      correta: 0,
      dica: "Paridade está ligada à divisão por dois."
    },
    "0-1-4": {
      alternativas: [
        "Comparar os dois valores e selecionar o maior",
        "Somá-los e dividir por 2 para estimar",
        "Sempre retornar o primeiro, por convenção",
        "Subtrair o menor do maior e retornar a diferença"
      ],
      correta: 0,
      dica: "Você precisa decidir qual dos dois é maior — não calcular média."
    },
    "0-1-5": {
      alternativas: [
        "Usar uma estrutura de repetição que execute o bloco 10 vezes",
        "Copiar o mesmo trecho manualmente 10 vezes no fluxo",
        "Usar uma condicional que verifica se já executou uma vez",
        "Criar dez variáveis com nomes diferentes para o mesmo fim"
      ],
      correta: 0,
      dica: "Repetição controlada é o papel de um loop."
    },
    "0-1-6": { dica: "Duas verificações em sequência: existe? senha confere?" },
    "0-1-7": { dica: "Percorra, teste a condição, incremente um contador." },
    "0-1-8": { dica: "Média = soma dividida pela quantidade." },
    "0-1-9": { dica: "Inverta e compare com o original." },

    "0-2-0": {
      alternativas: [
        "Ler/capturar os valores preenchidos nos campos do formulário",
        "Desabilitar todos os campos permanentemente",
        "Redirecionar para a página inicial sem validar",
        "Mostrar animação de carregamento por tempo fixo"
      ],
      correta: 0,
      dica: "Antes de qualquer processamento, o sistema precisa dos dados digitados."
    },
    "0-2-1": {
      alternativas: [
        "Validar se os dados estão completos e em formato aceitável",
        "Enviar os dados direto ao banco sem checagem",
        "Gerar um ID aleatório para cada campo",
        "Comparar com a versão anterior do formulário no navegador"
      ],
      correta: 0,
      dica: "Validação evita gravar lixo ou seguir fluxo inválido."
    },
    "0-2-2": {
      alternativas: [
        "Reservar um espaço para armazenar um valor que pode ser usado depois",
        "Imprimir o valor na tela automaticamente",
        "Registrar o nome em um log de auditoria",
        "Transformar o valor em uma função executável"
      ],
      correta: 0,
      dica: "Variável = nome + espaço para guardar dado."
    },
    "0-2-3": {
      alternativas: [
        "Em banco de dados, arquivo ou outro armazenamento persistente",
        "Somente na memória RAM enquanto o programa roda",
        "No cache do navegador exclusivamente, sem servidor",
        "Em variáveis que somem ao atualizar a página"
      ],
      correta: 0,
      dica: "Persistente = sobrevive ao fechar o programa ou a aba."
    },
    "0-2-4": {
      alternativas: [
        "O bloco de instruções da função é executado naquele momento",
        "A função é renomeada para o nome de quem chamou",
        "O programa salta para o final do arquivo",
        "Os parâmetros são descartados antes de entrar na função"
      ],
      correta: 0,
      dica: "Chamar função = executar o código que ela encapsula."
    },
    "0-2-5": {
      alternativas: [
        "Informar o usuário sobre o problema e impedir o prosseguimento inválido",
        "Salvar parcialmente os campos válidos sem avisar",
        "Tentar corrigir automaticamente sem feedback",
        "Ignorar os campos inválidos e continuar o fluxo"
      ],
      correta: 0,
      dica: "O usuário precisa saber o que corrigir."
    },
    "0-2-6": { dica: "Captura → busca no banco → compara senha → sessão ou erro." },
    "0-2-7": { dica: "Captura, valida, persiste, atualiza a lista na interface." },
    "0-2-8": { dica: "Lê valor salvo → incrementa → salva de novo → exibe." },
    "0-2-9": { dica: "Texto digitado → consulta → resultados → renderização." },

    // ===== FASE 1 MÉDIO — CARRINHO =====
    "1-0-0": {
      alternativas: [
        "Na página de detalhes de cada produto",
        "No carrinho ou sacola de compras",
        "No histórico de pedidos já entregues",
        "Na lista de desejos (wishlist)"
      ],
      correta: 1,
      dica: "É a área de revisão antes de pagar, não o pedido antigo."
    },
    "1-0-1": {
      alternativas: [
        "O item entra no carrinho e aparece feedback visual (ícone, toast)",
        "O usuário é levado direto ao pagamento sem revisar",
        "O produto some da vitrine para todos os clientes",
        "Abre obrigatoriamente a página de avaliações"
      ],
      correta: 0,
      dica: "Adicionar ≠ finalizar compra; o usuário ainda pode continuar navegando."
    },
    "1-0-2": {
      enunciado: "O que o usuário normalmente consegue fazer na página do carrinho?",
      alternativas: [
        "Alterar quantidade ou remover itens",
        "Editar a ficha técnica do produto no catálogo",
        "Mudar o CNPJ e razão social da loja",
        "Moderar comentários de outros clientes"
      ],
      correta: 0,
      dica: "O carrinho é para revisar a compra, não administrar o catálogo."
    },
    "1-0-3": {
      alternativas: [
        "Revisar endereço, frete e forma de pagamento",
        "Cadastrar novos produtos no estoque",
        "Configurar o tema visual do site",
        "Aprovar devoluções de outros usuários"
      ],
      correta: 0,
      dica: "Checkout = entrega + pagamento + confirmação."
    },
    "1-0-4": {
      alternativas: [
        "Remover o item ou ajustar a quantidade",
        "Abandonar o carrinho e criar uma nova conta",
        "Esperar o item expirar sozinho sem aviso",
        "Comprar obrigatoriamente o dobro para compensar"
      ],
      correta: 0,
      dica: "O carrinho é flexível até o momento do pagamento."
    },
    "1-0-5": {
      alternativas: [
        "Durante o checkout, após informar CEP ou endereço",
        "Na vitrine, antes mesmo de abrir o produto",
        "Somente no email de confirmação dias depois",
        "No painel administrativo de logística"
      ],
      correta: 0,
      dica: "Frete depende do destino — isso entra no checkout."
    },
    "1-0-6": { dica: "Produto → carrinho → checkout → pagamento → confirmação." },
    "1-0-7": { dica: "Imagem, nome, preço, quantidade, subtotal e total claro." },
    "1-0-8": { dica: "Aviso visível e bloqueio ou ajuste de quantidade." },
    "1-0-9": { dica: "Campo de cupom, feedback imediato e desconto no resumo." },

    "1-1-0": {
      alternativas: [
        "Somar (preço × quantidade) de cada item",
        "Usar o preço do item mais caro vezes a quantidade total de linhas",
        "Calcular a média dos preços unitários",
        "Somar apenas preços unitários, ignorando quantidade"
      ],
      correta: 0,
      dica: "Cada linha tem preço e quantidade — multiplique antes de somar."
    },
    "1-1-1": {
      alternativas: [
        "Percorrer a lista comparando cada elemento com o alvo",
        "Ordenar a lista e assumir que estará no meio",
        "Verificar só o primeiro e o último elemento",
        "Multiplicar todos os elementos e ver se o resultado é zero"
      ],
      correta: 0,
      dica: "Busca linear: teste item a item."
    },
    "1-1-2": {
      alternativas: [
        "Ordenar (ou rastrear) e identificar o segundo maior valor",
        "Pegar o elemento do índice 1 sem ordenar",
        "Subtrair o menor do maior",
        "Usar a média entre o maior e o menor"
      ],
      correta: 0,
      dica: "Segundo maior ≠ segundo da lista original sem ordenar."
    },
    "1-1-3": {
      alternativas: [
        "Percorrer incrementando um contador a cada correspondência",
        "Dividir o tamanho da lista pelo valor buscado",
        "Verificar apenas se está no início ou no fim",
        "Contar só ocorrências consecutivas após ordenar"
      ],
      correta: 0,
      dica: "Cada match incrementa um contador."
    },
    "1-1-4": {
      alternativas: [
        "Construir nova sequência lendo de trás para frente",
        "Trocar apenas a primeira e a última letra",
        "Ordenar os caracteres em ordem alfabética",
        "Repetir a string duas vezes lado a lado"
      ],
      correta: 0,
      dica: "Inverter = ordem reversa completa."
    },
    "1-1-5": {
      alternativas: [
        "Comprimento mínimo, mistura de tipos de caracteres e ausência de padrões fracos",
        "Qualquer senha com mais de 4 caracteres",
        "Senha igual ao email para facilitar lembrar",
        "Apenas letras minúsculas para evitar erro de Caps Lock"
      ],
      correta: 0,
      dica: "Força vem de tamanho + variedade + imprevisibilidade."
    },
    "1-1-6": { dica: "Subtotal por item, soma, depois frete/desconto se houver." },
    "1-1-7": { dica: "Guarde um 'recorde' enquanto percorre a lista." },
    "1-1-8": { dica: "Desconto = valor × (percentual/100); subtraia do total." },
    "1-1-9": { dica: "Lista vazia = zero itens ou coleção sem elementos." },

    "1-2-0": {
      alternativas: [
        "Sessão, cookie ou banco vinculado ao usuário/dispositivo",
        "Apenas no texto visível da página atual",
        "Somente na memória do CDN de imagens",
        "Em variável perdida ao mudar de aba, sempre"
      ],
      correta: 0,
      dica: "O carrinho precisa sobreviver enquanto o usuário navega."
    },
    "1-2-1": {
      alternativas: [
        "Incrementa a quantidade do item já existente",
        "Cria sempre uma nova linha duplicada",
        "Substitui o item anterior pelo novo preço",
        "Bloqueia a ação e exige esvaziar o carrinho"
      ],
      correta: 0,
      dica: "Mesmo produto = mesma linha, quantidade maior."
    },
    "1-2-2": {
      alternativas: [
        "Estoque, preços atualizados e dados obrigatórios de entrega/pagamento",
        "Apenas a cor favorita do tema do usuário",
        "Se o navegador está em modo escuro",
        "Quantidade de páginas visitadas na sessão"
      ],
      correta: 0,
      dica: "Checkout falha se não houver estoque ou dados de entrega."
    },
    "1-2-3": {
      alternativas: [
        "Token ou sessão em cookie / armazenamento seguro",
        "Repetir login a cada clique sem exceção",
        "Guardar senha em texto plano no navegador",
        "Identificar o usuário apenas pelo endereço IP"
      ],
      correta: 0,
      dica: "Sessão autenticada persiste entre requisições."
    },
    "1-2-4": {
      alternativas: [
        "Remove a entrada e recalcula os totais do carrinho",
        "Zera obrigatoriamente todo o carrinho",
        "Mantém o item com quantidade zero visível",
        "Encerra a sessão do usuário"
      ],
      correta: 0,
      dica: "Remover um item atualiza a lista e os valores."
    },
    "1-2-5": {
      alternativas: [
        "Criar pedido, baixar estoque, limpar carrinho e notificar",
        "Apenas exibir mensagem sem gravar o pedido",
        "Limpar o carrinho mas não registrar a venda",
        "Congelar a conta até revisão manual"
      ],
      correta: 0,
      dica: "Pagamento aprovado = pedido real + estoque atualizado."
    },
    "1-2-6": { dica: "Identifica usuário/produto → atualiza carrinho → recalcula → UI." },
    "1-2-7": { dica: "Validar → pagar → criar pedido → estoque → limpar carrinho." },
    "1-2-8": { dica: "CEP + peso/dimensões → API/tabela de frete → total atualizado." },
    "1-2-9": { dica: "Validar compra → salvar nota → recalcular média do produto." },

    // ===== FASE 2 DIFÍCIL — REDE SOCIAL =====
    "2-0-0": {
      alternativas: [
        "Pela área de criar publicação ou compositor de post",
        "Pelo menu de privacidade da conta",
        "Pela central de anúncios pagos",
        "Pela página de estatísticas do perfil"
      ],
      correta: 0,
      dica: "Compartilhar conteúdo público ≠ configurar conta ou ver métricas."
    },
    "2-0-1": {
      alternativas: [
        "Abre detalhes com comentários e opções de interação",
        "Inicia download automático de toda a mídia",
        "Abre o modo de edição do perfil do autor",
        "Silencia o autor sem pedir confirmação"
      ],
      correta: 0,
      dica: "Clique em post costuma expandir contexto e conversa."
    },
    "2-0-2": {
      alternativas: [
        "O contador incrementa e o estado visual do botão muda",
        "A postagem é republicada no feed de todos instantaneamente",
        "Um comentário automático é postado em seu nome",
        "A postagem some apenas da sua timeline local"
      ],
      correta: 0,
      dica: "Curtir é uma interação leve com feedback imediato."
    },
    "2-0-3": {
      enunciado: "O que é esperado em um feed de postagens?",
      alternativas: [
        "Sequência de cards com autor, conteúdo e ações de interação",
        "Editor SQL para consultar o banco diretamente",
        "Painel de deploy do servidor da aplicação",
        "Configuração de DNS do domínio"
      ],
      correta: 0,
      dica: "Feed = consumo de conteúdo, não ferramentas de infraestrutura."
    },
    "2-0-4": {
      alternativas: [
        "Carregar comentários por partes ('ver mais') ou paginar",
        "Renderizar todos os comentários de uma vez sempre",
        "Ocultar comentários anteriores à data da postagem",
        "Exigir scroll infinito sem nenhum controle"
      ],
      correta: 0,
      dica: "Performance e legibilidade pedem carregamento gradual."
    },
    "2-0-5": {
      alternativas: [
        "Autocomplete de perfis conforme o usuário digita",
        "Bloquear publicação até marcar cinco pessoas",
        "Converter toda menção em hashtag automaticamente",
        "Enviar convite de amizade em vez de notificar"
      ],
      correta: 0,
      dica: "@ costuma disparar sugestões de usernames."
    },
    "2-0-6": { dica: "Criar → editar mídia → legenda → publicar → feed dos seguidores." },
    "2-0-7": { dica: "Agrupar, personalizar tipos e respeitar horários." },
    "2-0-8": { dica: "Menu da postagem → denunciar → motivo → confirmação." },
    "2-0-9": { dica: "Editar in-place, marcar '(editado)', preservar interações." },

    "2-1-0": {
      alternativas: [
        "Definir critérios (recência, engajamento) e ordenar por score",
        "Mostrar apenas a postagem mais antiga",
        "Embaralhar aleatoriamente a cada visualização",
        "Ordenar somente pelo tamanho do texto"
      ],
      correta: 0,
      dica: "Relevância combina sinais — não é aleatório."
    },
    "2-1-1": {
      alternativas: [
        "Calcular offset/limit com página atual e tamanho da página",
        "Sempre retornar todos os registros de uma vez",
        "Usar apenas a cor de fundo para indicar página",
        "Multiplicar o ID pelo número da página"
      ],
      correta: 0,
      dica: "Página N com K itens por página → fatia do conjunto."
    },
    "2-1-2": {
      alternativas: [
        "Verificar se o par usuário+postagem existe no conjunto de curtidas",
        "Comparar total de curtidas com número de seguidores",
        "Checar o horário do último login do usuário",
        "Ver a cor do ícone no CSS global"
      ],
      correta: 0,
      dica: "É uma relação entre quem curtiu e qual post — não um total global."
    },
    "2-1-3": {
      alternativas: [
        "Buscar padrão '@' seguido de caracteres válidos de username",
        "Considerar qualquer palavra escrita em maiúscula",
        "Analisar apenas hashtags com #",
        "Detectar endereços de email completos no texto"
      ],
      correta: 0,
      dica: "Menção começa com @ e um identificador."
    },
    "2-1-4": {
      alternativas: [
        "Contar frequência de termos/hashtags em janela de tempo e ranquear",
        "Somar todos os likes da plataforma",
        "Listar usuários que trocaram a foto de perfil",
        "Ordenar contas apenas por data de criação"
      ],
      correta: 0,
      dica: "Trend = o que mais apareceu recentemente."
    },
    "2-1-5": {
      alternativas: [
        "Combinar histórico de interesses, comportamento e perfis similares",
        "Sugerir apenas contas criadas no mesmo dia",
        "Ordenar alfabeticamente por nome de usuário",
        "Repetir a mesma postagem para todos os usuários"
      ],
      correta: 0,
      dica: "Recomendação personalizada usa sinais do usuário."
    },
    "2-1-6": { dica: "Buscar fontes → filtrar → pontuar → ordenar → paginar." },
    "2-1-7": { dica: "Repetição, links, palavras-chave, contas novas — score de spam." },
    "2-1-8": { dica: "Contador por IP/usuário, bloqueio temporário, CAPTCHA." },
    "2-1-9": { dica: "Filtrar 24h → extrair hashtags → contar → top N." },

    "2-2-0": {
      alternativas: [
        "Validar, persistir o post com metadados (autor, timestamp)",
        "Enviar push para todos os dispositivos antes de salvar",
        "Sobrescrever a última postagem do autor sem avisar",
        "Aguardar aprovação manual obrigatória em todo conteúdo"
      ],
      correta: 0,
      dica: "Primeiro grava com segurança; distribuição vem depois."
    },
    "2-2-1": {
      alternativas: [
        "Fan-out (push para timelines) ou fan-in na leitura (pull)",
        "Email em massa para cada seguidor sempre",
        "Copiar a postagem para planilha compartilhada",
        "Atualizar apenas o cache do perfil do autor"
      ],
      correta: 0,
      dica: "Push escreve nos feeds; pull consulta ao abrir."
    },
    "2-2-2": {
      alternativas: [
        "Registrar relação usuário-post e atualizar contador de forma consistente",
        "Duplicar a postagem inteira no banco",
        "Alterar o texto original da publicação",
        "Mudar só o ícone no cliente, sem persistir"
      ],
      correta: 0,
      dica: "Curtida é um registro + contagem, não uma cópia do post."
    },
    "2-2-3": {
      alternativas: [
        "Upload em partes, compressão e geração de variantes otimizadas",
        "Upload único sem limite nem tratamento de timeout",
        "Rejeitar qualquer arquivo acima de 1 KB",
        "Armazenar apenas em sessionStorage do navegador"
      ],
      correta: 0,
      dica: "Arquivos grandes precisam de estratégia de envio e otimização."
    },
    "2-2-4": {
      alternativas: [
        "Remover ou anonimizar dados dependentes (cascata ou soft delete)",
        "Deixar comentários órfãos apontando para ID inexistente",
        "Transferir comentários para outro autor aleatório",
        "Excluir apenas a mídia e manter texto inacessível"
      ],
      correta: 0,
      dica: "Dados ligados ao post precisam de tratamento coerente."
    },
    "2-2-5": {
      alternativas: [
        "WebSocket, SSE ou push com fallback de polling",
        "Exigir refresh manual da página sempre",
        "Enfileirar e enviar notificações apenas uma vez por dia",
        "Depender só de email SMTP síncrono"
      ],
      correta: 0,
      dica: "Tempo real = canal persistente ou polling inteligente."
    },
    "2-2-6": { dica: "Validar → processar mídia → salvar → fan-out → notificar menções." },
    "2-2-7": { dica: "Debounce → índice de nomes → ranking → sugestões na UI." },
    "2-2-8": { dica: "Campo visibilidade + checagem de relação amizade/autor." },
    "2-2-9": { dica: "Pipeline NLP/imagem → fila de revisão → liberar ou ocultar." },

    // Dicas — bloco 4 (código), mantém alternativas originais
    "0-3-0": { dica: "Em Python, atribuição usa = sem declarar tipo antes." },
    "0-3-1": { dica: "A função de saída padrão em Python começa com 'pr'." },
    "0-3-2": { dica: "Um = atribui; dois == comparam igualdade." },
    "0-3-3": { dica: "Função built-in que lê texto do teclado." },
    "0-3-4": { dica: "Conta caracteres; 'python' tem 6 letras." },
    "0-3-5": { dica: "Python usa dois pontos após a condição, sem chaves." },
    "0-3-6": { dica: "input() duas vezes, compare com == e use if/else." },
    "0-3-7": { dica: "int(input(...)) e compare com 18." },
    "0-3-8": { dica: "Dois inputs, if a > b imprime a, senão b." },
    "0-3-9": { dica: "for i in range(1, 11): print(i)" },

    "1-3-0": { dica: "Lista usa colchetes [ ]." },
    "1-3-1": { dica: "len() retorna quantidade de elementos." },
    "1-3-2": { dica: "for item in lista: é o padrão Python." },
    "1-3-3": { dica: "append adiciona ao final." },
    "1-3-4": { dica: "Multiplicação tem prioridade sobre soma." },
    "1-3-5": { dica: "def nome(params): return ..." },
    "1-3-6": { dica: "Lista de dicts, loop somando preco * quantidade." },
    "1-3-7": { dica: "Guarde o primeiro como referência e compare no loop." },
    "1-3-8": { dica: "Loop na string, if char in 'aeiou'." },
    "1-3-9": { dica: "List comprehension com if n % 2 == 0." },

    "2-3-0": { dica: "filter mantém elementos onde a função retorna True." },
    "2-3-1": { dica: "sorted(..., key=...) define o critério de ordenação." },
    "2-3-2": { dica: "try/except captura erros em Python." },
    "2-3-3": { dica: "dict mapeia chave → valor." },
    "2-3-4": { dica: "with garante fechamento do arquivo." },
    "2-3-5": { dica: "@ envolve/complementa o comportamento de uma função." },
    "2-3-6": { dica: "class com __init__, curtidas=0, métodos que alteram estado." },
    "2-3-7": { dica: "sorted(..., reverse=True)[:3]" },
    "2-3-8": { dica: "re.findall(r'#\\w+', texto)" },
    "2-3-9": { dica: "freq[n] = freq.get(n, 0) + 1" }
  };

  QUESTOES.fases.forEach((fase, fi) => {
    fase.blocos.forEach((bloco, bi) => {
      bloco.questoes.forEach((questao, qi) => {
        const patch = P[`${fi}-${bi}-${qi}`];
        if (!patch) return;
        Object.assign(questao, patch);
      });
    });
  });

  // Cores das fases — rosa / roxo
  QUESTOES.fases[0].cor = "#ec4899";
  QUESTOES.fases[1].cor = "#a855f7";
  QUESTOES.fases[2].cor = "#7c3aed";
})();
