import React, { useState, useEffect } from 'react';
import todayAppointment from "../assets/img/todayAppointment.png";
import futureAppointment from "../assets/img/futureAppointment.png";
import completedAppointment from "../assets/img/completedAppointment.png";

function DoctorDashBoard() {
  const [todayCount, setTodayCount] = useState(0);
  const [futureCount, setFutureCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [error, setError] = useState(null);

  // Function to fetch today's appointments count
  const fetchTodayCount = async () => {
    try {
        const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/patientApp/todayCount`);
      if (!response.ok) {
        throw new Error('Failed to fetch today\'s appointment count');
      }
      const data = await response.json();
      setTodayCount(data.count);
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to fetch future appointments count
  const fetchFutureCount = async () => {
    try {
        const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/patientApp/futureCount`); // Update to your endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch future appointment count');
      }
      const data = await response.json();
      setFutureCount(data.count);
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to fetch completed appointments count
  const fetchCompletedCount = async () => {
    try {
        const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/patientApp/patientCompleted`); // Replace with your API URL
      if (!response.ok) {
        throw new Error('Failed to fetch completed patient count');
      }
      const data = await response.json();
      setCompletedCount(data.count);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch counts when the component mounts
  useEffect(() => {
    fetchTodayCount();
    fetchFutureCount();
    fetchCompletedCount();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {error && <p className="text-danger">{error}</p>}
        <div className="col-xl-3 col-lg-4 col-md-4 mt-3">
          <div className="dashboard-card p-3 bg-light">
            <img src={todayAppointment} alt="total doctors" />
            <div className="d-flex justify-content-center align-items-start flex-column w-100 ps-2">
              <h3>{todayCount}</h3>
              <h5>Today's </h5>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 mt-3">
          <div className="dashboard-card p-3 bg-light">
            <img src={futureAppointment} alt="total doctors" />
            <div className="d-flex justify-content-center align-items-start flex-column w-100 ps-2">
              <h3>{futureCount}</h3>
              <h5>Future </h5>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 mt-3">
          <div className="dashboard-card p-3 bg-light">
            <img src={completedAppointment} alt="total doctors" />
            <div className="d-flex justify-content-center align-items-start flex-column w-100 ps-2">
              <h3>{completedCount}</h3>
              <h5>Completed </h5>
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
}

export default DoctorDashBoard;
