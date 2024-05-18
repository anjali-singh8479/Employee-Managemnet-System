import React from 'react'
import { Link } from 'react-router-dom'
import LeftNavbar from './LeftNavbar'

const Employee = () => {
  return (
   <div className='tt'>
    <LeftNavbar></LeftNavbar>
   <Link to="/employee/add"><button>Add New Employee</button></Link>
   </div>
  )
}

export default Employee