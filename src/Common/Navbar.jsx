import React, { useState } from "react";
import logo from "./logo.png";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">

      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "navbar-nav-links active" : "navbar-nav-links"}>
        <li className="navbar-active">Home</li>
        <li>About Us</li>
        <li>AI Automation</li>
        <li>AI Agents</li>
        <li>Industries</li>
        <li>Contact Us</li>
      </ul>

      <button className="navbar-consult-btn">
        Book a Consultation
      </button>

    </nav>
  );
}

export default Navbar;