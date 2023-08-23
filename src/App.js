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
      <Route>
          <Route path='*' element={<ErrorComponent />} />
        </Route>
     </Routes>
    </>
  );
}

export default App;
