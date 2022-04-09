import { response } from 'express';
import pool from '../Database/mysql';


export const createVocher = async (req, res = response) => {

    const { name, description, start_date, end_date, id_vocher_type, code, image_panner, image_avatar, id_type_discount, min_orders, usedto_time, value_discount, max_discount, list_apply } = req.body;

    try {
        await pool.query(`CALL SP_VOCHER_ADD(?,?,?,?,?,?,?,?,?,?,?,?,?,?);`, [name, description, start_date, end_date, id_vocher_type, code,image_panner, image_avatar, id_type_discount, min_orders, usedto_time, value_discount, max_discount, list_apply]);

        res.json({
            resp: true,
            msg: 'Create vocher successfuly',
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}

export const getVocherByStoreId = async (req, res = response) => {

    const store_id  = req.header('store_id');

    try {
        const vocherdb = await pool.query(`CALL SP_GET_VOCHER_BY_STORE_ID(?);`,[store_id]);

        res.json({
            resp: true,
            msg : 'Get vocher by store_id = ' + store_id,
            productsdb: vocherdb[0]
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}

export const getVocherByProductId = async (req, res = response) => {

    const product_id = req.header('product_id');

    try {
        const vocherdb = await pool.query(`CALL SP_GET_VOCHER_BY_PRODUCT_ID(?);`,[product_id]);

        res.json({
            resp: true,
            msg : 'Get vocher by product_id = ' + product_id,
            productsdb: vocherdb[0]
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}

export const getSystemVocher = async (req, res = response) => {

    try {
        const vocherdb = await pool.query(`CALL SP_GET_SYSTEM_VOCHER();`);

        res.json({
            resp: true,
            msg : 'Get all System vocher= ',
            productsdb: vocherdb[0]
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}