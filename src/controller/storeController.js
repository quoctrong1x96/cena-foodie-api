// get-all-store-by-page
import { response } from 'express';
import pool from '../database/mysql.js';
import bcrypt from 'bcrypt';


export const getStoreNameById = async (req, res = response) => {

    try {
        const name = await pool.query(`SELECT name  FROM stores where id = ?`, req.params.id);

        res.status(200).json({
            stores_name: name
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getStoreById = async (req, res = response) => {
    try {
        const stores = await pool.query(`SELECT *   FROM stores where id = ?`, req.params.id);

        res.status(200).json({
            stores: stores[0]
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getStoresPerPage = async (req, res = response) => {
    try {
        let offset = req.query.offset;

        let limit = req.query.limit;
        let lng = req.query.lng;
        let lat = req.query.lat;
        if (offset == null) {
            offset = 0;
        }
        if (limit == null) {
            limit = 100;
        }

        if (lng == null || lat == null) {
            return res.status(404).json({
                resp: false,
                message: "This location not found!"
            });
        }

        const stores = await pool.query(`CALL SP_GET_STORES_NEXT_LOCATION_BY_PAGE(?,?,?,?);`, [lat, lng, limit, offset]);

        res.status(200).json({
            stores: stores[0]
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getAllDelivery = async (req, res = response) => {
    try {

        const deliveryDb = await pool.query(`CALL SP_STORES_DELIVERIES(?);`, [req.params.id]);

        res.status(200).json({
            deliveries: deliveryDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const registerDelivery = async (req, res = response) => {
    try {

        const { first_name, last_name, phone, email, password, notification_token } = req.body;
        const imagePath = req.file.filename;

        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);

        if (validatedEmail.length > 0) {
            return res.status(409).json({
                resp: false,
                message: 'Email already exists'
            });
        }

        let salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync(password, salt);
        pool.query(`CALL SP_USERS_REGISTER(?,?,?,?,?,?,?,?);`, [first_name, last_name, phone, imagePath, email, pass, 3, notification_token]);

        res.status(200).json({
            resp: true,
            message: 'Delivery successfully registered',
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const updateStoreImage = async (req, res = response) => {
    try {
        const imagePath = req.file.filename;

        const imageDb = await pool.query('SELECT image FROM stores WHERE id = ?', [req.params.id]);

        await fs.unlink(path.resolve('src/uploads/profile/' + imageDb[0].image));

        pool.query('UPDATE stores SET image = ? WHERE id = ?', [imagePath, req.params.id]);

        res.status(200).json({
            resp: true,
            message: 'Picture changed'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const updateStoreTime = async (req, res = response) => {
    try {
        const { open_time, close_time } = req.body

        pool.query('UPDATE stores SET open_time = ?, close_time = ? WHERE id = ?', [open_time, close_time, req.params.id]);

        res.status(200).json({
            resp: true,
            message: 'Store time changed'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}