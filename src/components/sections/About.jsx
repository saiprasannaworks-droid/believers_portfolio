import { FaCode, FaDatabase, FaLayerGroup, FaRocket } from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";

const capabilityIcons = {
  "Frontend Development": <FaCode />,
  "Backend Engineering": <FaLayerGroup />,
  "Database & Storage": <FaDatabase />,
  "DevOps & Deployment": <FaRocket />,
};

function About() {
  const { careerObjective, capabilityCards } = portfolioData;

  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <div className="about-layout">
          <div className="about-content" data-reveal="up">
            <span className="section-eyebrow">About Me</span>
            <h2 className="section-title">
              Crafting products with{" "}
              <span className="gradient-text">clarity, structure, and polish</span>
            </h2>
            <p className="section-description">
              I focus on building web applications that are not only functional, but well-structured,
              user-centered, and visually refined.
            </p>

            <div className="about-copy">
              <p className="about-copy__paragraph">{careerObjective}</p>
            </div>
          </div>

          <div className="about-side" data-reveal="scale">
            <div className="about-side__panel glass-card glow-ring noise-overlay">
              <span className="section-eyebrow">Working Style</span>
              <h3 className="about-side__title">
                I approach development as a balance of{" "}
                <span className="gradient-text">engineering discipline</span> and{" "}
                <span className="gradient-text">product presentation</span>.
              </h3>
              <p className="about-side__text">
                My goal is to build applications that feel complete — from clean UI and strong layout
                composition to organized code structure, scalable logic, and reliable user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="about-capabilities">
          {capabilityCards.map((card, index) => (
            <article
              key={card.title}
              className="about-capability-card glass-card glass-card--soft"
              data-reveal="up"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="about-capability-card__icon">
                {capabilityIcons[card.title]}
              </div>
              <h3 className="about-capability-card__title">{card.title}</h3>
              <p className="about-capability-card__description">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;