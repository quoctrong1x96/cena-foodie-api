import { response } from 'express';
import pool from '../Database/mysql';


export const addNewProduct = async (req, res = response) => {

    try {

        const {store_id, name, description, price, category } = req.body;
        
        const rows = await pool.query('INSERT INTO products (nameProduct, description, price, category_id, store_id) VALUE (?,?,?,?,?)', [name, description, price, category, store_id]);
        
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

export const 
getProductsTopHome = async (req, res = response) => {

    try {
        let store_id = req.header('store_id');
        let page = req.header('page');

        if(page == 1){
            page = 0;
        }else{
            page = 10 * (page - 1);
        }

        const productsdb = await pool.query(`CALL SP_GET_PRODUCTS_TOP(?,?);`,[store_id, page]);

        res.json({
            resp: true,
            msg : '10 Prodcut by page '+ page,
            productsdb: productsdb[0] 
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

        const imageProductdb = await pool.query('SELECT * FROM imageProduct WHERE product_id = ?', [ req.params.id ]);

        res.json({
            resp: true,
            msg : 'Get Images Products',
            imageProductdb: imageProductdb
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

        const productdb = await pool.query(`CALL SP_SEARCH_PRODUCT(?);`, [ req.params.nameProduct ]);

        res.json({
            resp: true,
            msg : 'Search products',
            productsdb: productdb[0]
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

        const productdb = await pool.query(`CALL SP_SEARCH_FOR_CATEGORY(?);`, [req.params.idCategory]);

        res.json({
            resp: true,
            msg : 'list Products for id Category',
            productsdb : productdb[0]
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

        const productsdb = await pool.query(`CALL SP_LIST_PRODUCTS_ADMIN(?);`, req.uid);

        res.json({
            resp: true,
            msg : 'Top 10 Products',
            productsdb: productsdb[0] 
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

        const { status, idProduct } = req.body;

        await pool.query('UPDATE products SET status = ? WHERE id = ?', [ parseInt(status), parseInt(idProduct) ]);

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
        await pool.query('DELETE FROM products WHERE id = ?', [ req.params.idProduct ]);

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