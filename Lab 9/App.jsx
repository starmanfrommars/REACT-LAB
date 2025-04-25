import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>
        </nav>

        {/* Page Content */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>


        {/* Footer */}
        <footer className="footer">
          © CSD@CEC.
        </footer>
      </div>
    </Router>
  );
}