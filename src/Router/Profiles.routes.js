import { Router } from 'express';
import * as profile from '../Controller/ProfileController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.patch('/change-lastname-profile', verifyToken, profile.updateLastname);
router.patch('/change-firstname-profile', verifyToken, profile.updateFirstname);

export default router;