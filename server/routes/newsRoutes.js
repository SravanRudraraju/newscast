import express from "express"
const router = express()
import { getHeadlines } from "../controllers/newsController.js"

router.get("/news",getHeadlines)

export default router;