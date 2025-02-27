import { useState, useEffect } from "react";
import axios from "axios";

function DoctorProfiles() {
  const [profile, setProfile] = useState({});
  // const doctorName = localStorage.getItem('name');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
            `${import.meta.env.REACT_APP_BACKEND_URL}/doctor/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setProfile(response.data); // Store profile data in state
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mt-2">
            <h4 className="">Doctor Profiles</h4>
            <hr />
            <div className="doc-profile-box mt-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="doc-profile-img">
                    <img
                                          src={`${import.meta.env.REACT_APP_BACKEND_URL}/uploads/${profile.photo}`}
                      alt={profile.FullName}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="doc-profile-details">
                    <h3 className="text-dark-blue">{profile.FullName}</h3>
                    <p className="mb-0 text-maroon">{profile.Designation}</p>
                    <p className=" text-maroon">{profile.Specialist}</p>
                    <p className="mb-1"><strong>Email:</strong> {profile.Email}</p>
                    <p className="mb-1"><strong>Phone:</strong> {profile.Phone}</p>
                    <p className="mb-1"><strong>Password:</strong> {profile.Password}</p>
                    <p className="mb-1 doc-fees">
                      <h6>Fees</h6> {profile.Fees}
                    </p>
                    <p className="mb-1">
                      <strong>Details:</strong> {profile.Details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfiles;
