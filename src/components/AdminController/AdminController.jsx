import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Admin.css";

const AdminController = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [showRecruiters, setShowRecruiters] = useState(false);

  const fetchRecruiters = () => {
    axios.get(`http://localhost:8080/admin/get/all/recruiter`)
      .then(response => {
        setRecruiters(response.data);
        setShowRecruiters(true);
      })
      .catch(error => {
        console.error('Error fetching recruiters:', error);
      });
  };

  const handleRecruiterClick = () => {
    fetchRecruiters();
    setShowRecruiters(true);
  };

  const handleDeleteRecruiter = (recruiterId) => {
    axios.delete(`http://localhost:8080/admin/remove-recruiter-profile/${recruiterId}`)
      .then(() => {
        fetchRecruiters(); // Refresh the list after deletion
      })
      .catch(error => {
        console.error('Error deleting recruiter:', error);
      });
  };

  useEffect(() => {
    fetchRecruiters();
  }, []);

  return (
    <>
      <div className="headerAdmin">
        <h1>Admin Controller</h1>
      </div>

      <div className="optionsAdmin">
        <div className="optionAdmin" onClick={handleRecruiterClick}>JobSeeker</div>
        <div className="optionAdmin">Recruiter</div>
      </div>
      
      {showRecruiters && (
        <div>
          <table className='tableAdmin'>
            <thead>
              <tr>
                <th>RecruiterId</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recruiters.map(recruiter => (
                <tr key={recruiter.recruiterId}>
                  <td>{recruiter.recruiterId}</td>
                  <td>{recruiter.firstName}</td>
                  <td>{recruiter.lastName}</td>
                  <td>{recruiter.email}</td>
                  <td>
                    <button
                      className="delete-buttonAdmin"
                      onClick={() => handleDeleteRecruiter(recruiter.recruiterId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AdminController;
