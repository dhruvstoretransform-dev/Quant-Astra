

const Philosophy = () => {
  return (
    <section className="philosophy-section">
      <div className="philosophy-container">

        {/* LEFT SIDE */}

        <div className="philosophy-left">

          <span className="philosophy-subtitle">
            ARCHITECTURAL FOUNDATION
          </span>

          <h2 className="philosophy-title">
            Our Philosophy
          </h2>

          {/* Quote Box */}

          <div className="philosophy-quote-box">

            <span className="philosophy-quote-icon">
              ❞
            </span>

            <p className="philosophy-quote-text">
              "We challenge outdated business processes.
              Technology should empower people, not replace
              them."
            </p>

          </div>

          <p className="philosophy-description">
            In an era of rapid commoditization, we focus on the
            human-machine synthesis. Our mission is to engineer
            systems that deliver unprecedented efficiency and
            scalability while maintaining the nuanced judgment of
            seasoned experts.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="philosophy-right">

          <div className="philosophy-card">

            <div className="philosophy-card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="philosophy-card-subtitle">
              INTERNAL DIRECTIVE
            </span>

            <h3 className="philosophy-card-title">
              Our Commitment
            </h3>

            <h4 className="philosophy-card-highlight">
              QUANTUM THINKING.
              <br />
              LIMITLESS SOLUTIONS.
            </h4>

            <p className="philosophy-card-description">
              We don’t just solve problems; we redefine the
              parameters of what is possible within the financial
              ecosystem. Our commitment is to deliver bulletproof
              outcomes for every enterprise under our management.
            </p>

            <div className="philosophy-card-divider"></div>

            <div className="philosophy-card-footer">

              <div className="philosophy-shield">

                <svg
                  width="32"
                  height="36"
                  viewBox="0 0 32 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2L27 7V16C27 24 22 30 16 34C10 30 5 24 5 16V7L16 2Z"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M13 17H19V23H13V17Z"
                    stroke="#D4AF37"
                    strokeWidth="1.2"
                  />

                  <path
                    d="M14 17V15C14 13.8 14.9 13 16 13C17.1 13 18 13.8 18 15V17"
                    stroke="#D4AF37"
                    strokeWidth="1.2"
                  />
                </svg>

              </div>

              <span className="philosophy-protocol">
                PROTOCOL V2.4
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Philosophy;