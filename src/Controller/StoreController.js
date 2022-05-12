// get-all-store-by-page
import { response } from 'express';
import pool from '../Database/mysql';


export const getStoreNameById = async (req, res = response) => {

    try {
        const stores = await pool.query(`SELECT store_name,address  FROM stores where id = ?`, req.params.id);

        res.json({
            resp: true,
            msg : 'Store id = '+ req.params.storeId,
            stores_name: stores 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}
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

export const getStoresPerPage = async (req, res = response) => {

    try {
        let offset = req.header('offset');
        let limit = req.header('limit');
        let lng = req.header('lng');
        let lat = req.header('lat');
       
        const stores = await pool.query(`CALL SP_GET_STORES_NEXT_LOCATION_BY_PAGE(?,?,?,?);`,[lat, lng, limit, offset]);

        res.json({
            resp: true,
            msg : '10 stores near you by limit '+ limit + ', offset '+ offset,
            stores: stores[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}