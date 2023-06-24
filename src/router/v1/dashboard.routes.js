import { Router } from 'express';
import * as dashboard from '../../controller/dashboardController.js';
import { authJwt } from '../../middleware/validateToken.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();


router.get('/status', [authJwt.verifyToken,logRequest], dashboard.getDashboardByStatus);
router.get('/pay-type', [authJwt.verifyToken,logRequest], dashboard.getDashboardByPayType);
router.get('/delivered', [authJwt.verifyToken,logRequest], dashboard.getDashboardByDelivered);
router.get('/product', [authJwt.verifyToken,logRequest], dashboard.getDashboardByProduct);
router.get('/personal', [authJwt.verifyToken,logRequest], dashboard.getDashboardByPersonal);

export default router;