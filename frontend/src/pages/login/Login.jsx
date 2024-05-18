import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  const [data,setdata]=useState("")
const[details,setdetails]=useState({
  username:"",
  password:""
})
const handlechange=(e)=>{
  setdetails((prev)=>({...prev,[e.target.name]:e.target.value}))
}
const handlesubmit=async(e)=>{
e.preventDefault()
try{
const res=await axios.post("http://localhost:8800/auth/login",details,{withCredentials:true})
console.log(res.data)
setdata(res.data)
if(res.data==="logged in")
  navigate("/")
}catch(err)
{
  return err
}

}
console.log(details)
  return (
    <>
    <div className='form-wrapper'>
      <form onSubmit={handlesubmit}>
      <div className='input-wrapper'>
        <label>username</label>
        <input placeholder='Enter the username'  name="username" onChange={handlechange}></input>
    </div>
    <div className='input-wrapper'>
        <label>Password</label>
        <input placeholder='Enter the password'  name="password" onChange={handlechange}></input>
    </div>
    {data && <p>{data}</p>}
    <button className="button-click" id="login-button">Sign In</button>
    <button className="button-click" id='register-button'>Register</button>
      </form>
    </div>
    </>
  )
}

export default Login