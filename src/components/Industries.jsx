import React from "react";

// Icons
import {
  FaGavel,
  FaUniversity,
  FaTruck,
  FaCity,
  FaHeadset,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

function Industries() {

  const industries = [

    {
      icon: <FaGavel />,
      title: "Law Firms",
    },

    {
      icon: <FaUniversity />,
      title: "Accounting",
    },

    {
      icon: <FaTruck />,
      title: "Logistics",
    },

    {
      icon: <FaCity />,
      title: (
        <>
          Commercial & Private
          <br />
          Property Agencies
        </>
      ),
    },

    {
      icon: <FaHeadset />,
      title: "Insurance Firms",
    },

    {
      icon: <FaBuilding />,
      title: "Other SME Sectors",
    },

  ];

  return (

    <section
      className="IndustriesSection"
      style={{
        backgroundImage: `url(/images/industry.jpg)`,
      }}
    >

      <div className="IndustriesOverlay"></div>

      <div className="IndustriesContainer">

        {/* Header */}

        <div className="IndustriesHeader">

          <div className="IndustriesLeft">

            <span className="IndustriesTag">
              VERTICAL EXPERTISE
            </span>

            <h2 className="IndustriesHeading">
              Sectors We Empower
            </h2>

          </div>

          <div className="IndustriesRight">

            <p className="IndustriesDescription">

              Specialized AI, automation, and growth solutions
              tailored for industries where efficiency,
              compliance, accuracy, and operational excellence
              are essential.

            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="IndustriesGrid">

          {industries.map((item, index) => (

            <div
              className="IndustriesCard"
              key={index}
            >

              <div className="IndustriesIcon">

                {item.icon}

              </div>

              <h3 className="IndustriesTitle">

                {item.title}

              </h3>

            </div>

          ))}

                    {/* Request Strategy Card */}

          <div className="IndustriesCTA">

            <span>
              REQUEST SECTOR STRATEGY
            </span>

            <FaArrowRight />

          </div>

        </div>

      </div>

    </section>

  );

}

export default Industries;