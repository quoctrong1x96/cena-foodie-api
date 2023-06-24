import { Router } from 'express';
import { authJwt } from '../../middleware/validateToken.js';
import * as auth from '../../controller/authController.js';

import { logRequest } from '../../middleware/logUri.js';

const router = Router();

/**

 * tags:
 *  name: Authentication
 *  description: Api to login with email address
 */

/**

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

/**

*  /auth/login-phone:
*    post:
*      summary: Login with phone number
*      tags: [Authentication]
*      requestBody:
*        content:
*          application/json:     # Media type
*            schema:             # Request body contents
*              $ref: '#/components/schemas/Todo'   # Reference to an object
*      responses:
*        '200':
*          description: OK                 
*/
router.post('/login-phone', logRequest,auth.loginWithPhoneController);
router.get('/renew-token-login', [authJwt.verifyToken,logRequest], auth.renewTokenLogin);


export default router;