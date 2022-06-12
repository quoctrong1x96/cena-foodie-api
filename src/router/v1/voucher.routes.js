import { Router } from 'express';
import * as voucher from '../../controller/voucherController.js';
import { verifyToken } from '../../middleware/ValidateToken.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();


router.get('/get-by-store-id', [verifyToken,logRequest], voucher.getVoucherByStoreId);
router.post('/add-new-voucher', [verifyToken,logRequest], voucher.createVoucher);
router.get('/get-by-product-id', [verifyToken,logRequest], voucher.getVoucherByProductId);
router.get('/get-all-system', [verifyToken,logRequest], voucher.getSystemVoucher);

export default router;