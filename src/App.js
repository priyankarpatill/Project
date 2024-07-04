import './App.css'
import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    address: '',
    qualification: '',
    pincode: '' 
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};

    if (formData.name.length < 2 || formData.name.length > 50) {
      formErrors.name = 'Name must be between 2 and 50 characters.';
    }

    const phonePattern = /^\+?\d{10,15}$/;
    if (!phonePattern.test(formData.contactNumber)) {
      formErrors.contactNumber = 'Invalid phone number format.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Invalid email format.';
    }

    if (formData.address.length < 5) {
      formErrors.address = 'Address must be at least 5 characters long.';
    }

    if (formData.qualification.length <= 10) {
      formErrors.qualification = 'Qualification must have more than 10 characters.';
    }

    const pincodePattern = /^\d{6}$/;
    if (!pincodePattern.test(formData.pincode)) {
      formErrors.pincode = 'Pincode must be 6 digits.';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
        </div>
        <div>
          <label>
            Contact Number:
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </label>
        </div>
        <div>
          <label>
            Qualification:
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            />
            {errors.qualification && <span className="error">{errors.qualification}</span>}
          </label>
        </div>
        <div>
          <label>
            Pincode: 
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {errors.pincode && <span className="error">{errors.pincode}</span>}
          </label>
        </div>
        <div>
          <label>
          <input type="radio" name="gender" value="male"/>Male
          <input type="radio" name="gender" value="fmale"/>Female
          </label>
        </div>
        <button type="submit">Submit</button>
        
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Contact Number:</strong> {submittedData.contactNumber}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Qualification:</strong> {submittedData.qualification}</p>
          <p><strong>Pincode:</strong> {submittedData.pincode}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
