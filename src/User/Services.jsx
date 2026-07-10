import React from "react";

import serviceBg from "./service.png";

const services = [
  {
    id: 1,
    version: "V4.2.0",
    icon: "⚙️",
    title: "AI Business Automation",
    description:
      "Automate repetitive tasks, streamline workflows, and eliminate operational bottlenecks with intelligent systems that improve productivity, accuracy, and business scalability.",
    status: "STATUS: OPERATIONAL",
  },
  {
    id: 2,
    version: "V2.1.5",
    icon: "🤖",
    title: "AI Agents",
    description:
      "Deploy AI-powered agents that handle customer interactions, document processing, business support, and information retrieval with speed, consistency, and precision.",
    status: "STATUS: ACTIVE",
  },
  {
    id: 3,
    version: "V8.0.1",
    icon: "📈",
    title: "Advanced SEO",
    description:
      "Improve search visibility, attract qualified traffic, and strengthen online authority through data-driven SEO strategies built for long-term growth.",
    status: "STATUS: OPTIMIZED",
  },
  {
    id: 4,
    version: "V3.4.2",
    icon: "📢",
    title: "Digital Marketing",
    description:
      "Generate awareness, leads, and revenue through targeted digital campaigns designed to connect your business with the right audience.",
    status: "STATUS: SCALING",
  },
  {
    id: 5,
    version: "V5.1.0",
    icon: "🛒",
    title: "E-Commerce Solutions",
    description:
      "Create seamless online shopping experiences with conversion-focused eCommerce solutions that enhance customer engagement and drive sustainable growth.",
    status: "STATUS: INTEGRATED",
  },
  {
    id: 6,
    version: "V6.2.2",
    icon: "⚡",
    title: "Process Optimisation",
    description:
      "Redesign workflows, reduce inefficiencies, and improve operational performance through strategic process improvements and intelligent business systems.",
    status: "STATUS: REFINED",
  },
];

function Services() {
  return (
    <section
      className="ServicesSection"
      style={{ backgroundImage: `url(${serviceBg})` }}
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

          {services.map((service) => (
            <div className="ServicesCard" key={service.id}>

              <div className="ServicesCardHeader">

                <div className="ServicesIcon">
                  {service.icon}
                </div>

                <span className="ServicesVersion">
                  {service.version}
                </span>

              </div>

              <div className="ServicesCardBody">

                <h3 className="ServicesTitle">
                  {service.title}
                </h3>

                <p className="ServicesText">
                  {service.description}
                </p>

              </div>

              <div className="ServicesCardFooter">

                <span>{service.status}</span>

                <span className="ServicesArrow">
                  →
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;