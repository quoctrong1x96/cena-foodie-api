import { Router } from 'express';

import * as product from '../../controller/productController.js';
import { upLoadsProducts } from '../../lib/Multer.js';
import { verifyToken } from '../../middleware/validateToken.js';

const router = Router();


router.post('/products', [ verifyToken, upLoadsProducts.array('image') ], product.addNewProduct);
router.put('/products/:idProduct', [ verifyToken, upLoadsProducts.array('image') ], product.updateProduct);
router.get('/products/:idProduct/images', verifyToken, product.getImagesProducts );

router.get('/get-products-top-home', verifyToken, product.getProductsTopHome);
router.get('/search-product-for-name/:nameProduct', verifyToken, product.searchProductForName );
router.get('/search-product-for-category/:idCategory', verifyToken, product.searchProductsForCategory );
router.get('/list-porducts-admin', verifyToken, product.listProductsAdmin );
router.put('/update-status-product', verifyToken, product.updateStatusProduct);
router.delete('/delete-product/:idProduct', verifyToken, product.deleteProduct);


export default router;