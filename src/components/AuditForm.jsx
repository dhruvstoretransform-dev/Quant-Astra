import React from "react";

const AuditForm = () => {
  return (
    <section
      className="AuditSection"
      style={{ backgroundImage: `url(/images/Auditform.png)` }}
    >
      <div className="AuditOverlay">
        <div className="AuditContainer">
          {/* Logo */}
          <div className="AuditLogo">
            <img src="/images/shadow logo.png" alt="Quant Astra Logo" />
          </div>

          {/* Header */}
          <div className="AuditHeader">
            <span className="AuditTag">ENGAGEMENT PROTOCOL</span>

            <h1 className="AuditTitle">
              Initiate Strategic Audit
            </h1>

            <p className="AuditSubtitle">
              Submit your parameters for a custom automation feasibility study.
            </p>
          </div>

          {/* Form */}
          <form className="AuditForm">
            <div className="FormGrid">
              {/* Full Name */}
              <div className="FormGroup">
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="John Doe"
                />
              </div>

              {/* Industry */}
              <div className="FormGroup">
                <label>INDUSTRY</label>

                <select>
                  <option>Property Agency</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Retail</option>
                  <option>Education</option>
                </select>
              </div>
                
              {/* Phone */}
              <div className="FormGroup">
                <label>PHONE NUMBER</label>

                <input
                  type="tel"
                  placeholder="9632587410"
                />
              </div>

              {/* Email */}
              <div className="FormGroup">
                <label>EMAIL</label>

                <input
                  type="email"
                  placeholder="info@gmail.com"
                />
              </div>
            </div>

            {/* Textarea */}
            <div className="FormGroup FullWidth">
              <label>PRIMARY STRATEGIC GOAL</label>

              <textarea
                rows="6"
                placeholder="Describe the operational friction you seek to eliminate..."
              ></textarea>
            </div>

            {/* Button */}
            <div className="ButtonWrapper">
              <button type="submit" className="SubmitButton">
                SUBMIT STRATEGIC REQUEST
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;