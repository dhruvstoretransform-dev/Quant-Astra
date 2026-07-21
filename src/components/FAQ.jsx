import React, { useState } from "react";
import leftTop from "../image/cornerimage.webp";
import bottomRight from "../image/cornerimage.webp";

const faqData = [
  {
    question: "How can AI and automation benefit my business?",
    answer:
      "AI and automation reduce repetitive tasks, improve operational efficiency, enhance accuracy, and allow teams to focus on strategic activities that drive growth.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We support law firms, corporate service providers, accounting firms, financial institutions, insurance companies, property agencies, logistics businesses, and professional service organizations.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Project timelines vary depending on complexity, but most solutions are designed, deployed, and optimized within a few weeks to ensure rapid business impact.",
  },
  {
    question: "Are your solutions customized for each business?",
    answer:
      "Yes. Every solution is tailored to your operational requirements, industry regulations, business objectives, and existing technology infrastructure.",
  },
  {
    question: "Can your systems integrate with our existing software?",
    answer:
      "Absolutely. Our solutions integrate with CRMs, accounting platforms, document management systems, cloud technologies, and many other business applications.",
  },
  {
    question: "How do you ensure security and compliance?",
    answer:
      "We follow industry best practices, secure implementation frameworks, and compliance-focused processes to protect business data and maintain operational integrity.",
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer:
      "We offer ongoing monitoring, optimization, technical support, and strategic guidance to ensure your systems continue delivering measurable business value.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="FAQSection" id="FAQSection">
      {/* Background Images */}
      <img
        src={leftTop}
        alt=""
        className="FAQLeftBg"
      />

      <img
        src={bottomRight}
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

        {/* FAQ List */}
        <div className="FAQCards">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`FAQCard ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="FAQQuestionRow"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="FAQQuestion">
                  {faq.question}
                </h3>

                <span
                  className={`FAQArrow ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              <div
                className={`FAQAnswerWrapper ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p className="FAQAnswer">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;