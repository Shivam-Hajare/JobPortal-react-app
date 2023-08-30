import React, { useState, useEffect } from "react";
import "./JobseekerUpdateProfile.css";
import axios from "axios";
import UpdateSkills from "./UpdateSkills/UpdateSkills";
import EducationDetailsUpdate from "./EducationDetailsUpdate/EducationDetailsUpdate";
import "./EducationDetailsUpdate/EducationDetailsUpdate.css";
import ResumeUploader from "../ResumeUploader/ResumeUploader";

function JobseekerUpdateProfile() {
  const [id, setId] = useState(0);
  const [profile, setProfile] = useState({
    jobSeekerId: 0,
    email: "",
    firstName: "",
    lastName: "",
    yearOfExperience: 0,
    eduInfo: [
      {
        qualification: "",
        institute: "",
        admissionDate: "",
        completionDate: "",
        percentage: 0,
      },
    ],
    skills: [
      {
        skillId: 0,
        name: "",
        description: "",
      },
    ],
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    yearOfExperience: "",
  });

  // for educational details component
  const initialDetail = {
    qualification: "",
    institute: "",
    admissionDate: "",
    completionDate: "",
    percentage: 0,
  };

  // function convertDateFormat(date) {
  //   console.log(date);
  //   const [day, month, year] = date.split('-');
  //   const newDate = new Date(`${year}-${month}-${day}`);
  //   return newDate.toISOString().split('T')[0];
  // }


  const [educationalDetails, setEducationalDetails] = useState([initialDetail]);

  // for update skill component
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      let jobseekerId = null; // tesing only
      if (user != null) {
        jobseekerId = user.jobSeekerId;
      }
      const response = await axios.get(
        `http://localhost:8080/jobseeker/get-profile/${jobseekerId}`
      );
      setProfile(response.data);
    } catch (error) {
      // Handle profile not found error
      console.error("Error fetching profile:", error);
    }
  };

  const updateSkills = () => {
    // set skills and educational details
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: selectedSkills,
    }));
  };

  const updateEducationDetails = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      eduInfo: educationalDetails,
    }));
  };
  const handleProfileChange = (field, value) => {

    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
    // Clear validation error when user starts typing
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const updateProfile = async () => {
    // Validation
    let errors = {};
    if (!profile.email || profile.email.trim() === "")
      errors.email = "Email is required.";
    if (!profile.firstName || profile.firstName.trim() === "")
      errors.firstName = "First Name is required.";
    if (!profile.lastName || profile.lastName.trim() === "")
      errors.lastName = "Last Name is required.";
    if (!profile.yearOfExperience || profile.yearOfExperience == "")
      errors.yearOfExperience = "Years of Experience is required.";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      let jobseekerId = null; // tesing only
      if (user != null) {
        jobseekerId = user.jobSeekerId;
      }

     console.log(jobseekerId)
     console.log(profile);
       const response = await axios.put(
         `http://localhost:8080/jobseeker/update-profile/${jobseekerId}`,
         profile
       );
     
    } catch (error) {
      if(error.response.data.hasOwnProperty("yearOfExperience")) {
        alert( error.response.data.yearOfExperience);
        return;
      }
   
      if(error.response.hasOwnProperty("data")) {
        alert(error.response.data);
        // return;
      }
      alert("this is working");
    }

    await fetchProfile();
  };

  return (
    <div className="jobseekerUpdateProfile">
      <h1>Job Seeker Profile</h1>
      <input
        type="text"
        placeholder="Email"
        value={profile?.email}
        onChange={(e) => handleProfileChange("email", e.target.value)}
        required
        readOnly
      />
      <span className="error">{validationErrors.email}</span>
      <input
        type="text"
        placeholder="First Name"
        value={profile?.firstName}
        onChange={(e) => handleProfileChange("firstName", e.target.value)}
        required
      />
      <span className="error">{validationErrors.firstName}</span>
      <input
        type="text"
        placeholder="Last Name"
        value={profile?.lastName}
        onChange={(e) => handleProfileChange("lastName", e.target.value)}
        required
      />
      <span className="error">{validationErrors.lastName}</span>
      <input
        type="number"
        placeholder="Years of Experience"
        value={profile?.yearOfExperience}
        onChange={(e) => {
          console.log(e.target.value);
          handleProfileChange("yearOfExperience", parseInt(e.target.value));
        }}
        required
      />
      <span className="error">{validationErrors.yearOfExperience}</span>
      <UpdateSkills
        jobseekerSkills={profile?.skills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        updateSkills={updateSkills}
      />
      <EducationDetailsUpdate
        jobseekerEducation={profile?.eduInfo}
        setEducationalDetails={setEducationalDetails}
        educationalDetails={educationalDetails}
        initialDetail={initialDetail}
        updateEducationDetails={updateEducationDetails}
      />

      <ResumeUploader />
      <button onClick={updateProfile}>Update Profile</button>
    </div>
  );
}

export default JobseekerUpdateProfile;
