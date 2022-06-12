import { Router } from 'express';
import * as store from '../../controller/storeController.js';
import { verifyToken } from '../../middleware/validateToken.js';
import { logRequest } from '../../middleware/logUri.js';
import * as category from '../../controller/categoryController.js';
import { upLoadsProfile } from '../../lib/Multer.js';


import { upLoadsProducts } from '../../lib/Multer.js';
import * as product from '../../controller/productController.js';
const router = Router();


router.get('/', [verifyToken,logRequest], store.getStoresPerPage);
router.get('/:id/name', [verifyToken,logRequest], store.getStoreNameById);
router.get('/:id', [verifyToken,logRequest], store.getStoreById);
router.get('/:id/deliveries', [verifyToken,logRequest], store.getAllDelivery);
router.post('/:id/deliveries', [verifyToken,logRequest, upLoadsProfile.single('image')], store.registerDelivery);

router.post('/:id/products', [ [verifyToken,logRequest], upLoadsProducts.array('image') ], product.addNewProduct);
router.get('/:id/products', [verifyToken,logRequest], product.getProductsTopHome);
router.put('/:id/products/:idProduct', [ [verifyToken,logRequest], upLoadsProducts.array('image') ], product.updateProduct);
router.get('/:id/products/:idProduct/images', [verifyToken,logRequest], product.getImagesProducts );
router.patch('/:id/products/:idProduct', [verifyToken,logRequest], product.updateStatusProduct);
router.delete('/delete-product/:idProduct', [verifyToken,logRequest], product.deleteProduct);


router.post('/:id/categories', [verifyToken,logRequest], category.addCategories);
router.get('/:id/categories', [verifyToken,logRequest], category.getCategoriesByStore);
router.put('/:id/categories/:idCategory', [verifyToken,logRequest], category.updateCategories);


export default router;