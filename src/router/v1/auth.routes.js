import { Router } from 'express';
import { verifyToken } from '../../middleware/ValidateToken.js';
import * as auth from '../../controller/authController.js';
import { upLoadsProfile } from '../../lib/Multer.js';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Authentication
 *  description: Api to login with email address
 */

/**
 * @swagger
 * /auth/login-email:
 *  post:
 *      summary: Login with email
 *      tags: [Authentication]
 *      requestBody:
 *          required: true
 *      content:
 *         schemas:
 *          application/json:
 *              schema:
 *                  email:
 *                      type: String
 *                      description: Email
 *                      example: cenafoodie@gmail.com 
 *      responses:
 *          '200': 
 *           description: Login success.
 *                      
 */
router.post('/login-email', auth.loginController);
router.post('/login-phone', auth.loginWithPhoneController);
router.get('/renew-token-login', verifyToken, auth.renewTokenLogin);


export default router;