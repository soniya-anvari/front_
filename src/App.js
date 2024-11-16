
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components  
import './App.css';  
import LoginForm from "./Components/LoginForm/loginform.jsx";  
import SignupForm from "./Components/SignupForm/SignupForm.jsx";  
import Home from "./Components/LandingPage/Components/Home.js";
import EditProfile from "./Components/EditProfile/EditProfile.jsx";
function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/signup" element={<SignupForm />} /> 
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>  
    </Router>  
  );  
}  

export default App;