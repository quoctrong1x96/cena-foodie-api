import { Router } from 'express';
import { authJwt } from '../../middleware/validateToken.js';
import * as user from '../../controller/userController.js';
import { upLoadsProfile } from '../../lib/multer.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();


router.post('/', upLoadsProfile.single('image'), user.registerUser );
router.get('/:id', [authJwt.verifyToken,logRequest], user.getUsersById);
router.put('/:id',[authJwt.verifyToken,logRequest], user.putUsersById);
router.get('/:id/last-update', [authJwt.verifyToken,logRequest], user.getUserUpdated);

router.put('/:id/password', [authJwt.verifyToken,logRequest], user.changePassword);
router.put('/:id/image-profile', [authJwt.verifyToken,logRequest, upLoadsProfile.single('image')] , user.changeImageProfile );
router.put('/:id/notification-token', [authJwt.verifyToken,logRequest], user.updateNotificationToken );
router.patch('/:id/last-name', [authJwt.verifyToken,logRequest], user.updateLastName);
router.patch('/:id/first-name', [authJwt.verifyToken,logRequest], user.updateFirstName);
router.patch('/:id/sex', [authJwt.verifyToken,logRequest], user.updateSex);
router.patch('/:id/date-of-birth', [authJwt.verifyToken,logRequest], user.updateDateOfBirth);
router.patch('/:id/work', [authJwt.verifyToken,logRequest], user.updateWork);
router.patch('/:id/reference', [authJwt.verifyToken,logRequest], user.enterReferenceCode);

router.get('/:id/addresses', [authJwt.verifyToken,logRequest], user.getAddressesUser );
router.delete('/:id/addresses/:idAddress', [authJwt.verifyToken,logRequest], user.deleteAddressById );
router.post('/:id/addresses', [authJwt.verifyToken,logRequest], user.addStreetAddress );
router.get('/:id/addresses/first', [authJwt.verifyToken,logRequest], user.getAddressOne );
router.get('/:id/addresses/:idAddress', [authJwt.verifyToken,logRequest], user.getAddressById );


router.get('/admins-notification-token', authJwt.verifyToken , user.getAdminNotificationToken );
router.put('/delivery-to-client/:idPerson', [authJwt.verifyToken,logRequest], user.updateDeliveryToClient );

export default router;