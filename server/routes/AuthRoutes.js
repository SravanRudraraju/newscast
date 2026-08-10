import express from "express"
import { googleLogin } from "../controllers/AuthController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/google",googleLogin)



export default router