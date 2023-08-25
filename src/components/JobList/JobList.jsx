import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JobList.css"

const JobList = () => {

  const [listOfJobs, setListOfJobs] = useState([{
    "jobId": 5,
    "companyName": "",
    "jobTitle": "Network Engineer",
    "jobDescription": "Responsible for designing and managing network infrastructure.",
    "postedDate": "2023-06-25",
    "deadLineDate": "2023-07-25",
    "noOfJobPositions": 3,
    "salary": 95000,
    "jobType": "FULL_TIME",
    "recruiterName": "Jane",
    "skillsForJob": [
      {
        "skillId": 1,
        "name": "Java",
        "description": "Programming in Java"
      },
      {
        "skillId": 2,
        "name": "HTML/CSS",
        "description": "Web Development"
      },
      {
        "skillId": 5,
        "name": "Android",
        "description": "Mobile App Development"
      }
    ],
    "skillsForJob_strings": []
  }]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/jobseeker/get/all");
      setListOfJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobseeker/get/all:", error);
    }
  };

  const applyForJob = async (jobId) => {
    // http://localhost:8080/jobseeker/apply/jobId/jobSeekerId
    const jobSeekerId = 1; // get it from localstorage
    try {
      const response = await axios.get(`http://localhost:8080/jobseeker/apply/${jobId}/${jobSeekerId}`);
      alert(response.data);
    } catch (error) {
      console.error("Error fetching jobseeker/apply/jobId/jobSeekerId", error);
    }
  }
  return (
    <div>
      <div className="jobList-container">
        <h2>All Jobs</h2>
        {listOfJobs.map((job) => (
          <div className="jobList-job" key={job.jobId}>
            <h3>{job.jobTitle}</h3>
            <div className="jobList-job-info">
              <p>Company: {job.companyName}</p>
              <p className="jobList-salary">Salary: {job.salary}/year</p>
            </div>
            <div className="jobList-job-info">
              <p>Position: {job.jobType}</p>
               
              <p className="jobList-date">Posted: {job.postedDate}</p>
            </div>
            <p>{job.skillsForJob.map(skill => skill.name).join(', ')}</p>
            <button className="jobList-apply-btn" onClick={()=> applyForJob(job.jobId)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
