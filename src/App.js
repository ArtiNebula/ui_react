import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import UploadImage from './components/UploadImage';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import ViewTable from './components/ViewTable';

import './assets/css/main.css'; // Adjust paths as necessary

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/upload" element={<UploadImage />} />
          <Route path="/view" element={<ViewTable />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
