import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (

        <><nav class="navBar">
            <img class="logo" src="../img/Screenshot (70).png" alt="logo" srcset="" />
            <ul class="navList">
                <li class="navItems"><a href="/">Home</a></li>
                <li class="navItems"><a href="/jobList">Jobs</a></li>
                <li class="navItems"><a href="/signup">Register</a></li>
                <li class="navItems" ><a href="/signin">Login</a></li>
            </ul>
        </nav></>
    )
}

export default Navbar