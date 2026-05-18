import { pool } from '../config/db.js';

class BebidasService {
        async create(nome){
            const bebidas = await read()

            try{
                const newBebida = {
                    id: bebidas.length > 0 ? bebidas[bebidas.length - 1].id + 1 : 1, 
                    nome
                };
                bebidas.push(newBebida);
                await write (bebidas);
                return newBebida;
            }
            catch(error){
                console.error(error)
            }
    }
    async getAll(){
        try{
            const bebidas = await pool.query('SELECT * FROM emanoel_refrigerantes');
            return bebidas.rows;
        }
        catch(error){
            console.error(error);
        }
    }
}

export const bebidasService = new BebidasService();