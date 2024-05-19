import path from "path";
import db from "../connect.js";

export const addemployee=(req,res)=>{
    console.log("inside req")
const q="INSERT INTO employees(`name`,`email`,`department`,`profile`) VALUES(?)"
console.log(req)
const values=[req.body.name,req.body.email,req.body.department,req.file.filname]
console.log(values)
db.query(q,[values],(err,data)=>{
    if(err)
        return res.json(err).status(400)
    console.log(data)
    return res.json(data).status(200)

})
}