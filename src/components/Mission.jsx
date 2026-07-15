// Use public image path directly
const missionImg = "/images/mission.png";

const Mission = () => {
  return (
    <section className="about-mission">

      <div className="about-mission-container">

        {/* Left Image */}

        <div className="about-mission-image-wrapper">

          <div className="about-mission-image-frame">

            <img
              src={missionImg}
              alt="Our Mission"
              className="about-mission-image"
            />

          </div>

        </div>

        {/* Right Content */}

        <div className="about-mission-content">

          {/* Corner Borders */}

          <span className="about-corner about-corner-top-left"></span>

          <span className="about-corner about-corner-bottom-right"></span>

          <span className="about-mission-subtitle">
            OUR MISSION
          </span>

          <p className="about-mission-text">
            To give institutions of every size the same algorithmic
            edge once reserved for the world’s largest funds —
            engineering intelligent systems that turn complexity
            into clarity, and clarity into consistent,
            compounding results.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Mission;