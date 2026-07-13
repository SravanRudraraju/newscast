import express from "express"
import { addBookmark, deleteBookmark, getBookmarks } from "../controllers/bookmarksController.js"


const router = express.Router()

router.post("/",addBookmark)
router.delete("/:id",deleteBookmark)
router.get("/",getBookmarks)

export default router
