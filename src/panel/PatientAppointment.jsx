import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function PatientAppointment() {
    const [appointments, setAppointments] = useState([]);
    const [errorTable, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [doctorId, setDoctorId] = useState(null);
    const [filter, setFilter] = useState('All'); 

    const fetchAppointments = async () => {
        if (doctorId) {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/appoin/${doctorId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch appointments: ${response.statusText}`);
                }
                const data = await response.json();
                setAppointments(data);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error('No doctor ID available');
        }
    };

    useEffect(() => {
        const storedDoctorId = localStorage.getItem('doctorId');
        if (storedDoctorId) {
            setDoctorId(storedDoctorId);
        } else {
            console.error('No doctor ID found in localStorage');
        }
    }, []);

    useEffect(() => {
        if (doctorId) {
            fetchAppointments();
            const intervalId = setInterval(fetchAppointments, 50000);
            return () => clearInterval(intervalId);
        }
    }, [doctorId]);

    //======API to get patients update 
    const updateStatus = async (id, status) => {
        try {
            const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/appoin/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });
    
            if (!response.ok) {
                const errorResponse = await response.json(); 
                console.error('Error response:', errorResponse);
                throw new Error('Failed to update status');
            }
    
            setAppointments((prevAppointments) =>
                prevAppointments.map((appointment) =>
                    appointment.AppointmentID === id
                        ? { ...appointment, AppointmentStatus: status }
                        : appointment
                )
            );
        } catch (err) {
            setError(err.message);
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'text-success fw-bold'; // Green
            case 'Completed':
                return 'text-info fw-bold';    // Blue
            default:
                return 'text-secondary fw-bold'; // Grey for pending or unknown
        }
    };

    // Filter appointments based on selected status
    const filteredAppointments = filter === 'All' 
        ? appointments 
        : appointments.filter(appointment => appointment.AppointmentStatus === filter);

    // Count totals based on status
    const totalCompleted = appointments.filter(a => a.AppointmentStatus === 'Completed').length;
    const totalConfirmed = appointments.filter(a => a.AppointmentStatus === 'Confirmed').length;
    const totalPending = appointments.filter(a => a.AppointmentStatus === 'Pending').length;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 mt-2">
                    <h4 className='mb-4'>Appointment List</h4>
                    <div className="row">
                        <div className="col-md-5">
                    <span className='fw-bold '> &nbsp; Filter By: </span>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className='w-50 custom-select-filter'>
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                    </select>
</div>
<div className="col-md-7">
                    <span className='fw-bold border p-2 text-info'>Completed: &nbsp; {totalCompleted},</span>&nbsp;
                    <span className='fw-bold border p-2 text-success'> Confirmed: &nbsp; {totalConfirmed},</span>&nbsp;
                    <span className='fw-bold border p-2 text-warning'> Pending: &nbsp; {totalPending}</span>&nbsp;
                    </div>
                    </div>
                    <hr />
                    <div className="card table-container-01 mt-4">
                        {loading ? (
                            <p>Loading appointments...</p>
                        ) : errorTable ? (
                            <p>Error: {errorTable}</p>
                        ) : (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Patient Name</th>
                                        <th>Appointment Date</th>
                                        <th>Appointment Time</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {filteredAppointments.length > 0 ? (
                                        filteredAppointments.map((appointment, index) => (
                                            <tr key={`${appointment.AppointmentID || index}-${doctorId}`}>
                                                <td>{index + 1}</td>
                                                <td>{appointment.PatientFirstName} {appointment.PatientLastName}</td>
                                                <td>{format(new Date(appointment.AppointmentDate), 'dd-MM-yyyy')}</td>
                                                <td>{appointment.AppointmentTime}</td>
                                                <td className={getStatusClass(appointment.AppointmentStatus)}>
                                                    {appointment.AppointmentStatus}
                                                </td>
                                                <td>
                                                    <button onClick={() => updateStatus(appointment.AppointmentID, 'Confirmed')} className="btn-status" title='Confirmed'><i className="bi bi-check-circle text-success"></i></button>
                                                    <button onClick={() => updateStatus(appointment.AppointmentID, 'Completed')} className="btn-status" title='Completed'><i className="bi bi-check2-circle text-info"></i></button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">No appointments found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientAppointment;
