import { Router } from 'express';
import * as category from '../Controller/CategoryController';
import { getAllDelivery } from '../Controller/DeliveryController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.post('/add-categories', verifyToken, category.addCategories);
router.post('/update-categories', verifyToken, category.updateCategories);
router.get('/get-all-categories', verifyToken, category.getAllCategories );
router.get('/get-all-delivery', verifyToken, getAllDelivery);
router.get('/stores/:id/categories', verifyToken, category.getCategoriesByStore);

export default router;