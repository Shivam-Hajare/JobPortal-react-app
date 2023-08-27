import React from 'react'
import { useNavigate } from 'react-router-dom';

function JobSeekerNavbar() {

  const navigate = useNavigate();

  const  signoutHandler = () =>  {
    alert("log out");
    document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("user");
    navigate('/signin');
}

  return (
    <div>
         <nav className="navBar">
             <img className="logo" src="../img/Screenshot (70).png" alt="logo" srcSet="" />
             <ul className="navList">
                <li className="navItems"><a href="/">Home</a></li>
               {/* <li className="navItems"><a href="/jobList">Jobs</a></li> */}
                 <li className="navItems" ><a href="/jobList">JobList</a></li>
                 <li className="navItems" ><a href="/jobseekerUpdateProfile">update jobseeker profile</a></li>  {/* profile name*/} 
                 <button onClick={signoutHandler}><li className="navItems" ><a href="">Signout</a></li></button>
                <li className="navItems" ><a href="/jobseekerProfile">Profile</a></li>
        </ul>
        </nav>
    </div>
  )
}

export default JobSeekerNavbar