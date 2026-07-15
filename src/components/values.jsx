// Use public image paths directly
const trustIcon = "/images/trust.svg";
const timeIcon = "/images/time.svg";
const successIcon = "/images/success.svg";
const transparencyIcon = "/images/transparency.svg";

const values = [
  {
    id: 1,
    icon: trustIcon,
    title: "Trust & Long-Term Relationships",
    text: "We measure success in decades, not quarters — building trust with clients and teammates that compounds over time.",
  },
  {
    id: 2,
    icon: timeIcon,
    title: "Value of Time",
    text: "We hold ourselves to our deadlines and treat every minor issue with the same urgency as a major one.",
  },
  {
    id: 3,
    icon: successIcon,
    title: "Committed to Success",
    text: "Our strategy is goal-oriented, and our team works toward specific, measurable targets on every engagement.",
  },
  {
    id: 4,
    icon: transparencyIcon,
    title: "Transparency & Honesty",
    text: "Credibility is built one honest conversation at a time — we don't obscure risk, and we don't overpromise.",
  },
];

const Values = () => {
  return (
    <section className="about-values">
      <div className="about-values-container">

        <div className="about-values-header">
          <span className="about-values-subtitle">
            WHAT DRIVES US
          </span>

          <h2 className="about-values-title">
            Our Values
          </h2>
        </div>

        <div className="about-values-grid">
          {values.map((item) => (
            <div className="about-value-card" key={item.id}>

              <div className="about-value-icon">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="about-value-svg"
                />
              </div>

              <div className="about-value-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;