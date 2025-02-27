import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorsList = async () => {
      try {
        const response = await axios.get(
            `${import.meta.env.REACT_APP_BACKEND_URL}/api/doctors/doctorsList`
        );
        // console.log(response.data); // Add this line to see the returned data
        setDoctors(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchDoctorsList();
    const intervalId = setInterval(fetchDoctorsList, 30000);

    return () => clearInterval(intervalId);
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${import.meta.env.REACT_APP_BACKEND_URL}/api/doctors/delete/${id}`);
  //     alert('Doctor deleted successfully!');
  //     setDoctors(doctors.filter(doctor => doctor.DoctorID !== id));
  //   } catch (err) {
  //     console.error(err);
  //     alert('Error deleting doctor');
  //   }
  // };

  const handleToggleActive = async (id, currentStatus) => {
    try {
        await axios.patch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/doctors/${id}/active`, {
        isActive: !currentStatus
      });
      alert(`Doctor ${currentStatus ? 'deactivated' : 'activated'} successfully!`);
      setDoctors(doctors.map(doctor => doctor.DoctorID === id ? { ...doctor, isActive: !currentStatus } : doctor));
    } catch (err) {
      console.error(err);
      alert('Error toggling active status');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="mt-3 text-center">
            <h4 className="mb-3">Doctors List</h4>
            <hr />
            </div>
            <div className="col-12">
            <button type="button" className="bg-dark-blue px-3 py-1 text-white" onClick={() => setIsFormOpen(true)}>
            <Link to="/addDoctors" className="text-white text-decoration-none">Add Doctors</Link>
            </button>
          </div>
          <div className="col-12">
            {error && <p className="error">Error: {error}</p>}
            <div className="row">
              {doctors.map((doctor) => (
                <div key={doctor.DoctorID || doctor.Email} className="col-md-12">
                  <div className="row doctor-card p-3 mt-3">
                    <div className="col-md-3">
                      <div className="doctor-photo">
                        <img
                                      src={`${import.meta.env.REACT_APP_BACKEND_URL}/api/image/${doctor.DoctorID}`}
                          alt={doctor.FullName}
                          className="img-fluid rounded"
                          style={{
                            width: "100%",
                            height: "270px",
                            // height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="doctor-info position-relative">
                        <h5>{doctor.FullName}</h5>
                        <ul>
                          <li><strong>ID:</strong> {doctor.DoctorID}</li>
                          <li><strong>Email:</strong> {doctor.Email}</li>
                          <li><strong>Phone:</strong> {doctor.Phone}</li>
                          <li><strong>Designation:</strong> {doctor.Designation}</li>
                          <li><strong>Specialist:</strong> {doctor.Specialist}</li>
                          <li><strong>Fees:</strong> {doctor.Fees}</li>
                          <li><strong>Admin ID:</strong> {doctor.AdminID}</li>
                          <li>
                          <strong>Status:</strong> <span className={doctor.isActive ? "text-success fw-bold" : "text-danger fw-bold"}>
                          {doctor.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </li>
                       
                        </ul>
                        <button onClick={() => handleToggleActive(doctor.DoctorID, doctor.isActive)} className="text-white px-3 p-1 rounded border bg-dark-blue doc-active">
                        {doctor.isActive ? 'In-active' : 'Active'}
                      </button>
                      <Link to={`/doctors-details/${doctor.DoctorID}`} className="read-more"> Read More</Link>

                      {/* <button onClick={() => handleDelete(doctor.DoctorID)} className="text-white px-3 p-1 rounded border ms-3 bg-maroon">
                        Delete
                      </button> */}
                      </div>
                    </div>
                    {/* <div className="col-md-3 mt-3">
                      <button onClick={() => handleToggleActive(doctor.DoctorID, doctor.isActive)} className="text-white px-3 p-1 rounded border bg-dark-blue">
                        {doctor.isActive ? 'Deactivate' : 'Activate'}
                      </button>
                      <button onClick={() => handleDelete(doctor.DoctorID)} className="text-white px-3 p-1 rounded border ms-3 bg-maroon">
                        Delete
                      </button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default DoctorsList;
