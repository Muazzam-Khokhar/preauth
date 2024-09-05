// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './component/mainPage';
import AddPreAuth from './component/addPreAuth';
import SideMenu from './component/SideMenu'; // Import SideMenu if needed
import AddProvider from './component/addProvider';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideMenu /> {/* Include the SideMenu if you want it to appear on all pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add-pre-auth" element={<AddPreAuth />} />
            <Route path="/provider" element={<AddProvider/>} />
            {/* Add more routes here if needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;