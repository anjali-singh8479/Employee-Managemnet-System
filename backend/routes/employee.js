import express from "express"
import {addemployee} from "../controllers/employee.js"
const router=express.Router()
router.post("/add",addemployee)
export default router