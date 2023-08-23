import React from 'react'
import "./JobList.css"
const JobList = () => {
    return (
        <div>
            <div class="container">
                <h2>All Jobs</h2>
                <div class="job">
                    <h3>Full Stack Developer</h3>
                    <div class="job-info">
                        <p>Company: XYZ Tech</p>
                        <p class="salary">Salary: $80,000/year</p>
                    </div>
                    <div class="job-info">
                        <p>Position: Full-time</p>
                        <p class="date">Posted: July 10, 2023</p>
                    </div>
                    <button class="apply-btn">Apply</button>
                </div>
                <div class="job">
                    <h3>Frontend Developer</h3>
                    <div class="job-info">
                        <p>Company: ABC Solutions</p>
                        <p class="salary">Salary: $70,000/year</p>
                    </div>
                    <div class="job-info">
                        <p>Position: Part-time</p>
                        <p class="date">Posted: August 1, 2023</p>
                    </div>
                    <button class="apply-btn">Apply</button>
                </div>
            </div></div>
    )
}

export default JobList