import { Router } from 'express';
import * as store from '../../controller/storeController.js';
import { verifyToken } from '../../middleware/validateToken.js';

const router = Router();


router.get('/stores', verifyToken, store.getStoresPerPage);
router.get('/store/:id/name', verifyToken, store.getStoreNameById);
router.get('/get-all-delivery', verifyToken, store.getAllDelivery);

export default router;