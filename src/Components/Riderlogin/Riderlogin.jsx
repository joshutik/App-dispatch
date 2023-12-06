import React, { useState } from 'react';
import './Riderlogin.css';
import Copyriderlink from '../Copyriderlink/Copyriderlink';

const Riderlogin = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are not empty
    if (!formData.first_name || !formData.last_name || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:9090/rider/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        console.log(formData);
      } else {
        // Get error response from server
        const errorResponse = await response.json();
        console.error('Failed to send data:', errorResponse);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card rider-login rounded-5 w-100 p-5 mt-3">
          <div className="header mt-5">
            <p className="fs-3 fw-bold">Riders Details</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="col-lg-12 col-md-6 col-sm-12">
              <div className="mb-4">
                <label htmlFor="first_name">First  Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="rounded-pill w-100 border-1 py-3 px-3"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="rounded-pill w-100 border-1 py-3 px-3"
                  onChange={handleInputChange}
                />
              </div>
              <div className="row mt-5 pt-3">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="rounded-pill w-100 border-1 py-3 px-3"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="rounded-pill w-100 border-1 py-3 px-3"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="text-center mt-5">
              <Copyriderlink />
                {/* <button
                  type="submit"
                  className="save rounded-pill text-light w-50 py-4 mt-5"
                >
                  Save 
                </button> */}
              </div>
            </div>
          </form>
          {/* <Copyriderlink /> */}
        </div>
      </div>
    </div>
  );
};

export default Riderlogin;
