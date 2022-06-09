import { Router } from 'express';
import * as category from '../../controller/categoryController.js';
import { verifyToken } from '../../middleware/ValidateToken.js';

const router = Router();


router.post('/categories', verifyToken, category.addCategories);
router.post('/categories/:idCategory', verifyToken, category.updateCategories);
router.get('/categories', verifyToken, category.getAllCategories );
router.get('/stores/:id/categories', verifyToken, category.getCategoriesByStore);

export default router;