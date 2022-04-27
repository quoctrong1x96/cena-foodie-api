// get-all-store-by-page
import { response } from 'express';
import pool from '../Database/mysql';


export const updateLastname = async (req, res = response) => {

    try {
        let lastName = req.header('lastname');
        let userId = req.header('user_id');

        const person = await pool.query(`CALL SP_PROFILE_UPDATE_LASTNAME(?,?);`,[userId,lastName]);

        res.json({
            resp: true,
            msg : 'Update sussuses với lastname = '+ lastName,
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
        let firstName = req.header('firstname');
        let userId = req.header('user_id');

        const person = await pool.query(`CALL SP_PROFILE_UPDATE_FIRSTNAME(?,?);`,[userId,firstName]);

        res.json({
            resp: true,
            msg : 'Update sussuses với firstName = '+ firstName,
            person: person[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}