import db from "../connect.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registeruser = (req, res) => {
  const salt = 10;
  const getuser = "SELECT * FROM `users` where email=? AND username=?";
  db.query(getuser, [req.body.email, req.body.username], (err, data2) => {
    if (err) 
        return res.json(err).status(400);
    if(data2.length>0)
        return res.json("username already registered").status(400)
    const q ="INSERT INTO users (`email`,`username`,`password`,`name`) VALUES(?)";
    const hash = bcrypt.hash(req.body.password, salt, (err, hash) => {
    if (err) 
        return res.json(err).status(400);
    const values = [
        req.body.email,
        req.body.username,
        hash,
        req.body.name,
    ];
    console.log(values)
    db.query(q, [values], (error, data) => {
    if (error) 
        return res.json(error).status(500);
    console.log(res.data)
    return res.json({ ...data, message: "user registered successfully" }).status(200);
        });
      });
  });
};
export const loginuser = (req, res) => {
  const q = "SELECT * FROM users where username=?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err).status(400);
    if (data.length <= 0)
      return res.json("username not registered").status(401);
    bcrypt.compare(
      req.body.password.toString(),
      data[0].password,
      (error, result) => {
        if (err) return res.json(err).status(400);
        if (result === false) return res.json("Incorrect password").status(401);
        const token = jwt.sign(data[0].id, "jwt-secret-key");
        res.cookie("token", token);
        const { password, ...others } = data[0];
        res
          .json("logged in")
          .status(200);
      }
    );
  });
};
