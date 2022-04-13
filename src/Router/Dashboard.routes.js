import { Router } from 'express';
import * as dashboard from '../Controller/DashboardController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.get('/get-dashboard-by-status', verifyToken, dashboard.getDashboardByStatus);
router.get('/get-dashboard-by-paytype', verifyToken, dashboard.getDashboardByPaytype);
router.get('/get-dashboard-by-delivered', verifyToken, dashboard.getDashboardByDelivered);
router.get('/get-dashboard-by-product', verifyToken, dashboard.getDashboardByProduct);
router.get('/get-dashboard-by-personal', verifyToken, dashboard.getDashboardByPersonal);

export default router;