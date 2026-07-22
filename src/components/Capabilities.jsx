import React from "react";
import FadeInSection from "../components/FadeInSection";




function Capabilities() {
  return (

        <FadeInSection>

    <section className="CapabilitiesSection" id="CapabilitiesSection">

      {/* Top Heading */}

      <div className="CapabilitiesHeader">

        <div className="CapabilitiesLeft">

          <span className="CapabilitiesTag">
            CAPABILITIES PROTOCOL
          </span>

          <h2 className="CapabilitiesHeading">
            Why Clients Choose Us
          </h2>

        </div>

        <div className="CapabilitiesRight">

          <p>
            We combine AI expertise, business strategy, and process
            optimization to deliver practical solutions that create
            measurable results for organizations across Singapore.
          </p>

        </div>

      </div>

      {/* Circle */}

      <div className="CapabilitiesCircleWrapper">

        <div className="CapabilitiesCircle">

          <img
        src="/images/Group.png"
        alt="Capabilities Circle"
        className="CapabilitiesCircleImage"
    />
        

         <div className="Capability BottomRightCard">
            {/* <FaBolt className="CapabilityIcon" /> */}
            <div className="CapabilityBox">
              {/* Rapid Implementation */}
            </div>
          </div>

        </div>

      </div>

    </section>
        </FadeInSection>

  );
}

export default Capabilities;