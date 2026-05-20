import express from 'express';
import cors from 'cors'
import {bebidasRouter} from './routes/bebidas.routes.js';

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

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