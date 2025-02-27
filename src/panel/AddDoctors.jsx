import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddDoctors = () => {
  const [doctorData, setDoctorData] = useState({
    FullName: "",
    Email: "",
    Password: "",
    Phone: "",
    Designation: "",
    Specialist: "",
    Details: "",
    Fees: "",
    AdminID: 1,
    CreateDate: "",
    Photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setDoctorData({
      ...doctorData,
      Photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    for (let key in doctorData) {
      formData.append(key, doctorData[key]);
    }

    // Send data to backend
    axios
      .post(`${import.meta.env.REACT_APP_BACKEND_URL}/api/doctors/addDoctors`, formData)
      .then((response) => {
        console.log(response.data);
        toast.success("Doctor added successfully");
      })
      .catch((error) => {
        console.error("Error uploading doctor data", error);
        toast.error("Error uploading doctor data");
      });
  };

  return (
    <div className="container-fluid">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="mt-2 text-center">
            <h4 className="">Add Doctor</h4>
            <hr className="" />
            <form onSubmit={handleSubmit} className="add-doctor-card mt-4">
              <div className="row p-3">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="FullName"
                      className="form-control"
                      value={doctorData.FullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      value={doctorData.Email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      name="Password"
                      className="form-control"
                      value={doctorData.Password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="Phone"
                      className="form-control"
                      value={doctorData.Phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Designation</label>
                    <input
                      type="text"
                      name="Designation"
                      className="form-control"
                      value={doctorData.Designation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Specialist</label>
                    <input
                      type="text"
                      name="Specialist"
                      className="form-control"
                      value={doctorData.Specialist}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Fees</label>
                    <input
                      type="number"
                      name="Fees"
                      className="form-control"
                      value={doctorData.Fees}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Create Date</label>
                    <input
                      type="date"
                      name="CreateDate"
                      className="form-control"
                      value={doctorData.CreateDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Upload Photo</label>
                    <input
                      type="file"
                      name="Photo"
                      className="form-control"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Details</label>
                    <textarea
                      name="Details"
                      className="form-control"
                      value={doctorData.Details}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <button type="submit" className="bg-dark-blue text-white px-3 p-2 fw-bold rounded">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
