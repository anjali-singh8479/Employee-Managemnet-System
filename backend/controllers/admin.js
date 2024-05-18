import db from "../connect.js"
export const newdept=(req,res)=>{
    const q="INSERT INTO departments(`Department`) VALUES(?)"
    console.log(req.body)
    db.query(q,[req.body.department],(err,data)=>{
        if(err)
            return res.json(err).status(400)
        console.log(data)
        return res.json(data).status(200)
    })
}
export const alldept=(req,res)=>{
    const q= "SELECT * FROM departments"
    db.query(q,(err,data)=>{
        if(err)
            return res.json(err).status(400)
        return res.json(data).status(200)
    })
}