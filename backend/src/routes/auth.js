import { Router } from "express";
const router = Router();

import { registerUser, loginUser } from "../controllers/auth.js";
import { registerValidation } from "../middleware/register-validation.js";
import { loginValidation } from "../middleware/login-validation.js";

router.post("/register", registerValidation, registerUser);
router.post("/login", loginValidation, loginUser);

export default router;
