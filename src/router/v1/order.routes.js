import { Router } from 'express'; 
import * as orders from '../../controller/orderController.js';
import * as client from '../../controller/clientController.js';
import { authJwt } from '../../middleware/validateToken.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();


router.post('/', [authJwt.verifyToken,logRequest], orders.addNewOrders );
router.get('/', [authJwt.verifyToken,logRequest], orders.getOrdersByStatus );
router.get('/client', [authJwt.verifyToken,logRequest], orders.getOrdersByStatusForClient );
router.get('/:idOrder/details', [authJwt.verifyToken,logRequest], orders.getDetailsOrderById );
router.get('/deliveries/:idDelivery', [authJwt.verifyToken,logRequest], orders.getOrdersByDelivery );
router.put('/:idOrder/to-on-way', [authJwt.verifyToken,logRequest], orders.updateStatusToOnTheWay );
router.put('/:idOrder/to-delivered', [authJwt.verifyToken,logRequest], orders.updateStatusToDelivered );
router.put('/:idOrder/to-cancelled', [authJwt.verifyToken,logRequest], orders.updateStatusToCancelled );
router.put('/:idOrder/to-dispatched', [authJwt.verifyToken,logRequest], orders.updateStatusToDelivered );

router.get('/clients/:idClient', [authJwt.verifyToken,logRequest], client.getListOrdersForClient);


export default router;