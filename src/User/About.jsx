import React from "react";

import aboutImage from "./About.png";

function About() {
  return (
   <section className="aboutjsx-about">

    <div className="aboutjsx-about-left">
        <img src={aboutImage} alt="About" />
    </div>

    <div className="aboutjsx-about-right">

        <span className="aboutjsx-section-tag">
            STRATEGIC INSIGHT
        </span>

        <h2 className="aboutjsx-about-title">
            "Most Businesses Don’t Need More Staff.
            <span> They Need Better Systems.</span>"
        </h2>

        <h4 className="aboutjsx-about-subtitle">
            Quantum Thinking, Limitless Solutions
        </h4>

        <p className="aboutjsx-about-description">
            At Quant Astra, we help organizations overcome operational
            bottlenecks by replacing manual, repetitive tasks with
            intelligent systems and automated workflows.
        </p>

        <div className="aboutjsx-stats">

            <div className="aboutjsx-stat">
                <h3>99.9%</h3>
                <p>LOGIC CONSISTENCY</p>
            </div>

            <div className="aboutjsx-stat">
                <h3>60%</h3>
                <p>OPERATIONAL RECOVERY</p>
            </div>

        </div>

    </div>

</section>
  );
}

export default About;