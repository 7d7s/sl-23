import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [errorTable, setError] = useState(null);
  const [filter, setFilter] = useState('All');
  const [selectedDate, setSelectedDate] = useState(''); // For date filtering

  const updateStatus = async (id, newStatus) => {
    try {
        const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/appoin/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error('Failed to update status');
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.ID === id ? { ...appointment, Status: newStatus } : appointment
        )
      );
    } catch (err) {
      console.error('Error updating status:', err);
      setError(err.message);
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
          const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/appoin/appointmentList`);
        if (!response.ok) throw new Error('Failed to fetch appointments');
        const data = await response.json();
        setAppointments(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      }
    };

    fetchAppointments();
    const intervalId = setInterval(fetchAppointments, 10000);
    return () => clearInterval(intervalId);
  }, []);

  // Filter appointments based on status and date
const filteredAppointments = appointments.filter((appointment) => {
  const statusMatch = filter === 'All' || appointment.Status.toLowerCase() === filter.toLowerCase();
  const dateMatch = !selectedDate || format(new Date(appointment.Appointment_date), 'yyyy-MM-dd') === selectedDate;
  return statusMatch && dateMatch;
});

  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="mt-3 text-center">
            <h4 className="mb-3">Appointment List</h4>
            <hr />
            </div>
            </div>
            </div>
          <div className="row">
            <div className="col-md-5">
              <span className='fw-bold'> &nbsp; Filter By Status: </span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className='w-50 custom-select-filter'
              >
                <option value="All">All</option>
                <option value="Canceled">Canceled</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="col-md-5">
              <span className='fw-bold'> &nbsp; Filter By Date: </span>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className='w-50 custom-select-filter'
              />
            </div>
          </div>
          <hr />
          <div className="card table-container-01 mt-4">
            {errorTable ? (
              <p>Error: {errorTable}</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Doctor Name</th>
                    <th>Patient Name</th>
                    <th>Phone Number</th>
                    <th>Date / Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment, index) => (
                      <tr key={appointment.ID || index}>
                        <td>{index + 1}</td>
                        <td>{appointment.DoctorName}</td>
                        <td>{appointment.PatientName} {appointment.PatientLastName}</td>
                        <td>{appointment.PatientPhone}</td>
                        <td>{format(new Date(appointment.Appointment_date), 'dd-MM-yyyy')} / {appointment.Appointment_time}</td>
                        <td>
                          <span
                            style={{
                              color:
                                appointment.Status === 'Confirmed'
                                  ? 'green'
                                  : appointment.Status === 'Canceled'
                                  ? 'red'
                                  : appointment.Status === 'Pending'
                                  ? 'orange'
                                  : 'black',
                              fontWeight: 'bold',
                            }}
                          >
                            {appointment.Status.charAt(0).toUpperCase() + appointment.Status.slice(1)}
                          </span>
                        </td>
                        <td>
                          <button onClick={() => updateStatus(appointment.ID, 'Pending')} title='Pending' className="btn-status">
                            <i className="bi bi-dash-circle-dotted text-warning"></i>
                          </button>
                          <button onClick={() => updateStatus(appointment.ID, 'Confirmed')} title='Confirm' className="btn-status">
                            <i className="bi bi-check-circle text-success"></i>
                          </button>
                          <button onClick={() => updateStatus(appointment.ID, 'Canceled')} title='Canceled' className="btn-status">
                            <i className="bi bi-x-circle text-danger"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">No appointments found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
    </div>
  );
}

export default AppointmentList;
