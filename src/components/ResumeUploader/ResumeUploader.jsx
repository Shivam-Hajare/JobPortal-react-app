import React, { useEffect, useState } from "react";
import "./ResumeUploader.css"; // Import your CSS file
import axios from "axios";

const ResumeUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [id, setId] = useState(0);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    let jobseekerId = 1; // tesing only
    if (user != null) {
      jobseekerId = user.jobSeekerId;
      setId(jobseekerId);
    }
  }, []);

  const removeResume = async () => {
    const url = `http://localhost:8080/jobseeker/remove/resume/${id}`;
    axios
      .delete(url)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert("There was a problem with the GET request:", error);
      });
  };

  const uploadResume = async () => {
    if (selectedFile) {
      const url = `http://localhost:8080/jobseeker/upload/resume/${id}`;
      axios
        .get(url)
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          alert("There was a problem with the GET request:", error);
        });
      setSelectedFile(null);
    }
  };

  return (
    <div className="resume-uploader">
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <div className="buttons">
        <button className="update-button" onClick={uploadResume}>
          Update Resume
        </button>
        <button className="remove-button" onClick={removeResume}>
          Remove Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeUploader;
