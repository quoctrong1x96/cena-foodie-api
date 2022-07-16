import { response } from 'express';
import pool from '../Database/mysql.js';


export const addNewOrders = async (req, res = response) => {

    try {

        const { idAddress, total, typePayment, products } = req.body;

        const orderDb = await pool.query('INSERT INTO orders (client_id, address_id, amount, pay_type) VALUES (?,?,?,?)', [req.uid, idAddress, total, typePayment]);

        products.forEach(o => {
            pool.query('INSERT INTO orderDetails (order_id, product_id, quantity, price) VALUES (?,?,?,?)', [orderDb.insertId, o.idProduct, o.quantity, o.quantity * o.price]);
        });

        res.json({
            resp: true,
            msg: 'New Order added successfully',
            data: orderDb.insertId
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const getOrdersByStatus = async (req, res = response) => {

    try {
        let status = req.query.status;
        let storeId = req.query.store;
        if ((typeof status != undefined) && (status) && (typeof storeId != undefined) && (storeId) ) {

            const ordersDb = await pool.query(`CALL SP_ORDERS_BY_STATUS(?,?);`, [status, storeId]);

            res.json({
                resp: true,
                msg: 'Orders by ' + status,
                data: ordersDb[0]
            });
        } else {
            return res.status(403).json({
                resp: false,
                msg: "Forbidden to get all orders!"
            });
        }
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const getDetailsOrderById = async (req, res = response) => {

    try {

        const detailOrderDb = await pool.query(`CALL SP_ORDER_DETAILS(?);`, [req.params.idOrder]);

        res.json({
            resp: true,
            msg: 'Order details by ' + req.params.idOrder,
            data: detailOrderDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}
export const updateStatusToDispatched = async (req, res = response) => {

    try {

        const { idDelivery, store_id, store_latitude, store_longitude } = req.body;

        await pool.query('UPDATE orders SET status = ?, delivery_id = ?, store_id = ?, store_latitude = ?, store_longitude = ? WHERE id = ?', ['DISPATCHED', idDelivery, store_id, store_latitude, store_longitude, req.params.idOrder]);

        res.json({
            resp: true,
            msg: 'Order DISPATCHED'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const updateStatusToCancelled= async (req, res = response) => {

    try {

        const { idDelivery, store_id, store_latitude, store_longitude } = req.body;

        await pool.query('UPDATE orders SET status = ?, delivery_id = ?, store_id = ?, store_latitude = ?, store_longitude = ? WHERE id = ?', ['CANCELLED', idDelivery, store_id, store_latitude, store_longitude, req.params.idOrder]);

        res.json({
            resp: true,
            msg: 'Order CANCELLED'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const getOrdersByDelivery = async (req, res = response) => {

    try {

        const ordersDeliveryDb = await pool.query(`CALL SP_ORDERS_BY_DELIVERY(?,?);`, [req.params.idDelivery, req.query.status]);

        res.json({
            resp: true,
            msg: 'All Orders By Delivery',
            data: ordersDeliveryDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const updateStatusToOnTheWay = async (req, res = response) => {

    try {

        const { latitude, longitude } = req.body;

        await pool.query('UPDATE orders SET status = ?, latitude = ?, longitude = ? WHERE id = ?', ['ON WAY', latitude, longitude, req.params.idOrder]);

        res.json({
            resp: true,
            msg: 'ON WAY'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}

export const updateStatusToDelivered = async (req, res = response) => {

    try {

        await pool.query('UPDATE orders SET status = ? WHERE id = ?', ['DELIVERED', req.params.idOrder]);

        res.json({
            resp: true,
            msg: 'ORDER DELIVERED'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e
        });
    }

}