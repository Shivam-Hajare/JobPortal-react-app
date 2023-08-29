import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import JobSeekerNavbar from "./components/JobSeekerNavbar/JobSeekerNavbar";
import RecruiterNavbar from "./components/RecruiterNavbar/RecruiterNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        setUserRole(user.role);
      }
    }
    console.log(userRole);
  }, [location, userRole]);

  const handleSignout = () => {
    localStorage.removeItem("user");
    setUserRole(null);
  };

  return (
    <>
      <ToastContainer position="top-right" limit={1} />
      <div>
        {userRole === "ROLE_JOBSEEKER" && (
          <JobSeekerNavbar onSignout={handleSignout} />
        )}
        {userRole === "ROLE_RECRUITER" && (
          <RecruiterNavbar onSignout={handleSignout} />
        )}
        {!userRole && <Navbar />}
      </div>
      <Outlet />
    </>
  );
}

export default App;
