// get-all-store-by-page
import { response } from 'express';
import pool from '../Database/mysql.js';
import bcrypt from 'bcrypt';


export const getStoreNameById = async (req, res = response) => {

    try {
        const stores = await pool.query(`SELECT store_name  FROM stores where id = ?`, req.params.id);

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

export const getStoreById = async (req, res = response) => {
    try {
        const stores = await pool.query(`SELECT *   FROM stores where id = ?`, req.params.id);

        res.json({
            resp: true,
            msg : 'Store id = '+ req.params.storeId,
            data: stores 
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
        let offset =  req.query.offset;
        
        let limit =  req.query.limit;
        let lng =  req.query.lng;
        let lat =  req.query.lat;
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

        let deliveryDb = await pool.query(`CALL SP_STORES_DELIVERIES(?);`, [req.params.id]);

        res.json({
            resp: true,
            msg : 'Get All Delivery',
            data: deliveryDb[0] 
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

        const { firstName, lastName, phone, email, password, notificationToken } = req.body;
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
        pool.query(`CALL SP_USERS_REGISTER(?,?,?,?,?,?,?,?);`, [firstName, lastName, phone, imagePath, email, pass, 3, notificationToken]);

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

export const updateStoreImage = async (req, res = response) => {
    try {
        const imagePath = req.file.filename;

        const imageDb = await pool.query('SELECT image FROM stores WHERE id = ?', [req.params.id]);

        await fs.unlink(path.resolve('src/Uploads/Profile/' + imageDb[0].image));

        pool.query('UPDATE stores SET image = ? WHERE id = ?', [imagePath, req.params.id]);

        res.json({
            resp: true,
            msg: 'Picture changed'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }
}

export const updateStoreTime = async (req, res = response) => {
    try {
        const {openTime,closeTime} = req.body

        pool.query('UPDATE stores SET open_time = ?, close_time = ? WHERE id = ?', [openTime, closeTime, req.params.id]);

        res.json({
            resp: true,
            msg: 'Store time changed'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }
}