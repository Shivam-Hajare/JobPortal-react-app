import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./JobseekerProfile.css"

function JobseekerProfile() {

    const [profile, setProfile] = useState({})

      useEffect(() => {
          fetchProfile();
      }, []);


      const fetchProfile = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            let jobseekerId = 1;  // tesing only
            
            if(user != null ) {
               jobseekerId = user.jobSeekerId;
            }else {
                jobseekerId = null;
                alert("profile not found")
            }

            alert(jobseekerId);
            // http://localhost:8080/jobseeker/get-profile/{jobseekerId}
            if(jobseekerId != null) {
                const response = await axios.get(`http://localhost:8080/jobseeker/get-profile/${jobseekerId}`);
                console.log(response.status);
                setProfile(response.data);
            }
        } catch (error) {
            // if profile not found
            setProfile(null);
        }
    };


    if(profile == null) {
        return (
            <div>
                <h1>please try reloading</h1>
                <h1>check the id of the job Seeker</h1>
            </div>
        )
    }
    
      return (
        <div className='jobseekerProfile'>
            <h1 className='jobseekerProfile-header'>Job Seeker Profile</h1>
            <div className='jobseekerProfile-profile-information'>
                <h2 className='jobseekerProfile-profile-section-header'>Personal Information</h2>
                <p><strong>Name:</strong> {profile?.firstName} {profile?.lastName}</p>
                <p><strong>Email:</strong> {profile?.email}</p>
                <p><strong>Years of Experience:</strong> {profile?.yearOfExperience}</p>
            </div>
            <div className='jobseekerProfile-profile-information'>
                <h2 className='jobseekerProfile-profile-section-header'>Education</h2>
                <ul>
                    {profile?.eduInfo?.map((edu, index) => (
                        <li key={index}>
                            <strong>{edu?.qualification}:</strong> {edu?.institute}, {edu?.completionDate}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='jobseekerProfile-profile-information'>
                <h2 className='jobseekerProfile-profile-section-header'>Skills</h2>
                <ul>
                    {profile?.skills?.map((skill, index) => (
                        <li key={index}>{skill.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
    
}

export default JobseekerProfile