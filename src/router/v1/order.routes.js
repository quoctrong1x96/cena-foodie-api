import { Router } from 'express'; 
import * as orders from '../../controller/orderController.js';
import * as client from '../../controller/clientController.js';
import { verifyToken } from '../../middleware/ValidateToken.js';

const router = Router();


router.post('/orders', verifyToken, orders.addNewOrders );
router.get('/get-orders-by-status/:statusOrder', verifyToken, orders.getOrdersByStatus );
router.get('/get-details-order-by-id/:idOrderDetails', verifyToken, orders.getDetailsOrderById );
router.put('/update-status-order-dispatched', verifyToken, orders.updateStatusToDispatched );
router.get('/get-all-orders-by-delivery/:statusOrder', verifyToken, orders.getOrdersByDelivery );
router.put('/update-status-order-on-way/:idOrder', verifyToken, orders.updateStatusToOntheWay );
router.put('/update-status-order-delivered/:idOrder', verifyToken, orders.updateStatusToDelivered );

router.get('/get-list-orders-for-client:statusOrder', verifyToken, client.getListOrdersForClient);


export default router;