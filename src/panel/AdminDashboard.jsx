import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AppointmentsAdmin from "../../src/assets/img/appointmentAdmin.png";
import DoctorsAdmin from "../../src/assets/img/doctorsAdmin.png";
import patientsAdmin from "../../src/assets/img/patientsAdmin.png";



function AdminDashboard({ handleLogout, userRole }) {
  const [doctorCount, setDoctorCount] = useState(0);
  const [appintmeentCount, setAppointmentCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);

  //=========Doctors count========
  useEffect(() => {
    const fetchDoctorsCount = async () => {
      try {
          const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/doctor-count`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDoctorCount(data.total_doctors);
      } catch (error) {
        console.error("Error fetching doctor count:", error);
      }
    };
    fetchDoctorsCount();
    const intervalId = setInterval(fetchDoctorsCount, 2000);
    return () => clearInterval(intervalId);
  }, []);

  //=========Appointment count========
  useEffect(() => {
    const fetchAppointmentCount = () => {
        fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/patientApp/totalAppointment`)
        .then((response) => response.json())
        .then((data) => {
          setAppointmentCount(data.total_appointment);
        })
        .catch((error) => console.error("Error fetching doctor:", error));
    };
    fetchAppointmentCount();
    const intervalId = setInterval(fetchAppointmentCount, 3000);
    return () => clearInterval(intervalId);
  }, []);

  //=========Patients count========
  useEffect(() => {
    const fetchPatientCount = async () => {
      try {
          const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/patientApp/totalPatient`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Error handling for response
        }
        const data = await response.json();
        setPatientCount(data.total_patients); // Set the count from API response
      } catch (error) {
        console.error("Error fetching patient count:", error); // Log any errors
      }
    };
    fetchPatientCount();
    const intervalId = setInterval(fetchPatientCount, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4 mt-3">
                <div className="dashboard-card p-3 bg-light">
                  <img src={DoctorsAdmin} alt="total doctors" />
                  <div className="d-flex justify-content-center align-items-start flex-column w-100 ps-2">
                    <h3 className="">{doctorCount}</h3>
                    <h5>Doctors</h5>
                  </div>  
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 mt-3">
                <div className="dashboard-card p-3 bg-light">
                  <img src={AppointmentsAdmin} alt="total doctors" />
                  <div className="d-flex justify-content-center align-items-start flex-column w-100 ps-2">
                    <h3 className="">{appintmeentCount}</h3>
                    <h5>Appointments</h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 mt-3">
                <div className="dashboard-card p-3 bg-light">
                  <img src={patientsAdmin} alt="total doctors" />
                  <div className="d-flex justify-content-center align-items-start flex-column w-100 ps-2">
                    <h3 className="">{patientCount}</h3>
                    <h5>Patients</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
