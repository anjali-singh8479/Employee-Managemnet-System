import express from "express"
import {newdept,alldept, departmentcount} from "../controllers/admin.js"
const router=express.Router()
router.post("/addDepartment",newdept)
router.get("/alldepartments",alldept)
router.get("/departmentcount",departmentcount)
export default router