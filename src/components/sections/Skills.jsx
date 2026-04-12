import { FaCode, FaDatabase, FaServer, FaToolbox, FaWandMagicSparkles } from "react-icons/fa6";
import skillsData from "../../data/skillsData";
import PageContainer from "../layout/PageContainer";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../common/SectionHeading";

const skillIcons = {
  Frontend: <FaCode />,
  Backend: <FaServer />,
  Database: <FaDatabase />,
  Tools: <FaToolbox />,
  "Additional Strengths": <FaWandMagicSparkles />,
};

function Skills() {
  return (
    <SectionWrapper id="skills" className="skills-section">
      <PageContainer>
        <div data-reveal="up">
          <SectionHeading
            eyebrow="Skills"
            title="Technologies and"
            highlight="working strengths"
            description="My skill set combines interface development, backend fundamentals, database handling, deployment tools, and practical product-building workflows."
          />
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

                <div className="skills-card__header-copy">
                  <h3 className="skills-card__title">{group.title}</h3>
                  <p className="skills-card__subtitle">{group.subtitle}</p>
                </div>
              </div>

              <div className="skills-card__chips">
                {group.items.map((item) => (
                  <span key={item} className="skills-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}

export default Skills;