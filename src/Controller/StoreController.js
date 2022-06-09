// get-all-store-by-page
import { response } from 'express';
import pool from '../Database/mysql.js';


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

export const getStoresPerPage = async (req, res = response) => {

    try {
        let offset =  req.query.filters.offset;
        let limit =  req.query.filters.limit;
        let lng =  req.query.filters.lng;
        let lat =  req.query.filters.lat;
        // let offset = req.header('offset');
        // let limit = req.header('limit');
        // let lng = req.header('lng');
        // let lat = req.header('lat');
        if(offset == null){
            offset = 0;
        }
        if(limit == null){
            limit = 100;
        }

        if(lng == null || lat == null){
            return res.status(404).json({
                resp: false,
                msg : "This location not found!"
            });
        }
       
        const stores = await pool.query(`CALL SP_GET_STORES_NEXT_LOCATION_BY_PAGE(?,?,?,?);`,[lat, lng, limit, offset]);

        res.json({
            resp: true,
            msg : 'Stores near you by limit '+ limit + ', offset '+ offset,
            stores: stores[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const getAllDelivery = async ( req, res = response ) => {

    try {

        let deliveryDb = await pool.query(`CALL SP_ALL_DELIVERYS();`);

        res.json({
            resp: true,
            msg : 'Get All Delivery',
            delivery: deliveryDb[0] 
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const registerDelivery = async (req, res = response) => {

    try {

        const { firstName, lastName, phone, email, password, notification_token } = req.body;
        const imagePath = req.file.filename;

        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);

        if (validatedEmail.length > 0) {
            return res.status(401).json({
                resp: false,
                msg: 'Email already exists'
            });
        }

        let salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync(password, salt);

        pool.query(`CALL SP_REGISTER(?,?,?,?,?,?,?,?);`, [firstName, lastName, phone, imagePath, email, pass, 3, notification_token]);

        res.json({
            resp: true,
            msg: 'Delivery successfully registered',
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }


}