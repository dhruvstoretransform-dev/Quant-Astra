import React from "react";
import heroBg from "./Hero.png";

function Hero() {
  return (
   <section
  className="hero-container"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="hero-content">

    <span className="hero-tag">
      CELESTIAL PRECISION SYSTEMS
    </span>

    <h1 className="hero-title">
      Transform Your Business with
      <br />
      <span>AI, Automation & Growth Systems</span>
    </h1>

    <p className="hero-text">
      We help law firms, corporate service providers,
      financial institutions, and businesses across
      Singapore implement intelligent automation.
    </p>

    <div className="hero-buttons">
      <button className="hero-primary-btn">
        Schedule a Consultation
      </button>

      <button className="hero-secondary-btn">
        Request a Quotation
      </button>
    </div>

  </div>
</section>
  );
}

export default Hero;


