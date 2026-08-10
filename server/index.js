import "dotenv/config";
import express from "express"
import newsRoutes from "./routes/newsRoutes.js"
import cors from "cors";
import connectDB from "./config/db.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js"
import AuthRoutes from "./routes/AuthRoutes.js"

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
app.use("/api",newsRoutes)
app.use("/api/bookmarks",bookmarkRoutes)
app.use("/api/auth",AuthRoutes)

app.get("/",(req,res)=>{
    res.send("hello from express")
})

connectDB()

app.listen(port,()=>{
    console.log(`listening to port ${3000}`)
})