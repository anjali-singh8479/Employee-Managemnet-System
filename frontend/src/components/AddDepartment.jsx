import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddDepartment = () => {
    const navigate=useNavigate()
    const[dept,setdept]=useState({
        department:""
    })
    const handlechange=(e)=>{

        setdept(()=>({[e.target.name]:e.target.value}))
        console.log(dept)
    }
    
    const add=async(e)=>{
        e.preventDefault()
     try{
        console.log(dept)
    const res=await axios.post("http://localhost:8800/admin/addDepartment",dept)
    console.log(res)
    navigate("/departments")
    return res
     }catch(err){
       return err 
     }
    }
  return (
    <>
    <div className='form-wrapper'>
      <form >
    <div className='input-wrapper'>
        <input placeholder='Enter the Department'  name="department" onChange={handlechange}></input>
    </div>
    <button className="button-click" id="login-button" onClick={add}>Add</button>
      </form>
    </div>
    </>
  )
}

export default AddDepartment