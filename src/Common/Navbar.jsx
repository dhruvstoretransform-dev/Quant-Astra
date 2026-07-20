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
                                <a href="#ServicesSection">Our Services</a>
                            </li>
                        </li>

                        <span
                            className={
                                dropdownOpen
                                    ? "dropdown-arrow rotate"
                                    : "dropdown-arrow"
                            }
                        >
                            {/* ▼ */}
                        </span>

                    </div>

                    <ul
                        className={
                            dropdownOpen
                                ? "dropdown-menu show"
                                : "dropdown-menu"
                        }
                    >

                        {/* <li>
                            AI Agents
                        </li>

                        <li>
                             AI Automation
                        </li> */}

                    </ul>

                </li>



                <li>
                    <li>
                        <a href="#IndustriesSection">Industries We Serve</a>
                    </li>
                </li>

                <li>
                    <li>
                        <a href="#CapabilitiesSection">Why Us</a>
                    </li>
                </li>

                <li>
                    <li>
                        <a href="#TestimonialsSection">Testimonials</a>
                    </li>
                </li>
                <li>
                    <li>
                        <a href="#FAQSection">FAQ</a>
                    </li>
                </li>


                {/* Mobile Button */}

                <li className="mobile-btn">
<a href="#CTASection">
                    <button className="navbar-consult-btn">

                        Book a Consultation

                    </button>
</a>
                </li>
            </ul>

            {/* Desktop Button */}
            <a href="#CTASection">
            <button className="navbar-consult-btn desktop-btn">
                Book a Consultation
            </button>
</a>
        </nav>

    );
}

export default Navbar;