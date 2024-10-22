import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/Signup';
import SignIn from './components/pages/Signin';
import UploadImage from './components/pages/UploadImage';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import ViewTable from './components/pages/ViewTable';
import ViewPage from './components/pages/ViewPage';

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
          <Route path="/view/:id" element={<ViewPage />} />
          
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
