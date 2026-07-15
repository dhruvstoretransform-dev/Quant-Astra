import ceoImg from "../image/coo.svg";
import cooImg from "../image/ceo.svg";
import networkIcon from "../image/profile-icon.svg";
import profileIcon from "../image/network-icon.svg";


const Leadership = () => {
  return (
    <section className="vision-architects">

      <div className="vision-wrapper">

        {/* Header */}

        <div className="vision-header">

          <span className="vision-subtitle">
            GOVERNANCE
          </span>

          <h2 className="vision-title">
            Architects of Vision
          </h2>

          <div className="vision-title-line"></div>

        </div>

        <div className="vision-container">

          {/* ===========================
              FIRST LEADER
          ============================ */}

          <div className="vision-first-section">

            <div className="vision-card">

              <div className="vision-image-wrapper">

                <div className="vision-image-glow"></div>

                <div className="vision-image-frame">

                  <img
                    src={ceoImg}
                    alt="Siva Balasupramaniam"
                    className="vision-image"
                  />

                </div>

                <span className="vision-circle"></span>
                <span className="vision-square"></span>

              </div>

              <div className="vision-content">

                <div className="vision-role">

                  <span className="vision-role-line"></span>

                  <span>FOUNDER & CEO</span>

                </div>

                <h3 className="vision-name">
                  Siva Balasupramaniam
                </h3>

                <p className="vision-description">
                  Siva brings more than two decades of experience spanning global
                  commodities, technology, business development and strategic
                  growth. Having worked with international banks, trading houses,
                  energy majors and technology ventures, he has led teams,
                  managed large-scale commercial initiatives and built solutions
                  across multiple markets. Throughout his career, Siva has
                  consistently focused on one principle: identifying inefficiencies
                  and transforming them into opportunities. At Quant Astra, he
                  combines commercial experience, operational insight and
                  emerging technologies to help businesses streamline processes,
                  improve productivity and unlock scalable growth through AI and
                  automation.
                </p>

                <div className="vision-divider"></div>

                <div className="vision-links">

                  <a href="#" className="vision-link">
                    <img src={networkIcon} alt="Network" />
                    <span>NETWORK</span>
                  </a>

                  <a href="#" className="vision-link">
                    <img src={profileIcon} alt="Profile" />
                    <span>PROFILE</span>
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* ===========================
              SECOND LEADER
          ============================ */}

          <div className="vision-second-section">

            <div className="vision-card vision-card-reverse">

              <div className="vision-image-wrapper">

                <div className="vision-image-glow"></div>

                <div className="vision-image-frame">

                  <img
                    src={cooImg}
                    alt="Nick Ng"
                    className="vision-image"
                  />

                </div>

                <span className="vision-circle"></span>
                <span className="vision-square"></span>

              </div>

              <div className="vision-content">

                <div className="vision-role">

                  <span className="vision-role-line"></span>

                  <span>CHIEF OPERATING OFFICER</span>

                </div>

                <h3 className="vision-name">
                  Nick Ng
                </h3>

                <p className="vision-description">
                  Nick has managed, advised and consulted for businesses across
                  Singapore and Southeast Asia, working closely with founders,
                  SMEs and growth-stage companies navigating change,
                  expansion and operational challenges. Known for his strategic
                  thinking and ability to simplify complexity, Nick helps
                  organisations identify hidden bottlenecks, improve workflows and
                  create systems that support sustainable growth. He believes
                  many businesses are held back not by a lack of effort, but by
                  outdated processes and conventional thinking. At Quant Astra, he
                  works with clients to challenge assumptions, leverage technology
                  intelligently and implement practical AI-driven solutions that
                  deliver measurable business outcomes.
                </p>

                <div className="vision-divider"></div>

                <div className="vision-links">

                  <a href="#" className="vision-link">
                    <img src={networkIcon} alt="Network" />
                    <span>NETWORK</span>
                  </a>

                  <a href="#" className="vision-link">
                    <img src={profileIcon} alt="Profile" />
                    <span>PROFILE</span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="vision-overlay"></div>
        <div className="vision-noise"></div>
        <div className="vision-glow"></div>
        <div className="vision-vignette"></div>

      </div>

    </section>
  );
};

export default Leadership;