import { Router } from 'express';
import * as dashboard from '../../controller/dashboardController.js';
import { verifyToken } from '../../middleware/ValidateToken.js';

const router = Router();


router.get('/status', verifyToken, dashboard.getDashboardByStatus);
router.get('/pay-type', verifyToken, dashboard.getDashboardByPayType);
router.get('/delivered', verifyToken, dashboard.getDashboardByDelivered);
router.get('/product', verifyToken, dashboard.getDashboardByProduct);
router.get('/personal', verifyToken, dashboard.getDashboardByPersonal);

export default router;