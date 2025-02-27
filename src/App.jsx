
import React, { useState } from "react";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";
import './assets/Responsive.css';
import Home from "./pages/Home";
import Services from "./pages/Services";
// import CustomCursor from "./components/CustomCursor";
import NavBar from "./components/NavBar";
import NavbarDropDown from "./components/NavbarDropDown";
import TopNavBar from "./components/TopNavBar";
import Doctors from "./pages/Doctors";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./models/Error";
import Appointment from "./models/Appointment";
import Login from "./models/Login";
import SleepLibrary from "./pages/Library";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ScrollToHome from "./components/ScrollToHome";
import Dashboard from "./panel/Dashboard";
import AppointmentList from "./panel/AppointmentList";
import AsideBar from "./panel/AsideBar";
import AdminDashboard from "./panel/AdminDashboard";
import AddDoctors from "./panel/AddDoctors.jsx";
import DoctorsList from "./panel/DoctorsList";
import PatientAppointment from "./panel/PatientAppointment";
import ConfirmBooking from "./panel/ConfirmBoking";
import DoctorProfiles from "./panel/DoctorProfiles";
import DoctorDashBoard from "./panel/DoctorDashBoard";
import PatientList from "./panel/PatientList";
import DoctorDetails from "./panel/DoctorDetails.jsx";
import SleepLog from "./pages/SleepLog.jsx";
import Footer from "./components/Footer.jsx";
import SleepLogList from "./panel/sleepLogList.jsx";
import AssessmentList from "./panel/AssessmentList.jsx";

function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserRole, setLoggedInUserRole] = useState(null);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setLoggedInUserRole(role);

    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userRole', role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUserRole(null);
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('userRole'); 
  };

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    const storedRole = localStorage.getItem('userRole');
    
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
      setLoggedInUserRole(storedRole);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {isLoggedIn ? (
        // User is logged in
        <>
          <Dashboard handleLogout={handleLogout} userRole={loggedInUserRole} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4"> {/* Sidebar */}
                <AsideBar userRole={loggedInUserRole} />
              </div>
              <div className="col-lg-9 col-md-8"> {/* Main content area */}
                <div className="p-3 hv-100 overflow-y-scroll y-scroll-bar">
                  <Routes>
                    {loggedInUserRole === "Admin" ? (
                      <Route path="/" element={<Navigate to="/adminDashboard" replace />} />
                    ) : loggedInUserRole === "Doctor" ? (
                      <Route path="/" element={<Navigate to="/doctorDashboard" replace />} />
                    ) : null}
                    {/* Common routes for both Admin and Doctor */}
                    <Route path="/adminDashboard" element={<AdminDashboard />} />
                    <Route path="/doctorDashboard" element={<DoctorDashBoard />} />
                    <Route path="/appointmentsList" element={<AppointmentList />} />
                    <Route path="/addDoctors" element={<AddDoctors />} />
                    <Route path="/doctorsList" element={<DoctorsList />} />
                    <Route path="/patientAppointment" element={<PatientAppointment />} />
                    <Route path="/doctorProfile" element={<DoctorProfiles />} />
                    <Route path="/patientList" element={<PatientList />} />
                    <Route path="/doctors-details/:id" element={<DoctorDetails/>} />
                    <Route path="/sleepLogList" element={<SleepLogList/>} />
                    <Route path="/assessmentList" element={<AssessmentList/>} />
                    {/* Default Route */}
                    <Route path="*" element={<Error />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Normal layout when logged out
        <>
          <TopNavBar />
          <ScrollToHome />

          <NavBar />
          <NavbarDropDown />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor/confirm-booking/:DoctorID" element={<ConfirmBooking />} />
            <Route path="/library" element={<SleepLibrary />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/sleepLog" element={<SleepLog/>} />
            <Route path="*" element={<Error />} />

            <Route path="/appointment" element={<Appointment />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />}
            />
          </Routes>
          {/* <CustomCursor /> */}
          <Footer/>
        </>
      )}
    </Router>
  );
}

export default App;
