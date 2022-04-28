// get-all-store-by-page
import { response } from 'express';
import pool from '../Database/mysql';


export const updateLastname = async (req, res = response) => {

    try {
        const { lastname, user_id } = req.body;

        const person = await pool.query(`CALL SP_PROFILE_UPDATE_LASTNAME(?,?);`,[user_id,lastname]);

        res.json({
            resp: true,
            msg : 'Update sussuses với lastname = '+ lastname,
            person: person[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const updateFirstname = async (req, res = response) => {

    try {
        const { firstname, user_id } = req.body;

        const person = await pool.query(`CALL SP_PROFILE_UPDATE_FIRSTNAME(?,?);`,[user_id,firstname]);

        res.json({
            resp: true,
            msg : 'Update sussuses với firstName = '+ firstname,
            person: person[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}