import React from 'react'
import "./RecruiterApplication.css"
const RecruiterAppList = () => {
    return (
        <div>
            <div class="Rapplicationcontainer">
                <h2>Applications List</h2>
                <div class="Rapplication">
                    <div class="application-info">
                        <h3>Jane Smith</h3>
                        <p>Applied on: August 15, 2023</p>
                        <p>Skills: Python, Django, SQL</p>
                    </div>
                    <div class="R_button-box">
                        <button class="Rbutton download">Download Resume</button>
                        <button class="Rbutton shortlist">Shortlist</button>
                        <button class="Rbutton reject">Reject</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecruiterAppList