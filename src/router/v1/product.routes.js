import { Router } from 'express';

import * as product from '../../controller/productController.js';
import { verifyToken } from '../../middleware/validateToken.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();





router.get('/search-product-for-name/:nameProduct', [verifyToken,logRequest], product.searchProductForName );
router.get('/search-product-for-category/:idCategory', [verifyToken,logRequest], product.searchProductsForCategory );
router.get('/list-products-admin', [verifyToken,logRequest], product.listProductsAdmin );



export default router;