import { Router } from 'express';
import { verifyToken } from '../../middleware/validateToken.js';
import * as user from '../../controller/userController.js';
import { upLoadsProfile } from '../../lib/multer.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();


router.post('/', upLoadsProfile.single('image'), user.registerUser );
router.get('/:id', [verifyToken,logRequest], user.getUsersById);
router.put('/:id',[verifyToken,logRequest], user.putUsersById);
router.get('/:id/last-update', [verifyToken,logRequest], user.getUserUpdated);

router.put('/:id/password', [verifyToken,logRequest], user.changePassword);
router.put('/:id/image-profile', [verifyToken,logRequest, upLoadsProfile.single('image')] , user.changeImageProfile );
router.put('/:id/notification-token', [verifyToken,logRequest], user.updateNotificationToken );
router.patch('/:id/last-name', [verifyToken,logRequest], user.updateLastName);
router.patch('/:id/first-name', [verifyToken,logRequest], user.updateFirstName);
router.patch('/:id/sex', [verifyToken,logRequest], user.updateSex);
router.patch('/:id/date-of-birth', [verifyToken,logRequest], user.updateDateOfBirth);
router.patch('/:id/work', [verifyToken,logRequest], user.updateWork);
router.patch('/:id/reference', [verifyToken,logRequest], user.enterReferenceCode);

router.get('/:id/addresses', [verifyToken,logRequest], user.getAddressesUser );
router.delete('/:id/addresses/:idAddress', [verifyToken,logRequest], user.deleteAddressById );
router.post('/:id/addresses', [verifyToken,logRequest], user.addStreetAddress );
router.get('/:id/addresses/first', [verifyToken,logRequest], user.getAddressOne );
router.get('/:id/addresses/:idAddress', [verifyToken,logRequest], user.getAddressById );


router.get('/admins-notification-token', verifyToken , user.getAdminNotificationToken );
router.put('/delivery-to-client/:idPerson', [verifyToken,logRequest], user.updateDeliveryToClient );

export default router;