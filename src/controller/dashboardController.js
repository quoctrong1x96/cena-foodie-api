// SP_GET_DASH_0X_BY_MONTH
// X = 1: Thống kê theo đơn hàng và doanh thu từng status
// X = 2: Thống kê theo đơn hàng và doanh thu từng pay_type
// X = 3: Thống kê danh sách đơn hàng đã thanh toán 
// X = 4: Thống kê theo sản phẩm và số lượng được bán 
// X = 5: Thống kê 10 người mua hàng cao nhất

import { response } from 'express';
import pool from '../Database/mysql.js';

export const getDashboardByStatus = async (req, res = response) => {
    try {
        // get parameter
        let typeFunction = req.header('type');
        let storeId = req.header('store_id');
        let time = req.header('time');
        // variable
        let listDb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listDb = await pool.query(`CALL SP_GET_DASH_01_BY_DATE(?,?);`, [storeId, time]);
                break;
            case "MONTH":
                listDb = await pool.query(`CALL SP_GET_DASH_01_BY_MONTH(?,?);`, [storeId, time]);
                break;
            case "YEAR":
                listDb = await pool.query(`CALL SP_GET_DASH_01_BY_YEAR(?,?);`, [storeId, time]);
                break;
            case "ALLTIME":
                listDb = await pool.query(`CALL SP_GET_DASH_01_BY_ALLTIME(?);`, [storeId]);
                break;
            case "FROMTO":
                listDb = await pool.query(`CALL SP_GET_DASH_01_BY_FROMTO(?,?,?);`, [storeId, time, time]);
                break;
            default:
                listDb = await pool.query(`CALL SP_GET_DASH_01_BY_DATE(?,?);`, [storeId, time]);
                break;
        }
        //return response
        res.status(200).json({
            dashboard: listDb[0][0]==null?[]:listDb[0][0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const getDashboardByPayType = async (req, res = response) => {
    try {
        // get parameter
        let typeFunction = req.header('type');
        let storeId = req.header('store_id');
        let time = req.header('time');
        // variable
        let listDb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listDb = await pool.query(`CALL SP_GET_DASH_02_BY_DATE(?,?);`, [storeId, time]);
                break;
            case "MONTH":
                listDb = await pool.query(`CALL SP_GET_DASH_02_BY_MONTH(?,?);`, [storeId, time]);
                break;
            case "YEAR":
                listDb = await pool.query(`CALL SP_GET_DASH_02_BY_YEAR(?,?);`, [storeId, time]);
                break;
            case "ALLTIME":
                listDb = await pool.query(`CALL SP_GET_DASH_02_BY_ALLTIME(?);`, [storeId]);
                break;
            case "FROMTO":
                listDb = await pool.query(`CALL SP_GET_DASH_02_BY_FROMTO(?,?,?);`, [storeId, time, time]);
                break;
            default:
                listDb = await pool.query(`CALL SP_GET_DASH_02_BY_DATE(?,?);`, [storeId, time]);
                break;
        }
        //return response
        res.status(200).json({
            dashboard: listDb[0][0]==null?[]:listDb[0][0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
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
        let listDb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listDb = await pool.query(`CALL SP_GET_DASH_03_BY_DATE(?,?,?);`, [storeId, time, page]);
                break;
            case "MONTH":
                listDb = await pool.query(`CALL SP_GET_DASH_03_BY_MONTH(?,?,?);`, [storeId, time, page]);
                break;
            case "YEAR":
                listDb = await pool.query(`CALL SP_GET_DASH_03_BY_YEAR(?,?,?);`, [storeId, time, page]);
                break;
            case "ALLTIME":
                listDb = await pool.query(`CALL SP_GET_DASH_03_BY_ALLTIME(?,?);`, [storeId, page]);
                break;
            case "FROMTO":
                listDb = await pool.query(`CALL SP_GET_DASH_03_BY_FROMTO(?,?,?,?);`, [storeId, time, time, page]);
                break;
            default:
                listDb = await pool.query(`CALL SP_GET_DASH_03_BY_DATE(?,?,?);`, [storeId, time, page]);
                break;
        }
        //return response
        res.status(200).json({
            dashboard: listDb[0]==null?[]:listDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
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
        let listDb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listDb = await pool.query(`CALL SP_GET_DASH_04_BY_DATE(?,?);`, [storeId, time]);
                break;
            case "MONTH":
                listDb = await pool.query(`CALL SP_GET_DASH_04_BY_MONTH(?,?);`, [storeId, time]);
                break;
            case "YEAR":
                listDb = await pool.query(`CALL SP_GET_DASH_04_BY_YEAR(?,?);`, [storeId, time]);
                break;
            case "ALLTIME":
                listDb = await pool.query(`CALL SP_GET_DASH_04_BY_ALLTIME(?);`, [storeId]);
                break;
            case "FROMTO":
                listDb = await pool.query(`CALL SP_GET_DASH_04_BY_FROMTO(?,?,?);`, [storeId, time, time]);
                break;
            default:
                listDb = await pool.query(`CALL SP_GET_DASH_04_BY_DATE(?,?);`, [storeId, time]);
                break;
        }
        //return response
        res.status(200).json({
            dashboard: listDb[0]==null?[]:listDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
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
        let listDb = null;
        // Call procedure
        switch (typeFunction) {
            case "DATE":
                listDb = await pool.query(`CALL SP_GET_DASH_05_BY_DATE(?,?);`, [storeId, time]);
                break;
            case "MONTH":
                listDb = await pool.query(`CALL SP_GET_DASH_05_BY_MONTH(?,?);`, [storeId, time]);
                break;
            case "YEAR":
                listDb = await pool.query(`CALL SP_GET_DASH_05_BY_YEAR(?,?);`, [storeId, time]);
                break;
            case "ALLTIME":
                listDb = await pool.query(`CALL SP_GET_DASH_05_BY_ALLTIME(?);`, [storeId]);
                break;
            case "FROMTO":
                listDb = await pool.query(`CALL SP_GET_DASH_05_BY_FROMTO(?,?,?);`, [storeId, time, time]);
                break;
            default:
                listDb = await pool.query(`CALL SP_GET_DASH_05_BY_DATE(?,?);`, [storeId, time]);
                break;
        }
        //return response
        res.status(200).json({
            data: listDb[0]==null?[]:listDb[0]
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}