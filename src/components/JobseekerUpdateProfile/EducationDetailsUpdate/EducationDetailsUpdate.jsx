import React, { useState, useEffect } from 'react';
import "./EducationDetailsUpdate.css";

const EducationDetailsUpdate = ({ jobseekerEducation, educationalDetails, setEducationalDetails, initialDetail, updateEducationDetails }) => {


  useEffect(() => {
    if (jobseekerEducation && jobseekerEducation.length > 0) {
      setEducationalDetails(jobseekerEducation);
    } else {
      setEducationalDetails([initialDetail]);
    }
  }, [jobseekerEducation]);

  const handleAddDetail = () => {
    setEducationalDetails([...educationalDetails, initialDetail]);
  };

  const handleRemoveDetail = (index) => {
    const updatedDetails = educationalDetails.filter((detail, i) => i !== index);
    setEducationalDetails(updatedDetails);
  };

  const handleInputChange = (index, field, value) => {
    const updatedDetails = [...educationalDetails];
    updatedDetails[index][field] = value;
    setEducationalDetails(updatedDetails);
  };

  const areInputsEmpty = (detail) => {
    return Object.values(detail).every(value => value === '');
  };


  return (
    <>
    {educationalDetails.length === 0 && <h1>Atleast add one educational details</h1> }
    <div className="educationDetailsUpdate-educational-details">
      {educationalDetails.map((detail, index) => (
        <div key={index} className="detail">
          <input
            type="text"
            placeholder="Qualification"
            value={detail?.qualification}
            onChange={(e) => handleInputChange(index, 'qualification', e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Institute"
            value={detail?.institute}
            onChange={(e) => handleInputChange(index, 'institute', e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Admission Date"
            value={detail?.admissionDate}
            onChange={(e) => handleInputChange(index, 'admissionDate', e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Completion Date"
            value={detail?.completionDate}
            onChange={(e) => handleInputChange(index, 'completionDate', e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Percentage"
            value={detail?.percentage}
            onChange={(e) => handleInputChange(index, 'percentage', e.target.value)}
            required
          />
          <button onClick={() => handleRemoveDetail(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddDetail} 
      disabled={educationalDetails.some(detail => areInputsEmpty(detail))}>Add</button>
      <button onClick={updateEducationDetails}>Update Education details</button>
    </div>
    </>
  );
};

export default EducationDetailsUpdate;
