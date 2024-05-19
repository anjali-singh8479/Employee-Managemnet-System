import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
  const [adminCount, setAdminCount] = useState()
  const [employeeCount, setEmployeeCount] = useState()


  useEffect(() => {
    const deptcount=async()=>{
      try{
        const res=await axios.get('http://localhost:8800/admin/departmentcount')
        setAdminCount(res.data[0].departmentcount)
      }catch(err){
        return err
      }
      
    }
  
    const employeecount=async()=>{
      try{
        const res=await axios.get('http://localhost:8800/employee/employeecount')
        console.log(res)
        setEmployeeCount(res.data[0].employees)
      }catch(err){
        return err
      }
    }
    deptcount();
    employeecount();
  } , [])
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Departments</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {adminCount}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {employeeCount}</h5>
          </div>
        </div>
        
      </div>

      {/* List of admin  */}
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home