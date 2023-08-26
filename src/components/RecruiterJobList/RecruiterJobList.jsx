import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "./RecruiterJobList.css";

import { useCookies } from "react-cookie"
const RecruiterJobList = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // Get the navigate function
  const [cookies, setCookies] = useCookies(["userId"]);
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (!cookies.userId)
      navigate("/signin?redirect=/RecruiterJobList")
  }, [cookies.userId, navigate])
  useEffect(() => {
    // Fetch job data from the server
    axios.get(`http://localhost:8080/recruiters/AllJobsPosted/${user.recruiterId}`) // Replace with the actual URL
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  const handleShowAppreciation = (jobId) => {
    // Redirect to the RecruiterAppList page with the jobId in the URL
    navigate(`/RecruiterappList/${jobId}`);
  };

  return (
    <div>
      <div className="postedJobList">
        {jobs.map((job, index) => (
          <div className="jobPosting" key={index}>
            <div className="jobTitle">{job.jobTitle}</div>
            <div className="jobDescription">Job Description: {job.jobDescription}</div>
            <div className="jobDates">Posted: {job.postedDate} | Deadline: {job.deadLineDate}</div>
            <div className="jobType">Job Type: {job.jobType}</div>
            <div className="jobSalary">Salary: ${job.salary}</div>
            {/* Render skills */}
            <div className="jobSkills">Skills: {job.skillsForJob_strings.join(", ")}</div>
            {/* Show Appreciation button */}
            <div className="showAppreciationButtonDiv">
              <button className="showAppreciationButton" onClick={() => handleShowAppreciation(job.jobId)}>Show Applications</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecruiterJobList;
