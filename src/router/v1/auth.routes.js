import { Router } from 'express';
import { verifyToken } from '../../middleware/ValidateToken.js';
import * as auth from '../../controller/authController.js';

import { logRequest } from '../../middleware/logUri.js';

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
router.post('/login-email', logRequest,auth.loginController);
router.post('/login-phone', logRequest,auth.loginWithPhoneController);
router.get('/renew-token-login', [verifyToken,logRequest], auth.renewTokenLogin);


export default router;