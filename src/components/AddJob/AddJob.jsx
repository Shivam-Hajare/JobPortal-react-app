import React from 'react'
import "./AddJob.css"
const AddJob = () => {
    return (
        <div>
            <div class="container">
                <h1>Add Job</h1>
                <form id="jobForm">
                    <label for="jobTitle">Title:</label>
                    <input type="text" id="jobTitle" name="jobTitle" required />

                    <label for="jobSkills">Skills:</label>
                    <input type="text" id="jobSkills" name="jobSkills" required />

                    <label for="jobDuration">Duration:</label>
                    <input type="text" id="jobDuration" name="jobDuration" required />

                    <label for="jobSalary">Salary:</label>
                    <input type="text" id="jobSalary" name="jobSalary" required />

                    <label for="applicantDeadline">Applicant Deadline:</label>
                    <input type="date" id="applicantDeadline" name="applicantDeadline" required />

                    <label for="maxApplicants">Maximum Number of Applicants:</label>
                    <input type="number" id="maxApplicants" name="maxApplicants" required />

                    <label for="positionsAvailable">Positions Available:</label>
                    <input type="number" id="positionsAvailable" name="positionsAvailable" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddJob