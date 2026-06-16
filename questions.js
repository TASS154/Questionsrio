// Estrutura de questões: 3 fases x 4 blocos x 10 questões = 120
// Cada bloco tem 6 alternativas e 4 dissertativas
// A primeira dissertativa de cada bloco (questão 7) é a "conectada" do tema

const QUESTOES = {
  fases: [
    // =======================================================================
    // FASE 1 — FÁCIL — Tema conectado: Sistema de Login
    // =======================================================================
    {
      nome: "Fácil",
      tema: "Sistema de Login",
      cor: "#22c55e",
      blocos: [
        {
          nome: "Fluxo de UX",
          descricao: "O que o usuário vê e faz na interface",
          icone: "👤",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Qual a primeira coisa que um usuário vê ao acessar um site que requer login?",
              alternativas: [
                "A tela inicial já logada",
                "Uma tela de login com campos para usuário e senha",
                "O painel administrativo",
                "Uma mensagem de erro"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Em uma tela de cadastro, qual desses NÃO é um campo comum?",
              alternativas: [
                "Email",
                "Senha",
                "Confirmação de senha",
                "Endereço IP do roteador"
              ],
              correta: 3
            },
            {
              tipo: "alternativa",
              enunciado: "Quando um usuário esquece a senha, o que ele geralmente deve fazer?",
              alternativas: [
                "Criar uma nova conta",
                "Clicar em 'esqueci minha senha' para recuperação",
                "Ligar para o suporte por telefone",
                "Aguardar 24 horas"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Em um formulário, o que normalmente indica que um campo é obrigatório?",
              alternativas: [
                "Um asterisco (*) ao lado do rótulo",
                "A cor azul",
                "Um cadeado",
                "Estar no topo da página"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que tipicamente acontece após o usuário fazer login com sucesso?",
              alternativas: [
                "É redirecionado para a tela inicial do sistema",
                "Recebe um email de boas-vindas obrigatoriamente",
                "A página é fechada",
                "O navegador reinicia"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Qual elemento NÃO faz parte de uma tela típica de login?",
              alternativas: [
                "Campo de usuário/email",
                "Campo de senha",
                "Botão 'Entrar'",
                "Carrinho de compras"
              ],
              correta: 3
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Descreva passo a passo o que um usuário faz na tela de login para acessar o sistema.",
              respostaModelo: "O usuário acessa a tela de login, digita seu email (ou nome de usuário) no campo apropriado, digita a senha no campo de senha (geralmente oculta com bolinhas) e clica no botão 'Entrar' (ou pressiona Enter). Se as credenciais estiverem corretas, ele é redirecionado para a página principal do sistema."
            },
            {
              tipo: "dissertativa",
              enunciado: "O que deve acontecer na interface caso o usuário deixe um campo obrigatório vazio?",
              respostaModelo: "A interface deve mostrar uma mensagem de erro clara próxima ao campo vazio (geralmente em vermelho), indicando que ele é obrigatório. O foco pode ser direcionado ao campo, e o envio do formulário não deve prosseguir até a correção."
            },
            {
              tipo: "dissertativa",
              enunciado: "Imagine que você está projetando uma tela de cadastro. Que campos você incluiria e por quê?",
              respostaModelo: "Campos essenciais: nome (identificação), email (login e contato), senha (autenticação) e confirmação de senha (evitar erros de digitação). Campos opcionais úteis: data de nascimento, telefone e um checkbox de aceite de termos de uso."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como deve ser a experiência do usuário ao tentar logar com uma senha incorreta?",
              respostaModelo: "O sistema deve mostrar uma mensagem genérica como 'Usuário ou senha incorretos' (sem dizer qual está errado, por segurança), manter o email preenchido para evitar redigitação e limpar o campo de senha. Após várias tentativas, pode bloquear temporariamente ou exigir CAPTCHA."
            }
          ]
        },
        {
          nome: "Lógica Básica",
          descricao: "Como o programa deve pensar (sem código)",
          icone: "🧠",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Para verificar se uma idade indica maioridade, o que comparamos?",
              alternativas: [
                "Se a idade é maior ou igual a 18",
                "Se a idade é par",
                "Se a idade é múltipla de 10",
                "Nada — todos são maiores"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para somar dois números, o que precisamos?",
              alternativas: [
                "Os dois valores e a operação de soma",
                "Apenas um número",
                "Três números",
                "Apenas o resultado"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Se temos uma lista de nomes e queremos saber quantos são, o que fazemos?",
              alternativas: [
                "Contamos os elementos da lista",
                "Multiplicamos os nomes",
                "Verificamos somente o primeiro",
                "Apagamos a lista"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para descobrir se um número é par, o que verificamos?",
              alternativas: [
                "Se ao dividir por 2 o resto é zero",
                "Se é maior que 10",
                "Se é positivo",
                "Se termina em 5"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para encontrar o maior entre dois números, o que fazemos?",
              alternativas: [
                "Comparamos os dois e escolhemos o maior",
                "Somamos os dois",
                "Dividimos um pelo outro",
                "Pegamos sempre o primeiro"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para repetir uma ação 10 vezes, o que usamos?",
              alternativas: [
                "Uma estrutura de repetição (loop)",
                "Uma condicional",
                "Uma variável",
                "Uma função"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Quando um usuário tenta fazer login, conceitualmente o que o programa precisa verificar?",
              respostaModelo: "Primeiro, verificar se o email/usuário existe no sistema. Depois, comparar a senha digitada com a senha armazenada para esse usuário. Se ambos forem válidos, o login é autorizado; caso contrário, é negado."
            },
            {
              tipo: "dissertativa",
              enunciado: "Imagine que você precisa contar quantas pessoas em uma lista são maiores de idade. Como você raciocinaria?",
              respostaModelo: "Percorrer cada pessoa da lista, verificando sua idade. Para cada idade maior ou igual a 18, incrementar um contador. Ao final, o contador conterá o total de maiores de idade."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como você descreveria, sem código, o processo de calcular a média de notas de um aluno?",
              respostaModelo: "Somar todas as notas do aluno e, em seguida, dividir essa soma pela quantidade de notas. O resultado é a média."
            },
            {
              tipo: "dissertativa",
              enunciado: "Explique a lógica para verificar se uma palavra é um palíndromo (lê igual de trás para frente).",
              respostaModelo: "Pegar a palavra original e criar uma versão invertida dela (lendo de trás para frente). Comparar as duas. Se forem iguais, a palavra é um palíndromo."
            }
          ]
        },
        {
          nome: "Fluxo de Funcionamento",
          descricao: "O que o código deve fazer nos bastidores",
          icone: "⚙️",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Quando o usuário clica em um botão 'Enviar', o que o programa faz primeiro?",
              alternativas: [
                "Captura os dados dos campos do formulário",
                "Recarrega a página imediatamente",
                "Fecha o navegador",
                "Imprime na tela aleatoriamente"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Antes de processar dados de um formulário, o que o sistema geralmente faz?",
              alternativas: [
                "Valida se os dados estão corretos e completos",
                "Apaga os dados anteriores do banco",
                "Reinicia o servidor",
                "Manda um email para o admin"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que acontece quando uma variável é 'declarada'?",
              alternativas: [
                "Um espaço de memória é reservado para guardar um valor",
                "Ela é impressa na tela",
                "É enviada para o servidor",
                "Vira automaticamente uma função"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Em um sistema, onde os dados ficam armazenados de forma persistente?",
              alternativas: [
                "Em um banco de dados (ou arquivo)",
                "Apenas na memória RAM",
                "No monitor",
                "Em nenhum lugar"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Quando uma função é 'chamada', o que ocorre?",
              alternativas: [
                "Seu código é executado",
                "Ela é deletada da memória",
                "O programa para",
                "Ela vira variável"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Após validar dados, se forem inválidos, o que o programa deve fazer?",
              alternativas: [
                "Mostrar uma mensagem de erro ao usuário",
                "Apagar todos os dados do banco",
                "Reiniciar",
                "Salvar mesmo assim"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Descreva passo a passo o que o programa faz, internamente, quando o usuário clica em 'Entrar' na tela de login.",
              respostaModelo: "1) Captura o valor digitado no campo de email e o armazena em uma variável. 2) Captura o valor digitado no campo de senha em outra variável. 3) Acessa o banco de dados procurando um registro cujo email corresponda ao digitado. 4) Se encontrar, compara a senha armazenada com a senha digitada. 5) Se conferir, autoriza a autenticação e cria uma sessão para o usuário. 6) Caso contrário, retorna uma mensagem de erro genérica."
            },
            {
              tipo: "dissertativa",
              enunciado: "Imagine um formulário de cadastro de produto. Descreva o fluxo desde o clique em 'Salvar' até o produto aparecer na lista.",
              respostaModelo: "Ao clicar em 'Salvar', o programa captura os dados (nome, preço, quantidade), valida-os (preço positivo, nome não vazio), envia para o servidor, que insere o produto no banco. Depois, a lista de produtos é recarregada (ou o novo item é adicionado dinamicamente) para que apareça na tela."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como funciona internamente um contador de visitas em um site? Descreva o fluxo.",
              respostaModelo: "Quando uma página é carregada, o servidor lê o valor atual do contador (armazenado em banco/arquivo), incrementa em 1, salva o novo valor e envia esse número para ser exibido na página."
            },
            {
              tipo: "dissertativa",
              enunciado: "Descreva o que acontece passo a passo quando um usuário pesquisa por uma palavra em um site.",
              respostaModelo: "O usuário digita a palavra e clica em 'pesquisar'. O programa captura o texto, envia ao servidor, que percorre o banco de dados procurando registros que contenham aquele termo. Os resultados são retornados ao navegador, que os exibe em uma lista para o usuário."
            }
          ]
        },
        {
          nome: "Código",
          descricao: "Implementação real em Python",
          icone: "💻",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Qual a forma correta de criar uma variável em Python que guarda o número 10?",
              alternativas: [
                "var x = 10",
                "x = 10",
                "int x = 10",
                "10 = x"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Como imprimir 'Olá' na tela em Python?",
              alternativas: [
                "echo(\"Olá\")",
                "print(\"Olá\")",
                "console.log(\"Olá\")",
                "printf(\"Olá\")"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Qual o operador de comparação para 'igual a' em Python?",
              alternativas: [
                "=",
                "==",
                "===",
                "!="
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Como receber uma entrada do usuário pelo teclado em Python?",
              alternativas: [
                "input()",
                "read()",
                "scan()",
                "get()"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que retorna len(\"python\") em Python?",
              alternativas: [
                "6",
                "A primeira letra",
                "A string invertida",
                "Um erro"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Qual a sintaxe correta de um if em Python?",
              alternativas: [
                "if x > 5 then:",
                "if x > 5:",
                "if x > 5;",
                "if x > 5 {}"
              ],
              correta: 1
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Escreva um código Python simples que peça email e senha ao usuário e verifique se correspondem a dados fixos (mock). Imprima 'Login efetuado' ou 'Credenciais inválidas'.",
              respostaModelo: `email_correto = "user@email.com"
senha_correta = "1234"

email = input("Email: ")
senha = input("Senha: ")

if email == email_correto and senha == senha_correta:
    print("Login efetuado")
else:
    print("Credenciais inválidas")`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva um código que peça a idade do usuário e diga se ele é maior ou menor de idade.",
              respostaModelo: `idade = int(input("Idade: "))
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva um código que receba dois números e imprima o maior.",
              respostaModelo: `a = float(input("Número 1: "))
b = float(input("Número 2: "))
if a > b:
    print(a)
else:
    print(b)`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva um código que imprima os números de 1 a 10.",
              respostaModelo: `for i in range(1, 11):
    print(i)`
            }
          ]
        }
      ]
    },

    // =======================================================================
    // FASE 2 — MÉDIO — Tema conectado: Carrinho de Compras
    // =======================================================================
    {
      nome: "Médio",
      tema: "Carrinho de Compras",
      cor: "#3b82f6",
      blocos: [
        {
          nome: "Fluxo de UX",
          descricao: "O que o usuário vê e faz na interface",
          icone: "🛒",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Em um e-commerce, onde o usuário tipicamente vê os itens que pretende comprar?",
              alternativas: [
                "Na página inicial",
                "No carrinho de compras",
                "No menu de configurações",
                "Na página de perfil"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "O que geralmente acontece quando o usuário clica em 'Adicionar ao carrinho'?",
              alternativas: [
                "O item é incluído no carrinho e um feedback visual aparece",
                "O usuário compra imediatamente",
                "O produto é deletado do estoque",
                "Nada acontece"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Qual desses NÃO é típico em um carrinho de compras?",
              alternativas: [
                "Alterar quantidade do item",
                "Remover item",
                "Editar a descrição do produto",
                "Visualizar subtotal"
              ],
              correta: 2
            },
            {
              tipo: "alternativa",
              enunciado: "Antes da finalização da compra, qual etapa é comum?",
              alternativas: [
                "Confirmação de endereço e forma de pagamento",
                "Cadastro de novo produto",
                "Edição do site",
                "Login do administrador"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que o usuário pode fazer se mudar de ideia sobre um item no carrinho?",
              alternativas: [
                "Remover ou alterar a quantidade",
                "Apenas excluir a conta",
                "Esperar 24 horas",
                "Adicionar mais um igual obrigatoriamente"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Em qual etapa o usuário tipicamente vê o valor total final (com frete) da compra?",
              alternativas: [
                "Antes de adicionar ao carrinho",
                "No checkout, após informar o endereço",
                "Apenas após o pagamento",
                "Em nenhum momento"
              ],
              correta: 1
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Descreva a jornada do usuário desde encontrar um produto até finalizar a compra em um e-commerce.",
              respostaModelo: "O usuário pesquisa ou navega pelos produtos, clica no item desejado para ver detalhes, clica em 'Adicionar ao carrinho', continua comprando ou vai para o carrinho, revisa os itens e quantidades, clica em 'Finalizar compra', informa endereço de entrega, escolhe forma de pagamento, confirma o pedido e recebe a confirmação."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como você projetaria a interface do carrinho para que o usuário veja claramente o que está comprando?",
              respostaModelo: "Listaria cada produto com imagem, nome, preço unitário, controle de quantidade (botões + e -), subtotal por item, e ao final um resumo com subtotal geral, frete e total. Botões claros para 'remover', 'continuar comprando' e 'finalizar compra'."
            },
            {
              tipo: "dissertativa",
              enunciado: "O que deve acontecer na interface se o estoque do produto acabar enquanto o usuário está com ele no carrinho?",
              respostaModelo: "O sistema deve avisar o usuário com uma mensagem destacada no carrinho dizendo que o produto está indisponível, ou ajustar automaticamente a quantidade ao estoque disponível. Não deve permitir prosseguir com o item indisponível."
            },
            {
              tipo: "dissertativa",
              enunciado: "Descreva a UX ideal para cupons de desconto em um e-commerce.",
              respostaModelo: "Deve haver um campo visível no carrinho para inserir o cupom. Ao aplicar, mostrar feedback imediato (válido/inválido), exibir o desconto no resumo de valores, permitir remover o cupom e indicar claramente quanto foi descontado do total."
            }
          ]
        },
        {
          nome: "Lógica Básica",
          descricao: "Como o programa deve pensar (sem código)",
          icone: "🧮",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Para calcular o valor total de um carrinho, o que fazemos?",
              alternativas: [
                "Somar preço × quantidade de cada item",
                "Pegar apenas o preço do primeiro item",
                "Multiplicar todos os preços",
                "Dividir o maior preço pelo menor"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para verificar se um número está em uma lista, o que fazemos?",
              alternativas: [
                "Percorremos a lista comparando com cada elemento",
                "Somamos a lista",
                "Invertemos a lista",
                "Multiplicamos pelo tamanho"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para descobrir o segundo maior valor em uma lista, o que fazemos?",
              alternativas: [
                "Ordenamos e pegamos o segundo",
                "Pegamos o do meio",
                "Dividimos o maior por 2",
                "Pegamos o último"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para contar quantas vezes um item aparece em uma lista, o que fazemos?",
              alternativas: [
                "Percorrer comparando cada elemento com o alvo, incrementando um contador",
                "Multiplicar o tamanho da lista",
                "Dividir o item por 2",
                "Verificar apenas o primeiro"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para inverter uma string, o que fazemos conceitualmente?",
              alternativas: [
                "Reorganizamos os caracteres do último para o primeiro",
                "Somamos os caracteres",
                "Removemos as vogais",
                "Aumentamos seu tamanho"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para verificar se uma senha é 'forte', quais critérios típicos verificamos?",
              alternativas: [
                "Tamanho mínimo, presença de letras, números e símbolos",
                "Apenas que tenha 4 caracteres",
                "Que seja igual ao nome do usuário",
                "Que seja só de números"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Conceitualmente, como o sistema calcula o total de um carrinho com vários itens em quantidades diferentes?",
              respostaModelo: "O sistema percorre cada item do carrinho, multiplicando o preço unitário pela quantidade desejada, e soma esses subtotais para obter o total. Se houver desconto ou frete, eles são aplicados sobre esse valor final."
            },
            {
              tipo: "dissertativa",
              enunciado: "Explique a lógica para encontrar o produto mais caro de uma lista.",
              respostaModelo: "Assumimos que o primeiro produto é o mais caro. Percorremos os demais e, para cada um, comparamos com o atual 'mais caro'. Se for maior, atualizamos. No fim, temos o produto mais caro."
            },
            {
              tipo: "dissertativa",
              enunciado: "Descreva a lógica para aplicar um desconto percentual sobre um valor.",
              respostaModelo: "Multiplicar o valor pelo percentual dividido por 100 para obter o desconto, e em seguida subtrair esse desconto do valor original. Alternativamente, multiplicar o valor por (1 − percentual/100)."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como você verificaria, sem código, se um carrinho está vazio?",
              respostaModelo: "Verificar se a quantidade de itens no carrinho é zero (ou se a estrutura que guarda os itens não contém nenhum elemento)."
            }
          ]
        },
        {
          nome: "Fluxo de Funcionamento",
          descricao: "O que o código deve fazer nos bastidores",
          icone: "🔄",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Onde geralmente fica armazenado o carrinho de um usuário enquanto ele navega?",
              alternativas: [
                "Em sessão/cookies ou banco de dados, ligado ao usuário",
                "No HTML da página",
                "Não fica armazenado",
                "No teclado"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Ao adicionar um item ao carrinho, o que o programa faz se o item já existir?",
              alternativas: [
                "Geralmente incrementa a quantidade em vez de duplicar",
                "Cria duas linhas iguais",
                "Apaga o item existente",
                "Não faz nada"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Antes de finalizar a compra, o que o sistema deve verificar?",
              alternativas: [
                "Disponibilidade em estoque e validade dos dados",
                "Apenas o nome do usuário",
                "Se é sábado",
                "O tamanho da tela"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Como o sistema mantém o usuário logado entre páginas?",
              alternativas: [
                "Usando sessão (cookies, tokens)",
                "Pedindo login a cada clique",
                "Salvando no monitor",
                "Por sorte"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que deve acontecer ao remover um item do carrinho?",
              alternativas: [
                "O item é retirado e o total é recalculado",
                "O carrinho fica sempre vazio",
                "O usuário é deslogado",
                "Nada visível"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Quando o pagamento é confirmado, o que ocorre internamente?",
              alternativas: [
                "Cria-se um pedido, atualiza-se o estoque e limpa-se o carrinho",
                "Apenas o carrinho é limpo",
                "O usuário é deletado",
                "A página fica em branco"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Descreva o fluxo interno do sistema desde o usuário clicar em 'Adicionar ao carrinho' até o item aparecer no resumo do carrinho.",
              respostaModelo: "Ao clicar em 'Adicionar ao carrinho', o sistema identifica o produto e o usuário. Verifica se o produto já está no carrinho desse usuário: se sim, incrementa a quantidade; se não, insere uma nova entrada. Atualiza o registro do carrinho (na sessão ou no banco). Recalcula o subtotal. Retorna ao frontend, que atualiza o ícone do carrinho e exibe confirmação visual."
            },
            {
              tipo: "dissertativa",
              enunciado: "Descreva como o sistema processa o checkout, do clique em 'Finalizar compra' até a tela de 'Pedido confirmado'.",
              respostaModelo: "O sistema valida que o usuário está logado e que o carrinho não está vazio. Verifica disponibilidade dos itens em estoque. Coleta endereço e forma de pagamento. Envia os dados ao gateway de pagamento. Se aprovado, cria um registro de pedido no banco, decrementa o estoque, limpa o carrinho do usuário e redireciona para a tela de confirmação com os detalhes do pedido."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como funciona internamente o cálculo de frete baseado em CEP?",
              respostaModelo: "O sistema captura o CEP digitado e faz uma consulta a um serviço de cálculo de frete (API externa ou tabela interna), enviando origem, destino, peso e dimensões dos produtos. Recebe o valor e o prazo de entrega e os mostra ao usuário, atualizando o total da compra."
            },
            {
              tipo: "dissertativa",
              enunciado: "Descreva o fluxo de um sistema de avaliação de produtos (1 a 5 estrelas) após uma compra.",
              respostaModelo: "Após o usuário receber o produto, o sistema permite avaliá-lo. Quando ele clica em uma estrela, o frontend envia a nota e o ID do produto ao backend. O backend valida que o usuário comprou o produto, registra a avaliação no banco (ligada ao usuário e ao produto), recalcula a média de avaliações do produto e atualiza a página."
            }
          ]
        },
        {
          nome: "Código",
          descricao: "Implementação real em Python",
          icone: "🐍",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Como criar uma lista em Python com os números 1, 2 e 3?",
              alternativas: [
                "[1, 2, 3]",
                "(1, 2, 3)",
                "{1, 2, 3}",
                "1, 2, 3"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Qual o resultado de len([1, 2, 3, 4])?",
              alternativas: [
                "3",
                "4",
                "10",
                "1"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Como percorrer uma lista chamada 'frutas' imprimindo cada fruta?",
              alternativas: [
                "for fruta in frutas: print(fruta)",
                "for fruta of frutas { print(fruta) }",
                "foreach fruta in frutas: print(fruta)",
                "while frutas: print(fruta)"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que faz lista.append(5) em Python?",
              alternativas: [
                "Remove o 5 da lista",
                "Adiciona o 5 ao final da lista",
                "Insere o 5 no início",
                "Conta quantos 5 existem"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Qual a saída de print(2 + 3 * 4)?",
              alternativas: [
                "20",
                "14",
                "24",
                "9"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Como definir uma função 'soma' que recebe dois números e retorna a soma?",
              alternativas: [
                "def soma(a, b): return a + b",
                "function soma(a, b) { return a + b }",
                "def soma(a, b) -> a + b",
                "soma = (a, b) => a + b"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Escreva um código Python que represente um carrinho como uma lista de dicionários (com 'nome', 'preco', 'quantidade') e calcule o total.",
              respostaModelo: `carrinho = [
    {"nome": "Caneta", "preco": 2.50, "quantidade": 3},
    {"nome": "Caderno", "preco": 15.0, "quantidade": 2},
]

total = 0
for item in carrinho:
    total += item["preco"] * item["quantidade"]

print(f"Total: R$ {total:.2f}")`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva uma função que receba uma lista de números e retorne o maior.",
              respostaModelo: `def maior(lista):
    maior_val = lista[0]
    for n in lista[1:]:
        if n > maior_val:
            maior_val = n
    return maior_val`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva um código que conte quantas vogais existem em uma string informada pelo usuário.",
              respostaModelo: `texto = input("Digite uma frase: ")
vogais = "aeiouAEIOU"
contador = 0

for c in texto:
    if c in vogais:
        contador += 1

print(contador)`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva uma função que receba uma lista e retorne uma nova lista apenas com os números pares.",
              respostaModelo: `def pares(lista):
    return [n for n in lista if n % 2 == 0]`
            }
          ]
        }
      ]
    },

    // =======================================================================
    // FASE 3 — DIFÍCIL — Tema conectado: Postagem em Rede Social
    // =======================================================================
    {
      nome: "Difícil",
      tema: "Postagem em Rede Social",
      cor: "#ef4444",
      blocos: [
        {
          nome: "Fluxo de UX",
          descricao: "O que o usuário vê e faz na interface",
          icone: "📱",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Em uma rede social, qual a forma mais comum do usuário compartilhar uma ideia?",
              alternativas: [
                "Pelo menu de configurações",
                "Por uma área de criação de postagem",
                "Apenas por mensagem direta",
                "Pelo botão de logout"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "Ao clicar em uma postagem, o que tipicamente acontece?",
              alternativas: [
                "Mostra detalhes, comentários e interações",
                "A postagem é deletada",
                "O usuário é deslogado",
                "Inicia um download"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que tipicamente acontece quando você dá 'curtir' em uma postagem?",
              alternativas: [
                "O contador de likes aumenta e o ícone muda de estado",
                "A postagem é compartilhada automaticamente",
                "Seu perfil é deletado",
                "Nada visível"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que NÃO é típico em uma timeline de postagens?",
              alternativas: [
                "Rolagem infinita",
                "Postagens ordenadas (por relevância ou tempo)",
                "Interações (curtir, comentar)",
                "Acesso ao código-fonte do app"
              ],
              correta: 3
            },
            {
              tipo: "alternativa",
              enunciado: "O que melhora a UX em postagens com muitos comentários?",
              alternativas: [
                "Paginação ou 'carregar mais comentários'",
                "Mostrar todos sem paginação",
                "Ocultar todos",
                "Deletar comentários antigos automaticamente"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Ao mencionar (@) alguém em uma postagem, qual deve ser a experiência?",
              alternativas: [
                "Sugestões de usuários aparecem enquanto digita",
                "O usuário some da lista",
                "A postagem é apagada",
                "O usuário mencionado é bloqueado"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Descreva a jornada do usuário desde o desejo de compartilhar uma foto até a postagem aparecer no feed dos seguidores.",
              respostaModelo: "O usuário clica em 'Nova publicação', seleciona uma foto do dispositivo, faz ajustes (cortes, filtros), escreve uma legenda, opcionalmente adiciona localização ou tags, e clica em 'Publicar'. Recebe um feedback de sucesso e a postagem aparece em seu perfil. Os seguidores, ao acessarem seu feed, veem a nova publicação na ordem definida pelo algoritmo."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como você projetaria a UX de notificações para evitar incômodo mas garantir engajamento?",
              respostaModelo: "Agruparia notificações similares (ex: 'Fulano e mais 3 curtiram'), permitiria personalização (quais tipos receber), priorizaria notificações importantes (mensagens diretas, menções), evitaria notificações em horários inadequados e ofereceria modo 'não perturbe'."
            },
            {
              tipo: "dissertativa",
              enunciado: "Imagine que um usuário cria uma postagem ofensiva. Qual deve ser o fluxo de denúncia na interface?",
              respostaModelo: "O usuário clica nos três pontos da postagem, seleciona 'Denunciar', escolhe um motivo de uma lista (spam, ofensivo, falso) e opcionalmente adiciona detalhes. Confirma a denúncia e recebe um feedback de 'denúncia enviada'. A postagem é marcada para análise e o denunciante pode acompanhar o status."
            },
            {
              tipo: "dissertativa",
              enunciado: "Descreva a UX ideal para edição de uma postagem já publicada.",
              respostaModelo: "Ao clicar em 'editar', o usuário vê o conteúdo atual em modo editável. Faz as alterações e salva. A postagem passa a mostrar uma marcação visível '(editado)' com timestamp. Curtidas e comentários anteriores são preservados. A edição deve ser intuitiva e rápida."
            }
          ]
        },
        {
          nome: "Lógica Básica",
          descricao: "Como o programa deve pensar (sem código)",
          icone: "🧩",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Para ordenar postagens por relevância, do que conceitualmente precisamos?",
              alternativas: [
                "Um critério (curtidas, comentários, recência) e uma ordenação",
                "Apenas a primeira postagem",
                "Removê-las todas",
                "Postar mais uma"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para implementar paginação, o que precisamos calcular?",
              alternativas: [
                "Itens por página, página atual e total",
                "Apenas o total",
                "A cor da página",
                "A velocidade da internet"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Como saber se um usuário já curtiu uma postagem?",
              alternativas: [
                "Verificar se ele está na lista de quem curtiu",
                "Contar todas as curtidas",
                "Verificar o dia da semana",
                "Olhar a foto de perfil"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para detectar menções (@usuario), o que verificamos?",
              alternativas: [
                "Substrings começando com @ e seguidas de caracteres válidos",
                "Apenas a primeira palavra",
                "Apenas o final do texto",
                "O tamanho total"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para calcular trends/tendências, conceitualmente o que fazemos?",
              alternativas: [
                "Contamos a frequência de palavras/hashtags em uma janela de tempo",
                "Somamos todos os usuários",
                "Multiplicamos likes por seguidores",
                "Dividimos o ano pelo mês"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Para recomendar conteúdo a um usuário, o que consideramos?",
              alternativas: [
                "Interesses, interações e perfis similares",
                "Apenas a data de cadastro",
                "Sorte",
                "Tamanho do nome"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Descreva a lógica para gerar o 'feed' de um usuário: como o sistema decide o que mostrar?",
              respostaModelo: "O sistema busca as postagens das pessoas que o usuário segue, possivelmente combinadas com recomendações. Aplica filtros (não mostrar bloqueados, conteúdo apropriado). Calcula um score para cada postagem com base em recência, número de interações e relevância para o usuário. Ordena pelas pontuações maiores e retorna paginado."
            },
            {
              tipo: "dissertativa",
              enunciado: "Explique a lógica para detectar spam em comentários.",
              respostaModelo: "Aplicar regras heurísticas: muitos comentários idênticos do mesmo usuário em curto tempo, presença de muitos links, palavras-chave conhecidas de spam, conta recém-criada com comportamento incomum. Cada comentário recebe um score; acima de um limiar, é marcado como spam."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como você raciocinaria sobre limitar tentativas de login para evitar ataques de força bruta?",
              respostaModelo: "Manter um contador por usuário/IP de tentativas falhas. Após N tentativas em um intervalo de tempo, bloquear temporariamente, exibir CAPTCHA ou aplicar cooldown progressivo (1min, 5min, 30min). O contador é zerado após login bem-sucedido."
            },
            {
              tipo: "dissertativa",
              enunciado: "Imagine que você precisa implementar 'hashtags em tendência nas últimas 24 horas'. Qual a lógica?",
              respostaModelo: "Filtrar todas as postagens das últimas 24 horas. Para cada uma, extrair as hashtags. Contar a frequência de cada hashtag nesse período. Ordenar por contagem decrescente. Retornar as N hashtags mais frequentes. Opcionalmente, comparar com o período anterior para destacar crescimento real."
            }
          ]
        },
        {
          nome: "Fluxo de Funcionamento",
          descricao: "O que o código deve fazer nos bastidores",
          icone: "🛠️",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Quando um usuário publica uma postagem, o que o sistema faz primeiro?",
              alternativas: [
                "Valida o conteúdo e o salva no banco com timestamp e referência ao autor",
                "Envia diretamente para todos os usuários do mundo",
                "Deleta a postagem anterior",
                "Reinicia o servidor"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Como o sistema atualiza o feed dos seguidores quando alguém posta?",
              alternativas: [
                "Por mecanismos de 'fan-out' (push) ou consulta sob demanda (pull)",
                "Por email para cada seguidor",
                "Não atualiza",
                "Mudando o nome do site"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Ao curtir uma postagem, internamente o que acontece?",
              alternativas: [
                "Registra a curtida (id do usuário e da postagem) e atualiza o contador",
                "Recria a postagem inteira",
                "Deleta o usuário",
                "Apenas muda a cor do ícone localmente, sem persistir"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Como o sistema lida com uploads grandes de imagens/vídeos?",
              alternativas: [
                "Upload em chunks, compressão e geração de versões otimizadas",
                "Envia tudo de uma vez sem otimização",
                "Bloqueia o upload",
                "Salva apenas no navegador"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que é importante ao excluir uma postagem com muitos comentários e curtidas?",
              alternativas: [
                "Excluir ou marcar como inativos os dados relacionados (efeito cascata)",
                "Apenas a postagem; comentários ficam órfãos sempre",
                "Não excluir nunca",
                "Excluir a conta do usuário junto"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Como o sistema gerencia notificações em tempo real?",
              alternativas: [
                "WebSockets, push notifications ou polling",
                "Apenas refresh manual",
                "Pelo correio físico",
                "Por SMS sempre"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Descreva o fluxo interno do sistema desde o usuário clicar em 'Publicar' até a postagem aparecer nos feeds dos seguidores.",
              respostaModelo: "1) O frontend envia os dados (texto, mídia, autor) ao backend. 2) O backend valida e processa a mídia (compressão, thumbnails). 3) Cria um registro na tabela de postagens com timestamp, autor_id e url da mídia. 4) Atualiza índices e caches relacionados. 5) Em modelo 'push', insere a referência da postagem nos feeds dos seguidores; em 'pull', os feeds buscam ao serem acessados. 6) Dispara notificações para usuários mencionados. 7) Retorna sucesso ao frontend, que adiciona a postagem otimisticamente ao topo do perfil do autor."
            },
            {
              tipo: "dissertativa",
              enunciado: "Descreva como funciona internamente um sistema de busca de usuários por nome.",
              respostaModelo: "O frontend envia o texto digitado a cada N caracteres (com debounce). O backend consulta um índice (tipicamente um trie, índice invertido ou um serviço como Elasticsearch) que contém nomes/usernames. Retorna os resultados mais relevantes (correspondência de prefixo, similaridade), priorizando perfis populares ou seguidos pelo usuário. O frontend exibe as sugestões em uma lista."
            },
            {
              tipo: "dissertativa",
              enunciado: "Como funciona o controle de privacidade em postagens (público / somente amigos / privado)?",
              respostaModelo: "Cada postagem tem um campo de visibilidade. Quando alguém tenta vê-la, o sistema verifica: se 'público', libera; se 'amigos', verifica se há uma relação de amizade entre o solicitante e o autor; se 'privado', apenas o autor pode ver. Essa verificação ocorre em cada consulta, ou as queries já filtram diretamente por relacionamento."
            },
            {
              tipo: "dissertativa",
              enunciado: "Descreva o fluxo de moderação automática de conteúdo após uma postagem.",
              respostaModelo: "Após salvar a postagem, ela passa por uma pipeline: análise de texto por NLP buscando palavras proibidas, análise de imagem por modelos de ML (nudez, violência), verificação de spam. Conteúdos suspeitos vão para uma fila de revisão humana e podem ser temporariamente ocultos. Conteúdos limpos são liberados. O autor é notificado caso algo seja removido."
            }
          ]
        },
        {
          nome: "Código",
          descricao: "Implementação real em Python",
          icone: "🚀",
          questoes: [
            {
              tipo: "alternativa",
              enunciado: "Qual o resultado de list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))?",
              alternativas: [
                "[1, 3]",
                "[2, 4]",
                "[1, 2, 3, 4]",
                "[]"
              ],
              correta: 1
            },
            {
              tipo: "alternativa",
              enunciado: "O que faz sorted(lista, key=lambda x: x['idade'])?",
              alternativas: [
                "Ordena a lista de dicionários pelo campo 'idade'",
                "Soma as idades",
                "Inverte a lista",
                "Lança um erro"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Como capturar exceções em Python?",
              alternativas: [
                "try: ... except: ...",
                "catch { ... }",
                "error: ...",
                "if error then ..."
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Qual o uso típico de um dicionário em Python?",
              alternativas: [
                "Estrutura chave-valor",
                "Apenas para guardar listas",
                "Apenas para inteiros",
                "Para desenhar gráficos"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "O que 'with open(\"arquivo.txt\") as f:' garante?",
              alternativas: [
                "O arquivo é fechado automaticamente ao final do bloco",
                "Não dá erro nunca",
                "Cria um arquivo novo sempre",
                "Lê de um arquivo online"
              ],
              correta: 0
            },
            {
              tipo: "alternativa",
              enunciado: "Qual o objetivo de um decorator em Python (@decorator)?",
              alternativas: [
                "Modificar/estender o comportamento de uma função",
                "Apenas decoração visual no código",
                "Renomear funções",
                "Comentar trechos de código"
              ],
              correta: 0
            },
            {
              tipo: "dissertativa",
              conectada: true,
              enunciado: "Escreva uma classe Python 'Postagem' com atributos (autor, texto, curtidas, comentarios) e métodos para curtir() e comentar(texto).",
              respostaModelo: `class Postagem:
    def __init__(self, autor, texto):
        self.autor = autor
        self.texto = texto
        self.curtidas = 0
        self.comentarios = []

    def curtir(self):
        self.curtidas += 1

    def comentar(self, texto):
        self.comentarios.append(texto)`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva uma função que receba uma lista de postagens (dicionários com 'curtidas') e retorne as 3 mais curtidas.",
              respostaModelo: `def top_3(postagens):
    return sorted(postagens, key=lambda p: p['curtidas'], reverse=True)[:3]`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva uma função que receba uma string e retorne todas as hashtags (palavras iniciadas com #) encontradas.",
              respostaModelo: `import re

def hashtags(texto):
    return re.findall(r'#\\w+', texto)`
            },
            {
              tipo: "dissertativa",
              enunciado: "Escreva uma função que receba uma lista de inteiros e retorne um dicionário com a frequência de cada número.",
              respostaModelo: `def frequencia(lista):
    freq = {}
    for n in lista:
        freq[n] = freq.get(n, 0) + 1
    return freq`
            }
          ]
        }
      ]
    }
  ]
};
