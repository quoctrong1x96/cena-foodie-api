import { Router } from 'express';
import * as profile from '../Controller/ProfileController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.put('/change-lastname-profile', verifyToken, profile.updateLastname);
router.put('/change-firstname-profile', verifyToken, profile.updateFirstname);

export default router;