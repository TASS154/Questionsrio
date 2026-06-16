# 120 Questões de Lógica de Programação (Python)

Documento gerado automaticamente a partir de `questions.js` + `question-patches.js`.

Cada fase tem **4 blocos** (UX → Lógica → Fluxo → Código), **10 questões** por bloco (6 alternativas + 4 dissertativas).

---

## FASE 1 — FÁCIL (Tema conectado: Sistema de Login)

### Bloco 1 (Fácil) — Fluxo de UX

*O que o usuário vê e faz na interface*

**1. (Alternativa)** Qual a primeira coisa que um usuário vê ao acessar um site que requer login?
- a) Uma landing page pública com botão 'Entrar' no menu
- b) Uma tela de login com campos para usuário e senha ✅
- c) O feed personalizado já carregado como visitante
- d) Um pop-up de cookies antes de qualquer outra interação

> **Dica:** Pense no que impede o acesso ao conteúdo privado até você se identificar.

**2. (Alternativa)** Em um cadastro típico, qual campo costuma ser opcional em vez de obrigatório?
- a) Email
- b) Senha
- c) Telefone ✅
- d) Confirmação de senha

> **Dica:** Email e senha quase sempre são exigidos; o que costuma ser 'se quiser'?

**3. (Alternativa)** Quando um usuário esquece a senha, o que ele geralmente deve fazer?
- a) Usar o fluxo 'Esqueci minha senha' ou recuperação por email ✅
- b) Tentar logar repetidamente até a conta bloquear
- c) Entrar com login social, se já vinculou a conta antes
- d) Criar outra conta com o mesmo email

> **Dica:** Sites costumam oferecer um caminho específico para quem não lembra a senha.

**4. (Alternativa)** Em um formulário, o que normalmente indica que um campo é obrigatório?
- a) Um asterisco (*) ao lado do rótulo ✅
- b) Placeholder com texto em negrito
- c) Ícone de calendário ao lado do campo
- d) Campo posicionado no topo do formulário

> **Dica:** É um símbolo pequeno e universal em formulários web.

**5. (Alternativa)** O que tipicamente acontece após o usuário fazer login com sucesso?
- a) É redirecionado para a área principal autenticada do sistema ✅
- b) Permanece na tela de login com mensagem de boas-vindas
- c) É levado sempre para completar o perfil, em qualquer sistema
- d) Recebe um modal obrigatório antes de qualquer navegação

> **Dica:** Após autenticar, o usuário costuma ir para onde o app realmente começa.

**6. (Alternativa)** Em uma tela de login típica, qual combinação de elementos você esperaria encontrar juntos?
- a) Campo de email, campo de senha e botão de envio ✅
- b) Lista de produtos, frete estimado e cupom de desconto
- c) Editor de código e console de depuração
- d) Gráfico de vendas e exportação para planilha

> **Dica:** Foque no mínimo necessário para identificar e autenticar alguém.

**7. (Dissertativa — CONECTADA)** Descreva passo a passo o que um usuário faz na tela de login para acessar o sistema.

> **Dica:** Pense na sequência: abrir tela → preencher → confirmar → resultado.

> **Resposta:**
> O usuário acessa a tela de login, digita seu email (ou nome de usuário) no campo apropriado, digita a senha no campo de senha (geralmente oculta com bolinhas) e clica no botão 'Entrar' (ou pressiona Enter). Se as credenciais estiverem corretas, ele é redirecionado para a página principal do sistema.

**8. (Dissertativa)** O que deve acontecer na interface caso o usuário deixe um campo obrigatório vazio?

> **Dica:** O erro deve aparecer perto do problema e impedir o envio inválido.

> **Resposta:**
> A interface deve mostrar uma mensagem de erro clara próxima ao campo vazio (geralmente em vermelho), indicando que ele é obrigatório. O foco pode ser direcionado ao campo, e o envio do formulário não deve prosseguir até a correção.

**9. (Dissertativa)** Imagine que você está projetando uma tela de cadastro. Que campos você incluiria e por quê?

> **Dica:** Separe o que identifica, o que autentica e o que evita erro de digitação.

> **Resposta:**
> Campos essenciais: nome (identificação), email (login e contato), senha (autenticação) e confirmação de senha (evitar erros de digitação). Campos opcionais úteis: data de nascimento, telefone e um checkbox de aceite de termos de uso.

**10. (Dissertativa)** Como deve ser a experiência do usuário ao tentar logar com uma senha incorreta?

> **Dica:** Por segurança, mensagens genéricas e campos tratados de forma diferente.

> **Resposta:**
> O sistema deve mostrar uma mensagem genérica como 'Usuário ou senha incorretos' (sem dizer qual está errado, por segurança), manter o email preenchido para evitar redigitação e limpar o campo de senha. Após várias tentativas, pode bloquear temporariamente ou exigir CAPTCHA.

### Bloco 2 (Fácil) — Lógica Básica

*Como o programa deve pensar (sem código)*

**1. (Alternativa)** Para verificar se uma idade indica maioridade, o que comparamos?
- a) Comparar se a idade é maior ou igual ao limite legal (ex.: 18) ✅
- b) Verificar se a pessoa já possui documento com foto
- c) Checar se o ano de nascimento é anterior a um ano fixo
- d) Confirmar se a idade foi informada há menos de um ano

> **Dica:** É uma comparação numérica simples contra um limite.

**2. (Alternativa)** Para somar dois números, o que precisamos?
- a) Obter os dois valores e aplicar a operação de soma entre eles ✅
- b) Converter ambos para texto e concatená-los
- c) Usar apenas o maior dos dois como resultado
- d) Guardar os números sem operação até pedirem o resultado

> **Dica:** Soma precisa dos dois operandos — não confunda com texto.

**3. (Alternativa)** Se temos uma lista de nomes e queremos saber quantos são, o que fazemos?
- a) Percorrer a lista e contar quantos elementos ela possui ✅
- b) Ordenar alfabeticamente e pegar o último
- c) Verificar se o primeiro nome tem mais de cinco letras
- d) Somar o tamanho em caracteres de cada nome

> **Dica:** Quantos itens existem? Não confunda com tamanho do texto.

**4. (Alternativa)** Para descobrir se um número é par, o que verificamos?
- a) Verificar se o resto da divisão por 2 é zero ✅
- b) Verificar se o número é divisível por 10
- c) Checar se o último dígito é par, sem usar divisão
- d) Confirmar se o número é positivo

> **Dica:** Paridade está ligada à divisão por dois.

**5. (Alternativa)** Para encontrar o maior entre dois números, o que fazemos?
- a) Comparar os dois valores e selecionar o maior ✅
- b) Somá-los e dividir por 2 para estimar
- c) Sempre retornar o primeiro, por convenção
- d) Subtrair o menor do maior e retornar a diferença

> **Dica:** Você precisa decidir qual dos dois é maior — não calcular média.

**6. (Alternativa)** Para repetir uma ação 10 vezes, o que usamos?
- a) Usar uma estrutura de repetição que execute o bloco 10 vezes ✅
- b) Copiar o mesmo trecho manualmente 10 vezes no fluxo
- c) Usar uma condicional que verifica se já executou uma vez
- d) Criar dez variáveis com nomes diferentes para o mesmo fim

> **Dica:** Repetição controlada é o papel de um loop.

**7. (Dissertativa — CONECTADA)** Quando um usuário tenta fazer login, conceitualmente o que o programa precisa verificar?

> **Dica:** Duas verificações em sequência: existe? senha confere?

> **Resposta:**
> Primeiro, verificar se o email/usuário existe no sistema. Depois, comparar a senha digitada com a senha armazenada para esse usuário. Se ambos forem válidos, o login é autorizado; caso contrário, é negado.

**8. (Dissertativa)** Imagine que você precisa contar quantas pessoas em uma lista são maiores de idade. Como você raciocinaria?

> **Dica:** Percorra, teste a condição, incremente um contador.

> **Resposta:**
> Percorrer cada pessoa da lista, verificando sua idade. Para cada idade maior ou igual a 18, incrementar um contador. Ao final, o contador conterá o total de maiores de idade.

**9. (Dissertativa)** Como você descreveria, sem código, o processo de calcular a média de notas de um aluno?

> **Dica:** Média = soma dividida pela quantidade.

> **Resposta:**
> Somar todas as notas do aluno e, em seguida, dividir essa soma pela quantidade de notas. O resultado é a média.

**10. (Dissertativa)** Explique a lógica para verificar se uma palavra é um palíndromo (lê igual de trás para frente).

> **Dica:** Inverta e compare com o original.

> **Resposta:**
> Pegar a palavra original e criar uma versão invertida dela (lendo de trás para frente). Comparar as duas. Se forem iguais, a palavra é um palíndromo.

### Bloco 3 (Fácil) — Fluxo de Funcionamento

*O que o código deve fazer nos bastidores*

**1. (Alternativa)** Quando o usuário clica em um botão 'Enviar', o que o programa faz primeiro?
- a) Ler/capturar os valores preenchidos nos campos do formulário ✅
- b) Desabilitar todos os campos permanentemente
- c) Redirecionar para a página inicial sem validar
- d) Mostrar animação de carregamento por tempo fixo

> **Dica:** Antes de qualquer processamento, o sistema precisa dos dados digitados.

**2. (Alternativa)** Antes de processar dados de um formulário, o que o sistema geralmente faz?
- a) Validar se os dados estão completos e em formato aceitável ✅
- b) Enviar os dados direto ao banco sem checagem
- c) Gerar um ID aleatório para cada campo
- d) Comparar com a versão anterior do formulário no navegador

> **Dica:** Validação evita gravar lixo ou seguir fluxo inválido.

**3. (Alternativa)** O que acontece quando uma variável é 'declarada'?
- a) Reservar um espaço para armazenar um valor que pode ser usado depois ✅
- b) Imprimir o valor na tela automaticamente
- c) Registrar o nome em um log de auditoria
- d) Transformar o valor em uma função executável

> **Dica:** Variável = nome + espaço para guardar dado.

**4. (Alternativa)** Em um sistema, onde os dados ficam armazenados de forma persistente?
- a) Em banco de dados, arquivo ou outro armazenamento persistente ✅
- b) Somente na memória RAM enquanto o programa roda
- c) No cache do navegador exclusivamente, sem servidor
- d) Em variáveis que somem ao atualizar a página

> **Dica:** Persistente = sobrevive ao fechar o programa ou a aba.

**5. (Alternativa)** Quando uma função é 'chamada', o que ocorre?
- a) O bloco de instruções da função é executado naquele momento ✅
- b) A função é renomeada para o nome de quem chamou
- c) O programa salta para o final do arquivo
- d) Os parâmetros são descartados antes de entrar na função

> **Dica:** Chamar função = executar o código que ela encapsula.

**6. (Alternativa)** Após validar dados, se forem inválidos, o que o programa deve fazer?
- a) Informar o usuário sobre o problema e impedir o prosseguimento inválido ✅
- b) Salvar parcialmente os campos válidos sem avisar
- c) Tentar corrigir automaticamente sem feedback
- d) Ignorar os campos inválidos e continuar o fluxo

> **Dica:** O usuário precisa saber o que corrigir.

**7. (Dissertativa — CONECTADA)** Descreva passo a passo o que o programa faz, internamente, quando o usuário clica em 'Entrar' na tela de login.

> **Dica:** Captura → busca no banco → compara senha → sessão ou erro.

> **Resposta:**
> 1) Captura o valor digitado no campo de email e o armazena em uma variável. 2) Captura o valor digitado no campo de senha em outra variável. 3) Acessa o banco de dados procurando um registro cujo email corresponda ao digitado. 4) Se encontrar, compara a senha armazenada com a senha digitada. 5) Se conferir, autoriza a autenticação e cria uma sessão para o usuário. 6) Caso contrário, retorna uma mensagem de erro genérica.

**8. (Dissertativa)** Imagine um formulário de cadastro de produto. Descreva o fluxo desde o clique em 'Salvar' até o produto aparecer na lista.

> **Dica:** Captura, valida, persiste, atualiza a lista na interface.

> **Resposta:**
> Ao clicar em 'Salvar', o programa captura os dados (nome, preço, quantidade), valida-os (preço positivo, nome não vazio), envia para o servidor, que insere o produto no banco. Depois, a lista de produtos é recarregada (ou o novo item é adicionado dinamicamente) para que apareça na tela.

**9. (Dissertativa)** Como funciona internamente um contador de visitas em um site? Descreva o fluxo.

> **Dica:** Lê valor salvo → incrementa → salva de novo → exibe.

> **Resposta:**
> Quando uma página é carregada, o servidor lê o valor atual do contador (armazenado em banco/arquivo), incrementa em 1, salva o novo valor e envia esse número para ser exibido na página.

**10. (Dissertativa)** Descreva o que acontece passo a passo quando um usuário pesquisa por uma palavra em um site.

> **Dica:** Texto digitado → consulta → resultados → renderização.

> **Resposta:**
> O usuário digita a palavra e clica em 'pesquisar'. O programa captura o texto, envia ao servidor, que percorre o banco de dados procurando registros que contenham aquele termo. Os resultados são retornados ao navegador, que os exibe em uma lista para o usuário.

### Bloco 4 (Fácil) — Código

*Implementação real em Python*

**1. (Alternativa)** Qual a forma correta de criar uma variável em Python que guarda o número 10?
- a) var x = 10
- b) x = 10 ✅
- c) int x = 10
- d) 10 = x

> **Dica:** Em Python, atribuição usa = sem declarar tipo antes.

**2. (Alternativa)** Como imprimir 'Olá' na tela em Python?
- a) echo("Olá")
- b) print("Olá") ✅
- c) console.log("Olá")
- d) printf("Olá")

> **Dica:** A função de saída padrão em Python começa com 'pr'.

**3. (Alternativa)** Qual o operador de comparação para 'igual a' em Python?
- a) =
- b) == ✅
- c) ===
- d) !=

> **Dica:** Um = atribui; dois == comparam igualdade.

**4. (Alternativa)** Como receber uma entrada do usuário pelo teclado em Python?
- a) input() ✅
- b) read()
- c) scan()
- d) get()

> **Dica:** Função built-in que lê texto do teclado.

**5. (Alternativa)** O que retorna len("python") em Python?
- a) 6 ✅
- b) A primeira letra
- c) A string invertida
- d) Um erro

> **Dica:** Conta caracteres; 'python' tem 6 letras.

**6. (Alternativa)** Qual a sintaxe correta de um if em Python?
- a) if x > 5 then:
- b) if x > 5: ✅
- c) if x > 5;
- d) if x > 5 {}

> **Dica:** Python usa dois pontos após a condição, sem chaves.

**7. (Dissertativa — CONECTADA)** Escreva um código Python simples que peça email e senha ao usuário e verifique se correspondem a dados fixos (mock). Imprima 'Login efetuado' ou 'Credenciais inválidas'.

> **Dica:** input() duas vezes, compare com == e use if/else.

> **Resposta:**
> ```python
email_correto = "user@email.com"
senha_correta = "1234"

email = input("Email: ")
senha = input("Senha: ")

if email == email_correto and senha == senha_correta:
    print("Login efetuado")
else:
    print("Credenciais inválidas")
```

**8. (Dissertativa)** Escreva um código que peça a idade do usuário e diga se ele é maior ou menor de idade.

> **Dica:** int(input(...)) e compare com 18.

> **Resposta:**
> ```python
idade = int(input("Idade: "))
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")
```

**9. (Dissertativa)** Escreva um código que receba dois números e imprima o maior.

> **Dica:** Dois inputs, if a > b imprime a, senão b.

> **Resposta:**
> ```python
a = float(input("Número 1: "))
b = float(input("Número 2: "))
if a > b:
    print(a)
else:
    print(b)
```

**10. (Dissertativa)** Escreva um código que imprima os números de 1 a 10.

> **Dica:** for i in range(1, 11): print(i)

> **Resposta:**
> ```python
for i in range(1, 11):
    print(i)
```

---

## FASE 2 — MÉDIO (Tema conectado: Carrinho de Compras)

### Bloco 1 (Médio) — Fluxo de UX

*O que o usuário vê e faz na interface*

**1. (Alternativa)** Em um e-commerce, onde o usuário tipicamente vê os itens que pretende comprar?
- a) Na página de detalhes de cada produto
- b) No carrinho ou sacola de compras ✅
- c) No histórico de pedidos já entregues
- d) Na lista de desejos (wishlist)

> **Dica:** É a área de revisão antes de pagar, não o pedido antigo.

**2. (Alternativa)** O que geralmente acontece quando o usuário clica em 'Adicionar ao carrinho'?
- a) O item entra no carrinho e aparece feedback visual (ícone, toast) ✅
- b) O usuário é levado direto ao pagamento sem revisar
- c) O produto some da vitrine para todos os clientes
- d) Abre obrigatoriamente a página de avaliações

> **Dica:** Adicionar ≠ finalizar compra; o usuário ainda pode continuar navegando.

**3. (Alternativa)** O que o usuário normalmente consegue fazer na página do carrinho?
- a) Alterar quantidade ou remover itens ✅
- b) Editar a ficha técnica do produto no catálogo
- c) Mudar o CNPJ e razão social da loja
- d) Moderar comentários de outros clientes

> **Dica:** O carrinho é para revisar a compra, não administrar o catálogo.

**4. (Alternativa)** Antes da finalização da compra, qual etapa é comum?
- a) Revisar endereço, frete e forma de pagamento ✅
- b) Cadastrar novos produtos no estoque
- c) Configurar o tema visual do site
- d) Aprovar devoluções de outros usuários

> **Dica:** Checkout = entrega + pagamento + confirmação.

**5. (Alternativa)** O que o usuário pode fazer se mudar de ideia sobre um item no carrinho?
- a) Remover o item ou ajustar a quantidade ✅
- b) Abandonar o carrinho e criar uma nova conta
- c) Esperar o item expirar sozinho sem aviso
- d) Comprar obrigatoriamente o dobro para compensar

> **Dica:** O carrinho é flexível até o momento do pagamento.

**6. (Alternativa)** Em qual etapa o usuário tipicamente vê o valor total final (com frete) da compra?
- a) Durante o checkout, após informar CEP ou endereço ✅
- b) Na vitrine, antes mesmo de abrir o produto
- c) Somente no email de confirmação dias depois
- d) No painel administrativo de logística

> **Dica:** Frete depende do destino — isso entra no checkout.

**7. (Dissertativa — CONECTADA)** Descreva a jornada do usuário desde encontrar um produto até finalizar a compra em um e-commerce.

> **Dica:** Produto → carrinho → checkout → pagamento → confirmação.

> **Resposta:**
> O usuário pesquisa ou navega pelos produtos, clica no item desejado para ver detalhes, clica em 'Adicionar ao carrinho', continua comprando ou vai para o carrinho, revisa os itens e quantidades, clica em 'Finalizar compra', informa endereço de entrega, escolhe forma de pagamento, confirma o pedido e recebe a confirmação.

**8. (Dissertativa)** Como você projetaria a interface do carrinho para que o usuário veja claramente o que está comprando?

> **Dica:** Imagem, nome, preço, quantidade, subtotal e total claro.

> **Resposta:**
> Listaria cada produto com imagem, nome, preço unitário, controle de quantidade (botões + e -), subtotal por item, e ao final um resumo com subtotal geral, frete e total. Botões claros para 'remover', 'continuar comprando' e 'finalizar compra'.

**9. (Dissertativa)** O que deve acontecer na interface se o estoque do produto acabar enquanto o usuário está com ele no carrinho?

> **Dica:** Aviso visível e bloqueio ou ajuste de quantidade.

> **Resposta:**
> O sistema deve avisar o usuário com uma mensagem destacada no carrinho dizendo que o produto está indisponível, ou ajustar automaticamente a quantidade ao estoque disponível. Não deve permitir prosseguir com o item indisponível.

**10. (Dissertativa)** Descreva a UX ideal para cupons de desconto em um e-commerce.

> **Dica:** Campo de cupom, feedback imediato e desconto no resumo.

> **Resposta:**
> Deve haver um campo visível no carrinho para inserir o cupom. Ao aplicar, mostrar feedback imediato (válido/inválido), exibir o desconto no resumo de valores, permitir remover o cupom e indicar claramente quanto foi descontado do total.

### Bloco 2 (Médio) — Lógica Básica

*Como o programa deve pensar (sem código)*

**1. (Alternativa)** Para calcular o valor total de um carrinho, o que fazemos?
- a) Somar (preço × quantidade) de cada item ✅
- b) Usar o preço do item mais caro vezes a quantidade total de linhas
- c) Calcular a média dos preços unitários
- d) Somar apenas preços unitários, ignorando quantidade

> **Dica:** Cada linha tem preço e quantidade — multiplique antes de somar.

**2. (Alternativa)** Para verificar se um número está em uma lista, o que fazemos?
- a) Percorrer a lista comparando cada elemento com o alvo ✅
- b) Ordenar a lista e assumir que estará no meio
- c) Verificar só o primeiro e o último elemento
- d) Multiplicar todos os elementos e ver se o resultado é zero

> **Dica:** Busca linear: teste item a item.

**3. (Alternativa)** Para descobrir o segundo maior valor em uma lista, o que fazemos?
- a) Ordenar (ou rastrear) e identificar o segundo maior valor ✅
- b) Pegar o elemento do índice 1 sem ordenar
- c) Subtrair o menor do maior
- d) Usar a média entre o maior e o menor

> **Dica:** Segundo maior ≠ segundo da lista original sem ordenar.

**4. (Alternativa)** Para contar quantas vezes um item aparece em uma lista, o que fazemos?
- a) Percorrer incrementando um contador a cada correspondência ✅
- b) Dividir o tamanho da lista pelo valor buscado
- c) Verificar apenas se está no início ou no fim
- d) Contar só ocorrências consecutivas após ordenar

> **Dica:** Cada match incrementa um contador.

**5. (Alternativa)** Para inverter uma string, o que fazemos conceitualmente?
- a) Construir nova sequência lendo de trás para frente ✅
- b) Trocar apenas a primeira e a última letra
- c) Ordenar os caracteres em ordem alfabética
- d) Repetir a string duas vezes lado a lado

> **Dica:** Inverter = ordem reversa completa.

**6. (Alternativa)** Para verificar se uma senha é 'forte', quais critérios típicos verificamos?
- a) Comprimento mínimo, mistura de tipos de caracteres e ausência de padrões fracos ✅
- b) Qualquer senha com mais de 4 caracteres
- c) Senha igual ao email para facilitar lembrar
- d) Apenas letras minúsculas para evitar erro de Caps Lock

> **Dica:** Força vem de tamanho + variedade + imprevisibilidade.

**7. (Dissertativa — CONECTADA)** Conceitualmente, como o sistema calcula o total de um carrinho com vários itens em quantidades diferentes?

> **Dica:** Subtotal por item, soma, depois frete/desconto se houver.

> **Resposta:**
> O sistema percorre cada item do carrinho, multiplicando o preço unitário pela quantidade desejada, e soma esses subtotais para obter o total. Se houver desconto ou frete, eles são aplicados sobre esse valor final.

**8. (Dissertativa)** Explique a lógica para encontrar o produto mais caro de uma lista.

> **Dica:** Guarde um 'recorde' enquanto percorre a lista.

> **Resposta:**
> Assumimos que o primeiro produto é o mais caro. Percorremos os demais e, para cada um, comparamos com o atual 'mais caro'. Se for maior, atualizamos. No fim, temos o produto mais caro.

**9. (Dissertativa)** Descreva a lógica para aplicar um desconto percentual sobre um valor.

> **Dica:** Desconto = valor × (percentual/100); subtraia do total.

> **Resposta:**
> Multiplicar o valor pelo percentual dividido por 100 para obter o desconto, e em seguida subtrair esse desconto do valor original. Alternativamente, multiplicar o valor por (1 − percentual/100).

**10. (Dissertativa)** Como você verificaria, sem código, se um carrinho está vazio?

> **Dica:** Lista vazia = zero itens ou coleção sem elementos.

> **Resposta:**
> Verificar se a quantidade de itens no carrinho é zero (ou se a estrutura que guarda os itens não contém nenhum elemento).

### Bloco 3 (Médio) — Fluxo de Funcionamento

*O que o código deve fazer nos bastidores*

**1. (Alternativa)** Onde geralmente fica armazenado o carrinho de um usuário enquanto ele navega?
- a) Sessão, cookie ou banco vinculado ao usuário/dispositivo ✅
- b) Apenas no texto visível da página atual
- c) Somente na memória do CDN de imagens
- d) Em variável perdida ao mudar de aba, sempre

> **Dica:** O carrinho precisa sobreviver enquanto o usuário navega.

**2. (Alternativa)** Ao adicionar um item ao carrinho, o que o programa faz se o item já existir?
- a) Incrementa a quantidade do item já existente ✅
- b) Cria sempre uma nova linha duplicada
- c) Substitui o item anterior pelo novo preço
- d) Bloqueia a ação e exige esvaziar o carrinho

> **Dica:** Mesmo produto = mesma linha, quantidade maior.

**3. (Alternativa)** Antes de finalizar a compra, o que o sistema deve verificar?
- a) Estoque, preços atualizados e dados obrigatórios de entrega/pagamento ✅
- b) Apenas a cor favorita do tema do usuário
- c) Se o navegador está em modo escuro
- d) Quantidade de páginas visitadas na sessão

> **Dica:** Checkout falha se não houver estoque ou dados de entrega.

**4. (Alternativa)** Como o sistema mantém o usuário logado entre páginas?
- a) Token ou sessão em cookie / armazenamento seguro ✅
- b) Repetir login a cada clique sem exceção
- c) Guardar senha em texto plano no navegador
- d) Identificar o usuário apenas pelo endereço IP

> **Dica:** Sessão autenticada persiste entre requisições.

**5. (Alternativa)** O que deve acontecer ao remover um item do carrinho?
- a) Remove a entrada e recalcula os totais do carrinho ✅
- b) Zera obrigatoriamente todo o carrinho
- c) Mantém o item com quantidade zero visível
- d) Encerra a sessão do usuário

> **Dica:** Remover um item atualiza a lista e os valores.

**6. (Alternativa)** Quando o pagamento é confirmado, o que ocorre internamente?
- a) Criar pedido, baixar estoque, limpar carrinho e notificar ✅
- b) Apenas exibir mensagem sem gravar o pedido
- c) Limpar o carrinho mas não registrar a venda
- d) Congelar a conta até revisão manual

> **Dica:** Pagamento aprovado = pedido real + estoque atualizado.

**7. (Dissertativa — CONECTADA)** Descreva o fluxo interno do sistema desde o usuário clicar em 'Adicionar ao carrinho' até o item aparecer no resumo do carrinho.

> **Dica:** Identifica usuário/produto → atualiza carrinho → recalcula → UI.

> **Resposta:**
> Ao clicar em 'Adicionar ao carrinho', o sistema identifica o produto e o usuário. Verifica se o produto já está no carrinho desse usuário: se sim, incrementa a quantidade; se não, insere uma nova entrada. Atualiza o registro do carrinho (na sessão ou no banco). Recalcula o subtotal. Retorna ao frontend, que atualiza o ícone do carrinho e exibe confirmação visual.

**8. (Dissertativa)** Descreva como o sistema processa o checkout, do clique em 'Finalizar compra' até a tela de 'Pedido confirmado'.

> **Dica:** Validar → pagar → criar pedido → estoque → limpar carrinho.

> **Resposta:**
> O sistema valida que o usuário está logado e que o carrinho não está vazio. Verifica disponibilidade dos itens em estoque. Coleta endereço e forma de pagamento. Envia os dados ao gateway de pagamento. Se aprovado, cria um registro de pedido no banco, decrementa o estoque, limpa o carrinho do usuário e redireciona para a tela de confirmação com os detalhes do pedido.

**9. (Dissertativa)** Como funciona internamente o cálculo de frete baseado em CEP?

> **Dica:** CEP + peso/dimensões → API/tabela de frete → total atualizado.

> **Resposta:**
> O sistema captura o CEP digitado e faz uma consulta a um serviço de cálculo de frete (API externa ou tabela interna), enviando origem, destino, peso e dimensões dos produtos. Recebe o valor e o prazo de entrega e os mostra ao usuário, atualizando o total da compra.

**10. (Dissertativa)** Descreva o fluxo de um sistema de avaliação de produtos (1 a 5 estrelas) após uma compra.

> **Dica:** Validar compra → salvar nota → recalcular média do produto.

> **Resposta:**
> Após o usuário receber o produto, o sistema permite avaliá-lo. Quando ele clica em uma estrela, o frontend envia a nota e o ID do produto ao backend. O backend valida que o usuário comprou o produto, registra a avaliação no banco (ligada ao usuário e ao produto), recalcula a média de avaliações do produto e atualiza a página.

### Bloco 4 (Médio) — Código

*Implementação real em Python*

**1. (Alternativa)** Como criar uma lista em Python com os números 1, 2 e 3?
- a) [1, 2, 3] ✅
- b) (1, 2, 3)
- c) {1, 2, 3}
- d) 1, 2, 3

> **Dica:** Lista usa colchetes [ ].

**2. (Alternativa)** Qual o resultado de len([1, 2, 3, 4])?
- a) 3
- b) 4 ✅
- c) 10
- d) 1

> **Dica:** len() retorna quantidade de elementos.

**3. (Alternativa)** Como percorrer uma lista chamada 'frutas' imprimindo cada fruta?
- a) for fruta in frutas: print(fruta) ✅
- b) for fruta of frutas { print(fruta) }
- c) foreach fruta in frutas: print(fruta)
- d) while frutas: print(fruta)

> **Dica:** for item in lista: é o padrão Python.

**4. (Alternativa)** O que faz lista.append(5) em Python?
- a) Remove o 5 da lista
- b) Adiciona o 5 ao final da lista ✅
- c) Insere o 5 no início
- d) Conta quantos 5 existem

> **Dica:** append adiciona ao final.

**5. (Alternativa)** Qual a saída de print(2 + 3 * 4)?
- a) 20
- b) 14 ✅
- c) 24
- d) 9

> **Dica:** Multiplicação tem prioridade sobre soma.

**6. (Alternativa)** Como definir uma função 'soma' que recebe dois números e retorna a soma?
- a) def soma(a, b): return a + b ✅
- b) function soma(a, b) { return a + b }
- c) def soma(a, b) -> a + b
- d) soma = (a, b) => a + b

> **Dica:** def nome(params): return ...

**7. (Dissertativa — CONECTADA)** Escreva um código Python que represente um carrinho como uma lista de dicionários (com 'nome', 'preco', 'quantidade') e calcule o total.

> **Dica:** Lista de dicts, loop somando preco * quantidade.

> **Resposta:**
> ```python
carrinho = [
    {"nome": "Caneta", "preco": 2.50, "quantidade": 3},
    {"nome": "Caderno", "preco": 15.0, "quantidade": 2},
]

total = 0
for item in carrinho:
    total += item["preco"] * item["quantidade"]

print(f"Total: R$ {total:.2f}")
```

**8. (Dissertativa)** Escreva uma função que receba uma lista de números e retorne o maior.

> **Dica:** Guarde o primeiro como referência e compare no loop.

> **Resposta:**
> ```python
def maior(lista):
    maior_val = lista[0]
    for n in lista[1:]:
        if n > maior_val:
            maior_val = n
    return maior_val
```

**9. (Dissertativa)** Escreva um código que conte quantas vogais existem em uma string informada pelo usuário.

> **Dica:** Loop na string, if char in 'aeiou'.

> **Resposta:**
> ```python
texto = input("Digite uma frase: ")
vogais = "aeiouAEIOU"
contador = 0

for c in texto:
    if c in vogais:
        contador += 1

print(contador)
```

**10. (Dissertativa)** Escreva uma função que receba uma lista e retorne uma nova lista apenas com os números pares.

> **Dica:** List comprehension com if n % 2 == 0.

> **Resposta:**
> ```python
def pares(lista):
    return [n for n in lista if n % 2 == 0]
```

---

## FASE 3 — DIFÍCIL (Tema conectado: Postagem em Rede Social)

### Bloco 1 (Difícil) — Fluxo de UX

*O que o usuário vê e faz na interface*

**1. (Alternativa)** Em uma rede social, qual a forma mais comum do usuário compartilhar uma ideia?
- a) Pela área de criar publicação ou compositor de post ✅
- b) Pelo menu de privacidade da conta
- c) Pela central de anúncios pagos
- d) Pela página de estatísticas do perfil

> **Dica:** Compartilhar conteúdo público ≠ configurar conta ou ver métricas.

**2. (Alternativa)** Ao clicar em uma postagem, o que tipicamente acontece?
- a) Abre detalhes com comentários e opções de interação ✅
- b) Inicia download automático de toda a mídia
- c) Abre o modo de edição do perfil do autor
- d) Silencia o autor sem pedir confirmação

> **Dica:** Clique em post costuma expandir contexto e conversa.

**3. (Alternativa)** O que tipicamente acontece quando você dá 'curtir' em uma postagem?
- a) O contador incrementa e o estado visual do botão muda ✅
- b) A postagem é republicada no feed de todos instantaneamente
- c) Um comentário automático é postado em seu nome
- d) A postagem some apenas da sua timeline local

> **Dica:** Curtir é uma interação leve com feedback imediato.

**4. (Alternativa)** O que é esperado em um feed de postagens?
- a) Sequência de cards com autor, conteúdo e ações de interação ✅
- b) Editor SQL para consultar o banco diretamente
- c) Painel de deploy do servidor da aplicação
- d) Configuração de DNS do domínio

> **Dica:** Feed = consumo de conteúdo, não ferramentas de infraestrutura.

**5. (Alternativa)** O que melhora a UX em postagens com muitos comentários?
- a) Carregar comentários por partes ('ver mais') ou paginar ✅
- b) Renderizar todos os comentários de uma vez sempre
- c) Ocultar comentários anteriores à data da postagem
- d) Exigir scroll infinito sem nenhum controle

> **Dica:** Performance e legibilidade pedem carregamento gradual.

**6. (Alternativa)** Ao mencionar (@) alguém em uma postagem, qual deve ser a experiência?
- a) Autocomplete de perfis conforme o usuário digita ✅
- b) Bloquear publicação até marcar cinco pessoas
- c) Converter toda menção em hashtag automaticamente
- d) Enviar convite de amizade em vez de notificar

> **Dica:** @ costuma disparar sugestões de usernames.

**7. (Dissertativa — CONECTADA)** Descreva a jornada do usuário desde o desejo de compartilhar uma foto até a postagem aparecer no feed dos seguidores.

> **Dica:** Criar → editar mídia → legenda → publicar → feed dos seguidores.

> **Resposta:**
> O usuário clica em 'Nova publicação', seleciona uma foto do dispositivo, faz ajustes (cortes, filtros), escreve uma legenda, opcionalmente adiciona localização ou tags, e clica em 'Publicar'. Recebe um feedback de sucesso e a postagem aparece em seu perfil. Os seguidores, ao acessarem seu feed, veem a nova publicação na ordem definida pelo algoritmo.

**8. (Dissertativa)** Como você projetaria a UX de notificações para evitar incômodo mas garantir engajamento?

> **Dica:** Agrupar, personalizar tipos e respeitar horários.

> **Resposta:**
> Agruparia notificações similares (ex: 'Fulano e mais 3 curtiram'), permitiria personalização (quais tipos receber), priorizaria notificações importantes (mensagens diretas, menções), evitaria notificações em horários inadequados e ofereceria modo 'não perturbe'.

**9. (Dissertativa)** Imagine que um usuário cria uma postagem ofensiva. Qual deve ser o fluxo de denúncia na interface?

> **Dica:** Menu da postagem → denunciar → motivo → confirmação.

> **Resposta:**
> O usuário clica nos três pontos da postagem, seleciona 'Denunciar', escolhe um motivo de uma lista (spam, ofensivo, falso) e opcionalmente adiciona detalhes. Confirma a denúncia e recebe um feedback de 'denúncia enviada'. A postagem é marcada para análise e o denunciante pode acompanhar o status.

**10. (Dissertativa)** Descreva a UX ideal para edição de uma postagem já publicada.

> **Dica:** Editar in-place, marcar '(editado)', preservar interações.

> **Resposta:**
> Ao clicar em 'editar', o usuário vê o conteúdo atual em modo editável. Faz as alterações e salva. A postagem passa a mostrar uma marcação visível '(editado)' com timestamp. Curtidas e comentários anteriores são preservados. A edição deve ser intuitiva e rápida.

### Bloco 2 (Difícil) — Lógica Básica

*Como o programa deve pensar (sem código)*

**1. (Alternativa)** Para ordenar postagens por relevância, do que conceitualmente precisamos?
- a) Definir critérios (recência, engajamento) e ordenar por score ✅
- b) Mostrar apenas a postagem mais antiga
- c) Embaralhar aleatoriamente a cada visualização
- d) Ordenar somente pelo tamanho do texto

> **Dica:** Relevância combina sinais — não é aleatório.

**2. (Alternativa)** Para implementar paginação, o que precisamos calcular?
- a) Calcular offset/limit com página atual e tamanho da página ✅
- b) Sempre retornar todos os registros de uma vez
- c) Usar apenas a cor de fundo para indicar página
- d) Multiplicar o ID pelo número da página

> **Dica:** Página N com K itens por página → fatia do conjunto.

**3. (Alternativa)** Como saber se um usuário já curtiu uma postagem?
- a) Verificar se o par usuário+postagem existe no conjunto de curtidas ✅
- b) Comparar total de curtidas com número de seguidores
- c) Checar o horário do último login do usuário
- d) Ver a cor do ícone no CSS global

> **Dica:** É uma relação entre quem curtiu e qual post — não um total global.

**4. (Alternativa)** Para detectar menções (@usuario), o que verificamos?
- a) Buscar padrão '@' seguido de caracteres válidos de username ✅
- b) Considerar qualquer palavra escrita em maiúscula
- c) Analisar apenas hashtags com #
- d) Detectar endereços de email completos no texto

> **Dica:** Menção começa com @ e um identificador.

**5. (Alternativa)** Para calcular trends/tendências, conceitualmente o que fazemos?
- a) Contar frequência de termos/hashtags em janela de tempo e ranquear ✅
- b) Somar todos os likes da plataforma
- c) Listar usuários que trocaram a foto de perfil
- d) Ordenar contas apenas por data de criação

> **Dica:** Trend = o que mais apareceu recentemente.

**6. (Alternativa)** Para recomendar conteúdo a um usuário, o que consideramos?
- a) Combinar histórico de interesses, comportamento e perfis similares ✅
- b) Sugerir apenas contas criadas no mesmo dia
- c) Ordenar alfabeticamente por nome de usuário
- d) Repetir a mesma postagem para todos os usuários

> **Dica:** Recomendação personalizada usa sinais do usuário.

**7. (Dissertativa — CONECTADA)** Descreva a lógica para gerar o 'feed' de um usuário: como o sistema decide o que mostrar?

> **Dica:** Buscar fontes → filtrar → pontuar → ordenar → paginar.

> **Resposta:**
> O sistema busca as postagens das pessoas que o usuário segue, possivelmente combinadas com recomendações. Aplica filtros (não mostrar bloqueados, conteúdo apropriado). Calcula um score para cada postagem com base em recência, número de interações e relevância para o usuário. Ordena pelas pontuações maiores e retorna paginado.

**8. (Dissertativa)** Explique a lógica para detectar spam em comentários.

> **Dica:** Repetição, links, palavras-chave, contas novas — score de spam.

> **Resposta:**
> Aplicar regras heurísticas: muitos comentários idênticos do mesmo usuário em curto tempo, presença de muitos links, palavras-chave conhecidas de spam, conta recém-criada com comportamento incomum. Cada comentário recebe um score; acima de um limiar, é marcado como spam.

**9. (Dissertativa)** Como você raciocinaria sobre limitar tentativas de login para evitar ataques de força bruta?

> **Dica:** Contador por IP/usuário, bloqueio temporário, CAPTCHA.

> **Resposta:**
> Manter um contador por usuário/IP de tentativas falhas. Após N tentativas em um intervalo de tempo, bloquear temporariamente, exibir CAPTCHA ou aplicar cooldown progressivo (1min, 5min, 30min). O contador é zerado após login bem-sucedido.

**10. (Dissertativa)** Imagine que você precisa implementar 'hashtags em tendência nas últimas 24 horas'. Qual a lógica?

> **Dica:** Filtrar 24h → extrair hashtags → contar → top N.

> **Resposta:**
> Filtrar todas as postagens das últimas 24 horas. Para cada uma, extrair as hashtags. Contar a frequência de cada hashtag nesse período. Ordenar por contagem decrescente. Retornar as N hashtags mais frequentes. Opcionalmente, comparar com o período anterior para destacar crescimento real.

### Bloco 3 (Difícil) — Fluxo de Funcionamento

*O que o código deve fazer nos bastidores*

**1. (Alternativa)** Quando um usuário publica uma postagem, o que o sistema faz primeiro?
- a) Validar, persistir o post com metadados (autor, timestamp) ✅
- b) Enviar push para todos os dispositivos antes de salvar
- c) Sobrescrever a última postagem do autor sem avisar
- d) Aguardar aprovação manual obrigatória em todo conteúdo

> **Dica:** Primeiro grava com segurança; distribuição vem depois.

**2. (Alternativa)** Como o sistema atualiza o feed dos seguidores quando alguém posta?
- a) Fan-out (push para timelines) ou fan-in na leitura (pull) ✅
- b) Email em massa para cada seguidor sempre
- c) Copiar a postagem para planilha compartilhada
- d) Atualizar apenas o cache do perfil do autor

> **Dica:** Push escreve nos feeds; pull consulta ao abrir.

**3. (Alternativa)** Ao curtir uma postagem, internamente o que acontece?
- a) Registrar relação usuário-post e atualizar contador de forma consistente ✅
- b) Duplicar a postagem inteira no banco
- c) Alterar o texto original da publicação
- d) Mudar só o ícone no cliente, sem persistir

> **Dica:** Curtida é um registro + contagem, não uma cópia do post.

**4. (Alternativa)** Como o sistema lida com uploads grandes de imagens/vídeos?
- a) Upload em partes, compressão e geração de variantes otimizadas ✅
- b) Upload único sem limite nem tratamento de timeout
- c) Rejeitar qualquer arquivo acima de 1 KB
- d) Armazenar apenas em sessionStorage do navegador

> **Dica:** Arquivos grandes precisam de estratégia de envio e otimização.

**5. (Alternativa)** O que é importante ao excluir uma postagem com muitos comentários e curtidas?
- a) Remover ou anonimizar dados dependentes (cascata ou soft delete) ✅
- b) Deixar comentários órfãos apontando para ID inexistente
- c) Transferir comentários para outro autor aleatório
- d) Excluir apenas a mídia e manter texto inacessível

> **Dica:** Dados ligados ao post precisam de tratamento coerente.

**6. (Alternativa)** Como o sistema gerencia notificações em tempo real?
- a) WebSocket, SSE ou push com fallback de polling ✅
- b) Exigir refresh manual da página sempre
- c) Enfileirar e enviar notificações apenas uma vez por dia
- d) Depender só de email SMTP síncrono

> **Dica:** Tempo real = canal persistente ou polling inteligente.

**7. (Dissertativa — CONECTADA)** Descreva o fluxo interno do sistema desde o usuário clicar em 'Publicar' até a postagem aparecer nos feeds dos seguidores.

> **Dica:** Validar → processar mídia → salvar → fan-out → notificar menções.

> **Resposta:**
> 1) O frontend envia os dados (texto, mídia, autor) ao backend. 2) O backend valida e processa a mídia (compressão, thumbnails). 3) Cria um registro na tabela de postagens com timestamp, autor_id e url da mídia. 4) Atualiza índices e caches relacionados. 5) Em modelo 'push', insere a referência da postagem nos feeds dos seguidores; em 'pull', os feeds buscam ao serem acessados. 6) Dispara notificações para usuários mencionados. 7) Retorna sucesso ao frontend, que adiciona a postagem otimisticamente ao topo do perfil do autor.

**8. (Dissertativa)** Descreva como funciona internamente um sistema de busca de usuários por nome.

> **Dica:** Debounce → índice de nomes → ranking → sugestões na UI.

> **Resposta:**
> O frontend envia o texto digitado a cada N caracteres (com debounce). O backend consulta um índice (tipicamente um trie, índice invertido ou um serviço como Elasticsearch) que contém nomes/usernames. Retorna os resultados mais relevantes (correspondência de prefixo, similaridade), priorizando perfis populares ou seguidos pelo usuário. O frontend exibe as sugestões em uma lista.

**9. (Dissertativa)** Como funciona o controle de privacidade em postagens (público / somente amigos / privado)?

> **Dica:** Campo visibilidade + checagem de relação amizade/autor.

> **Resposta:**
> Cada postagem tem um campo de visibilidade. Quando alguém tenta vê-la, o sistema verifica: se 'público', libera; se 'amigos', verifica se há uma relação de amizade entre o solicitante e o autor; se 'privado', apenas o autor pode ver. Essa verificação ocorre em cada consulta, ou as queries já filtram diretamente por relacionamento.

**10. (Dissertativa)** Descreva o fluxo de moderação automática de conteúdo após uma postagem.

> **Dica:** Pipeline NLP/imagem → fila de revisão → liberar ou ocultar.

> **Resposta:**
> Após salvar a postagem, ela passa por uma pipeline: análise de texto por NLP buscando palavras proibidas, análise de imagem por modelos de ML (nudez, violência), verificação de spam. Conteúdos suspeitos vão para uma fila de revisão humana e podem ser temporariamente ocultos. Conteúdos limpos são liberados. O autor é notificado caso algo seja removido.

### Bloco 4 (Difícil) — Código

*Implementação real em Python*

**1. (Alternativa)** Qual o resultado de list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))?
- a) [1, 3]
- b) [2, 4] ✅
- c) [1, 2, 3, 4]
- d) []

> **Dica:** filter mantém elementos onde a função retorna True.

**2. (Alternativa)** O que faz sorted(lista, key=lambda x: x['idade'])?
- a) Ordena a lista de dicionários pelo campo 'idade' ✅
- b) Soma as idades
- c) Inverte a lista
- d) Lança um erro

> **Dica:** sorted(..., key=...) define o critério de ordenação.

**3. (Alternativa)** Como capturar exceções em Python?
- a) try: ... except: ... ✅
- b) catch { ... }
- c) error: ...
- d) if error then ...

> **Dica:** try/except captura erros em Python.

**4. (Alternativa)** Qual o uso típico de um dicionário em Python?
- a) Estrutura chave-valor ✅
- b) Apenas para guardar listas
- c) Apenas para inteiros
- d) Para desenhar gráficos

> **Dica:** dict mapeia chave → valor.

**5. (Alternativa)** O que 'with open("arquivo.txt") as f:' garante?
- a) O arquivo é fechado automaticamente ao final do bloco ✅
- b) Não dá erro nunca
- c) Cria um arquivo novo sempre
- d) Lê de um arquivo online

> **Dica:** with garante fechamento do arquivo.

**6. (Alternativa)** Qual o objetivo de um decorator em Python (@decorator)?
- a) Modificar/estender o comportamento de uma função ✅
- b) Apenas decoração visual no código
- c) Renomear funções
- d) Comentar trechos de código

> **Dica:** @ envolve/complementa o comportamento de uma função.

**7. (Dissertativa — CONECTADA)** Escreva uma classe Python 'Postagem' com atributos (autor, texto, curtidas, comentarios) e métodos para curtir() e comentar(texto).

> **Dica:** class com __init__, curtidas=0, métodos que alteram estado.

> **Resposta:**
> ```python
class Postagem:
    def __init__(self, autor, texto):
        self.autor = autor
        self.texto = texto
        self.curtidas = 0
        self.comentarios = []

    def curtir(self):
        self.curtidas += 1

    def comentar(self, texto):
        self.comentarios.append(texto)
```

**8. (Dissertativa)** Escreva uma função que receba uma lista de postagens (dicionários com 'curtidas') e retorne as 3 mais curtidas.

> **Dica:** sorted(..., reverse=True)[:3]

> **Resposta:**
> ```python
def top_3(postagens):
    return sorted(postagens, key=lambda p: p['curtidas'], reverse=True)[:3]
```

**9. (Dissertativa)** Escreva uma função que receba uma string e retorne todas as hashtags (palavras iniciadas com #) encontradas.

> **Dica:** re.findall(r'#\w+', texto)

> **Resposta:**
> ```python
import re

def hashtags(texto):
    return re.findall(r'#\w+', texto)
```

**10. (Dissertativa)** Escreva uma função que receba uma lista de inteiros e retorne um dicionário com a frequência de cada número.

> **Dica:** freq[n] = freq.get(n, 0) + 1

> **Resposta:**
> ```python
def frequencia(lista):
    freq = {}
    for n in lista:
        freq[n] = freq.get(n, 0) + 1
    return freq
```

---

## Resumo das Conexões Implícitas

| Fase | Tema | Dissertativa conectada (questão 7) |
|------|------|-------------------------------------|
| Fácil | Sistema de Login | UX → Lógica → Fluxo → Código |
| Médio | Carrinho de Compras | UX → Lógica → Fluxo → Código |
| Difícil | Postagem em Rede Social | UX → Lógica → Fluxo → Código |
