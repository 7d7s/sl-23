import React, { useEffect, useState } from 'react';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientsList = async () => {
      try {
          const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/patients/patientsList`);
        if (!response.ok) throw new Error('Failed to fetch patients');
        const data = await response.json();
        setPatients(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPatientsList();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="mt-3 text-center">
              <h4 className="mb-3">Patients List</h4>
              <hr />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12">
          {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
            <th>#</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th>Service</th>
              <th>Doctors</th> */}
              <th>DOB</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{patient.FirstName} {patient.LastName}</td>
                
                <td>{patient.Email}</td>
                <td>{patient.Phone}</td>
                {/* <td>{patient.Service}</td> */}
                {/* <td>{patient.Doctors}</td> */}
                <td>{patient.DOB}</td>
                <td>{patient.Gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
        </div>
        </div>
        </div>
</>
      );
    }

export default PatientList;
