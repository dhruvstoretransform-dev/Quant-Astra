import React from "react";

function Services() {
  return (
    <section
      className="ServicesSection"
      style={{ backgroundImage: `url(/images/service.png)` }}
    >
      <div className="ServicesOverlay"></div>

      <div className="ServicesContent">

        <span className="ServicesTag">
          THE ENGINE
        </span>

        <h2 className="ServicesHeading">
          Service Modules
        </h2>

        <p className="ServicesDescription">
          Comprehensive AI, automation, and growth solutions designed to help
          Singapore businesses improve efficiency, accelerate growth, and stay
          competitive in a rapidly evolving digital landscape.
        </p>

        <div className="ServicesGrid">

          {/* CARD 1 */}

          <div className="ServicesCard">

            <div className="ServicesCardHeader">

              <div className="ServicesIcon">

                <img
                  src="/images/Overlay+Border.svg"
                  alt="AI Business Automation"
                  className="ServicesIconImage"
                />

              </div>

              <span className="ServicesVersion">
                V4.2.0
              </span>

            </div>

            <div className="ServicesCardBody">

              <h3 className="ServicesTitle">
                AI Business Automation
              </h3>

              <p className="ServicesText">
                Automate repetitive tasks, streamline workflows, and eliminate
                operational bottlenecks with intelligent systems that improve
                productivity, accuracy, and business scalability.
              </p>

            </div>

            <div className="ServicesCardFooter">

              <span>
                STATUS: OPERATIONAL
              </span>

              <span className="ServicesArrow">
                →
              </span>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="ServicesCard">

            <div className="ServicesCardHeader">

              <div className="ServicesIcon">

                <img
                  src="/images/ai agent.svg"
                  alt="AI Agents"
                  className="ServicesIconImage"
                />

              </div>

              <span className="ServicesVersion">
                V2.1.5
              </span>

            </div>

            <div className="ServicesCardBody">

              <h3 className="ServicesTitle">
                AI Agents
              </h3>

              <p className="ServicesText">
                Deploy AI-powered agents that handle customer interactions,
                document processing, business support, and information retrieval
                with speed, consistency, and precision.
              </p>

            </div>

            <div className="ServicesCardFooter">

              <span>
                STATUS: ACTIVE
              </span>

              <span className="ServicesArrow">
                →
              </span>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="ServicesCard">

            <div className="ServicesCardHeader">

              <div className="ServicesIcon">

                <img
                  src="/images/advance.svg"
                  alt="Advanced SEO"
                  className="ServicesIconImage"
                />

              </div>

              <span className="ServicesVersion">
                V8.0.1
              </span>

            </div>

            <div className="ServicesCardBody">

              <h3 className="ServicesTitle">
                Advanced SEO
              </h3>

              <p className="ServicesText">
                Improve search visibility, attract qualified traffic, and
                strengthen online authority through data-driven SEO strategies
                built for long-term growth.
              </p>

            </div>

            <div className="ServicesCardFooter">

              <span>
                STATUS: OPTIMIZED
              </span>

              <span className="ServicesArrow">
                →
              </span>

            </div>

          </div>

                    {/* CARD 4 */}

          <div className="ServicesCard">

            <div className="ServicesCardHeader">

              <div className="ServicesIcon">

                <img
                  src="/images/digital.svg"
                  alt="Digital Marketing"
                  className="ServicesIconImage"
                />

              </div>

              <span className="ServicesVersion">
                V3.4.2
              </span>

            </div>

            <div className="ServicesCardBody">

              <h3 className="ServicesTitle">
                Digital Marketing
              </h3>

              <p className="ServicesText">
                Generate awareness, leads, and revenue through targeted digital
                campaigns designed to connect your business with the right
                audience.
              </p>

            </div>

            <div className="ServicesCardFooter">

              <span>
                STATUS: SCALING
              </span>

              <span className="ServicesArrow">
                →
              </span>

            </div>

          </div>

          {/* CARD 5 */}

          <div className="ServicesCard">

            <div className="ServicesCardHeader">

              <div className="ServicesIcon">

                <img
                  src="/images/e-commerece.svg"
                  alt="E-Commerce Solutions"
                  className="ServicesIconImage"
                />

              </div>

              <span className="ServicesVersion">
                V5.1.0
              </span>

            </div>

            <div className="ServicesCardBody">

              <h3 className="ServicesTitle">
                E-Commerce Solutions
              </h3>

              <p className="ServicesText">
                Create seamless online shopping experiences with
                conversion-focused eCommerce solutions that enhance customer
                engagement and drive sustainable growth.
              </p>

            </div>

            <div className="ServicesCardFooter">

              <span>
                STATUS: INTEGRATED
              </span>

              <span className="ServicesArrow">
                →
              </span>

            </div>

          </div>

          {/* CARD 6 */}

          <div className="ServicesCard">

            <div className="ServicesCardHeader">

              <div className="ServicesIcon">

                <img
                  src="/images/process.svg"
                  alt="Process Optimisation"
                  className="ServicesIconImage"
                />

              </div>

              <span className="ServicesVersion">
                V6.2.2
              </span>

            </div>

            <div className="ServicesCardBody">

              <h3 className="ServicesTitle">
                Process Optimisation
              </h3>

              <p className="ServicesText">
                Redesign workflows, reduce inefficiencies, and improve
                operational performance through strategic process improvements
                and intelligent business systems.
              </p>

            </div>

            <div className="ServicesCardFooter">

              <span>
                STATUS: REFINED
              </span>

              <span className="ServicesArrow">
                →
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;