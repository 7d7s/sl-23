import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ Email: "", Password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Logout function to clear localStorage
  const User_logout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem('name');
    // console.log('User logged out and localStorage cleared');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    User_logout(); // Ensure the user is logged out before login attempt
    
    axios
    .post(`${import.meta.env.REACT_APP_BACKEND_URL}/login`, user)
      .then((response) => {
        const { token, role, name, doctorId } = response.data; // Destructure DoctorID from response

        if (token) {
          // Save the token, doctor name, and DoctorID to localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("doctorId", doctorId);
          localStorage.setItem("name", name);

          // console.log('Doctor Name:', name);
          // console.log('Doctor ID:', doctorId);

          handleLogin(role);
          navigate("/");

          // Display success message with doctor's name
          toast.success(`Login successful! Welcome, Dr. ${name}`);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        toast.error("Login failed. Please check your Email & Password.");
      });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <section>
        <div className="container my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-5 col-md-5">
              <div className="card p-4 box-sd">
                <div className="row">
                  <form onSubmit={handleSubmit}>
                    <h3>Login Now</h3>
                    <div className="col-md-12 my-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="Email"
                        // placeholder="Email"
                        className="form-control w-100"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-4">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="Password"
                        // placeholder="Enter Password"
                        className="form-control w-100"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-1">
                      <button
                        type="submit"
                        className="p-2 rounded text-white bg-dark-blue w-100"
                      >
                        Login
                      </button>
                      <br />
                      <br />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
