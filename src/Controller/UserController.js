import { response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../Database/mysql.js';
import fs from 'fs-extra';
import path from 'path';

//* Create user
export const registerUser = async (req, res = response) => {

    const { firstName, lastName, phone, email, password, notificationToken } = req.body;
    const imagePath = req.file.filename;
    try {

        let salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync(password, salt);

        const validatedPhone = await pool.query('SELECT phone FROM person WHERE phone = ?', [phone]);

        if (validatedPhone.length > 0) {
            return res.status(401).json({
                resp: false,
                msg: 'Phone already exists'
            });
        }

        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);

        if (validatedEmail.length > 0) {
            return res.status(401).json({
                resp: false,
                msg: 'Email already exists'
            });
        }

        pool.query(`CALL SP_USERS_REGISTER(?,?,?,?,?,?,?,?);`, [firstName, lastName, phone, imagePath, email, pass, 2, notificationToken]);

        res.json({
            resp: true,
            msg: 'Client successfully registered',
        });



    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }

}

export const updateLastName = async (req, res = response) => {
    try {
        const { lastName } = req.body;

        const person = await pool.query(`CALL SP_USERS_UPDATE_LAST_NAME(?,?);`, [req.params.id, lastName]);

        res.json({
            resp: true,
            msg : 'User has update successfully: lastName = '+ lastName,
            person: person[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const updateFirstName = async (req, res = response) => {
    try {
        const { firstName } = req.body;

        const person = await pool.query(`CALL SP_USERS_UPDATE_FIRST_NAME(?,?);`, [req.params.id, firstName]);

        res.json({
            resp: true,
            msg : 'User has update successfully: firstName =  = '+ firstName,
            person: person[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const updateSex = async (req, res = response) => {
    try {
        const { sex } = req.body;

        const person = await pool.query(`CALL SP_USERS_UPDATE_SEX(?,?);`, [req.params.id, sex]);

        res.json({
            resp: true,
            msg : 'User has update successfully: sex =  '+ sex,
            person: person[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const updateDateOfBirth = async (req, res = response) => {
    try {
        const { dateOfBirth } = req.body;

        const person = await pool.query(`CALL SP_USERS_UPDATE_DATE_OF_BIRTH(?,?);`, [req.params.id, dateOfBirth]);

        res.json({
            resp: true,
            msg : 'User has update successfully: dateOfBirth = '+ dateOfBirth,
            person: person[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const updateWork = async (req, res = response) => {
    try {
        const { work } = req.body;

        const person = await pool.query(`CALL SP_USERS_UPDATE_WORK?,?);`, [req.params.id, work]);

        res.json({
            resp: true,
            msg : 'User has update successfully: work = '+ work,
            person: person[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const getUsersById = async (req, res = response) => {
    try {

        const query = await pool.query(`CALL SP_USER_BY_ID(?);`, [req.params.id]);

        res.json({
            resp: true,
            msg: 'User was return successfully',
            data: query[0][0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const putUsersById = async (req, res = response) => {

    try {

        const { firstName, lastName, phone } = req.body;

        pool.query(`CALL SP_UPDATE_PROFILE(?,?,?,?);`, [req.params.id, firstName, lastName, phone]);

        res.json({
            resp: true,
            msg: 'Updated Profile'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const getUserUpdated = async (req, res = response) => {
    try {

        const userDb = await pool.query(`CALL SP_USER_UPDATED(?);`, [req.params.id]);

        const user = userDb[0][0];

        res.json({
            resp: true,
            msg: 'User updated',
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                email: user.email,
                rol_id: user.rol_id
            },
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const changePassword = async (req, res = response) => {
    try {

        const { currentPassword, newPassword } = req.body;

        const passwordDb = await pool.query('SELECT password FROM users WHERE persona_id = ?', [req.params.id]);

        if (!bcrypt.compareSync(currentPassword, passwordDb[0].password)) {
            return res.status(401).json({
                resp: false,
                msg: 'Passwords do not match'
            });
        }

        let salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync(newPassword, salt);

        pool.query('UPDATE users SET password = ? WHERE persona_id = ?', [pass, req.params.id]);

        res.json({
            resp: true,
            msg: 'Password changed'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const changeImageProfile = async (req, res = response) => {
    try {

        const imagePath = req.file.filename;

        const imageDb = await pool.query('SELECT image FROM person WHERE uid = ?', [req.params.id]);

        await fs.unlink(path.resolve('src/Uploads/Profile/' + imageDb[0].image));

        pool.query('UPDATE person SET image = ? WHERE uid = ?', [imagePath, req.params.id]);

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

export const getAddressesUser = async (req, res = response) => {
    try {

        const addressesDb = await pool.query('SELECT id, typeid, receiver, phone, building, door, note, address, Latitude, Longitude FROM addresses WHERE persona_id = ? AND flag = TRUE', [req.uid]);

        res.json({
            resp: true,
            msg: 'List the Addresses',
            data: addressesDb
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const deleteAddressById = async (req, res = response) => {
    try {
        
        pool.query('UPDATE addresses SET flag = FALSE WHERE id = ? AND persona_id = ?', [req.params.idAddress, req.params.id]);

        res.json({
            resp: true,
            msg: 'Street Address deleted'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }
}

export const addStreetAddress = async (req, res = response) => {
    try {

        const { type, receiver, phone, building, door, note, address, latitude, longitude } = req.body;
        pool.query('INSERT INTO addresses (typeId, receiver,phone, building, door,note,address,Latitude, Longitude, persona_id, flag) VALUE (?,?,?,?,?,?,?,?,?,?,TRUE)',
            [type, receiver, phone, building, door, note, address, latitude, longitude, req.uid]);

        res.json({
            resp: true,
            msg: 'Address added successfully'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const getAddressOne = async (req, res = response) => {
    try {
        const addressDb = await pool.query('SELECT * FROM addresses WHERE persona_id = ? ORDER BY id DESC LIMIT 1', [req.uid]);

        res.json({
            resp: true,
            msg: 'One Address',
            data: addressDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }
}

export const getAddressById = async (req, res = response) => {
    try {

        const addressDb = await pool.query('SELECT * FROM addresses WHERE id = ? ORDER BY id DESC LIMIT 1', [req.params.idAddress]);

        if (addressDb[0].id) {
            res.json({
                resp: true,
                msg: 'return Address',
                data: addressDb[0]
            });
        }
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }
}

export const updateNotificationToken = async (req, res = response) => {
    try {

        const { nToken } = req.body;

        pool.query('UPDATE users SET notification_token = ? WHERE persona_id = ?', [nToken, req.params.id]);

        res.json({
            resp: true,
            msg: 'Token updated'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const getAdminNotificationToken = async (req, res = response) => {
    try {
        const store_id = req.header('store_id');

        const notification_tokens = await pool.query(`CALL SP_GET_STORE_NOTIFICATION_TOKEN(?);`, [store_id]);

        const notification_token = notification_tokens[0][0];

        let tokens = [];

        tokens.push(notification_token);

        res.json(tokens);

    } catch (e) {
        return res.status(501).json({
            resp: false,
            msg: e
        });
    }

}

export const updateDeliveryToClient = async (req, res = response) => {

    try {

        pool.query('UPDATE users SET rol_id = ? WHERE persona_id = ?', [2, req.params.idPerson]);

        res.json({
            resp: true,
            msg: 'Delivery To Client'
        });

    } catch (e) {
        return res.status(501).json({
            resp: false,
            msg: e
        });
    }
}
export const enterReferenceCode = async (req, res = response) => {
    try {
        const {code } = req.body;
        const message = await pool.query(`CALL SP_USERS_REFERENCE_ADD(?, ?);`, [req.params.id, code]);
        if(message != 'successful'){
            return res.json({
                resp: false,
                msg: message[0][0]["message"]
            });
        }else{
            return  res.json({
                resp: true,
                msg: message[0][0]["message"]
            });
        }
        

    } catch (e) {
        return res.status(501).json({
            resp: false,
            msg: e
        });
    }

}