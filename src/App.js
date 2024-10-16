import React from 'react';
import Home from './components/Home';

import SignUp from './components/Signup';
import SignIn from './components/Signin';
import UploadImage from './components/UploadImage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/css/main.css'; // Adjust paths as necessary

function App() {
  return (

    <Router>
    
    <Routes>
  
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={  <Home />} /> {/* Replace with your home component */}
    </Routes>
  </Router>
  );
}

export default App;
