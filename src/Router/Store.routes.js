import { Router } from 'express';
import * as store from '../Controller/StoreController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.get('/get-all-store-by-page', verifyToken, store.getStoresList);
router.get('/store/:id/name', verifyToken, store.getStoreNameById);

export default router;