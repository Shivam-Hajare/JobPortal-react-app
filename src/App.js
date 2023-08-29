
import './App.css';
import React , {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AddJob from './components/AddJob/AddJob';
import ApplicationList from './components/ApplicationList/ApplicationList';
import RecruiterAppList from './components/RecruiterAppList/RecruiterAppList';
import JobList from './components/JobList/JobList';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import Navbar from './components/Navbar/Navbar';
import RecruiterJobList from './components/RecruiterJobList/RecruiterJobList';
import JobseekerProfile from './components/JobseekerProfile/JobseekerProfile';
import JobseekerUpdateProfile from './components/JobseekerUpdateProfile/JobseekerUpdateProfile';
import RecruiterProfile from './components/RecruiterProfile/RecruiterProfile';
import EditRecruiterProfile from './components/EditRecruiterProfile/EditRecruiterProfile';
import JobSeekerNavbar from './components/JobSeekerNavbar/JobSeekerNavbar';
import RecruiterNavbar from './components/RecruiterNavbar/RecruiterNavbar';
import AdminController from './components/AdminController/AdminController';
import JobseekerAppliedApplicationList from './components/JobseekerAppliedApplicationList/JobseekerAppliedApplicationList';


function App() {

  let userRole =  null ; // or 'recruiter' ROLE_JOBSEEKER , ROLE_RECRUITER 

  const user = JSON.parse(localStorage.getItem('user'));
  if(user != null ) {
    userRole = user.role;
 }

  //for home component
  const [searchText, setSearchText] = useState("");


  return (
    <>
     {/* <Navbar/> */}
     <div>
      {/* { userRole != null &&  ( userRole === 'ROLE_JOBSEEKER'  ? <JobSeekerNavbar /> : <RecruiterNavbar />)} */}
      {userRole !== null && (
         userRole === 'ROLE_JOBSEEKER' ? <JobSeekerNavbar /> : <RecruiterNavbar />
      )}
      { userRole == null && <Navbar /> }
    </div>

     <Routes>
     <Route path="/" element={<Home  searchText={searchText} setSearchText={setSearchText} />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/postJob" element={<AddJob />} />
      <Route path="/jobList" element={<JobList searchText={searchText} />} />
       <Route path="/applicationList" element={<ApplicationList />} />
      <Route path='/jobseekerProfile' element={<JobseekerProfile/>} />  
      <Route path='/jobseekerUpdateProfile' element={<JobseekerUpdateProfile/>} />  
      <Route path='/jobList' element={<JobList/>} />  
      
      <Route path='/applicationList' element={<ApplicationList/>} />  
      <Route path='/JobseekerAppliedApplicationList' element={<JobseekerAppliedApplicationList/>} />  

      <Route path="/RecruiterappList/:jobId" element={<RecruiterAppList />} />  
      <Route path="/RecruiterJobList" element={<RecruiterJobList />} />   
      <Route path="/RecruiterProfile" element={<RecruiterProfile />} /> 
      <Route path="/editRecruiterProfile" element={<EditRecruiterProfile />} />    
      <Route path="/AdminController"element={<AdminController/>}/>
      <Route >
          <Route path='*' element={<ErrorComponent />} />
      </Route>
     </Routes>
    </>
  );
}

export default App;

