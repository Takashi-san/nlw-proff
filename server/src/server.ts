import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// permite que o front-end em outro endereço acesse a api do back-end.
// ex: back-end => localhost:3333
//     front-end => localhost:3000 , mesmo assim consegue acessar.
app.use(cors());

// introduz o pacote para compreender json.
app.use(express.json());

app.use(routes);

// porta padrão é número 80. Todos os sites tem no final mas é oculto.
// ex: www.minhaapi.com.br:3333
// localhost:3333
app.listen(3333);
