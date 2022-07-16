import { Router } from 'express';
import * as dashboard from '../../controller/dashboardController.js';
import { verifyToken } from '../../middleware/validateToken.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();


router.get('/status', [verifyToken,logRequest], dashboard.getDashboardByStatus);
router.get('/pay-type', [verifyToken,logRequest], dashboard.getDashboardByPayType);
router.get('/delivered', [verifyToken,logRequest], dashboard.getDashboardByDelivered);
router.get('/product', [verifyToken,logRequest], dashboard.getDashboardByProduct);
router.get('/personal', [verifyToken,logRequest], dashboard.getDashboardByPersonal);

export default router;