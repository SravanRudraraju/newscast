import express from "express"
import dotenv from "dotenv"
import newsRoutes from "./routes/newsRoutes.js"
import cors from "cors";
import connectDB from "./config/db.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js"

const app = express()
const port = 3000
app.use(express.json())
dotenv.config()
app.use(cors())
app.use("/api",newsRoutes)
app.use("/api/bookmarks",bookmarkRoutes)


app.get("/",(req,res)=>{
    res.send("hello from express")
})

connectDB()

app.listen(port,()=>{
    console.log(`listening to port ${3000}`)
})