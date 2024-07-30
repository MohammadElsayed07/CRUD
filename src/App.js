import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <><Navbar />
    <div className="App">
      <Router>
        <Link to="/Login">{Login}</Link>
        <Link to="/Registration">{Registration}</Link>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
