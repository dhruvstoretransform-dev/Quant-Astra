import React, { useEffect, useRef, useState } from "react";

function About() {
  const sectionRef = useRef(null);

  const [logic, setLogic] = useState("0.0");
  const [recovery, setRecovery] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    function animateValue(
      start,
      end,
      duration,
      setter,
      decimal = false
    ) {
      let startTime = null;

      function step(currentTime) {
        if (!startTime) startTime = currentTime;

        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const easeOut = 1 - Math.pow(1 - progress, 3);

        const value =
          start + (end - start) * easeOut;

        if (decimal) {
          setter(value.toFixed(1));
        } else {
          setter(Math.floor(value));
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setter(decimal ? end.toFixed(1) : end);
        }
      }

      requestAnimationFrame(step);
    }

    function startAnimation() {
      animateValue(
        0,
        99.9,
        2500,
        setLogic,
        true
      );

      animateValue(
        0,
        60,
        2500,
        setRecovery,
        false
      );
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="wrapper"
      id="wrapper"
      ref={sectionRef}
    >
      {/* Left Side */}
      <div className="wrapper-left">
        <img
          src="/images/About.png"
          alt="About"
          className="AboutImage"
        />

        {/* Floating Card */}

        <div className="ProtocolCard">
          <div className="ProtocolIcon">
           <img
                  src="/images/Container.svg"
                  alt="Container"
                  className="ServicesIconImage"
                />
           
          </div>

          <div className="ProtocolContent">
            <span className="ProtocolVersion">
              PROTOCOL V2.4
            </span>

            <h4 className="ProtocolTitle">
              Systematic Excellence
            </h4>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="wrapper-right">
        <span className="wrapper-tag">
          STRATEGIC INSIGHT
        </span>

        <h2 className="wrapper-title">
          "Most Businesses Don’t Need More Staff.
          <span> They Need Better Systems.</span>"
        </h2>

        <h4 className="wrapper-subtitle">
          Quantum Thinking,
          
          Limitless Solutions
        </h4>

        <p className="wrapper-description">
          At Quant Astra, we help organizations
          overcome operational bottlenecks by
          replacing manual, repetitive tasks with
          intelligent systems and automated
          workflows.
        </p>

        {/* Stats */}

        <div className="wrapper-stats">
          <div className="wrapper-stat">
            <h3>{logic}%</h3>

            <p>
              LOGIC
              <br />
              CONSISTENCY
            </p>
          </div>

          <div className="wrapper-stat">
            <h3>{recovery}%</h3>

            <p>
              OPERATIONAL
              <br />
              RECOVERY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;






