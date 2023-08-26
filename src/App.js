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
import RecruiterProfile from './components/RecruiterProfile/RecruiterProfile';
import EditRecruiterProfile from './components/EditRecruiterProfile/EditRecruiterProfile';
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
      <Route path="/RecruiterappList/:jobId" element={<RecruiterAppList />} />  
      <Route path="/RecruiterJobList" element={<RecruiterJobList />} />   
      <Route path="/RecruiterProfile" element={<RecruiterProfile />} /> 
      <Route path="/editRecruiterProfile" element={<EditRecruiterProfile />} />   
      <Route>
          <Route path='*' element={<ErrorComponent />} />
        </Route>
     </Routes>
    </>
  );
}

export default App;
