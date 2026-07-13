import React from "react";


import leftBg from "./top-left.png";
import rightBg from "./bottom-right.png";

const FAQ = () => {
  return (
    <section className="FAQSection">

      {/* Background Images */}

      <img
        src={leftBg}
        alt=""
        className="FAQLeftBg"
      />

      <img
        src={rightBg}
        alt=""
        className="FAQRightBg"
      />

      <div className="FAQContainer">

        {/* Header */}

        <div className="FAQHeader">

          <span className="FAQTag">
            INTELLIGENCE HUB
          </span>

          <h2 className="FAQHeading">
            Frequently Asked Questions
          </h2>

          <p className="FAQDescription">
            Find answers to common questions about our AI, automation, and
            business transformation solutions for Singapore businesses.
          </p>

        </div>

        {/* FAQ Cards */}

        <div className="FAQCards">

          <div className="FAQCard">

            <div className="FAQIcon">?</div>

            <div className="FAQContent">

              <h3 className="FAQQuestion">
                How can AI and automation benefit my business?
              </h3>

              <p className="FAQAnswer">
                AI and automation reduce repetitive tasks, improve operational
                efficiency, enhance accuracy, and allow teams to focus on
                strategic activities that drive growth.
              </p>

            </div>

          </div>

          <div className="FAQCard">

            <div className="FAQIcon">▦</div>

            <div className="FAQContent">

              <h3 className="FAQQuestion">
                What industries do you work with?
              </h3>

              <p className="FAQAnswer">
                We support law firms, corporate service providers, accounting
                firms, financial institutions, insurance companies, property
                agencies, logistics businesses, and professional service
                organizations.
              </p>

            </div>

          </div>

          <div className="FAQCard">

            <div className="FAQIcon">⏱</div>

            <div className="FAQContent">

              <h3 className="FAQQuestion">
                How long does implementation typically take?
              </h3>

              <p className="FAQAnswer">
                Project timelines vary depending on complexity, but most
                solutions are designed, deployed, and optimized within a few
                weeks to ensure rapid business impact.
              </p>

            </div>

          </div>

          <div className="FAQCard">

            <div className="FAQIcon">⚙</div>

            <div className="FAQContent">

              <h3 className="FAQQuestion">
                Are your solutions customized for each business?
              </h3>

              <p className="FAQAnswer">
                Yes. Every solution is tailored to your operational
                requirements, industry regulations, business objectives, and
                existing technology infrastructure.
              </p>

            </div>

          </div>

          <div className="FAQCard">

            <div className="FAQIcon">🔗</div>

            <div className="FAQContent">

              <h3 className="FAQQuestion">
                Can your systems integrate with our existing software?
              </h3>

              <p className="FAQAnswer">
                Absolutely. Our solutions integrate with CRMs, accounting
                platforms, document management systems, cloud technologies,
                and many other business applications.
              </p>

            </div>

          </div>

          <div className="FAQCard">

            <div className="FAQIcon">🔒</div>

            <div className="FAQContent">

              <h3 className="FAQQuestion">
                How do you ensure security and compliance?
              </h3>

              <p className="FAQAnswer">
                We follow industry best practices, secure implementation
                frameworks, and compliance-focused processes to protect
                business data and maintain operational integrity.
              </p>

            </div>

          </div>

          <div className="FAQCard">

            <div className="FAQIcon">✓</div>

            <div className="FAQContent">

              <h3 className="FAQQuestion">
                What kind of support do you provide after implementation?
              </h3>

              <p className="FAQAnswer">
                We offer ongoing monitoring, optimization, technical support,
                and strategic guidance to ensure your systems continue
                delivering measurable business value.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;