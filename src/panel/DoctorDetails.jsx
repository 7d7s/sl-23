import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { format } from 'date-fns';

function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
          const response = await axios.get(`${import.meta.env.REACT_APP_BACKEND_URL}/api/doctors-details/${id}`);
        setDoctor(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchAppointments = async () => {
      try {
          const response = await axios.get(`${import.meta.env.REACT_APP_BACKEND_URL}/api/appoin/appointmentsPatientDetails/${id}`);
        setAppointments(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDoctorDetails();
    fetchAppointments();
  }, [id]);

  if (error) return <p className="error">Error: {error}</p>;
  if (!doctor) return <p>Loading...</p>;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="mt-3">
            <h4 className="mt-3">Doctors Informations:</h4>
            <hr />
          </div>
          </div>
          <div className="doctors-details-card mt-2">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="doctor-photo">
                    <img
                                          src={`${import.meta.env.REACT_APP_BACKEND_URL}/api/image/${doctor.DoctorID}`}
                      alt={doctor.FullName}
                      className="img-fluid rounded"
                      style={{ width: "100%", minHeight: "100%", maxHeight: "350px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <h2 className="text-dark-blue mb-3 ff-Lexend">{doctor.FullName}</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="ps-0 mb-0 list-unstyled">
                        <li><strong>Email:</strong> {doctor.Email}</li>
                        <li><strong>Phone:</strong> {doctor.Phone}</li>
                        <li><strong>Designation:</strong> {doctor.Designation}</li>
                        <li><strong>Fees:</strong> {doctor.Fees}</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="ps-0 mb-0 list-unstyled">
                      <li><strong>Password:</strong> {doctor.Password}</li>
                        <li><strong>Specialist:</strong> {doctor.Specialist}</li>
                        <li><strong>Status:</strong> {doctor.isActive ? "Active" : "Inactive"}</li>
                      </ul>
                    </div>
                    <div className="col-md-12">
                      <strong>About:</strong>
                      <p>{doctor.Details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
        <div className="doctors-details-card">
          <div className="col-md-12">
            <h3>Appointment List:</h3>
            {appointments.length === 0 ? (
              <p>No appointments found for this doctor.</p>
            ) : (
              <table className="table my-4 ">
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Patient Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Created Date</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={appointment.ID}>
                      <td>{index + 1}</td>
                      <td>{appointment.PatientName} {appointment.PatientLName}</td>
                      <td>{format(new Date(appointment.Appointment_date), 'dd-MM-yyyy')}</td>
                      <td>{appointment.Appointment_time}</td>
                      <td>{appointment.Status}</td>
                      <td>{format(new Date(appointment.Create_Date), 'dd-MM-yyyy')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDetails;
