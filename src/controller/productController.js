import { response } from 'express';
import pool from '../Database/mysql.js';


export const addNewProduct = async (req, res = response) => {
    try {

        const {name, description, price, category } = req.body;
        
        const rows = await pool.query('INSERT INTO products (nameProduct, description, price, category_id, store_id) VALUE (?,?,?,?,?)', [name, description, price, category, req.params.id]);
        
        req.files.forEach(image => {
            pool.query('INSERT INTO imageProduct (picture, product_id) value (?,?)', [ image.filename, rows.insertId ]);
        });

        res.status(200).json({
            resp: true,
            message: 'Product added Successfully'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const updateProduct = async (req, res = response) => {
    try {

        const {name, description, price, category } = req.body;
        
        const rows = await pool.query('Update products set nameProduct = ? , description = ?, price = ?, category_id = ? where  id = ? and store_id = ?',
        [name, description, price, category, req.params.idProduct, req.params.id]);
        
        if(req.files && req.files.length> 0){
            pool.query('DELETE imageProduct WHERE product_id = ?)', [ product_id]);
            req.files.forEach(image => {
                pool.query('INSERT INTO imageProduct (picture, product_id) value (?,?)', [ image.filename, rows.insertId ]);
            });
        }

        res.status(200).json({
            resp: true,
            message: 'Product update Successfully'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const getProductsTopHome = async (req, res = response) => {
    try {
        let store_id = req.params.id;
        const productsDb = await pool.query(`CALL SP_STORES_ALL_PRODUCTS(?);`,[store_id]);

        res.status(200).json({
            products: productsDb[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const getImagesProducts = async ( req, res = response ) => {
    try {

        const imageProductDb = await pool.query('SELECT * FROM imageProduct WHERE product_id = ? and store_id = ?', [ req.params.idProduct, req.params.id ]);

        res.status(200).json({
            images: imageProductDb
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const searchProductForName = async (req, res = response) => {

    try {

        const productDb = await pool.query(`CALL SP_SEARCH_PRODUCT(?);`, [ req.params.nameProduct ]);

        res.status(200).json({
            products: productDb[0]
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const searchProductsForCategory = async (req, res = response) => {

    try {

        const productDb = await pool.query(`CALL SP_SEARCH_FOR_CATEGORY(?);`, [req.params.idCategory]);

        res.status(200).json({
            products : productDb[0]
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const listProductsAdmin = async (req, res = response) => {

    try {

        const productsDb = await pool.query(`CALL SP_LIST_PRODUCTS_ADMIN(?);`, req.id);

        res.status(200).json({
            products: productsDb[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }
}

export const updateStatusProduct = async (req, res = response) => {

    try {

        const { status } = req.body;

        await pool.query('UPDATE products SET status = ? WHERE id = ?', [ parseInt(status), parseInt(req.params.idProduct) ]);

        res.status(200).json({
            resp: true,
            message: 'Product updated'
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}

export const deleteProduct = async (req, res = response ) => {

    try {

        await pool.query('DELETE FROM imageProduct WHERE product_id = ?', [ req.params.idProduct ]);
        await pool.query('DELETE FROM products WHERE id = ?  and store_id = ?', [ req.params.idProduct, req.params.id ]);

        res.status(200).json({
            resp: true,
            message: 'Product deleted successfully'
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e
        });
    }

}