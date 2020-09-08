import express from 'express';

const app = express();

// introduz o pacote para compreender json.
app.use(express.json());

// COMANDOS HTTP
// GET: Buscar ou listar uma informação.
// POST: Criar alguma nova informação.
// PUT: Atualizar uma informação existente.
// DELETE: Deleta uma informação existente.

// PARAMETROS
// Corpo (request body): Dados para criação ou atualização de um registro. request.body
// Route Params: Identificar qual recurso eu quero atualizar ou deletar. request.params
// Query Params: Paginação, filtros, ordenação. request.query

app.get('/', (request, response) => {
    return response.json({message: "hello world"});
});

// porta padrão é número 80. Todos os sites tem no final mas é oculto.
// ex: www.minhaapi.com.br:3333
// localhost:3333
app.listen(3333);
