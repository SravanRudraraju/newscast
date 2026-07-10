import express from "express"
import dotenv from "dotenv"
import newsRoutes from "./routes/newsRoutes.js"
import cors from "cors";

const app = express()
const port = 3000
dotenv.config()
app.use(cors())
app.use("/api",newsRoutes)

app.get("/",(req,res)=>{
    res.send("hello from express")
})

app.listen(port,()=>{
    console.log(`listening to port ${3000}`)
})