import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorsTable = () => {
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState({
        FullName: '',
        Email: '',
        Password: '',
        Phone: '',
        Designation: '',
        Specialist: '',
        Details: ''
    });

    // Fetch doctors data from the backend
    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = () => {
        axios.get(`${import.meta.env.REACT_APP_BACKEND_URL}/api/doctors/doctortable`)
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.REACT_APP_BACKEND_URL}/api/add-doctortable`, formData)
            .then(response => {
                console.log('Doctor added:', response.data);
                fetchDoctors(); // Fetch the updated list of doctors after adding a new one
                // Reset form data
                setFormData({
                    FullName: '',
                    Email: '',
                    Password: '',
                    Phone: '',
                    Designation: '',
                    Specialist: '',
                    Details: ''
                });
            })
            .catch(error => {
                console.error('Error adding doctor: ', error);
            });
    };

    return (
        <div>
            <h1>Doctors List</h1>
            <ul>
                {doctors.map((doctor, index) => (
                    <li key={index}>
                        {doctor.FullName} - {doctor.Designation}
                    </li>
                ))}
            </ul>

            <h2>Add New Doctor</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="Phone"
                    placeholder="Phone"
                    value={formData.Phone}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="Designation"
                    placeholder="Designation"
                    value={formData.Designation}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="Specialist"
                    placeholder="Specialist"
                    value={formData.Specialist}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="Details"
                    placeholder="Details"
                    value={formData.Details}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Doctor</button>
            </form>
        </div>
    );
};

export default DoctorsTable;
