import express from 'express';
import {legumesService} from '../service/legumes.service.js';
import { pool } from '../config/db.js';

export const legumesRouter = express.Router();

legumesRouter.get('/', async (req, res) => {
  const legume =  await legumesService.getAll(); 
  res.json(legume);
});

legumesRouter.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
  const legume = await pool.query('SELECT * FROM emanoel_legumes WHERE id = $1', [id]);
  res.json(legume.rows);
  
}
 catch (error) {
    res.status(404).json({ error: 'Legume não encontrado' });
  }
});

legumesRouter.post('/', async (req, res) =>{
  try {
    const legume = await pool.query('INSERT INTO emanoel_legumes (nome, quantidade) VALUES ($1, $2) RETURNING *', [req.body.nome, req.body.quantidade]);
    res.status(201).json(legume);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar legume' });
  }
})

legumesRouter.patch('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const legume = await pool.query('UPDATE emanoel_legumes SET nome = ($1), quantidade = ($2) WHERE id = ($3) RETURNING *', [req.body.nome, req.body.quantidade, id]);
    return legume.rows
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar legume' });
  }
})

legumesRouter.put('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const legume = await pool.query('UPDATE emanoel_legumes SET nome = ($1), quantidade = ($2) WHERE id = ($3) RETURNING *', [req.body.nome, req.body.quantidade, id]);
    return legume.rows
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar legume' });
  }
})


legumesRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const legume = await pool.query('DELETE FROM emanoel_legumes WHERE id = ($1) RETURNING *', [id]);
    return legume.rows
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir legume' });
  }
})








