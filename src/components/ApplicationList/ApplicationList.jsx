import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ApplicationList.css";

const ApplicationList = () => {
  const [appliedJobs, setAppliedJobs] = useState([
    {
      applicationId: 4,
      jobId: 1,
      appliedDate: "2022-10-12",
      status: "PENDING",
      companyName: "L&T",
      jobTitle: "Software Engineer",
      jobDescription:
        "Responsible for developing and maintaining software applications.",
      postedDate: "2023-06-25",
      deadLineDate: "2023-07-25",
      noOfJobPositions: 5,
      salary: 100000,
      jobType: "FULL_TIME",
      postedBy: "John Doe",
      skillsForJob: [],
    },
  ]); 

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    try {
      const jobSeekerId = 1; 
      const response = await axios.get(
        `http://localhost:8080/jobseeker/get/applied/${jobSeekerId}`
      );
      setAppliedJobs(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
    }
  };

  return (
    <div>
      <div className="applicationList-container">
        <h2>Your Job Applications</h2>

        {appliedJobs.map((job) => (
          <div className="applicationList-application" key={job?.applicationId}>
            <h3>{job?.jobTitle}</h3>
            <div className="applicationList-application-info">
              <p>Company: {job?.companyName}</p>
              <p>{job?.jobDescription}</p>
              <p className="applicationList-salary">Salary: {job?.salary}/year</p>
            </div>
            <div className="applicationList-application-info">
              <p>Position: {job?.jobType}</p>
              <p className="applicationList-date">Application Date: {job?.appliedDate}</p>
              <p>{job?.postedBy}</p>
            </div>
            <button className="applicationList-rm-application-btn">Remove Application</button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ApplicationList;
