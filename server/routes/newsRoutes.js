import express from "express"
const router = express()
import { getHeadlines } from "../controller/newsController.js"

router.get("/news",getHeadlines)

export default router;