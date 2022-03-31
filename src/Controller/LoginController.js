import { response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../Database/mysql';
import { generateJsonWebToken } from '../Lib/JwToken';


export const loginController = async (req, res = response) => {

    try {

        const { email, password } = req.body;

        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);

        if (validatedEmail.length == 0) {
            return res.status(400).json({
                resp: false,
                msg: 'Wrong Credentials'
            });
        }

        const userdb = await pool.query(`CALL SP_LOGIN(?);`, [email]);

        const user = userdb[0][0];

        const storedb = await pool.query(`CALL SP_LOGIN_STORE(?);`, [email]);

        let store = null;
        try {
            store = storedb[0][0];
        } catch (e) {
            store = null;
        }
        if (!await bcrypt.compareSync(password, user.passwordd)) {
            return res.status(401).json({
                resp: false,
                msg: 'Wrong Credentials',
                store: null
            });
        }
        let token = await generateJsonWebToken(user.uid);
        res.json({
            resp: true,
            msg: 'Welcome to Cena Foodie',
            user: {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
            },
            store: store == null? null: {
                id: store.id,
                store_name: store.store_name,
                address: store.address,
                latitude: store.latitude,
                longitude: store.longitude,
                open_time: store.open_time,
                close_time: store.close_time,
                price_advance: store.price_advance,
                categories: store.categories,
                userid: store.userid,
                image: store.image
            },
            token
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e,
            store: null
        });
    }
}

export const loginWithPhoneController = async (req, res = response) => {

    try {

        const { phone } = req.body;

        const validatedPhone = await pool.query('SELECT phone FROM person WHERE phone = ?', [phone]);

        if (validatedPhone.length == 0) {
            return res.status(400).json({
                resp: false,
                msg: 'Phone not exsit'
            });
        }

        const userdb = await pool.query(`CALL SP_LOGIN_WITH_PHONE(?);`, [phone]);

        const user = userdb[0][0];

        const storedb = await pool.query(`CALL SP_LOGIN_WITH_PHONE_STORE(?);`, [phone]);
        let store = null;
        try {
            store = storedb[0];
        } catch (e) {
            store = null;
        }

        let token = await generateJsonWebToken(user.uid);

        res.json({
            resp: true,
            msg: 'Welcome to Cena Foodie',
            user: {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
            },
            store: {
                id: store.id,
                store_name: store.store_name,
                address: store.address,
                latitude: store.latitude,
                longitude: store.longitude,
                open_time: store.open_time,
                close_time: store.close_time,
                price_advance: store.price_advance,
                categories: store.categories,
                userid: store.userid,
                image: store.image
            },
            token
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e,
            store: null
        });
    }
}


export const renewTokenLogin = async (req, res = response) => {

    try {

        const token = await generateJsonWebToken(req.uid);

        const userdb = await pool.query(`CALL SP_RENEWTOKENLOGIN(?);`, [req.uid]);

        const user = userdb[0][0];

        const storedb = await pool.query(`CALL SP_RENEWTOKENLOGIN_STORE(?);`, [req.uid]);

        let store = null;
        try {
            store = storedb[0];
        } catch (e) {
            store = null;
        }

        res.json({
            resp: true,
            msg: 'Welcome to Cena Foodie',
            user: {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                phone: user.phone,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
            },
            store: {
                id: store.id,
                store_name: store.store_name,
                address: store.address,
                latitude: store.latitude,
                longitude: store.longitude,
                open_time: store.open_time,
                close_time: store.close_time,
                price_advance: store.price_advance,
                categories: store.categories,
                userid: store.userid,
                image: store.image
            },
            token
        });
    } catch (e) {
        res.status(500).json({
            resp: false,
            msg: e
        });
    }

}