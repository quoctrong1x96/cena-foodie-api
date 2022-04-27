// SP_GET_DASH_0X_BY_MONTH
// X = 1: Thống kê theo đơn hàng và doanh thu từng status
// X = 2: Thống kê theo đơn hàng và doanh thu từng pay_type
// X = 3: Thống kê danh sách đơn hàng đã thanh toán 
// X = 4: Thống kê theo sản phẩm và số lượng được bán 
// X = 5: Thống kê 10 người mua hàng cao nhất

import { response } from 'express';
import pool from '../Database/mysql';

export const getDashboardByStatus = async (req, res = response) => {
    try {
        // get parameter
        let typeFunction = req.header('type');
        let storeId = req.header('store_id');
        let time = req.header('time');
        // variable
        let listdb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listdb = await pool.query(`CALL SP_GET_DASH_01_BY_DATE(?,?);`, [storeId, time]);
                break;
            case "MONTH":
                listdb = await pool.query(`CALL SP_GET_DASH_01_BY_MONTH(?,?);`, [storeId, time]);
                break;
            case "YEAR":
                listdb = await pool.query(`CALL SP_GET_DASH_01_BY_YEAR(?,?);`, [storeId, time]);
                break;
            case "ALLTIME":
                listdb = await pool.query(`CALL SP_GET_DASH_01_BY_ALLTIME(?);`, [storeId]);
                break;
            case "FROMTO":
                listdb = await pool.query(`CALL SP_GET_DASH_01_BY_FROMTO(?,?,?);`, [storeId, time, time]);
                break;
            default:
                listdb = await pool.query(`CALL SP_GET_DASH_01_BY_DATE(?,?);`, [storeId, time]);
                break;
        }
        //return response
        res.json({
            resp: true,
            msg: 'Get dashboard by Status filter with '+ typeFunction,
            dashboardByStatus: listdb[0][0]==null?[]:listdb[0][0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e,
            dashboardByStatus: []
        });
    }
}

export const getDashboardByPaytype = async (req, res = response) => {
    try {
        // get parameter
        let typeFunction = req.header('type');
        let storeId = req.header('store_id');
        let time = req.header('time');
        // variable
        let listdb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listdb = await pool.query(`CALL SP_GET_DASH_02_BY_DATE(?,?);`, [storeId, time]);
                break;
            case "MONTH":
                listdb = await pool.query(`CALL SP_GET_DASH_02_BY_MONTH(?,?);`, [storeId, time]);
                break;
            case "YEAR":
                listdb = await pool.query(`CALL SP_GET_DASH_02_BY_YEAR(?,?);`, [storeId, time]);
                break;
            case "ALLTIME":
                listdb = await pool.query(`CALL SP_GET_DASH_02_BY_ALLTIME(?);`, [storeId]);
                break;
            case "FROMTO":
                listdb = await pool.query(`CALL SP_GET_DASH_02_BY_FROMTO(?,?,?);`, [storeId, time, time]);
                break;
            default:
                listdb = await pool.query(`CALL SP_GET_DASH_02_BY_DATE(?,?);`, [storeId, time]);
                break;
        }
        //return response
        res.json({
            resp: true,
            msg: 'Get dashboard by Payment Type filter with '+ typeFunction,
            dashboardByPayment: listdb[0][0]==null?[]:listdb[0][0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e,
            dashboardByPayment:[]
        });
    }
}

export const getDashboardByDelivered = async (req, res = response) => {
    try {
        // get parameter
        let typeFunction = req.header('type');
        let storeId = req.header('store_id');
        let time = req.header('time');        
        let page = req.header('page');
        // variable
        let listdb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listdb = await pool.query(`CALL SP_GET_DASH_03_BY_DATE(?,?,?);`, [storeId, time, page]);
                break;
            case "MONTH":
                listdb = await pool.query(`CALL SP_GET_DASH_03_BY_MONTH(?,?,?);`, [storeId, time, page]);
                break;
            case "YEAR":
                listdb = await pool.query(`CALL SP_GET_DASH_03_BY_YEAR(?,?,?);`, [storeId, time, page]);
                break;
            case "ALLTIME":
                listdb = await pool.query(`CALL SP_GET_DASH_03_BY_ALLTIME(?,?);`, [storeId, page]);
                break;
            case "FROMTO":
                listdb = await pool.query(`CALL SP_GET_DASH_03_BY_FROMTO(?,?,?,?);`, [storeId, time, time, page]);
                break;
            default:
                listdb = await pool.query(`CALL SP_GET_DASH_03_BY_DATE(?,?,?);`, [storeId, time, page]);
                break;
        }
        //return response
        res.json({
            resp: true,
            msg: 'Get dashboard by Delivered filter with '+ typeFunction,
            dashboardByDelivered: listdb[0]==null?[]:listdb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e,
            dashboardByDelivered:[]
        });
    }
}

export const getDashboardByProduct = async (req, res = response) => {
    try {
        // get parameter
        let typeFunction = req.header('type');
        let storeId = req.header('store_id');
        let time = req.header('time');   
        // variable
        let listdb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listdb = await pool.query(`CALL SP_GET_DASH_04_BY_DATE(?,?);`, [storeId, time]);
                break;
            case "MONTH":
                listdb = await pool.query(`CALL SP_GET_DASH_04_BY_MONTH(?,?);`, [storeId, time]);
                break;
            case "YEAR":
                listdb = await pool.query(`CALL SP_GET_DASH_04_BY_YEAR(?,?);`, [storeId, time]);
                break;
            case "ALLTIME":
                listdb = await pool.query(`CALL SP_GET_DASH_04_BY_ALLTIME(?);`, [storeId]);
                break;
            case "FROMTO":
                listdb = await pool.query(`CALL SP_GET_DASH_04_BY_FROMTO(?,?,?);`, [storeId, time, time]);
                break;
            default:
                listdb = await pool.query(`CALL SP_GET_DASH_04_BY_DATE(?,?);`, [storeId, time]);
                break;
        }
        //return response
        res.json({
            resp: true,
            msg: 'Get dashboard by Product filter with '+ typeFunction,
            dashboardByProduct: listdb[0]==null?[]:listdb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e,
            dashboardByProduct:[]
        });
    }
}

export const getDashboardByPersonal = async (req, res = response) => {
    try {
        // get parameter
        let typeFunction = req.header('type');
        let storeId = req.header('store_id');
        let time = req.header('time');   
        // variable
        let listdb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listdb = await pool.query(`CALL SP_GET_DASH_05_BY_DATE(?,?);`, [storeId, time]);
                break;
            case "MONTH":
                listdb = await pool.query(`CALL SP_GET_DASH_05_BY_MONTH(?,?);`, [storeId, time]);
                break;
            case "YEAR":
                listdb = await pool.query(`CALL SP_GET_DASH_05_BY_YEAR(?,?);`, [storeId, time]);
                break;
            case "ALLTIME":
                listdb = await pool.query(`CALL SP_GET_DASH_05_BY_ALLTIME(?);`, [storeId]);
                break;
            case "FROMTO":
                listdb = await pool.query(`CALL SP_GET_DASH_05_BY_FROMTO(?,?,?);`, [storeId, time, time]);
                break;
            default:
                listdb = await pool.query(`CALL SP_GET_DASH_05_BY_DATE(?,?);`, [storeId, time]);
                break;
        }
        //return response
        res.json({
            resp: true,
            msg: 'Get dashboard by Personal filter with '+ typeFunction,
            dashboardByPersonal: listdb[0]==null?[]:listdb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg: e,
            dashboardByPersonal: []
        });
    }
}