import express from "express"
import {loginuser,registeruser,logout} from "../controllers/auth.js"
const router=express.Router()
router.post("/login",loginuser)
router.post("/register",registeruser)
router.get("/logout",logout)
export default router