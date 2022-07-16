import { response } from 'express';
import pool from '../database/mysql.js';

export const addCategories = async (req, res = response) => {
    try {

        const { category, description } = req.body;

        await pool.query(`CALL SP_STORES_ADD_CATEGORY(?,?,?);`, [ category, description, req.params.id ]);

        res.json({
            resp: true,
            msg : 'Category added successfully',
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        }); 
    }
}

export const updateCategories = async (req, res = response) => {
    try {

        const { category, description } = req.body;

        await pool.query(`CALL SP_STORES_UPDATE_CATEGORY(?,?,?);`, [ category, description, req.params.idCategory ]);

        res.json({
            resp: true,
            msg : 'Category update successfully',
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        }); 
    }
}

export const getAllCategories = async ( req, res = response ) => {

    const store_id = req.header('store_id');

    try {

        const category = await pool.query(`SELECT * FROM categories WHERE store_id = ? OR store_id = 0`, store_id);

        res.json({
            resp: true,
            msg : 'All Categories of store '+ store_id,
            categories: category
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const getCategoriesByStore = async ( req, res = response ) => {

    try {

        const category = await pool.query(`SELECT c.* FROM categories c INNER JOIN products p ON c.id = p.category_id
        WHERE c.store_id = 0 OR c.store_id = ? GROUP BY c.id`, req.params.id);

        res.json({
            resp: true,
            msg : 'Active categories of store '+ req.params.id,
            categories: category
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : "Store " + req.params.id + " with error: "+ e
        });
    }

}

export const deleteCategories = async (req, res = response) => {
    try {

        const result = await pool.query(`CALL SP_STORES_DELETE_CATEGORY(?);`, [ req.params.idCategory ]);

        if(result == "Deleted"){
            res.json({
                resp: true,
                msg : result[0][0]['message'],
            });
        }else{
            res.json({
                resp: false,
                msg : result[0][0]['message'],
            });
        }
        
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        }); 
    }
}