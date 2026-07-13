import React from "react";


import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="FooterSection">

      <div className="FooterContainer">

        {/* Left Column */}

        <div className="FooterColumn FooterLeft">

          <img
            src={logo}
            alt="Quant Astra"
            className="FooterLogo"
          />

          <p className="FooterDescription">
            Leading the frontier of AI integration for
            Singapore’s professional sectors. Elite systems
            for visionary growth.
          </p>

          <div className="FooterSocial">

            <a href="/">LINKEDIN</a>

            <a href="/">INSTAGRAM</a>

          </div>

        </div>

        {/* Middle Column */}

        <div className="FooterColumn">

          <span className="FooterHeading">
            CONTACT DETAILS
          </span>

          <ul className="FooterList">

            <li>Siva@quantastra.sg</li>

            <li>Nick@quantastra.sg</li>

            <li>Info@quantastra.sg</li>

            <li>+65 8713 4813</li>

          </ul>

        </div>

        {/* Right Column */}

        <div className="FooterColumn">

          <span className="FooterHeading">
            HEADQUARTERS
          </span>

          <div className="FooterAddress">

            <p>Singapore HQ</p>

            <p>Pacific Gateway Hub</p>

            <p>Core Business District</p>

          </div>

          <span className="FooterStatus">
            GLOBAL STATUS: ACTIVE
          </span>

        </div>

      </div>

      {/* Divider */}

      <div className="FooterDivider"></div>

      {/* Bottom Footer */}

      <div className="FooterBottom">

        <p className="FooterCopyright">
          © 2026 QUANT ASTRA SG. ALL RIGHTS RESERVED.
        </p>

        <div className="FooterLinks">

          <a href="/">PRIVACY PROTOCOL</a>

          <a href="/">TERMS OF SERVICE</a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;