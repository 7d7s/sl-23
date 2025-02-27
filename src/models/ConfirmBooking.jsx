import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { patientData, doctorId } = location.state;

  const handleConfirm = () => {
    // Redirect to the doctor's page or success page after confirmation
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <section className="mt-5 pt-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="card p-4 box-sd">
              <h3>Confirm Your Appointment</h3>
              <p><strong>Patient Name:</strong> {patientData.FirstName} {patientData.LastName}</p>
              <p><strong>Email:</strong> {patientData.Email}</p>
              <p><strong>Phone:</strong> {patientData.Phone}</p>
              <p><strong>Service:</strong> {patientData.Service}</p>
              <p><strong>Assigned Doctor:</strong> {patientData.Doctors}</p>
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>Go Back</button>
                <button className="btn btn-primary" onClick={handleConfirm}>Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmBooking;
