import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Admin.css";
import AdminJobseeker from '../AdminJobseekerList/AdminJobseeker';

const AdminController = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [showRecruiters, setShowRecruiters] = useState(false);

  const [JobSeekers, setJobseekers] = useState([]);
  const [showJobseekers, setShowJobseekers] = useState(false);

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

  const fetchJobSeekers = () => {
    axios.get(`http://localhost:8080/admin/get/all/jobseeker`)
      .then(response => {
        setJobseekers(response.data);
        setShowJobseekers(true);
      })
      .catch(error => {
        console.error('Error fetching job seekers:', error);
      });
  };

  const handleJobSeekerClick = () => {
    fetchJobSeekers();
   // alert("jobseeker show")
    setShowRecruiters(false);
  };

  const handleDeleteJobSeeker = (jobSeekerId) => {
    alert("delet wit id " + jobSeekerId)
    axios.delete(`http://localhost:8080/admin/remove-jobseeker-profile/${jobSeekerId}`)
      .then(() => {
        fetchJobSeekers(); // Refresh the list after deletion
      })
      .catch(error => {
        console.error('Error deleting job seeker:', error);
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
          <button className="optionAdmin" onClick={handleJobSeekerClick}>
          JobSeeker
          </button>

          <button className="optionAdmin" onClick={handleRecruiterClick}>
            Recruiter
            </button>
            
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

      {!showRecruiters && (<AdminJobseeker handleDeleteJobSeeker={handleDeleteJobSeeker} JobSeekers={JobSeekers} />)}
    </>
  );
};

export default AdminController;
