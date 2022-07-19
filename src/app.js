import express from 'express';

const app = express();

app.use(express.json());

const produtos = [
{"codigo": 1, "descricao": "Notebook DELL Core i7 16GB", "categoria": "Informática", "unidade": "Peça"},
{"codigo": 2, "descricao": "Frango a passarinho SADIA", "categoria": "Congelados", "unidade": "Quilograma"},
{"codigo": 3, "descricao": "Eisenbahn American IPA", "categoria": "Bebidas", "unidade": "Litro"}
];

app.get('/', (req, res) => {
    res.status(200).send('ERVIL Produtos');
});

app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});

//Create
app.post('/produtos', (req, res) => {
    produtos.push(req.body);
    res.status(201).send('Produto cadastrado com sucesso!!!');
});
//Retrieve
app.get('/produtos/:codigo', (req, res) => {
    var codigo = req.params.codigo;
    console.log(`codigo: ${codigo}`);
    var index = buscaProduto(codigo);
    console.log(`Index: ${index}`);
    if(index >= 0){
        res.status(200).json(produtos[index])
    }else{
        res.status(404).send('Produto não encontrado!!!');    
    }
});
//Update
app.put('/produtos/:codigo', (req, res) => {
    var codigo = req.params.codigo;
    console.log(`codigo: ${codigo}`);
    var index = buscaProduto(codigo);
    console.log(`Index: ${index}`);
    if(index >= 0){
        produtos[index].descricao = req.body.descricao;
        produtos[index].categoria = req.body.categoria;
        produtos[index].unidade = req.body.unidade;
        res.status(200).send('Produto atualizado com sucesso!!!');
    }else{
        res.status(404).send('Produto não encontrado!!!');    
    }
});
//Delete
app.delete('/produtos/:codigo', (req, res) => {
    var {codigo} = req.params;
    console.log(`codigo: ${codigo}`);
    var index = buscaProduto(codigo);
    console.log(`Index: ${index}`);
    if(index >= 0){
        produtos.splice(index, 1);
        res.status(204).send('Produto excluído!!!');    
    }else{
        res.status(404).send('Produto não encontrado!!!');    
    }
});
app.get('/unidades', (req, res) => {
    res.status(200).send('Listagem de unidades');
});

app.get('/categorias', (req, res) => {
    res.status(200).send('Listagem de categorias');
});

function buscaProduto(codigo){
    return produtos.findIndex(produto => produto.codigo == codigo);
}

export default app;