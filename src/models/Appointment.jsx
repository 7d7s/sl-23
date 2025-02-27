import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Appointment() {
  const [services, setServices] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]); // Added to store available slots
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [selectedSlotDay, setSelectedSlotDay] = useState("");
  const [selectedSlotTime, setSelectedSlotTime] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  // Fetch services and doctors on component load
  useEffect(() => {
    const fetchServicesAndDoctors = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.REACT_APP_BACKEND_URL
          }/api/appointment/GetActiveDoctorTypes?clinickey=SL7hK2aymp`
        );
        if (!response.ok)
          throw new Error("Failed to fetch services and doctors.");

        const data = await response.json();
        setServices(data);
      } catch (error) {
        toast.error("Error fetching services and doctors.");
        console.error(error);
      }
    };

    fetchServicesAndDoctors();
  }, []);

  // Handle service change
  const handleServiceChange = async (event) => {
    const serviceValue = event.target.value;
    setSelectedService(serviceValue);
    setSelectedDoctor("");
    setAvailableSlots([]);

    if (serviceValue) {
      try {
        const response = await fetch(
          `http://localhost:2025/api/appointment/GetDoctorsBySpecialist?specialist=${encodeURIComponent(
            serviceValue
          )}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch doctors for the selected service.");
        }

        const doctors = await response.json();
        setDoctorsList(doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast.error("Failed to fetch doctors. Please try again later.");
      }
    } else {
      setDoctorsList([]);
    }
  };

  // Handle doctor selection
  const handleDoctorChange = async (event) => {
    const doctorId = event.target.value;
    setSelectedDoctor(doctorId);
    setAvailableSlots([]);
    setSelectedSlotDay("");
    setSelectedSlotTime("");

    if (doctorId) {
      try {
        const response = await fetch(
          `http://localhost:2025/api/appointment/GetAvailableSlotsByDay?doctorId=${doctorId}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch available slots for the selected doctor."
          );
        }

        const slots = await response.json();
        setAvailableSlots(slots);
      } catch (error) {
        console.error("Error fetching available slots:", error);
        toast.error("Failed to fetch available slots. Please try again later.");
      }
    }
  };

  // Form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const appointmentData = {
      FullName,
      Email,
      Phone,
      Gender: gender,
      DoctorId: selectedDoctor,
      SelectedDate: selectedSlotDay,
      SelectedTime: selectedSlotTime,
      ClinicKey: "SL7hK2aymp",
    };

    try {
      const response = await fetch(
        `http://localhost:2025/api/appointment/SaveAppointment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(appointmentData),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Failed to book the appointment.");
        throw new Error("Failed to book the appointment.");
      } else if (
        result.message ===
        "A patient with the same email or phone already exists."
      ) {
        setShowLoginModal(true); // Show the login button
      } else {
        toast.success(result.message || "Appointment booked successfully!");
      }

      // toast.success("Appointment booked successfully!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Failed to book appointment. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="my-5 pt-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="card p-4 box-sd">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <h3 className="col-md-12 mb-4">Appointment Now</h3>
                    <div className="mb-3 col-md-12">
                      <label htmlFor="FullName">Full Name</label>
                      <input
                        type="text"
                        name="FullName"
                        className="form-control"
                        value={FullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        name="Phone"
                        className="form-control"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                        maxLength={10}
                        pattern="^\d{10}$"
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-12">
                      <label>Gender</label>
                      <select
                        className="form-control"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="service">Service</label>
                      <select
                        className="form-control"
                        value={selectedService}
                        onChange={handleServiceChange}
                        required
                      >
                        <option value="" disabled>
                          - Select a Service -
                        </option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.text}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="doctor">Doctor</label>
                      <select
                        className="form-control"
                        value={selectedDoctor}
                        onChange={handleDoctorChange}
                        disabled={!doctorsList.length}
                        required
                      >
                        <option value="" disabled>
                          - Select a Doctor -
                        </option>
                        {doctorsList.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="appointment-date">Appointment Date</label>
                      <select
                        className="form-control"
                        value={selectedSlotDay}
                        onChange={(e) => setSelectedSlotDay(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          - Select a Date -
                        </option>
                        {availableSlots.map((slot) => (
                          <option key={slot.date} value={slot.date}>
                            {slot.date} ({slot.dayName})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="appointment-time">Appointment Time</label>
                      <select
                        className="form-control"
                        value={selectedSlotTime}
                        onChange={(e) => setSelectedSlotTime(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          - Select a Time -
                        </option>
                        {availableSlots
                          .find((slot) => slot.date === selectedSlotDay)
                          ?.slotTimes.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="p-2 rounded text-white bg-dark-blue w-100"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showLoginModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">User Profile Exists</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLoginModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  User profile already exists. Please{" "}
                  <button
                    className="btn btn-link p-0"
                    onClick={() => navigate("/login")}
                    style={{ textDecoration: "underline", color: "#007bff" }}
                  >
                    click here
                  </button>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Appointment;
