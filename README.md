# poc-nodejs


```sh
node -v && npm -v
v16.15.1
8.11.0

npm install -D nodemon
npm install chalk
npm install jest@27.2.1
npm install express
```

### Produto
```json
{
    "codigo": 1,
    "descricao": "Notebook DELL Inspiron Core i7",
    "categoria": "Informática",
    "unidade": "Peça"
}
```

```sh
curl \
    -X GET \
    -H 'Content-Type: application/json' \
    http://localhost:3000/produtos


curl \
    -X POST \
    -H 'Content-Type: application/json' \
    http://localhost:3000/produtos \
    -d '{"codigo": 4, "descricao": "Mouse Óptico USB Lenovo","categoria": "Informática", "unidade": "Peça"}'


curl \
    -X PUT \
    -H 'Content-Type: application/json' \
    http://localhost:3000/produtos/2 \
    -d '{"descricao": "Espetos de Carne Swift","categoria": "Congelados", "unidade": "Quilograma"}'


curl \
    -X DELETE \
    -H 'Content-Type: application/json' \
    http://localhost:3000/produtos/2
```