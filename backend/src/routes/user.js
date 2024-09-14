import { Router } from "express";
import { fetchUsers } from "../controllers/user.js";

const router = Router();

router.get("/fetch-users", fetchUsers);

export default router;
