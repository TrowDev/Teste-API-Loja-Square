const express   = require('express');
const cors      = require('cors');
const api       = require('./services/api');

const app       = express();

app.use(cors());
app.use(express.json());

app.listen(3333);

app.get('/', (req, res)=>{
    res.send('<h2>Endpoints API</h2>'+
    '<h4>'+
        '<a style="text-decoration: none;" href="/ordensEntrega">- Ordens Entrega</a><br>'+
        '<a style="text-decoration: none;" href="/noticias?pagina=1">- Lista de Notícias</a><br>'+
        '<a style="text-decoration: none;" href="/produtos">- Lista de Produtos</a><br>'+
        '<a style="text-decoration: none;" href="/produto?id=1268">- Info de Produto X</a><br>'+
        '<a style="text-decoration: none;" href="/equipe">- Lista da Equipe</a><br>'+
        '<a style="text-decoration: none;" href="/categorias">- Lista de Categorias</a><br>'+
        '<a style="text-decoration: none;" href="/subservidores">- Lista de Sub-Servidores</a><br>'+
        '<a style="text-decoration: none;" href="/checkCupom?cupom=ABERTURA&grupoCupom=Cash10">- Validar Cupom</a><br>'+
        '<a style="text-decoration: none;" href="/checkout">- Página de Checkout</a><br>'+
    '</h4>');
}); // 

app.get('/ordensEntrega', async (req, res)=>{
    await api.get('/queue/*').then(resp => {
        res.send(resp.data);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/noticias', async (req, res)=>{
    const id = req.query.pagina;
    await api.get('/noticias/'+id).then(resp => {
        res.send(resp.data);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/produtos', async (req, res)=>{
    const id = req.query.pagina;
    await api.get('/produtos'+(typeof(id)==='undefined' ? '':'/'+id)).then(resp => {
        res.send(resp.data);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/produto', async (req, res)=>{
    const id = req.query.id;
    await api.get('/produto/'+id).then(resp => {
        res.send(resp.data);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/equipe', async (req, res)=>{
    const cargo = req.query.cargo;
    await api.get('/equipe'+(typeof(cargo)==='undefined' ? '':'/'+cargo)).then(resp => {
        res.send(resp.data);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/categorias', async (req, res)=>{
    const idSubServer = req.query.idSubServer;
    await api.get('/categorias'+(typeof(idSubServer)==='undefined' ? '':'/'+idSubServer)).then(resp => {
        res.send(resp.data);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/subservidores', async (req, res)=>{
    await api.get('/subservidores').then(resp => {
        res.send(resp.data);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/checkCupom', async (req, res)=>{
    const cupom = req.query.cupom;
    const grupoCupom = req.query.grupoCupom;
    if(typeof(cupom)==='undefined' || typeof(grupoCupom)==='undefined'){
        res.send("Cupom ou Grupo do Cupom não informados.");
        return;
    }
    await api.put('/cupom/'+cupom+'/'+grupoCupom).then(resp => {
        res.send(resp.data);
    }).catch(err => {
        res.send(err.response.data);
    });
});

app.get('/checkout', async (req, res)=>{
    res.send(
        '<h3>Clique para enviar a requisição de checkout</h3>'+
        '<form action="https://www.lojasquare.com.br/gateways/checkout.php" method="post" target="_blank">'+
            '<input type="hidden" id="servidor" name="servidor" value="TrowCraft">'+
            '<input type="hidden" id="id" name="id" value="116">'+
            '<input type="hidden" id="qnt" name="qnt" value="1">'+
            '<input type="hidden" id="player" name="player" value="Trow_Games">'+
            '<input type="hidden" id="gateway" name="gateway" value="MercadoPago">'+
            '<button type="submit">Enviar</button>'+
        '</form>');
    // await apiCheckout.post('/',{
    //     servidor: 'TrowCraft',
    //     id: 116,
    //     qnt: 1,
    //     player: 'Trow_Games',
    //     gateway: 'MercadoPago'
    // }).then(resp => {
    //     res.send(resp.data);
    // }).catch(err => {
    //     res.send(err);
    // });
});