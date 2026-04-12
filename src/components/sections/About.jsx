import { FaCode, FaDatabase, FaLayerGroup, FaRocket } from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";
import PageContainer from "../layout/PageContainer";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../common/SectionHeading";

const capabilityIcons = {
  "Frontend Systems": <FaCode />,
  "Backend Logic": <FaLayerGroup />,
  "Data & Persistence": <FaDatabase />,
  "Product Delivery": <FaRocket />,
};

function About() {
  const { aboutParagraphs, capabilityCards } = portfolioData;

  return (
    <SectionWrapper id="about" className="about-section">
      <PageContainer>
        <div className="about-layout">
          <div className="about-content" data-reveal="up">
            <SectionHeading
              eyebrow="About Me"
              title="Crafting products with"
              highlight="clarity, structure, and polish"
              description="I focus on building web applications that are not only functional, but well-structured, user-centered, and visually refined."
            />

            <div className="about-copy">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="about-copy__paragraph">
                  {paragraph}
                </p>
              ))}
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
                My goal is to build applications that feel complete — from clean UI and
                strong layout composition to organized code structure, scalable logic,
                and reliable user experience.
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

              <div className="about-capability-card__content">
                <h3 className="about-capability-card__title">{card.title}</h3>
                <p className="about-capability-card__description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}

export default About;