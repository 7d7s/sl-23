import React, { useState, useEffect } from "react";
import logo from '../assets/img/slemewhitelogo.png';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu toggle

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

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ==================== mobile header ================ */}

      <header className="container-fluid bg-dark-blue d-xl-none d-lg-block d-md-block d-m-block">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-sm-6 col-m-6">
            <Link to="/">
              <img src={logo} alt="" className="navbar-logo sleme_logo img-fluid" />
            </Link>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-6 col-m-6 p-0">
            <div className="stylesh-appointment-mobile justify-content-end">
              <div className="appointment_btn_box-mobile justify-content-end w-auto">
                <a href="#" className="pe-3 mobile-toggle-btn" onClick={toggleMenu}>
                  <span><i className="bi bi-list"></i></span>
                </a>
                <Link to="/appointment" className="header_appointment-btn-mobile d-sm-inline-block px-5 d-m-none">
                  appointment
                </Link>
                <ul>
                  <li>
                    <a href=""><i className="bi bi-search"></i></a>
                  </li>
                  <li>
                    <a href=""><i className="bi bi-cart"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu (hidden when not toggled) */}
        <div className={`mobile-menu bg-dark-blue ${isMenuOpen ? "show-mobile" : ""}`}>
          <ul className="list-unstyled">
            <li>
              <img src={logo} alt="" className="w-50" />
              <i className="bi bi-x-lg" onClick={toggleMenu}></i>
            </li>
            <li>
              <a href="" className="mobile-menu-item" onClick={closeMenu}>home</a>
            </li>
            <li>
              <Link to="/Services" className="mobile-menu-item" onClick={closeMenu}>service</Link>
            </li>
            <li>
              <Link to="/Doctors" className="mobile-menu-item" onClick={closeMenu}>team</Link>
            </li>
            <li>
              <Link to="/Library" className="mobile-menu-item" onClick={closeMenu}>Sleep Library</Link>
            </li>
            <li>
              <a href="" className="mobile-menu-item" onClick={closeMenu}>blog</a>
            </li>
            {/* <li>
              <a href="" className="mobile-menu-item" onClick={closeMenu}>about</a>
            </li> */}
            <li>
              <Link to="/ContactUs" className="mobile-menu-item" onClick={closeMenu}>contact</Link>
            </li>
          </ul>
          <div className="social_media_box-mobile mt-5 d-m-flex flex-column justify-content-between">
            <div className="my-2">
              <p className="d-flex justify-content-start align-items-center">
                <i className="bi bi-envelope-fill text-white bg-maroon fs-4 rounded-1 p-1 px-2 mx-3"></i>
                <span className="text-white">info@sleme.in</span>
              </p>
              <p className="d-flex justify-content-start align-items-center">
                <i className="bi bi-telephone-fill text-white bg-maroon fs-4 rounded-1 p-1 px-2 mx-3"></i>
                <span className="text-white">(+91) 88000 07740</span>
              </p>
            </div>
            <ul className="list-unstyled d-flex justify-content-start align-items-center ms-2">
              <li className="border p-1 px-2 mx-2">
                <a href=""><i className="bi bi-facebook text-white"></i></a>
              </li>
              <li className="border p-1 px-2 mx-2">
                <a href=""><i className="bi bi-instagram text-white"></i></a>
              </li>
              <li className="border p-1 px-2 mx-2">
                <a href=""><i className="bi bi-twitter text-white"></i></a>
              </li>
              <li className="border p-1 px-2 mx-2">
                <a href=""><i className="bi bi-youtube text-white"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
