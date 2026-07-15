import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    id: 1,
    end: 99.9,
    suffix: "%",
    title: "Logic Consistency",
    decimals: 1,
  },
  {
    id: 2,
    end: 24,
    suffix: "/7",
    title: "Global Monitoring",
  },
  {
    id: 3,
    end: 250,
    suffix: "+",
    title: "Institutional Clients",
  },
  {
    id: 4,
    end: 10,
    suffix: "+",
    title: "Years Experience",
  },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="about-stats" ref={ref}>
      <div className="about-stats-container">
        <div className="about-stats-header">
          <span className="about-stats-subtitle">
            BY THE NUMBERS
          </span>

          <h2 className="about-stats-title">
            Figures That Define Us
          </h2>
        </div>

        <div className="about-stats-grid">
          {stats.map((item) => (
            <div className="about-stat-card" key={item.id}>
              <h3 className="about-stat-number">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.end}
                    duration={3}
                    decimals={item.decimals || 0}
                    suffix={item.suffix}
                  />
                )}
              </h3>

              <p className="about-stat-text">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;