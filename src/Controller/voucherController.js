import { response } from 'express';
import pool from '../database/mysql.js';


export const createVoucher = async (req, res = response) => {

    const { name, description, start_date, end_date, id_voucher_type, code, image_panner, image_avatar, id_type_discount, min_orders, used_time, value_discount, max_discount, list_apply } = req.body;

    try {
        await pool.query(`CALL SP_STORES_ADD_VOUCHER(?,?,?,?,?,?,?,?,?,?,?,?,?,?);`, [name, description, start_date, end_date, id_voucher_type, code, image_panner, image_avatar, id_type_discount, min_orders, used_time, value_discount, max_discount, list_apply]);

        res.json({
            resp: true,
            msg: 'Create voucher successful',
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}

export const getVoucherByStoreId = async (req, res = response) => {

    const store_id = req.header('store_id');

    try {
        const voucherDb = await pool.query(`CALL SP_STORES_GET_VOUCHER(?);`, [store_id]);

        /*	
        SELECT 	JSON_ARRAYAGG(
                    JSON_OBJECT('voucher',vocher.id,
                        'name',vocher.name,
                        'discount',JSON_OBJECT('type_id', tdis.id , 
                                            'type_name', tdis.name))) AS json_val
        FROM vochers vocher
        INNER JOIN discounts dis ON dis.id = vocher.id_discount
        INNER JOIN discount_types tdis ON tdis.id = dis.id_type_discount
        INNER JOIN vocher_apply_store asotre ON vocher.id = asotre.id_vocher
        WHERE INSTR(asotre.list_id_store, CONCAT(',',2 ,',')) > 0
        AND (vocher.id_vocher_type = 4 OR vocher.id_vocher_type = 2); */

        // if (voucherDb.length > 0) {
        //     voucherDb.forEach(function (voucher) {
        //         //Discount type
        //         var discount_type = {};
        //         discount_type.id_discount_type = voucher['id_discount_type'];
        //         discount_type.discount_type_name = voucher['discount_type_name'];

        //         //Discount 
        //         var discount_val = {};
        //         discount_val.id_discount = voucher['id_discount'];
        //         discount_val.discount_val = voucher['discount_val'];
        //         discount_val.discount_type = discount_type;
        //         a.discount = discount_val;

        //         //delete case 
        //         delete voucher['id_discount_type'];
        //         delete voucher['discount_type_name'];
        //         delete voucher['id_discount'];
        //         delete voucher['discount_val'];
        //     });
        // }

        res.json({
            resp: true,
            msg: 'Get voucher by store_id = ' + store_id,
            data: voucherDb[0]
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
        const voucherDb = await pool.query(`CALL SP_GET_VOCHER_BY_PRODUCT_ID(?);`, [product_id]);

        res.json({
            resp: true,
            msg: 'Get voucher by product_id = ' + product_id,
            productsDb: voucherDb[0]
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
        const voucherDb = await pool.query(`CALL SP_GET_SYSTEM_VOCHER();`);

        res.json({
            resp: true,
            msg: 'Get all System voucher= ',
            productsDb: voucherDb[0]
        });

    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg: err
        });
    }
}