import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateEmployee = () => {
  const navigate = useNavigate();
  const [emp, setemp] = useState({
    name: "",
    email: "",
    department: "",
    profile: "",
  });
  const [data, setdata] = useState([]);
  const { id } = useParams();
  const handlechange = (e) => {
    setemp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    const getemp = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/employee/get/${id}`);
        console.log(res.data);
        setemp({
          name: res.data[0].name,
          email: res.data[0].email,
          department: res.data[0].department,
          profile: res.data[0].profile,
        });
      } catch (err) {
        return err;
      }
    };
    getemp();
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
  const updateclick = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(
        `http://localhost:8800/employee/update/${id}`,emp
      );
      console.log(res);
      navigate("/employee/all");
    } catch (err) {
      return err;
    }
  };
  return (
    <div className="tt">
      <div className="form-wrapper">
        <form enctype="multipart/form-data">
          <div className="input-wrapper">
            <label>Name</label>
            <input
              placeholder="Enter the name"
              name="name"
              value={emp.name}
              onChange={handlechange}
            ></input>
          </div>
          <div className="input-wrapper">
            <label>Email</label>
            <input
              placeholder="Enter the email"
              name="email"
              value={emp.email}
              onChange={handlechange}
            ></input>
          </div>
          <div className="input-wrapper">
            <label>Department</label>
            <select
              placeholder="Enter the Department"
              name="department"
              value={emp.department}
              className="select"
              onChange={handlechange}
            >
              {data.map((dept) => (
                <option key={dept.id} value={dept.deptid}>
                  {dept.Department}
                </option>
              ))}
            </select>
          </div>
          <button
            className="button-click"
            id="login-button"
            onClick={updateclick}
          >
            update Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
