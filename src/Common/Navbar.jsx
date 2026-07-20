import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (

        <nav className="navbar-container">

            {/* Logo */}

            <div className="navbar-logo">

                <img
                    src="/images/logo.png"
                    alt="Logo"
                />

            </div>

            {/* Mobile Toggle */}

            <div
                className="navbar-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            {/* Navigation */}

            <ul
                className={
                    menuOpen
                        ? "navbar-nav-links active"
                        : "navbar-nav-links"
                }
            >

                <li>
                    <li>
                        <a href="#hero-container">Home</a>
                    </li>
                </li>


                <li>
                    <li>
                        <a href="#wrapper">Our Approach</a>
                    </li>
                </li>

                {/* Services */}

                <li
                    className="navbar-dropdown"

                    onMouseEnter={() => setDropdownOpen(true)}

                    onMouseLeave={() => setDropdownOpen(false)}
                >

                    <div
                        className="dropdown-title"

                        onClick={() =>
                            setDropdownOpen(!dropdownOpen)
                        }
                    >
                        <li>
                            <li>
                                <a href="#ServicesSection">Services</a>
                            </li>
                        </li>

                        <span
                            className={
                                dropdownOpen
                                    ? "dropdown-arrow rotate"
                                    : "dropdown-arrow"
                            }
                        >
                            ▼
                        </span>

                    </div>

                    <ul
                        className={
                            dropdownOpen
                                ? "dropdown-menu show"
                                : "dropdown-menu"
                        }
                    >

                        <li>
                            AI Agents
                        </li>

                    </ul>

                </li>




                <li>
                    <li>
                        <a href="#IndustriesSection">Sectors</a>
                    </li>
                </li>
                <li>
                    <li>
                        <a href="#TestimonialsSection">Leaders</a>
                    </li>
                </li>

                {/* Mobile Button */}

                <li className="mobile-btn">

                    <button className="navbar-consult-btn">

                        Book a Consultation

                    </button>

                </li>
            </ul>

            {/* Desktop Button */}
            <button className="navbar-consult-btn desktop-btn">
                Book a Consultation
            </button>

        </nav>

    );
}

export default Navbar;