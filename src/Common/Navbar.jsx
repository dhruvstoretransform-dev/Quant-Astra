import { useState } from "react";

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

                <li className="navbar-active">
                    Home
                </li>

                <li>
                    About Us
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

                        Services

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
                            AI Automation
                        </li>

                        <li>
                            AI Agents
                        </li>

                    </ul>

                </li>

                <li>
                    Industries
                </li>

                <li>
                    Contact Us
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