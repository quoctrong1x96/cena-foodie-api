import { response } from 'express';
import pool from '../database/mysql.js';


export const addNewOrders = async (req, res = response) => {

    try {

        const { idAddress, total, typePayment, products } = req.body;

        const orderDb = await pool.query('INSERT INTO orders (client_id, address_id, amount, pay_type) VALUES (?,?,?,?)', [req.id, idAddress, total, typePayment]);

        products.forEach(o => {
            pool.query('INSERT INTO orderDetails (order_id, product_id, quantity, price) VALUES (?,?,?,?)', [orderDb.insertId, o.idProduct, o.quantity, o.quantity * o.price]);
        });

        res.status(200).json({
            order_id: orderDb.insertId
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getOrdersByStatus = async (req, res = response) => {

    try {
        let status = req.query.status;
        let id = req.query.store;
        let type = req.query.type;
        if ((typeof type != undefined) && (type == "delivery")) {
            const ordersDb = await pool.query(`CALL SP_ORDERS_BY_DELIVERY(?,?);`, [id, status]);

                res.status(200).json({
                    orders: ordersDb[0]
                });
        }
        else {
            if ((typeof status != undefined) && (status) && (typeof id != undefined) && (id)) {

                const ordersDb = await pool.query(`CALL SP_ORDERS_BY_STATUS(?,?);`, [status, id]);

                res.status(200).json({
                    orders: ordersDb[0]
                });
            } else {
                return res.status(403).json({
                    resp: false,
                    message: "Forbidden to get all orders!"
                });
            }
        }
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getOrdersByStatusForClient = async (req, res = response) => {

    try {
        let status = req.query.status;
        let client = req.query.object_id;
        if ((typeof status != undefined) && (status) && ((typeof client != undefined) && (client))) {

            const ordersDb = await pool.query(`CALL SP_ORDERS_BY_STATUS_FOR_CLIENT(?,?);`, [status, client]);

            res.status(200).json({
                orders: ordersDb[0]
            });
        } else {
            return res.status(403).json({
                resp: false,
                message: "Forbidden to get all orders!"
            });
        }
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getDetailsOrderById = async (req, res = response) => {

    try {

        const detailOrderDb = await pool.query(`CALL SP_ORDER_DETAILS(?);`, [req.params.idOrder]);

        res.status(200).json({
            order_details: detailOrderDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}
export const updateStatusToDispatched = async (req, res = response) => {

    try {

        const { idDelivery, store_id, store_latitude, store_longitude } = req.body;

        await pool.query('UPDATE orders SET status = ?, delivery_id = ?, store_id = ?, store_latitude = ?, store_longitude = ? WHERE id = ?', ['DISPATCHED', idDelivery, store_id, store_latitude, store_longitude, req.params.idOrder]);

        res.status(200).json({
            resp: true,
            message: 'Order DISPATCHED'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateStatusToCancelled = async (req, res = response) => {

    try {

        const { idDelivery, store_id, store_latitude, store_longitude } = req.body;

        await pool.query('UPDATE orders SET status = ?, delivery_id = ?, store_id = ?, store_latitude = ?, store_longitude = ? WHERE id = ?', ['CANCELLED', idDelivery, store_id, store_latitude, store_longitude, req.params.idOrder]);

        res.status(200).json({
            resp: true,
            message: 'Order CANCELLED'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getOrdersByDelivery = async (req, res = response) => {

    try {

        const ordersDeliveryDb = await pool.query(`CALL SP_ORDERS_BY_DELIVERY(?,?);`, [req.params.idDelivery, req.query.status]);

        res.status(200).json({
            orders: ordersDeliveryDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateStatusToOnTheWay = async (req, res = response) => {

    try {

        const { latitude, longitude } = req.body;

        await pool.query('UPDATE orders SET status = ?, latitude = ?, longitude = ? WHERE id = ?', ['ON WAY', latitude, longitude, req.params.idOrder]);

        res.status(200).json({
            resp: true,
            message: 'ON WAY'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateStatusToDelivered = async (req, res = response) => {

    try {

        await pool.query('UPDATE orders SET status = ? WHERE id = ?', ['DELIVERED', req.params.idOrder]);

        res.status(200).json({
            resp: true,
            message: 'ORDER DELIVERED'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}