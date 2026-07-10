import React from "react";

import testimonialBg from "./Container.png";

function Testimonials() {
  return (
    <section
      className="TestimonialsSection"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <div className="TestimonialsOverlay"></div>

      <div className="TestimonialsContent">

        <span className="TestimonialsTag">
          VALIDATION
        </span>

        <h2 className="TestimonialsHeading">
          Trusted by Industry Leaders
        </h2>

        <p className="TestimonialsDescription">
          Forward-thinking businesses across Singapore trust Quant Astra to
          streamline operations, automate complex workflows, and build
          intelligent systems that drive measurable results.
        </p>

        <div className="TestimonialsCards">

          {/* Card 1 */}
          <div className="TestimonialsCard">

            <div className="TestimonialsProfile">
              <div className="TestimonialsAvatar">DT</div>

              <div>
                <h4>David Tan</h4>
                <p>MD, CORPORATE SERVICES FIRM</p>
              </div>
            </div>

            <p className="TestimonialsReview">
              "Quant Astra transformed the way our organization manages
              critical business processes. Through intelligent automation
              and workflow optimization, we significantly improved
              operational efficiency while maintaining the highest
              standards of accuracy and compliance."
            </p>

            <div className="TestimonialsStars">
              ★★★★★
            </div>

          </div>

          {/* Card 2 */}
          <div className="TestimonialsCard">

            <div className="TestimonialsProfile">
              <div className="TestimonialsAvatar">SL</div>

              <div>
                <h4>Sarah Lim</h4>
                <p>COO, FINANCIAL SERVICES COMPANY</p>
              </div>
            </div>

            <p className="TestimonialsReview">
              "The AI-driven solutions implemented by Quant Astra have
              helped our team reduce administrative workload and focus on
              strategic decision-making. The results have exceeded our
              expectations in both productivity and scalability."
            </p>

            <div className="TestimonialsStars">
              ★★★★★
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;