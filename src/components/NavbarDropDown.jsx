import React, { useState, useEffect } from "react";
import logo from '../assets/img/slemewhitelogo.png';
import { Link } from "react-router-dom";
// import services from '../pages/Services';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  // Add scroll event listener to toggle sticky state
  const handleScroll = () => {
    if (window.scrollY > 130) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set active menu when clicking on an item
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <header
        id="desktop-navbar"
        className={`container-fluid bg-dark-blue d-xl-block d-lg-none d-md-none d-m-none ${
          isSticky ? "sticky-navbar" : "non-sticky"
        }`}
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-m-12 position-relative">
            <div className="container">
              <div className="row py-lg-1 py-md-1">
                <div className="col-lx-9 col-md-10 col-m-9 p-0">
                  <nav className="row Sleme_nav_bar">
                    <div className="col-md-2 site_logo d-flex align-items-md-center">
                      <Link to="/">
                        <img
                          src={logo}
                          alt=""
                          className="navbar-logo sleme_logo img-fluid"
                        />
                      </Link>
                    </div>
                    <ul className="main-nemus col-lx-10 col-md-8">
                      <li>
                        <Link
                          to ="/"
                          className={activeMenu === "home" ? "active" : ""}
                          onClick={() => handleMenuClick("Home")}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Services"
                          className={`cursor-pointer ${activeMenu === "services" ? "active" : ""}`}
                          onClick={() => handleMenuClick("services")}
                        >
                          Services
                        </Link>
                      </li>
                      <li className="position-relative">
                        <Link to="/doctors"
                          className={activeMenu === "team" ? "active" : ""}
                          onClick={() => handleMenuClick("team")}
                        >
                          Team
                        </Link>

                        {/* <ul className="submenu-team">
                          <li><a href="#">Psychologist - Ms. Upinder Kaur (Program Director)</a></li>
                          <li><a href="#">Psychiatrist - Dr. Arvind (Program Director)</a></li>
                          <li><a href="#">Occupational Therapist - Dr. Priyanka Chanyal (Program Head)</a></li>
                        </ul> */}
                      </li>
                      <li>
                        <Link to="library"
                          className={activeMenu === "library" ? "active" : ""}
                          onClick={() => handleMenuClick("library")}
                        >
                          Sleep Library
                        </Link>
                      </li>
                      <li>
                        <Link to="blog"
                          className={activeMenu === "blog" ? "active" : ""}
                          onClick={() => handleMenuClick("blog")}
                        >
                          Blog
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/about"
                          className={activeMenu === "about" ? "active" : ""}
                          onClick={() => handleMenuClick("about")}
                        >
                          About
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/contactus"
                          className={activeMenu === "contact" ? "active" : ""}
                          onClick={() => handleMenuClick("contact")}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="stylesh-appointment w-25 z-3">
              <div className="appointment_btn_box">
                <Link to="/appointment" className="header_appointment-btn px-md-3 px-xl-4">
                  Appointment
                </Link>
                <ul>
                  <li>
                    <a href="">
                      <i className="bi bi-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social_media_box">
                <ul>
                  <li>
                    <a href="text-maroon">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="text-maroon">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="text-maroon">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="text-maroon">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
