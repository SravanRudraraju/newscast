import express from "express"
import { addBookmark, deleteBookmark, getBookmarks } from "../controllers/bookmarksController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/",authMiddleware, addBookmark)
router.delete("/:id",authMiddleware,deleteBookmark)
router.get("/",authMiddleware,getBookmarks)

export default router
