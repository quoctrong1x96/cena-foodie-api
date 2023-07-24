import { response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../database/mysql.js';
import { generateJsonWebToken } from '../lib/jwToken.js';


export const loginController = async (req, res = response) => {
    try {

        const { email, password } = req.body;

        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);

        if (validatedEmail.length == 0) {
            return res.status(401).json({
                resp: false,
                message: 'Wrong Credentials'
            });
        }

        const userDb = await pool.query(`CALL SP_AUTH_LOGIN_EMAIL(?);`, [email]);
        const user = userDb[0][0];


        const storeDb = await pool.query(`CALL SP_AUTH_LOGIN_EMAIL_STORE(?);`, [email]);

        let store = null;
        try {
            store = storeDb[0][0];
        } catch (e) {
            store = null;
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                resp: false,
                message: 'Wrong Credentials',
                store: null
            });
        }

        let token = await generateJsonWebToken(user.id);
        res.status(200).json({
            user: user,
            store: store,
            token

        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const loginWithPhoneController = async (req, res = response) => {

    try {

        const { phone } = req.body;

        const validatedPhone = await pool.query('SELECT phone FROM persons WHERE phone = ?', [phone]);

        if (validatedPhone.length == 0) {
            return res.status(400).json({
                resp: false,
                message: 'Phone not exist'
            });
        }

        const userDb = await pool.query(`CALL SP_AUTH_LOGIN_PHONE(?);`, [phone]);

        const user = userDb[0][0];

        const storeDb = await pool.query(`CALL SP_AUTH_LOGIN_PHONE_STORE(?);`, [phone]);
        let store = null;
        try {
            store = storeDb[0];
        } catch (e) {
            store = null;
        }

        let token = await generateJsonWebToken(user.id);

        res.status(200).json({
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                image: user.image,
                email: user.email,
                phone: user.phone,
                rol_id: user.rol_id,
                notification_token: user.notification_token
            },
            store: store == null ? null : {
                id: store.id,
                name: store.name,
                address: store.address,
                latitude: store.latitude,
                longitude: store.longitude,
                open_time: store.open_time,
                close_time: store.close_time,
                price_advance: store.price_advance,
                categories: store.categories,
                user_id: store.user_id,
                image: store.image
            },
            token
        }
        );


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const renewTokenLogin = async (req, res = response) => {
    let error = 1;
    try {

        const token = await generateJsonWebToken(req.id);
        error++;
        const userDb = await pool.query(`CALL SP_AUTH_RENEW_TOKEN_LOGIN(?);`, [req.id]);
        error++;
        const user = userDb[0][0];
        error++;
        const storeDb = await pool.query(`CALL SP_AUTH_RENEW_TOKEN_LOGIN_STORE(?);`, [req.id]);
        error++;
        let store = null;
        try {
            store = storeDb[0][0];
        } catch (e) {

            store = null;
        }
        error++;
        res.status(200).json({
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                image: user.image,
                phone: user.phone,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
            },
            store: store == null ? null : {
                id: store.id,
                name: store.name,
                address: store.address,
                latitude: store.latitude,
                longitude: store.longitude,
                open_time: store.open_time,
                close_time: store.close_time,
                price_advance: store.price_advance,
                categories: store.categories,
                user_id: store.user_id,
                image: store.image
            },
            token
        }
        );
    } catch (e) {
        res.status(500).json({
            resp: false,
            message: e,
        });
    }
}



