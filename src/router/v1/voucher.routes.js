import { Router } from 'express';
import * as voucher from '../../controller/voucherController.js';
import { verifyToken } from '../../middleware/ValidateToken.js';

const router = Router();


router.get('/get-by-store-id', verifyToken, voucher.getVoucherByStoreId);
router.post('/add-new-voucher', verifyToken, voucher.createVoucher);
router.get('/get-by-product-id', verifyToken, voucher.getVoucherByProductId);
router.get('/get-all-system', verifyToken, voucher.getSystemVoucher);

export default router;