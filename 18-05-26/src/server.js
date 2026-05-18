import express from 'express';
import {bebidasRouter} from './routes/bebidas.routes.js';

const PORT = 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
 return res.status(200).json({
  sucess: true,
  mensage: 'Bem-vindo a API de bebidas'
 })
});

app.use('/bebida', bebidasRouter);

app.listen(PORT, () => {
  console.log(`server rodando em http://localhost:${PORT}`);
});