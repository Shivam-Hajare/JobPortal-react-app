import React from 'react'
import { useNavigate } from 'react-router-dom';

function RecruiterNavbar() {

  const navigate = useNavigate();

  const  signoutHandler = () =>  {
    alert("log out");
    document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("user");
    navigate('/signin');
}
  return (
    <><nav class="navBar">
    <img class="logo" src="../img/Screenshot (70).png" alt="logo" srcset="" />
    <ul class="navList">
        <li class="navItems"><a href="/">Home</a></li>
        <li class="navItems"><a href="/jobList">Jobs</a></li>
        <li class="navItems" ><a href="/postJob">Add New Job</a></li>
        <li class="navItems" ><a href="/RecruiterJobList">Posted Jobs</a></li>
        <button onClick={signoutHandler}> <li className="navItems" ><a href="#" >Signout</a></li></button>   
         <li class="navItems" ><a href="/RecruiterProfile">RecruiterProfile</a></li>  {/* profile name*/}
    </ul>
</nav></>
  )
}
// RecruiterAppList
export default RecruiterNavbar