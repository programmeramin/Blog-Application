import express from 'express';
import { signin, signup, verifyEmail, logout } from '../controller/authController.js';

// router config
const router = express.Router();

// auth routes
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/verify-email', verifyEmail);
router.post('/logut', logout);

// export router
export default router;
   