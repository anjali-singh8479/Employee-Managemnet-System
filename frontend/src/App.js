import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from "./pages/register/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import Employee from "./components/Employee";
import Departments from "./components/Departments";
import AddDepartment from "./components/AddDepartment";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/employee/all" element={<Employee></Employee>}></Route>
          <Route path="/employee/add" element={<AddEmployee></AddEmployee>}></Route>
          <Route path="/employee/update/:id" element={<UpdateEmployee></UpdateEmployee>}></Route>
          <Route path="/departments" element={<Departments></Departments>}></Route>
          <Route path="/department/add" element={<AddDepartment></AddDepartment>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
