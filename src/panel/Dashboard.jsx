
import React, { useState, useEffect } from 'react';
import logo from "../assets/img/slemewhitelogo.png";
import { Link, useNavigate } from "react-router-dom";
// const doctorName = localStorage.getItem('name');
const Dashboard = ({ handleLogout, userRole }) => {
  const [isSticky] = useState(false);
  const navigate = useNavigate(); 


  const handleLogoutAndRedirect = () => {
    handleLogout(); 
    navigate("/"); 
  };

  return (
    <>
      <header
        id="desktop-navbar"
        className={`container-fluid bg-dark-blue d-xl-block ${
          isSticky ? "sticky-navbar" : "non-sticky"
        }`}
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-m-12 position-relative">
              <nav className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 site_logo d-flex align-items-md-center">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="Logo"
                      className="navbar-logo sleme_logo img-fluid"
                    />
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-m-2 text-center">
                <div className="d-flex justify-content-center align-items-center h-100">
                <p className="text-white rounded mb-0">
                      Welcome -   {userRole === "Admin" ? "Admin" : "Doctor"} 
                      </p>
                </div>
                </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-m-2">
                <div className="d-flex justify-content-end align-items-center h-100">
                    <div className="logout-button">
                        <div className="d-flex justify-content-center align-items-center">
                          {/* <p className="text-white pe-3 mt-3">{doctorName}</p> */}
                          <button onClick={handleLogoutAndRedirect} className="btn text-white border"
                          >
                           <i className="bi bi-door-closed-fill pe-2"></i> Logout
                          </button>
                    </div>
                  </div>
                </div>
              </div>
              </nav>
            </div>
        </div>
      </header>
    </>
  );
};

export default Dashboard;
