import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function ConfirmBooking() {
  const { DoctorID } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes] = useState(['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM']);
  const [availableDates, setAvailableDates] = useState([]);
  const [patientID, setPatientID] = useState('');

  useEffect(() => {
    // Fetching doctor details
    const fetchDoctorDetails = async () => {
      try {
          const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/doctors/confirmBooking/${DoctorID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch doctor details');
        }
        const data = await response.json();
        setMember(data);
      } catch (error) {
        // console.error('Error fetching doctor details:', error);
        toast.error('Failed to load doctor details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

// Fetching patient ID
const fetchPatientID = async () => {
  try {
      const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/patients/getPatientId`);    

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error('Error fetching patient ID:', errorMessage);
      throw new Error('Failed to fetch patient ID');
    }

    const data = await response.json();
    // console.log('Fetched Patient ID:', data.PatientID); // Fetched ID ko log karein
    setPatientID(data.PatientID); // Assuming the API returns { PatientID: <id> }
  } catch (error) {
    console.error('Error fetching patient ID:', error);
    toast.error('Please try again latter');
  }
};


    // Generate available dates for the next week
    const generateAvailableDates = () => {
      const dates = [];
      const today = new Date();
      for (let i = 0; i < 7; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        dates.push(nextDate.toISOString().split('T')[0]); // Format YYYY-MM-DD
      }
      setAvailableDates(dates);
    };

    fetchPatientID();
    if (DoctorID) {
      fetchDoctorDetails();
    }
    generateAvailableDates();
  }, [DoctorID]);

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select a date and time.');
      return;
    }

    const bookingData = {
      Patient_ID: patientID, // Use the fetched patient ID
      Doctor_ID: DoctorID,
      Appointment_date: selectedDate,
      Appointment_time: selectedTime,
      Status: 'Pending', // Adjust status as needed
      Create_Date: new Date().toISOString(),
    };

    try {
        const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/api/appoin/bookAppointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const responseText = await response.text(); // Get the response text for debugging

      if (!response.ok) {
        throw new Error(`Failed to book appointment: ${responseText}`); // Include response text in the error
      }

      toast.success('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast.error('Failed to book appointment. Please try again later.');
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading state
  }

  if (!member) {
    return <p>Doctor not found.</p>; // Show error state
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="doc-info">
                <div className="row">
                  <div className="row doctor-card p-3 mt-3">
                    <div className="col-md-3">
                      <div className="doctor-photo">
                        <img
                          src={`${import.meta.env.REACT_APP_BACKEND_URL}/api/image/${member.DoctorID}`}
                          alt={member.FullName}
                          className="img-fluid rounded"
                          style={{
                            width: "100%",
                            height: "270px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="doctor-info position-relative">
                        <h5>{member.FullName}</h5>
                        <ul>
                          <li><strong>Email:</strong> {member.Email}</li>
                          <li><strong>Phone:</strong> {member.Phone}</li>
                          <li><strong>Designation:</strong> {member.Designation}</li>
                          <li><strong>Specialist:</strong> {member.Specialist}</li>
                          <li><strong>Fees:</strong> {member.Fees}</li>
                          <li><strong>Details:</strong> {member.Details}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="mt-5">
                <h5>Select Appointment Date and Time</h5>
                <div className="dates-container">
                  <div className="dates-row">
                    {availableDates.map((date, index) => (
                      <div 
                        key={index} 
                        className={`date-box ${selectedDate === date ? 'selected' : ''}`} 
                        onClick={() => handleDateClick(date)}
                      >
                        {new Date(date).toLocaleDateString()}
                      </div>
                    ))}
                  </div>
                  <div className="times-row">
                    {availableTimes.map((time, index) => (
                      <div 
                        key={index} 
                        className={`time-box ${selectedTime === time ? 'selected' : ''}`} 
                        onClick={() => handleTimeClick(time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={handleConfirmBooking} className="bg-dark-blue text-white p-2 px-3 rounded mt-2">
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConfirmBooking;
