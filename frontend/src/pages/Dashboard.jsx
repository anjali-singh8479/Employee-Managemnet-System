import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import LeftNavbar from '../components/LeftNavbar';
import Topbar from '../components/Topbar';
import { Outlet } from 'react-router-dom';
// import axios from "axios";
const Dashboard = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <LeftNavbar></LeftNavbar>
        <div className="col p-0 m-0">
        <Topbar> </Topbar>
        <Outlet></Outlet>
        </div>
      </div>
    </div>
    </>
  ) 
}

export default Dashboard