import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";
import axios from "axios";
import "../style.css";
const Departments = () => {
  const [data, setdata] = useState([]);
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
  return (
    <>
    <div className="tt">
        <LeftNavbar></LeftNavbar>
    <div className='px-5 mt-5'>
        <div className='d-flex justify-content-center'>
            <h3>Category List</h3>
        </div>
    <div>
      <Link to="/department/add">
        <button className="button-click" id="login-button">
          Add new Department
        </button>
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          
              {data.map((dept) => (
                <tr>
                <td>{dept.Department}</td>
               
                </tr>
              ))}
          
          </tbody>
        </table>
      </div>
</div>
</div>
    </div>
    </>
  );
};

export default Departments;
