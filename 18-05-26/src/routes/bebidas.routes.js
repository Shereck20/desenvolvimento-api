import express from 'express';
import {bebidasService} from '../service/bebidas.service.js';
import { pool } from '../config/db.js';

export const bebidasRouter = express.Router();

bebidasRouter.get('/', async (req, res) => {
  const bebida =  await bebidasService.getAll(); 
  res.json(bebida);
});

bebidasRouter.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
  const bebida = await pool.query('SELECT * FROM emanoel_refrigerantes WHERE id = $1', [id]);
  res.json(bebida.rows);
  
}
 catch (error) {
    res.status(404).json({ error: 'Bebida não encontrada' });
  }
});

bebidasRouter.post('/', async (req, res) =>{
  try {
    const bebida = await pool.query('INSERT INTO emanoel_refrigerantes (nome, quantidade) VALUES ($1, $2) RETURNING *', [req.body.nome, req.body.quantidade]);
    return bebida.rows,
    res.json(bebida.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar bebida' });
  }
})

bebidasRouter.patch('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const bebida = await pool.query('UPDATE emanoel_refrigerantes SET (nome, quantidade) = ($1, $2)  WHERE id = ($3) RETURNING *', [req.body.nome, req.body.quantidade, id]);
    return bebida.rows,
    res.json(bebida.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar bebida' });
  }
})

bebidasRouter.put('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const bebida = await pool.query('UPDATE emanoel_refrigerantes SET (nome, quantidade) = ($1, $2) WHERE id = ($3) RETURNING *', [req.body.nome, req.body.quantidade, id]);
    return bebida.rows,
    res.json(bebida.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar bebida' });
  }
})


bebidasRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const bebida = await pool.query('DELETE FROM emanoel_refrigerantes WHERE id = ($1)', [id]);
    console.log(bebida);
    return bebida.rows
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir bebida' });
  }
})








