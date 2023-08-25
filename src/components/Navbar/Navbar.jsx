import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <><nav className="navBar">
            <img className="logo" src="../img/Screenshot (70).png" alt="logo" srcSet="" />
            <ul className="navList">
                <li className="navItems"><a href="/">Home</a></li>
                <li className="navItems"><a href="/jobList">Jobs</a></li>
                <li className="navItems"><a href="/signup">Register</a></li>
                <li className="navItems" ><a href="/signin">Login</a></li>
            </ul>
        </nav></>
    )
}

export default Navbar