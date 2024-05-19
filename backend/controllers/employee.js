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
export const getemp=(req,res)=>{
    console.log("inside")
    const q="SELECT * FROM employees WHERE id=?"
    db.query(q,[req.params.id],(err,data)=>{
        console.log(q)
        if(err)
            return res.json(err).status(400)
        return res.json(data).status(200)
    })
}
export const updateEmp=(req,res)=>{
    const q="UPDATE employees set `name`= ?, `email`= ?,`department`= ? WHERE id= ?"
    console.log(req.body.name)
    const values=[req.body.name, req.body.email, req.body.department, req.params.id]
    console.log(values)
  db.query(q,[req.body.name, req.body.email, req.body.department, req.params.id],(err,data)=>{
    if(err)
        return res.json(err).status(400)
    console.log(data)
    return res.json(data).status(200)
  })
}
export const deleteEmp=(req,res)=>{
const id=req.params.id
const q="DELETE  FROM employees WHERE id=?"
db.query(q,[id],(err,data)=>{
    if(err)
        return res.json(err).status(400)
    console.log(data)
    return res.json("deleted successfully").status(200) 
})
}
export const employeecount= (req, res) => {
    const q = "Select count(id) as employees from employees";
    db.query(q, (err, data) => {
        if(err) return res.json(err).status(400);
        return res.json(data).status(200);
    })}