import React from "react";

// Icons (using react-icons)
import {
  FaGavel,
  FaBuilding,
  FaUniversity,
  FaTruck,
  FaUserTie,
  FaCity,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

function Industries() {
  const industries = [
    {
      icon: <FaGavel />,
      title: "Law Firms",
    },
    {
      icon: <FaBuilding />,
      title: "Corp Sec",
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
      icon: <FaUserTie />,
      title: "Prof Services",
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

        {/* Top Section */}

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
              Specialized AI, automation, and growth solutions tailored
              for industries where efficiency, compliance, accuracy,
              and operational excellence are essential.
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

          {/* Last CTA Card */}

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