import { Link } from "react-router-dom";

function AsideBar({userRole }) {

  return (
    <>
       <div className="aside-box-10">
                {userRole === "Admin" ? ( // Admin dashboard links
                  <ul className="ps-1 adminDashboard">
                    <li className="mt-5"> 
                      <i className="bi bi-speedometer"></i>
                      <Link to="/adminDashboard">Dashboard</Link>
                    </li>
                    <li className="">
                      <i className="bi bi-list-check"></i>
                      <Link to="/appointmentsList">Appointments</Link>
                    </li>
                    {/* <li className="">
                      <i className="bi bi-person-plus"></i>
                      <Link to="/addDoctors">Add Doctors</Link>
                    </li> */}
                    <li className="">
                      <i className="bi bi-person-lines-fill"></i>
                      <Link to="/doctorsList">Doctors</Link>
                    </li>
                    <li className="">
                      <i className="bi bi-person-lines-fill"></i>
                      <Link to="/patientList">Patients</Link>
                    </li>
    <li><i className="bi bi-person-lines-fill"></i> <Link to="/sleepLogList">Sleep Logs </Link></li>
    <li><i className="bi bi-person-lines-fill"></i> <Link to="/assessmentList">Assessments</Link></li>
                  </ul>
                ) : (
                  <ul className="ps-1 doctorDashboard">
                    <li className="mt-4">
                      <i className="bi bi-speedometer"></i>
                      <Link to="/doctorDashboard">Dashboard</Link>
                    </li>
                    <li className="">
                      <i className="bi bi-list-check"></i>
                      <Link to="/patientAppointment">Appointments</Link>
                    </li>
                    <li className="">
                      <i className="bi bi-person-lines-fill"></i>
                      <Link to="/doctorProfile">Profile</Link>
                    </li>
                  </ul>
                )}
              </div>
    </>
  )
}

export default AsideBar
