import React, { useEffect, useState } from "react";
import { format } from 'date-fns';

const AssessmentList = () => {
  const [allAssessmentData, setAllAssessmentData] = useState([]); // Store all fetched data
  const [filteredAssessmentData, setFilteredAssessmentData] = useState([]); // Store filtered data for display
  const [filterName, setFilterName] = useState('');
  const [filterDate, setFilterDate] = useState(''); // Store selected date
  const [names, setNames] = useState([]); // Store unique names for the filter dropdown

  // Fetch assessment data and unique names on component mount
  useEffect(() => {
    fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/getAssessmentData`)
      .then((response) => response.json())
      .then((data) => {
        setAllAssessmentData(data);
        setFilteredAssessmentData(data); // Initialize filtered data with all data

        // Extract unique names for the dropdown
        const uniqueNames = [...new Set(data.map((item) => item.FirstName))];
        setNames(uniqueNames);

        // Set the current date as the default filter date
        const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in yyyy-MM-dd format
        setFilterDate(currentDate);

        // Call applyFilters to filter the data by the current date
        applyFilters(currentDate);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to handle filtering logic
  const applyFilters = (currentDate) => {
    const filteredData = allAssessmentData.filter((row) => {
      const matchesName = filterName ? row.FirstName === filterName : true;
      const matchesDate = currentDate ? format(new Date(row.CreatedAt), 'yyyy-MM-dd') === currentDate : true;
      return matchesName && matchesDate;
    });
    setFilteredAssessmentData(filteredData);
  };

  // Reapply filters whenever filterName or filterDate changes
  useEffect(() => {
    applyFilters(filterDate);
  }, [filterName, filterDate]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="mt-3 text-center">
            <h4 className="mb-3">Assessment List</h4>
            <hr />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="filterName">Search By Patient:</label>
              <select
                id="filterName"
                className="form-control"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
              >
                <option value="">Select</option>
                {names.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-5">
              <label htmlFor="filterDate">Date:</label>
              <input
                type="date"
                id="filterDate"
                className="form-control"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              />
            </div>
          </div>
          <hr />
        </div>

        {/* Filtered Data Table */}
        <div className="col-xl-12 col-lg-12 col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center" width={120}>
                  Date
                </th>
                <th className="text-center" width={160}>
                  Patient Name
                </th>
                <th className="text-center">QueID</th>
                <th className="text-center">QuestionName</th>
                <th className="text-center">Answer Text</th>
                <th className="text-center">Answer Value</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssessmentData.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No assessment data available.
                  </td>
                </tr>
              ) : (
                filteredAssessmentData.map((row) => {
                  const uniqueKey = `${row.PatientID || "unknown"}-${row.QuestionId || "unknown"}-${row.CreatedAt}`; // Ensure the key is unique
                  return (
                    <tr key={uniqueKey} className="text-center">
                      <td>{format(new Date(row.CreatedAt), "dd-MM-yyyy")}</td>
                      <td>{row.FirstName}</td>
                      <td>{row.QuestionId}</td>
                      <td>{row.QuestionName}</td>
                      <td>{row.AnswerText}</td>
                      <td>{row.AnswerValue}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssessmentList;
