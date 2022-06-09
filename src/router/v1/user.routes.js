import { Router } from 'express';
import { verifyToken } from '../../middleware/validateToken.js';
import * as user from '../../controller/userController.js';
import { upLoadsProfile } from '../../Lib/Multer.js';

const router = Router();


router.post('/', upLoadsProfile.single('image'), user.registerUser );
router.get('/:id', verifyToken, user.getUsersById);
router.put('/:id',verifyToken, user.putUsersById);
router.get('/:id/last-update', verifyToken, user.getUserUpdated);

router.put('/:id/password', verifyToken, user.changePassword);
router.put('/:id/image-profile', [verifyToken, upLoadsProfile.single('image')] , user.changeImageProfile );3
router.put('/:id/notification-token', verifyToken, user.updateNotificationToken );
router.patch('/:id/last-name', verifyToken, user.updateLastName);
router.patch('/:id/first-name', verifyToken, user.updateFirstName);
router.patch('/:id/reference', verifyToken, user.enterReferenceCode);

router.get('/:id/addresses', verifyToken, user.getAddressesUser );
router.delete('/:id/addresses/:idAddress', verifyToken, user.deleteAddressById );
router.post('/:id/addresses', verifyToken, user.addStreetAddress );
router.get('/:id/addresses/first', verifyToken, user.getAddressOne );
router.get('/:id/addresses/:idAddress', verifyToken, user.getAddressById );


router.get('/admins-notification-token', verifyToken , user.getAdminNotificationToken );
router.put('/delivery-to-client/:idPerson', verifyToken, user.updateDeliveryToClient );

export default router;