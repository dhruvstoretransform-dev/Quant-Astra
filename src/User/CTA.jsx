import React from "react";

const CTA = () => {
  return (
    <section className="CTASection">

      <div className="CTAContainer">

        {/* Left Content */}

        <div className="CTALeft">

          <h2 className="CTATitle">
            Ready to Discover How
            <br />
            AI Can Improve Your
            <br />
            Business?
          </h2>

          <p className="CTADescription">
            Book your strategy call with our automation architects
            <br />
            and start your transformation
            <br />
            today.
          </p>

          <button className="CTAButton">
            Book a Free Consultation Today
          </button>

        </div>

        {/* Right Image */}

        <div className="CTARight">

          <img
            src="/images/cta.png"
            alt="Rocket"
            className="RocketImage"
          />

        </div>

      </div>

    </section>
  );
};

export default CTA;