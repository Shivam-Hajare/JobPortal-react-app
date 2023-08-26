import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecruiterSignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    signup_firstName: '',
    signup_lastName: '',
    signup_email: '',
    signup_password: '',
    signup_bio: '',
    signup_companyName: '',
    signup_phoneNumber: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/signup/newRegistration', {
        email: formData.signup_email,
        firstName: formData.signup_firstName,
        lastName: formData.signup_lastName,
        phoneNo: formData.signup_phoneNumber,
        recruiterBio: formData.signup_bio,
        companyName: formData.signup_companyName,
        password: formData.signup_password,
        role: 'ROLE_RECRUITER'
      });

      if (response.status === 200) {
        alert("successful signup") // Redirect to signin page on successful signup
        navigate('/signin'); 
      }
    } catch (error) {
        alert("wrong credentials ")
      setError('Wrong password'); // Display error message if there's an issue
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signup_form-group">
          <label htmlFor="signup_firstName">First Name:</label>
          <input type="text" id="signup_firstName" name="signup_firstName" required className="signup_input" onChange={handleInputChange} />
        </div>
        <div className="signup_form-group">
          <label htmlFor="signup_lastName">Last Name:</label>
          <input type="text" id="signup_lastName" name="signup_lastName" required className="signup_input" onChange={handleInputChange} />
        </div>
        <div className="signup_form-group">
          <label htmlFor="signup_email">Email:</label>
          <input type="email" id="signup_email" name="signup_email" required className="signup_input" onChange={handleInputChange} />
        </div>
        <div className="signup_form-group">
          <label htmlFor="signup_password">Password:</label>
          <input type="password" id="signup_password" name="signup_password" required className="signup_input" onChange={handleInputChange} />
        </div>
        <div className="signup_form-group signup_bio-group bioBox">
          <label htmlFor="signup_bio">Bio:</label>
          <input type="text" id="signup_bio" name="signup_bio" className="signup_input" onChange={handleInputChange} />
        </div>
        <div className="signup_form-group signup_bio-group bioBox">
          <label htmlFor="signup_companyName">Company Name:</label>
          <input type="text" id="signup_companyName" name="signup_companyName" className="signup_input" onChange={handleInputChange} />
        </div>
        <div className="signup_form-group">
          <label htmlFor="signup_phoneNumber">Phone Number:</label>
          <input type="text" id="signup_phoneNumber" name="signup_phoneNumber" className="signup_input" onChange={handleInputChange} />
        </div>
        <button type="submit" className="signup_button">Sign Up</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default RecruiterSignIn;
