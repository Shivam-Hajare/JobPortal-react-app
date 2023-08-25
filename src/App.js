import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/postJob" element={<AddJob />} />
      <Route path="/jobList" element={<JobList />} />
      <Route path="/applicationList" element={<ApplicationList />} />
      <Route path="/RecruiterappList" element={<RecruiterAppList />} />  
      <Route path="/RecruiterJobList" element={<RecruiterJobList />} />  
      <Route path='/jobseekerProfile' element={<JobseekerProfile/>} />  
      <Route path='/jobseekerUpdateProfile' element={<JobseekerUpdateProfile/>} />  
      <Route path='/applicationList' element={<ApplicationList/>} />  
          <Route path='*' element={<ErrorComponent />} />
     </Routes>
    </>
  );
}

export default App;
