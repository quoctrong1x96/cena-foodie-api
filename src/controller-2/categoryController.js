import { response } from 'express';
import pool from '../database/mysql.js';

export const addCategories = async (req, res = response) => {
    try {

        const { category, description } = req.body;

        await pool.query(`CALL SP_STORES_ADD_CATEGORY(?,?,?);`, [ category, description, req.params.id ]);

        res.status(200).json({
            resp: true,
            mdatassage: 'Category added successfully',
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        }); 
    }
}

export const updateCategories = async (req, res = response) => {
    try {

        const { category, description } = req.body;

        await pool.query(`CALL SP_STORES_UPDATE_CATEGORY(?,?,?);`, [ category, description, req.params.idCategory ]);

        res.status(200).json({
            resp: true,
            message: 'Category update successfully',
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        }); 
    }
}

export const getAllCategories = async ( req, res = response ) => {

    try {
        const category = await pool.query(`SELECT * FROM categories WHERE store_id = ? OR store_id = 0`,  req.params.id);

        res.status(200).json({
            categories: category
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getCategoriesByStore = async ( req, res = response ) => {

    try {

        const category = await pool.query(`SELECT c.* FROM categories c INNER JOIN products p ON c.id = p.category_id
        WHERE c.store_id = 0 OR c.store_id = ? GROUP BY c.id`, req.params.id);

        res.status(200).json({
            categories: category
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: "Store " + req.params.id + " with error: "+ e
        });
    }

}

export const deleteCategories = async (req, res = response) => {
    try {

        const result = await pool.query(`CALL SP_STORES_DELETE_CATEGORY(?);`, [ req.params.idCategory ]);

        if(result == "Deleted"){
            res.status(200).json({
                resp: true,
                message: result,
            });
        }else{
            res.status(400).json({
                resp: false,
                message: result,
            });
        }
        
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        }); 
    }
}