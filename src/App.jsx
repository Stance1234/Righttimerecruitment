import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import Apply from "./Pages/Apply";
import Navbar from "./Componenets/Navbar/Navbar";

import "./App.css"; // Make sure to import your CSS

function App() {
  return (
    <Router>
      <div className="app-container">
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apply" element={<Apply />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;