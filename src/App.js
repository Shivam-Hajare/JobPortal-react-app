
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


function App() {

  const userRole = 'jobSeeker'; // or 'recruiter'

  //for home component
  const [searchText, setSearchText] = useState("");


  return (
    <>
     {/* <Navbar/> */}
     <div>
      {userRole === 'jobSeeker' ? <JobSeekerNavbar /> : <RecruiterNavbar />}
      {/* Rest of your application content */}
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

      <Route path="/RecruiterappList/:jobId" element={<RecruiterAppList />} />  
      <Route path="/RecruiterJobList" element={<RecruiterJobList />} />   
      <Route path="/RecruiterProfile" element={<RecruiterProfile />} /> 
      <Route path="/editRecruiterProfile" element={<EditRecruiterProfile />} />   
      <Route >
          <Route path='*' element={<ErrorComponent />} />
      </Route>
     </Routes>
    </>
  );
}

export default App;


const JobSeekerNavbar = () => {
  return (
    <div>
      <h1>JobSeekerNavber</h1>
      <Navbar />
    </div>
  )
}

const RecruiterNavbar = () => {
  return (
    <div>
      <h1>RecruiterNavbar</h1>
      <Navbar />
    </div>
  )
}