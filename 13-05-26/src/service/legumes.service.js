import { pool } from '../config/db.js';

class LegumesService {
        async create(nome){
            const legumes = await read()

            try{
                const newLegume = {
                    id: legumes.length > 0 ? legumes[legumes.length - 1].id + 1 : 1, 
                    nome
                };
                legumes.push(newLegume);
                await write (legumes);
                return newLegume;
            }
            catch(error){
                console.error(error)
            }
    }
    async getAll(){
        try{
            const legumes = await pool.query('SELECT * FROM emanoel_legumes');
            return legumes.rows;
        }
        catch(error){
            console.error(error);
        }
    }
}

export const legumesService = new LegumesService();