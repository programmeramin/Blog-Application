import express from 'express';
import { signin, signup, verifyEmail } from '../controller/authController.js';

// router config
const router = express.Router();

// auth routes
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/verify-email', verifyEmail);

// export router
export default router;
