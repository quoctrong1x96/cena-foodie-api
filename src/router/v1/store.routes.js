import { Router } from 'express';
import * as store from '../../controller/storeController.js';
import { verifyToken } from '../../middleware/validateToken.js';
import { logRequest } from '../../middleware/logUri.js';
import * as category from '../../controller/categoryController.js';
import { upLoadsProfile } from '../../lib/multer.js';

import * as voucher from '../../controller/voucherController.js';


import { upLoadsProducts } from '../../lib/multer.js';
import * as product from '../../controller/productController.js';
const router = Router();


router.get('/', [verifyToken,logRequest], store.getStoresPerPage);
router.get('/:id/name', [verifyToken,logRequest], store.getStoreNameById);
router.get('/:id', [verifyToken,logRequest], store.getStoreById);
router.get('/:id/deliveries', [verifyToken,logRequest], store.getAllDelivery);
router.post('/:id/deliveries', [verifyToken,logRequest, upLoadsProfile.single('image')], store.registerDelivery);
router.patch('/:id/image', [verifyToken,logRequest, upLoadsProfile.single('image')], store.updateStoreImage);
router.patch('/:id/name', [verifyToken,logRequest, upLoadsProfile.single('image')], store.updateStoreImage);
router.patch('/:id/time', [verifyToken,logRequest], store.updateStoreTime);

router.post('/:id/products', [ [verifyToken,logRequest], upLoadsProducts.array('image') ], product.addNewProduct);
router.get('/:id/products', [verifyToken,logRequest], product.getProductsTopHome);
router.put('/:id/products/:idProduct', [ [verifyToken,logRequest], upLoadsProducts.array('image') ], product.updateProduct);
router.get('/:id/products/:idProduct/images', [verifyToken,logRequest], product.getImagesProducts );
router.patch('/:id/products/:idProduct/status', [verifyToken,logRequest], product.updateStatusProduct);
router.delete('/:id/products/:idProduct', [verifyToken,logRequest], product.deleteProduct);
router.delete('/:id/products/:idProduct/vouchers', [verifyToken,logRequest], voucher.getVoucherByProductId);


router.post('/:id/categories', [verifyToken,logRequest], category.addCategories);
router.delete('/:id/categories/:idCategory', [verifyToken,logRequest], category.deleteCategories);
router.get('/:id/categories', [verifyToken,logRequest], category.getCategoriesByStore);
router.put('/:id/categories/:idCategory', [verifyToken,logRequest], category.updateCategories);

router.post('/:id/vouchers',[verifyToken,logRequest], voucher.createVoucher);
router.get('/:id/vouchers', [verifyToken,logRequest], voucher.getVoucherByStoreId);
router.get('/:id/vouchers/systems', [verifyToken,logRequest], voucher.getSystemVoucher);


export default router;