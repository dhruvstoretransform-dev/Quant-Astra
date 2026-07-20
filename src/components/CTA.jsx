import React from "react";

const CTA = () => {
  return (
    <section className="CTASection" id="CTASection">
  <div className="CTAContainer">

    {/* Left */}
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

    </div>

    {/* Right */}
    <div className="CTARight">
      <img
        src="/images/cta.png"
        alt="Rocket"
        className="RocketImage"
      />
    </div>

    {/* Button */}
    <button className="CTAButton">
      Book a Free Consultation Today
    </button>

  </div>
</section>
  );
};

export default CTA;