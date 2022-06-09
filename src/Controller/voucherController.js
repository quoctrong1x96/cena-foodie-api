import { response } from 'express';
import pool from '../database/mysql.js';


export const createVoucher = async (req, res = response) => {

    const { name, description, start_date, end_date, id_voucher_type, code, image_panner, image_avatar, id_type_discount, min_orders, usedto_time, value_discount, max_discount, list_apply } = req.body;

    try {
        await pool.query(`CALL SP_VOCHER_ADD(?,?,?,?,?,?,?,?,?,?,?,?,?,?);`, [name, description, start_date, end_date, id_voucher_type, code,image_panner, image_avatar, id_type_discount, min_orders, usedto_time, value_discount, max_discount, list_apply]);

        res.json({
            resp: true,
            msg: 'Create voucher successfuly',
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}

export const getVoucherByStoreId = async (req, res = response) => {

    const store_id  = req.header('store_id');

    try {
        const voucherdb = await pool.query(`CALL SP_GET_VOCHER_BY_STORE_ID(?);`,[store_id]);

        res.json({
            resp: true,
            msg : 'Get voucher by store_id = ' + store_id,
            productsdb: voucherdb[0]
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}

export const getVoucherByProductId = async (req, res = response) => {

    const product_id = req.header('product_id');

    try {
        const voucherdb = await pool.query(`CALL SP_GET_VOCHER_BY_PRODUCT_ID(?);`,[product_id]);

        res.json({
            resp: true,
            msg : 'Get voucher by product_id = ' + product_id,
            productsdb: voucherdb[0]
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}

export const getSystemVoucher = async (req, res = response) => {

    try {
        const voucherdb = await pool.query(`CALL SP_GET_SYSTEM_VOCHER();`);

        res.json({
            resp: true,
            msg : 'Get all System voucher= ',
            productsdb: voucherdb[0]
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}