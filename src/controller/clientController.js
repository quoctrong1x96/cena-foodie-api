import { response } from 'express';
import pool from '../Database/mysql.js';


export const getListOrdersForClient = async (req, res = response) => {

    try {

        const listDb = await pool.query(`CALL SP_ORDERS_FOR_CLIENT(?,?);`, [req.params.idClient, req.query.status]);

        res.status(200).json({
            orders: listDb[0]
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}