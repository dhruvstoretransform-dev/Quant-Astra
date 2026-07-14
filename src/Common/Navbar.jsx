import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      {/* Mobile Toggle */}
      <div
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "navbar-nav-links active" : "navbar-nav-links"}>
        <li className="navbar-active">Home</li>

        <li>About Us</li>

        {/* Services Dropdown */}
        <li className="navbar-dropdown">
          <span className="dropdown-title">
            Services <span className="dropdown-arrow">▼</span>
          </span>

          <ul className="dropdown-menu">
            <li>AI Automation</li>
            <li>AI Agents</li>
          </ul>
        </li>

        <li>Industries</li>

        <li>Contact Us</li>
      </ul>

      {/* Consultation Button */}
      <button className="navbar-consult-btn">
        Book a Consultation
      </button>
    </nav>
  );
}

export default Navbar;