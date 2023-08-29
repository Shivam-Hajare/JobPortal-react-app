import "./App.css";
import React, { useState,useEffect } from "react";
import { Outlet ,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import JobSeekerNavbar from "./components/JobSeekerNavbar/JobSeekerNavbar";
// // import Home from './components/Home/Home';
// // import SignIn from './components/SignIn/SignIn';
// // import SignUp from './components/SignUp/SignUp';
// // import AddJob from './components/AddJob/AddJob';
// // import ApplicationList from './components/ApplicationList/ApplicationList';
// // import RecruiterAppList from './components/RecruiterAppList/RecruiterAppList';
// // import JobList from './components/JobList/JobList';
// // import ErrorComponent from './components/ErrorComponent/ErrorComponent';
// // import Navbar from './components/Navbar/Navbar';
// // import RecruiterJobList from './components/RecruiterJobList/RecruiterJobList';
// // import JobseekerProfile from './components/JobseekerProfile/JobseekerProfile';
// // import JobseekerUpdateProfile from './components/JobseekerUpdateProfile/JobseekerUpdateProfile';
// // import RecruiterProfile from './components/RecruiterProfile/RecruiterProfile';
// // import EditRecruiterProfile from './components/EditRecruiterProfile/EditRecruiterProfile';
// // import JobSeekerNavbar from './components/JobSeekerNavbar/JobSeekerNavbar';
import RecruiterNavbar from "./components/RecruiterNavbar/RecruiterNavbar";
import AdminController from "./components/AdminController/AdminController";
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
  }, [location,userRole]);

  const handleSignout = () => {
    localStorage.removeItem("user");
    setUserRole(null);
  };

  return (
    <>
    <ToastContainer position='top-right' limit={1}/>
    <div>
        {userRole === "ROLE_JOBSEEKER" && <JobSeekerNavbar onSignout={handleSignout}/>}
        {userRole === "ROLE_RECRUITER" && <RecruiterNavbar onSignout={handleSignout}/>}
        {!userRole && <Navbar />}
      </div>
      <Outlet />
    </>
  );
}

export default App;

//  <Routes>
//  <Route path="/" element={<Home  searchText={searchText} setSearchText={setSearchText} />} />
//   <Route path="/signin" element={<SignIn />} />
//   <Route path="/signup" element={<SignUp />} />
//   <Route path="/postJob" element={<AddJob />} />
//   <Route path="/jobList" element={<JobList searchText={searchText} />} />
//    <Route path="/applicationList" element={<ApplicationList />} />
//   <Route path='/jobseekerProfile' element={<JobseekerProfile/>} />
//   <Route path='/jobseekerUpdateProfile' element={<JobseekerUpdateProfile/>} />
//   <Route path='/jobList' element={<JobList/>} />

//   <Route path='/applicationList' element={<ApplicationList/>} />

//   <Route path="/RecruiterappList/:jobId" element={<RecruiterAppList />} />
//   <Route path="/RecruiterJobList" element={<RecruiterJobList />} />
//   <Route path="/RecruiterProfile" element={<RecruiterProfile />} />
//   <Route path="/editRecruiterProfile" element={<EditRecruiterProfile />} />
//   <Route path="/AdminController"element={<AdminController/>}/>
//   <Route >
//       <Route path='*' element={<ErrorComponent />} />
//   </Route>
//  </Routes>
