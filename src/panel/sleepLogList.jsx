import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SleepLogList = () => {
  const [sleepLogs, setSleepLogs] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fetch data
  useEffect(() => {
    const fetchSleepLogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.REACT_APP_BACKEND_URL}/api/sleepLogsData`);
        setSleepLogs(response.data);
      } catch (error) {
        console.error("Failed to fetch sleep logs:", error);
        setError("Could not fetch sleep logs.");
      } finally {
        setLoading(false);
      }
    };

    const fetchPatients = async () => {
      try {
        const response = await axios.get(`${import.meta.env.REACT_APP_BACKEND_URL}/api/sleepLogs/patientList`);
        setPatients(response.data);
      } catch (error) {
        console.error("Failed to fetch patients:", error);
        setError("Could not fetch patients.");
      }
    };

    fetchSleepLogs();
    fetchPatients();
    setCurrentDate(new Date().toISOString().slice(0, 10));
  }, []);

  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  // Save patient log
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to backend
      const response = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URL}/api/sleepLogs/generatePatientKey`, 
        { patientName: selectedPatient }
      );
  
      if (response.status === 200) {
        toast.success("Data saved successfully!");
        // Get the new log entry directly from the backend response
        const newLog = response.data.data; 
  
        // Update sleepLogs state with the new entry
        setSleepLogs((prevLogs) => [...prevLogs, newLog]);
  
        setIsFormOpen(false);
      } else {
        toast.error("Failed to save data.");
      }
    } catch (error) {
      // console.error("Error saving data:", error);
      // toast.error("Error saving data.");
      toast.error(`Log for this patient already exists for today: ${todayDate}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const todayDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="mt-3 text-center">
              <h4 className="mb-3">Sleep Logs</h4>
              <hr />
            </div>
          </div>
          <div className="col-12">
            <button type="button" className="bg-dark-blue px-3 py-1 text-white" onClick={() => setIsFormOpen(true)}>
              Add Patient
            </button>
          </div>

          {isFormOpen && (
            <div className="modal modal-popup-01 show" style={{ display: "block" }} tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h5 className="modal-title w-100">
                      Add Patient in sleep log for today's date: <br /> {todayDate}
                    </h5>
                    <button type="button" className="btn-close" onClick={() => setIsFormOpen(false)}></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <label htmlFor="">Choose Patient to add</label>
                          <select
                            className="form-select"
                            value={selectedPatient}
                            onChange={handlePatientChange}
                          >
                            <option value="">Select Patient:</option>
                            {patients.map((patient, index) => (
                              <option key={index} value={patient}>
                                {patient}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-2">
                          <button type="submit" className="bg-dark-blue px-3 py-1 text-white">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="col-12">
            <table className="table table-bordered mt-4">
              <thead className="table-dark">
                <tr>
                  <th>Patient Name</th>
                  <th>Patient Key</th>
                  <th>Create Date</th>
                  <th>Status</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {sleepLogs.map((log, index) => (
                  <tr key={index}>
                    <td>{log.patientName}</td>
                    <td>{log.patientKey}</td>
                    <td>{new Date(log.createDate).toLocaleDateString()}</td>
                    <td>{log.status}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-light d-flex align-items-center"
                        onClick={() => {
                          const textToCopy = `http://localhost:5173/sleeplog?pk=${log.patientKey}`;
                          navigator.clipboard.writeText(textToCopy).then(() => {
                            toast.success("Link copied to clipboard!");
                          }).catch((error) => {
                            toast.error("Failed to copy link.");
                            console.error(error);
                          });
                        }}
                      >
                        <label htmlFor="">Copy &nbsp;</label>
                        <i className="bi bi-copy"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default SleepLogList;
