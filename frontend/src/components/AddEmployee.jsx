import React, { useState,useEffect } from 'react'
import LeftNavbar from './LeftNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddEmployee = () => {
    const navigate=useNavigate()
    const[empdetails,setempdetails]=useState({
        name:"",
        email:"",
        department:"",
        profile:""
    })
    const addemployee=async(e)=>{
e.preventDefault()
const formdata=new FormData()
  formdata.append("name",empdetails.name)
  formdata.append("email",empdetails.email)
  formdata.append("department",empdetails.department)
  formdata.append("profile",empdetails.profile)
try{
  
  const res=await axios.post("http://localhost:8800/employee/add",formdata)
console.log(res)
navigate("/employee/all")
}catch(err){
    return err
}
    }
    const handlechange=(e)=>{
        setempdetails((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(empdetails)
    }
    const[data,setdata]=useState([])
    useEffect(() => {
        const getalldepts = async () => {
          try {
            const res = await axios.get(
              "http://localhost:8800/admin/alldepartments"
            );
            console.log(res.data);
            setdata(res.data);
          } catch (err) {
            return err;
          }
        };
        getalldepts();
      }, []);
      console.log(data)
  return (
   <div className='tt'>
   <LeftNavbar></LeftNavbar>
   <div className='form-wrapper'>
      <form enctype="multipart/form-data">
      <div className='input-wrapper'>
        <label>Name</label>
        <input placeholder='Enter the name'  name="name" onChange={handlechange} ></input>
    </div>
    <div className='input-wrapper'>
        <label>Email</label>
        <input placeholder='Enter the email'  name="email" onChange={handlechange}></input>
    </div>
    <div className='input-wrapper'>
        <label>Department</label>
       <select placeholder='Enter the Department' name="department" className='select' onChange={handlechange}>
       {data.map((dept)=>(
         <option value={dept.deptid}>{dept.Department}</option>
        ))}
       </select>
    </div>
    <div className='input-wrapper'>
       
        <label>Profile picture</label>
        <div>
        <input type='file' name="profile"  onChange={(e)=>setempdetails((prev)=>({...prev,[e.target.name]:e.target.files[0]}))}></input>
        </div>
    </div>
    <button className="button-click" id="login-button" onClick={addemployee}>Add Employee</button>
  
      </form>
    </div>
   </div>
  )
}

export default AddEmployee