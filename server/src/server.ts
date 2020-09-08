import express from 'express';
import routes from './routes';

const app = express();

// introduz o pacote para compreender json.
app.use(express.json());
app.use(routes);

// porta padrão é número 80. Todos os sites tem no final mas é oculto.
// ex: www.minhaapi.com.br:3333
// localhost:3333
app.listen(3333);
