import express from "express"
import {newdept,alldept} from "../controllers/admin.js"
const router=express.Router()
router.post("/addDepartment",newdept)
router.get("/alldepartments",alldept)
export default router