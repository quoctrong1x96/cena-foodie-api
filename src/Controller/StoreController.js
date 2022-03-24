// get-all-store-by-page
import { response } from 'express';
import pool from '../Database/mysql';


export const getStoresList = async (req, res = response) => {

    try {
        let page = req.header('page');

        if(page == 1){
            page = 0;
        }else{
            page = 10 * (page - 1);
        }
       
        const stores = await pool.query(`CALL SP_GET_STORES(?);`,[page]);

        res.json({
            resp: true,
            msg : '10 stores by page '+ page,
            stores: stores[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}
