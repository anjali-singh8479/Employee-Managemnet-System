import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js"
import adminRoutes from "./routes/admin.js"
const app=express();
app.use(express.json())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Creditionals",true)
    next()
})

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET"],
    credentials:true
}))
app.use(cookieParser())
app.use("/auth",authRoutes)
app.use("/admin",adminRoutes)
app.listen("8800",()=>{
    console.log("backend connected")
})