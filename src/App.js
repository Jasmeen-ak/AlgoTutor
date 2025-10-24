import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import your components
import Login from './components/Login';
import Home from './components/Home';
import MyProfile from './components/MyProfile/MyProfile';
import EnrolledCourses from './components/EnrolledCourses/EnrolledCourses';
import ProblemSolving from './components/ProblemSolving/ProblemSolving';
import Notes from './components/Notes/Notes';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/home" element={<Home />}>
            <Route index element={<Navigate to="/home/dashboard" replace />} />
            <Route path="dashboard" element={<div>Dashboard Content Here</div>} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="enrolled-courses" element={<EnrolledCourses/>} />
            <Route path="problem-solving" element={<ProblemSolving/>}/>
            <Route path="notes" element={<Notes />} />
        </Route>

          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
