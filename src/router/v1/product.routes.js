import { Router } from 'express';

import * as product from '../../controller/productController.js';
import { authJwt } from '../../middleware/validateToken.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();





router.get('/search-product-for-name/:nameProduct', [authJwt.verifyToken,logRequest], product.searchProductForName );
router.get('/search-product-for-category/:idCategory', [authJwt.verifyToken,logRequest], product.searchProductsForCategory );
router.get('/list-products-admin', [authJwt.verifyToken,logRequest], product.listProductsAdmin );



export default router;