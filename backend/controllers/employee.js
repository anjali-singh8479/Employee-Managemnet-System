import path from "path";
import db from "../connect.js";

export const addemployee=(req,res)=>{
    console.log("inside req")
const q="INSERT INTO employees(`name`,`email`,`department`,`profile`) VALUES(?)"
const values=[req.body.name,req.body.email,req.body.department,req.file.filename]
db.query(q,[values],(err,data)=>{
    if(err)
        console.log(err)
    console.log(data)
    return res.json(data).status(200)

})
}
export const allemployess=(req,res)=>{
    const q="SELECT * FROM employees"
    db.query(q,(err,data)=>{
        if(err)
            return res.json(err).status(400)
        return res.json(data).status(200)
    })
}