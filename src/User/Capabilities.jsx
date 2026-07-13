import React from "react";


// import {
//   FaRobot,
//   FaHandshake,
//   FaUniversity,
//   FaBolt,
//   FaProjectDiagram,
//   FaChartLine,
// } from "react-icons/fa";

function Capabilities() {
  return (
    <section className="CapabilitiesSection">

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

          {/* Rings */}

          <div className="Ring Ring1"></div>
          <div className="Ring Ring2"></div>
          <div className="Ring Ring3"></div>

          {/* Vertical */}

          <div className="Line Top"></div>
          <div className="Line Bottom"></div>

          {/* Diagonal */}

          <div className="Line LeftTop"></div>
          <div className="Line RightTop"></div>
          <div className="Line LeftBottom"></div>
          <div className="Line RightBottom"></div>

          {/* Center Logo */}

          <div className="CenterLogo">
            <img src="/images/Group.png" alt="Quant Astra" />
          </div>

          {/* TOP */}

          {/* <div className="Capability TopCard">
            <FaRobot className="CapabilityIcon" />
            <div className="CapabilityBox">
              Practical AI Solutions
            </div>
          </div> */}

          {/* LEFT */}

          {/* <div className="Capability LeftCard">
            <FaHandshake className="CapabilityIcon" />
            <div className="CapabilityBox">
              Human + AI Collaboration
            </div>
          </div> */}

          {/* RIGHT */}

          {/* <div className="Capability RightCard">
            <FaUniversity className="CapabilityIcon" />
            <div className="CapabilityBox">
              Business-First Approach
            </div>
          </div> */}

          {/* BOTTOM LEFT */}

          {/* <div className="Capability BottomLeftCard">
            <FaProjectDiagram className="CapabilityIcon" />
            <div className="CapabilityBox">
              Dedicated Singapore Support
            </div>
          </div> */}

          {/* BOTTOM */}

          {/* <div className="Capability BottomCard">
            <FaChartLine className="CapabilityIcon" />
            <div className="CapabilityBox">
              Focus on Measurable Business Outcomes
            </div>
          </div> */}

          {/* BOTTOM RIGHT */}

          <div className="Capability BottomRightCard">
            {/* <FaBolt className="CapabilityIcon" /> */}
            <div className="CapabilityBox">
              {/* Rapid Implementation */}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Capabilities;