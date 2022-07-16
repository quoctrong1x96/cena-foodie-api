import { Router } from 'express'; 
import * as orders from '../../controller/orderController.js';
import * as client from '../../controller/clientController.js';
import { verifyToken } from '../../middleware/validateToken.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();


router.post('/', [verifyToken,logRequest], orders.addNewOrders );
router.get('/', [verifyToken,logRequest], orders.getOrdersByStatus );
router.get('/:idOrder/details', [verifyToken,logRequest], orders.getDetailsOrderById );
router.get('/deliveries/:idDelivery', [verifyToken,logRequest], orders.getOrdersByDelivery );
router.put('/:idOrder/to-on-way', [verifyToken,logRequest], orders.updateStatusToOnTheWay );
router.put('/:idOrder/to-delivered', [verifyToken,logRequest], orders.updateStatusToDelivered );
router.put('/:idOrder/to-cancelled', [verifyToken,logRequest], orders.updateStatusToCancelled );
router.put('/:idOrder/to-dispatched', [verifyToken,logRequest], orders.updateStatusToDelivered );

router.get('/clients/:idClient', [verifyToken,logRequest], client.getListOrdersForClient);


export default router;