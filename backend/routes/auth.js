import express from "express"
import {loginuser,registeruser} from "../controllers/auth.js"
const router=express.Router()
router.post("/login",loginuser)
router.post("/register",registeruser)
export default router