import { response } from 'express';
import pool from '../Database/mysql.js';


export const addNewProduct = async (req, res = response) => {
    try {

        const {name, description, price, category } = req.body;
        
        const rows = await pool.query('INSERT INTO products (nameProduct, description, price, category_id, store_id) VALUE (?,?,?,?,?)', [name, description, price, category, req.params.id]);
        
        req.files.forEach(image => {
            pool.query('INSERT INTO imageProduct (picture, product_id) value (?,?)', [ image.filename, rows.insertId ]);
        });

        res.json({
            resp: true,
            msg : 'Product added Successfully'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
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

        res.json({
            resp: true,
            msg : 'Product update Successfully'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const getProductsTopHome = async (req, res = response) => {
    try {
        let store_id = req.params.id;
        const productsDb = await pool.query(`CALL SP_STORES_ALL_PRODUCTS(?);`,[store_id]);

        res.json({
            resp: true,
            msg : 'All products of store: '+ store_id,
            data: productsDb[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }
}

export const getImagesProducts = async ( req, res = response ) => {
    try {

        const imageProductDb = await pool.query('SELECT * FROM imageProduct WHERE product_id = ? and store_id = ?', [ req.params.idProduct, req.params.id ]);

        res.json({
            resp: true,
            msg : 'Get Images Products',
            data: imageProductDb
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const searchProductForName = async (req, res = response) => {

    try {

        const productDb = await pool.query(`CALL SP_SEARCH_PRODUCT(?);`, [ req.params.nameProduct ]);

        res.json({
            resp: true,
            msg : 'Search products',
            productsDb: productDb[0]
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const searchProductsForCategory = async (req, res = response) => {

    try {

        const productDb = await pool.query(`CALL SP_SEARCH_FOR_CATEGORY(?);`, [req.params.idCategory]);

        res.json({
            resp: true,
            msg : 'list Products for id Category',
            productsDb : productDb[0]
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const listProductsAdmin = async (req, res = response) => {

    try {

        const productsDb = await pool.query(`CALL SP_LIST_PRODUCTS_ADMIN(?);`, req.uid);

        res.json({
            resp: true,
            msg : 'Top 10 Products',
            productsDb: productsDb[0] 
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }
}

export const updateStatusProduct = async (req, res = response) => {

    try {

        const { status } = req.body;

        await pool.query('UPDATE products SET status = ? WHERE id = ?', [ parseInt(status), parseInt(req.params.idProduct) ]);

        res.json({
            resp: true,
            msg : 'Product updated'
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const deleteProduct = async (req, res = response ) => {

    try {

        await pool.query('DELETE FROM imageProduct WHERE product_id = ?', [ req.params.idProduct ]);
        await pool.query('DELETE FROM products WHERE id = ?  and store_id = ?', [ req.params.idProduct, req.params.id ]);

        res.json({
            resp: true,
            msg : 'Product deleted successfully'
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}