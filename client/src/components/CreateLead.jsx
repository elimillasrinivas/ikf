import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateLead = () => {
  const [leadData, setLeadData] = useState({
    name: '',
    age: '',
    mobile: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [alertType, setAlertType] = useState(''); 
  const [alertMessage, setAlertMessage] = useState(''); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLeadData({ ...leadData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: leadData.name,
      age: leadData.age,
      mobile: leadData.mobile,
      address1: leadData.address1,
      address2: leadData.address2,
      city: leadData.city,
      state: leadData.state,
      pincode: leadData.pincode
    };
console.log(data);
    try {
      const response = await axios.post('https://ikfinance.onrender.com/api/create-lead', data);
      console.log('Lead created:', response.data);
      setAlertType('success'); 
      setAlertMessage('Lead created successfully'); 
      
    
      setLeadData({
        name: '',
        age: '',
        mobile: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: ''
      });
    } catch (error) {
      console.error('Error creating lead:', error);
      setAlertType('danger'); 
      setAlertMessage('Error creating lead'); 
    }

  };

  const handleReset = () => {
    setLeadData({
      name: '',
      age: '',
      mobile: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: ''
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <h1>Create Lead</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={leadData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            value={leadData.age}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={leadData.mobile}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address 1</label>
          <textarea
            type="text"
            name="address1"
            value={leadData.address1}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address 2</label>
          <textarea
            type="text"
            name="address2"
            value={leadData.address2}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            value={leadData.city}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            value={leadData.state}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={leadData.pincode}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="d-flex gap-3">
          <button type="submit" className="btn btn-primary mr-2">Save</button>
          <button type="button" onClick={handleReset} className="btn btn-secondary mr-2">Reset</button>
          <Link to="/" className="btn btn-secondary">Main Menu</Link>
        </div>
      </form>
      {alertType && (
        <div className={`alert alert-${alertType}`} role="alert" style={{marginTop:"1rem"}}>
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default CreateLead;
