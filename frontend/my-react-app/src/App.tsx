import React from 'react';
import TravelPlanner from './landingPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from "./loginForm"
import SignupForm from "./signupForm"

function App() {
  return (
    <Routes>
      <Route path="/" element={<TravelPlanner />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  );
}

export default App;
