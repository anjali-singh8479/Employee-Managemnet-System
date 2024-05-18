import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
const Register = () => {
    const navigate=useNavigate()
    const[data,setdata]=useState("")
    const[details,setdetails]=useState({
        username:"",
        name:"",
        email:"",
        password:""
    })
    const handlechange=(e)=>{
    setdetails((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const register=async(e)=>{
        console.log("clicked")
        e.preventDefault()
    try{
        console.log("inside try")
        const res=await axios.post("http://localhost:8800/auth/register",details,{withCredentials:true})
        if(res.status===200){
            console.log(res.data)
            setdata(res.data)
            navigate("/login")
        }
        else{
            setdata("user registered successfully")
        }
    }catch(err){
       return err
    }


    }
  return (
    <>
    <div className='form-wrapper'>
    <form>
    <div className='input-wrapper'>
        <label>Name</label>
        <input type='text' placeholder='enter the name' name='name' onChange={handlechange}></input>
    </div>
    <div className='input-wrapper'>
        <label>Username</label>
        <input type='text' placeholder='enter the username name' name='username' onChange={handlechange}></input>
    </div>
    <div className='input-wrapper'>
        <label>Email</label>
        <input placeholder='Enter the email' onChange={handlechange} name="email"></input>
    </div>
    <div className='input-wrapper'>
        <label>Password</label>
        <input placeholder='Enter the password' onChange={handlechange} name="password"></input>
    </div>
    {data && <p>{data}</p>}
    
    <button className="button-click" id="register-button" onClick={register}>Submit</button>
    <button className='button-click' id='login-button'><Link to="/login" className='links'>SIgn In</Link></button>
    </form>
    </div>
    </>
  )
}

export default Register