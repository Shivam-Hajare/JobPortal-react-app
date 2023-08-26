import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (

        // <><nav className="navBar">
        //     <img className="logo" src="../img/Screenshot (70).png" alt="logo" srcSet="" />
        //     <ul className="navList">
        //         <li className="navItems"><a href="/">Home</a></li>
        //         <li className="navItems"><a href="/jobList">Jobs</a></li>
        //         <li className="navItems"><a href="/signup">Register</a></li>
        //         <li className="navItems" ><a href="/signin">Login</a></li>
        //         <li className="navItems" ><a href="/jobList">JobList</a></li>
        //         <li className="navItems" ><a href="/jobseekerUpdateProfile">update jobseeker profile</a></li>
        //         <li className="navItems" ><a href="/jobseekerProfile">Profile</a></li>
        
        <><nav class="navBar">
            <img class="logo" src="../img/Screenshot (70).png" alt="logo" srcset="" />
            <ul class="navList">
                <li class="navItems"><a href="/">Home</a></li>
                <li class="navItems"><a href="/jobList">Jobs</a></li>
                <li class="navItems"><a href="/signup">Register</a></li>
                <li class="navItems" ><a href="/signin">Login</a></li>
                <li class="navItems" ><a href="/postJob">Add New Job</a></li>
                <li class="navItems" ><a href="/RecruiterJobList">Posted Jobs</a></li>
                <li class="navItems" ><a href="/RecruiterProfile">RecruiterProfile</a></li>
            </ul>
        </nav></>
    )
}

export default Navbar