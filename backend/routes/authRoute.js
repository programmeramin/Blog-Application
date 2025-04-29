import express from "express";
import { signin, signup } from "../controller/authController.js";


// router config
const router = express.Router();


// auth routes
router.post("/signup", signup);
router.post("/signin", signin);


// export router
export default router;