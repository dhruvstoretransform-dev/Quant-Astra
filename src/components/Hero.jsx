import React from "react";

function Hero() {
  return (
    <section
      className="hero-container"
      style={{ backgroundImage: "url('/images/Hero.png')" }}
    >
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        {/* Top Tag */}
        <div className="hero-tag">
          CELESTIAL PRECISION SYSTEMS
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Transform Your Business with
          <br />
          <span>AI, Automation &amp; Growth Systems</span>
        </h1>

        {/* Description */}
        <p className="hero-text">
          We help law firms, corporate service providers,
          financial institutions and businesses across
          Singapore implement intelligent automation.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <button
            type="button"
            className="hero-primary-btn"
          >
            Schedule a Consultation
          </button>

          <button
            type="button"
            className="hero-secondary-btn"
          >
            Request a Quotation
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;