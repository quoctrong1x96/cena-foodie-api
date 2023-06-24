import { Router } from 'express';
import * as store from '../../controller/storeController.js';
import { authJwt } from '../../middleware/validateToken.js';
import { logRequest } from '../../middleware/logUri.js';
import * as category from '../../controller/categoryController.js';
import { upLoadsProfile } from '../../lib/multer.js';

import * as voucher from '../../controller/voucherController.js';


import { upLoadsProducts } from '../../lib/multer.js';
import * as product from '../../controller/productController.js';
const router = Router();


router.get('/', [authJwt.verifyToken,logRequest], store.getStoresPerPage);
router.get('/:id/name', [authJwt.verifyToken,logRequest], store.getStoreNameById);
router.get('/:id', [authJwt.verifyToken,logRequest], store.getStoreById);
router.get('/:id/deliveries', [authJwt.verifyToken,logRequest], store.getAllDelivery);
router.post('/:id/deliveries', [authJwt.verifyToken,logRequest, upLoadsProfile.single('image')], store.registerDelivery);
router.patch('/:id/image', [authJwt.verifyToken,logRequest, upLoadsProfile.single('image')], store.updateStoreImage);
router.patch('/:id/name', [authJwt.verifyToken,logRequest, upLoadsProfile.single('image')], store.updateStoreImage);
router.patch('/:id/time', [authJwt.verifyToken,logRequest], store.updateStoreTime);

router.post('/:id/products', [ [authJwt.verifyToken,logRequest], upLoadsProducts.array('image') ], product.addNewProduct);
router.get('/:id/products', [authJwt.verifyToken,logRequest], product.getProductsTopHome);
router.put('/:id/products/:idProduct', [ [authJwt.verifyToken,logRequest], upLoadsProducts.array('image') ], product.updateProduct);
router.get('/:id/products/:idProduct/images', [authJwt.verifyToken,logRequest], product.getImagesProducts );
router.patch('/:id/products/:idProduct/status', [authJwt.verifyToken,logRequest], product.updateStatusProduct);
router.delete('/:id/products/:idProduct', [authJwt.verifyToken,logRequest], product.deleteProduct);
router.delete('/:id/products/:idProduct/vouchers', [authJwt.verifyToken,logRequest], voucher.getVoucherByProductId);


router.post('/:id/categories', [authJwt.verifyToken,logRequest], category.addCategories);
router.delete('/:id/categories/:idCategory', [authJwt.verifyToken,logRequest], category.deleteCategories);
router.get('/:id/categories', [authJwt.verifyToken,logRequest], category.getCategoriesByStore);
router.get('/:id/categories/all', [authJwt.verifyToken,logRequest], category.getAllCategories);
router.put('/:id/categories/:idCategory', [authJwt.verifyToken,logRequest], category.updateCategories);

router.post('/:id/vouchers',[authJwt.verifyToken,logRequest], voucher.createVoucher);
router.get('/:id/vouchers', [authJwt.verifyToken,logRequest], voucher.getVoucherByStoreId);
router.get('/:id/vouchers/systems', [authJwt.verifyToken,logRequest], voucher.getSystemVoucher);


export default router;