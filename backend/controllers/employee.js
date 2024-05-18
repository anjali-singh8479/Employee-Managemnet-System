import db from "../connect.js";
export const addemployee=(req,res)=>{
const q="INSERT INTO employees(`name`,`email`,`department`,`profile`) VALUES(?)"
const values=[req.body.name,req.body.email,req.body.department,req.body.profile]
console.log(values)
db.query(q,[values],(err,data)=>{
    if(err)
        return res.json(err).status(400)
    res.json(data).status(200)
})
}