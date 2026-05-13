import express from 'express';
import {legumesRouter} from './routes/legumes.routes.js';

const PORT = 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
 return res.status(200).json({
  sucess: true,
  mensage: 'Bem-vindo a API de Legumes'
 })
});

app.use('/legume', legumesRouter);


app.listen(PORT, () => {
  console.log(`server rodando em http://localhost:${PORT}`);
});