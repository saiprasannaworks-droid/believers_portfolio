import { FaCode, FaDatabase, FaServer, FaToolbox } from "react-icons/fa6";
import skillsData from "../../data/skillsData";

const skillIcons = {
  Frontend: <FaCode />,
  Backend: <FaServer />,
  Database: <FaDatabase />,
  "Tech Stack & Tools": <FaToolbox />,
};

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <div data-reveal="up">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">
            Technologies and{" "}
            <span className="gradient-text">working strengths</span>
          </h2>
          <p className="section-description">
            My skill set combines interface development, backend fundamentals, database handling,
            and practical product-building tools.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <article
              key={group.title}
              className="skills-card glass-card glow-ring noise-overlay"
              data-reveal="up"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="skills-card__header">
                <div className="skills-card__icon">
                  {skillIcons[group.title]}
                </div>
                <h3 className="skills-card__title">{group.title}</h3>
              </div>

              <div className="skills-card__chips">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;