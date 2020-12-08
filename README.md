# API para Desenvolvedores - apresentarei os Endpoints e sua explicação
A API pode ser acessada por meio da URL: https://api.lojasquare.com.br//v1/<endpoint>
Para conseguir acessar, é necessário informar no header o parâmetro "AUTHORIZATION" com a Key-API do servidor.

**GET - Lista de produtos para entregar**
- Endpoint: **queue/(usuário)**
- URI: **https://api.lojasquare.com.br//v1/queue/(player)**
- Obtem a lista de produtos para entregar a um respectivo usuário.

Para obter a lista de ordens de entrega de **TODOS** os players de uma única vez, use no parâmetro **"player"** um * .
Exemplo:
https://api.lojasquare.com.br//v1/queue/*

**PUT - Atualizar o status de uma ordem para Entregue:**
- Endpoint: **queue/(player)/(ID de Entrega)**
- Atualiza o status de uma entrega para Entregue.
<hr>

**GET - Lista de notícias**
- Endpoint: **noticias/(página)**
- URI: **https://api.lojasquare.com.br//v1/noticias/(página)**
- Obtem a lista de notícias postadas, em ordem decrescente.
<hr>

**GET - Lista de produtos**
- Endpoint: **produtos**
- Obtem a lista completa de todos os produtos.
- URI: **https://api.lojasquare.com.br//v1/produtos**
- Endpoint: **produtos/(página)**
- URI: **https://api.lojasquare.com.br//v1/produtos/(página)**
- Obtem a lista de produtos criados, em ordem de posição definida na hora de criar o produto.
<hr>

**GET - Info de produto X**
- Endpoint: **produto/(ID-do-Produto)**
- Obtem as informações de um produto específico
- URI: **https://api.lojasquare.com.br//v1/produto/(ID-do-Produto)**
<hr>

**GET - Lista da Equipe**
- Endpoint: **equipe**
- Obtem a lista de membros da equipe
- URI: **https://api.lojasquare.com.br//v1/equipe**
- Endpoint: **equipe/(cargo)**
- Obtem a lista de membros da equipe de um cargo específico **X**
- URI: **https://api.lojasquare.com.br//v1/equipe/(CARGO)**
<hr>

**GET - Lista de Categorias**
- Endpoint: **categorias**
- Obtem a lista de categorias da loja
- URI: **https://api.lojasquare.com.br//v1/categorias**
- Endpoint: **categorias/(ID-SubServidor)**
- Obtem a lista de categorias de um sub-servidor específico (Criado no Painel > Produtos > Servidores)
- URI: **https://api.lojasquare.com.br//v1/categorias/(ID-SubServidor)**
<hr>

**GET - Lista de SubServidores**
- Endpoint: **subservidores**
- Obtem a lista de categorias da loja
- URI: **https://api.lojasquare.com.br//v1/subservidores**
<hr>

**PUT - Validar Cupom X**
- Endpoint: **cupom/(CUPOM)**
- CUPOM = Cupom a ser validado.<br>
- Body: Lista de itens do carrinho, com os seguintes parâmetros:<br>
[<br>
		{
			"id_produto": 1111,
			"quantidade": 5
		},<br>
		{
			"id_produto": 2222,
			"quantidade": 2
		}<br>
]<br>
Exemplo de teste da API:<br>
![image](https://user-images.githubusercontent.com/56046755/83031275-bd0bb680-a00a-11ea-9f53-1554f495101d.png)<br>

Exemplo no código:<br>
![image](https://user-images.githubusercontent.com/56046755/83031451-f2b09f80-a00a-11ea-8062-7f60a6eebeee.png)<br>

- Obtem carrinho atualizado com os valores após aplicação do cupom.<br>
- URI: **https://api.lojasquare.com.br//v1/cupom/(CUPOM)**
<hr>

**GET - Transações**
- Endpoint: **transacoes**
- Obtem a lista de transações do servidor.
- URI: **https://api.lojasquare.com.br//v1/transacoes**
- Endpoint: **transacoes/topCompradores**
- Obtem a lista de top compradores do servidor.
- URI: **https://api.lojasquare.com.br//v1/transacoes/topCompradores**
<hr>

**POST - Checkout de Carrinho - DIFERENCIADO, USAR EM FORMULÁRIO**
- URI: **https://www.lojasquare.com.br/gateways/checkout2.php**
- Formato JSON dos produtos no carrinho: <br>
{ <br>
    "**ID_PRODUTO**": {
        "id_produto": "**ID_PRODUTO**",
        "quantidade": **QUANTIDADE_DO_PRODUTO_NO_CARRINHO**,
        "grupo": **GRUPO DO PRODUTO**
    } <br>
} <br>
- Parâmetros necessários:
° Inputs do tipo "hidden":
  - name="servidor"               | value: "Nome do Servidor"
  - name="carrinho"                     | value: "JSON dos produtos no carrinho"
  - name="player"                 | value: "Nick do player"
  - name="gateway"                | value: "Gateway escolhido"
    **OBS: Gateways válidos: "MercadoPago", "PayPal", "PagSeguro"**
  - name="cupomON"                | value: "Cupom utilizado".
    **OBS: Se o player não usar nenhum cupom, não precisa criar o input "cupomON".**
    
° Inputs do tipo "hidden" OPCIONAIS:
  - name="returnURL" 		  | value: "URL de Retorno ao finalizar uma compra com sucesso"
  - name="cancelURL"		  | value: "URL de Retorno ao obter um erro na compra"
  OBS: returnURL e cancelURL só serão passados se o gateway aceitar este tipo de parâmetro
<hr>
