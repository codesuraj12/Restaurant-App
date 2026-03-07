import express from "express"
import { registerUser,Loginuser } from "../controllers/authController.js"

const router = express.Router()

router.post("/register",registerUser);
router.post("/login",Loginuser)

export default router