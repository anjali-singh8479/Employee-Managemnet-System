import express from "express"
import {addemployee,allemployess} from "../controllers/employee.js"
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"public/profileimages")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
const router=express.Router()
router.post("/add",upload.single("profile"),addemployee)
router.get("/all",allemployess)
export default router