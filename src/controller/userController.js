import { response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../Database/mysql.js';
import fs from 'fs-extra';
import path from 'path';

//* Create user
export const registerUser = async (req, res = response) => {
    console.log("registerUser");
    const { first_name, last_name, phone, email, password, notification_token } = req.body;
    const imagePath = req.file.filename;
    try {

        let salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync(password, salt);

        const validatedPhone = await pool.query('SELECT phone FROM persons WHERE phone = ?', [phone]);

        if (validatedPhone.length > 0) {
            return res.status(409).json({
                resp: false,
                message: 'Phone already exists'
            });
        }

        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);

        if (validatedEmail.length > 0) {
            return res.status(409).json({
                resp: false,
                message: 'Email already exists'
            });
        }

        pool.query(`CALL SP_USERS_REGISTER(?,?,?,?,?,?,?,?);`, [first_name, last_name, phone, imagePath, email, pass, 2, notification_token]);

        res.status(200).json({ 'email': email, 'phone': phone });



    } catch (err) {
        return res.status(500).json({
            resp: false,
            message: err
        });
    }

}

export const updateLastName = async (req, res = response) => {
    try {
        const { lastName } = req.body;

        const persons = await pool.query(`CALL SP_USERS_UPDATE_LAST_NAME(?,?);`, [req.params.id, lastName]);

        res.status(200).json({
            data: lastName
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateFirstName = async (req, res = response) => {
    try {
        const { firstName } = req.body;

        const persons = await pool.query(`CALL SP_USERS_UPDATE_FIRST_NAME(?,?);`, [req.params.id, firstName]);

        res.status(200).json({
            data: firstName
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateSex = async (req, res = response) => {
    try {
        const { sex } = req.body;

        const persons = await pool.query(`CALL SP_USERS_UPDATE_SEX(?,?);`, [req.params.id, sex]);

        res.status(200).json({
            users: persons[0]
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateDateOfBirth = async (req, res = response) => {
    try {
        const { dateOfBirth } = req.body;

        const persons = await pool.query(`CALL SP_USERS_UPDATE_DATE_OF_BIRTH(?,?);`, [req.params.id, dateOfBirth]);

        res.status(200).json({
            users: persons[0]
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateWork = async (req, res = response) => {
    try {
        const { work } = req.body;

        const persons = await pool.query(`CALL SP_USERS_UPDATE_WORK?,?);`, [req.params.id, work]);

        res.status(200).json({
            users: persons[0]
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getUsersById = async (req, res = response) => {
    try {

        const query = await pool.query(`CALL SP_USER_BY_ID(?);`, [req.params.id]);

        res.status(200).json({
            users: query[0][0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const putUsersById = async (req, res = response) => {

    try {

        const { first_name, last_name, phone } = req.body;

        pool.query(`CALL SP_UPDATE_PROFILE(?,?,?,?);`, [req.params.id, first_name, last_name, phone]);

        res.status(200).json({
            resp: true,
            message: 'Updated Profile'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getUserUpdated = async (req, res = response) => {
    try {

        const userDb = await pool.query(`CALL SP_USER_UPDATED(?);`, [req.params.id]);

        const user = userDb[0][0];

        res.status(200).json({
            user: user,
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const changePassword = async (req, res = response) => {
    try {

        const { currentPassword, newPassword } = req.body;

        const passwordDb = await pool.query('SELECT password FROM users WHERE person_id = ?', [req.params.id]);

        if (!bcrypt.compareSync(currentPassword, passwordDb[0].password)) {
            return res.status(401).json({
                resp: false,
                message: 'Passwords do not match'
            });
        }

        let salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync(newPassword, salt);

        pool.query('UPDATE users SET password = ? WHERE person_id = ?', [pass, req.params.id]);

        res.status(200).json({
            resp: true,
            data: 'Password changed'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const changeImageProfile = async (req, res = response) => {
    try {

        const imagePath = req.file.filename;

        const imageDb = await pool.query('SELECT image FROM persons WHERE id = ?', [req.params.id]);

        await fs.unlink(path.resolve('src/uploads/profile/' + imageDb[0].image));

        pool.query('UPDATE persons SET image = ? WHERE id = ?', [imagePath, req.params.id]);

        res.status(200).json({
            resp: true,
            data: imagePath
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getAddressesUser = async (req, res = response) => {
    try {

        const addressesDb = await pool.query(`SELECT id, type_id, receiver as name, phone, building, door, note, address, latitude, longitude FROM addresses WHERE person_id =? AND flag = TRUE;`, [req.id]);

        if (addressesDb.length > 0) {
            
            addressesDb.forEach(function (address) {
                var receiver = {};
                receiver.phone = address['name'];
                receiver.name = address['phone'];
                receiver.isFemale = 1;
                
                address.receiver = receiver;
                console.log("Here: ", address);
                delete address['name'];
                delete address['phone'];

            });
            
        }

        res.status(200).json({
            addresses: addressesDb
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const deleteAddressById = async (req, res = response) => {
    try {

        pool.query('UPDATE addresses SET flag = FALSE WHERE id = ? AND id = ?', [req.params.idAddress, req.params.id]);

        res.status(200).json({
            resp: true,
            message: 'Street Address deleted'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const addStreetAddress = async (req, res = response) => {
    try {

        const { type, receiver, phone, building, door, note, address, latitude, longitude } = req.body;
        pool.query('INSERT INTO addresses (type_id, receiver,phone, building, door,note,address,Latitude, Longitude, person_id, flag) VALUE (?,?,?,?,?,?,?,?,?,?,TRUE)',
            [type, receiver.name, receiver.phone, building, door, note, address, latitude, longitude, req.id]);

        res.status(200).json({
            resp: true,
            message: 'Address added successfully'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getAddressOne = async (req, res = response) => {
    try {
        const addressDb = await pool.query('SELECT * FROM addresses WHERE person_id = ? ORDER BY id DESC LIMIT 1', [req.id]);


        if (addressDb.length > 0) {
            
            addressDb.forEach(function (address) {
                var receiver = {};
                receiver.phone = address['name'];
                receiver.name = address['phone'];
                receiver.isFemale = 1;
                
                address.receiver = receiver;
                console.log("Here: ", address);
                delete address['name'];
                delete address['phone'];

            });
            
        }
        res.status(200).json({
            addresses: addressDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const getAddressById = async (req, res = response) => {
    try {

        const addressDb = await pool.query('SELECT * FROM addresses WHERE id = ? ORDER BY id DESC LIMIT 1', [req.params.idAddress]);

        if (addressDb[0].id) {
            res.status(200).json({
                addresses: addressDb[0]
            });
        }
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const updateNotificationToken = async (req, res = response) => {
    try {

        const { notification_token } = req.body;

        pool.query('UPDATE users SET notification_token = ? WHERE id = ?', [notification_token, req.params.id]);

        res.status(200).json({
            resp: true,
            message: 'Token updated'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getAdminNotificationToken = async (req, res = response) => {
    try {
        const store_id = req.header('store_id');

        const notification_tokens = await pool.query(`CALL SP_GET_STORE_notification_token(?);`, [store_id]);

        const notification_token = notification_tokens[0][0];

        let tokens = [];

        tokens.push(notification_token);

        res.json(tokens);

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateDeliveryToClient = async (req, res = response) => {

    try {

        pool.query('UPDATE users SET rol_id = ? WHERE id = ?', [2, req.params.idPerson]);

        res.status(200).json({
            resp: true,
            message: 'Delivery To Client'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}
export const enterReferenceCode = async (req, res = response) => {
    try {
        const { code } = req.body;
        const message = await pool.query(`CALL SP_USERS_REFERENCE_ADD(?, ?);`, [req.params.id, code]);
        if ( message[0][0]['message'] != 'successful') {
            return res.status(400).json({
                resp: false,
                message: message[0][0]['message']
            });
        } else {
            return res.status(200).json({
                resp: true,
                message: message[0][0]['message']
            });
        }


    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}