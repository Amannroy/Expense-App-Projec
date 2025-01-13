import  express from 'express';
import { loginController, registerController } from '../controllers/userController.js';

// Router object 
const router = express.Router();

// Routers
// POST || LOGIN USER
router.post('/login', loginController);

// POST || REGISTER USER
router.post('/register', registerController);

export default router;