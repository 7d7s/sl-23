import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import contactRight from "../assets/img/contact-right-img.png";
import contactImage1 from "../assets/img/contact-4-1-1.jpg"; // Check for correct image extension
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";   
import axios from "axios";  // Import axios for HTTP requests

function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [startDate, setStartDate] = useState(null); // Added state for DatePicker
  const navigate = useNavigate();

  const serviceDoctorMap = {
    "Psychological assessment": { name: "Dr. A.K. Gautam", id: "dr-gautam" },
    "Occupational therapy assessment": { name: "Dr. Priyanka Chanyal", id: "dr-priyanka-chanyal" },
    "Polysomnography": { name: "Dr. Harish Chandra", id: "dr-harish-chandra" },
    "Ergonomic modification": { name: "Dr. Bhanu Mishra", id: "dr-bhanu-mishra" },
    "Postural guide": { name: "Dr. Bhanu Mishra", id: "dr-bhanu-mishra" },
    "Sensory diet": { name: "Ms. Upinder Kaur", id: "upinder-kaur" },
    "Restorative sleep therapy": { name: "Ms. Upinder Kaur", id: "upinder-kaur" },
    "Cognitive therapy": { name: "Dr. Varun", id: "dr-varun" },
    "Cognitive behavioural therapy": { name: "Ms. Upinder Kaur", id: "upinder-kaur" },
    "Lifestyle intervention": { name: "Ms. Upinder Kaur", id: "upinder-kaur" },
    "Diagnosis": { name: "Dr. Nitya Subramanium", id: "dr-nitya-subramanium" },
    "Customized treatment plans": { name: "Ms. Upinder Kaur", id: "upinder-kaur" },
    "Online consultation": { name: "Ms. Upinder Kaur", id: "upinder-kaur" }
  };

  const handleServiceChange = (event) => {
    const serviceValue = event.target.value;
    setSelectedService(serviceValue);
    setSelectedDoctor(serviceDoctorMap[serviceValue]?.name || "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName || !email || !phone || !selectedService) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const doctorId = serviceDoctorMap[selectedService]?.id;
    const password = fullName.length >= 3 ? `${fullName.slice(0, 3)}@123` : `${fullName}@123`;

    const patientData = {
      FirstName: fullName.split(" ")[0],
      LastName: fullName.split(" ")[1] || "",
      Email: email,
      Password: password,  // Using the dynamic password logic
      Phone: phone,
      Service: selectedService,
      Doctors: selectedDoctor,
      DOB: "01-01-2000", // Use selected date for DOB
      Gender: "Other"
    };

    try {
      const response = await axios.post('http://localhost:8091/patients', patientData);
      
      if (response.status === 201) {
        toast.success("Appointment created successfully!");
        setTimeout(() => {
          navigate(`/doctors/${doctorId}`);
        }, 1100);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create appointment. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container-fluid bg-light-101 px-0 contact-margin-padding">
        <div className="container-fluid">
          <div className="row justify-content-end position-relative">
            <div className="contact-shape" style={{ backgroundImage: `url(${contactRight})` }}></div>
            <div className="col-xl-5 col-lg-12 z-1 pb-m-4 form-margin-padding">
              <div className="heading-title">
                <h6 className="text-gray">
                  <i className="bi bi-flower2"></i> Contact With Me
                </h6>
                <h2 className="section-title__title mb-4">
                  Feel Free to Write Us Anytime
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 my-2">
                    <div className="Contact_input">
                      <input
                        type="text"
                        name="FullName"
                        placeholder="Full Name"
                        className="form-control w-100"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="Contact_input">
                      <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        className="form-control w-100"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="Contact_input">
                      <input
                        type="tel"
                        name="Phone"
                        placeholder="Enter Phone"
                        className="form-control w-100"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="Contact_input bootstrap-select">
                      <select
                        className="form-control"
                        value={selectedService}
                        onChange={handleServiceChange}
                      >
                        <option value="" disabled>
                          -Select a Service-
                        </option>
                        {Object.keys(serviceDoctorMap).map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 my-2">
                    <div className="Contact_input bootstrap-select">
                      <select
                        className="form-control"
                        value={selectedDoctor}
                        readOnly
                      >
                        <option value="">{selectedDoctor ? selectedDoctor : "--Select a Doctor--"}</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="col-md-6 my-2">
                    <div className="date-picker-container">
                      <div className="date-picker-wrapper">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="custom-date-picker"
                          placeholderText="Pick a date"
                          id="date-picker-input"
                          minDate={new Date()} // Disable past dates
                        />
                        <i className="bi bi-calendar-event"></i>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-md-6 my-2">
                    <button type="submit" className="btn-sm-01 thm-btn-sm-01">
                      Book Online Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-6 col-lg-12 p-0 position-relative">
              <div className="mask-img">
                <img src={contactImage1} alt="" />
              </div>
              <div className="w-100 h-100 d-md-block d-m-none overly-img-1"></div>
              <div className="w-100 h-75 d-md-block d-m-none overly-img-2"></div>
              <div className="contact_info">
                <div className="contact_info__icon">
                  <i className="bi bi-phone"></i>
                </div>
                <div className="contact_info__content">
                  <h4>Call Us:</h4>
                  <p>+91 12 1234 5678</p>
                </div>
              </div>
              <div className="contact_info">
                <div className="contact_info__icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact_info__content">
                  <h4>Email Us:</h4>
                  <p>example@example.com</p>
                </div>
              </div>
              <div className="contact_info">
                <div className="contact_info__icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact_info__content">
                  <h4>Our Location:</h4>
                  <p>
                  Sleme, I-102, 2<sup>nd</sup> Floor, Block I, Kirti Nagar, Delhi, 110015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
