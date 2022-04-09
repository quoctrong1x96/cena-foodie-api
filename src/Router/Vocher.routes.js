import { Router } from 'express';
import * as vocher from '../Controller/VocherController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.get('/get-by-store-id', verifyToken, vocher.getVocherByStoreId);
router.post('/add-new-vocher', verifyToken, vocher.createVocher);
router.get('/get-by-product-id', verifyToken, vocher.getVocherByProductId);
router.get('/get-all-system', verifyToken, vocher.getSystemVocher);

export default router;