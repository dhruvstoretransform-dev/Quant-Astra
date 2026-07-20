import React from "react";

function Hero() {
  return (
    <section
      className="hero-container"
      style={{ backgroundImage: "url('/images/Hero.png')" }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Wrapper */}
      <div className="hero-wrapper">

        {/* Tag Container */}
        <div className="hero-tag-container">
          <div className="hero-tag">
            CELESTIAL PRECISION SYSTEMS
          </div>
        </div>

        {/* Title Container */}
        <div className="hero-title-container">
          <h1 className="hero-title">
            Transform Your Business with
            <br />
            <span>AI Automation &amp; Growth Systems</span>
          </h1>
        </div>

        {/* Text Container */}
        <div className="hero-text-container">
          <p className="hero-text">
            We help law firms, corporate service providers,<br></br>
            financial institutions and businesses across
            Singapore implement intelligent automation.
          </p>
        </div>

        {/* Button Container */}
        <div className="hero-button-container">

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