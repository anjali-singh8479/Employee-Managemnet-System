import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import LeftNavbar from './LeftNavbar'
import axios from 'axios'
const Employee = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getallemployees = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/employee/all"
        );
        console.log(res.data);
        setdata(res.data);
      } catch (err) {
        return err;
      }
    };
    getallemployees();
  }, []);
  console.log(data)
  return (
    <>
    <div className="tt">
        <LeftNavbar></LeftNavbar>
    <div className='px-5 mt-5'>
        <div className='d-flex justify-content-center'>
            <h3>Employee List</h3>
        </div>
    <div>
      <Link to="/employee/add">
        <button className="button-click" id="login-button">
          Add new Employee
        </button>
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
          <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
          
              {data.map((emp) => (
                <tr>
                <td><img className="profile-img" src={`http://localhost:8800/profileimages/${emp.profile}`} alt=""></img></td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td><button>Delete</button> <button>Edit</button></td>
                </tr>
                
              ))}
          
          </tbody>
        </table>
      </div>
</div>
</div>
    </div>
    </>
  )
}

export default Employee