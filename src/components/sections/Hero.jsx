import {
  FaArrowRight,
  FaEnvelope,
  FaFileArrowDown,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";
import Button from "../ui/Button";
import PageContainer from "../layout/PageContainer";
import SectionWrapper from "../layout/SectionWrapper";

function Hero() {
  const {
    fullName,
    role,
    shortTagline,
    heroIntro,
    heroDescription,
    email,
    linkedin,
    github,
    resumeUrl,
    profileImage,
    highlights,
  } = portfolioData;

  return (
    <SectionWrapper id="home" spacing="hero" className="hero-section">
      <PageContainer>
        <div className="hero-layout">
          <div className="hero-content" data-reveal="up">
            <span className="section-eyebrow">MERN Stack Developer</span>

            <h1 className="hero-title">
              Building <span className="gradient-text">scalable web applications</span> with
              clean interfaces and modern full stack development.
            </h1>

            <p className="hero-subtitle">{heroIntro}</p>

            <p className="hero-description">{heroDescription}</p>

            <div className="hero-actions">
              <Button variant="primary" href="#projects">
                View Projects
                <FaArrowRight />
              </Button>

              <Button variant="secondary" href="#contact">
                Contact Me
                <FaEnvelope />
              </Button>

              <Button
                variant="secondary"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <FaFileArrowDown />
              </Button>
            </div>

            <div className="hero-socials">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero-social"
                aria-label="Open LinkedIn profile"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="hero-social"
                aria-label="Open GitHub profile"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a href={`mailto:${email}`} className="hero-social" aria-label="Send email">
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>

            <div className="hero-mini-note">
              <span className="hero-mini-note__label">Approach</span>
              <p className="hero-mini-note__text">{shortTagline}</p>
            </div>
          </div>

          <div className="hero-visual" data-reveal="scale">
            <div className="hero-profile-card glass-card glow-ring noise-overlay">
              <div className="hero-profile-card__top">
                <span className="premium-chip">Modern UI Design</span>
                <span className="premium-chip">Responsive Development</span>
              </div>

              <div className="hero-profile-frame">
                <img
                  src={profileImage}
                  alt={`${fullName} profile`}
                  className="hero-profile-image"
                />
                <div className="hero-profile-frame__glow" />
              </div>

              <div className="hero-profile-info">
                <h2 className="hero-profile-name">{fullName}</h2>
                <p className="hero-profile-role">{role}</p>
              </div>

              <div className="hero-highlight-grid">
                {highlights.map((item, index) => (
                  <article
                    key={item.label}
                    className="hero-highlight-card"
                    style={{ transitionDelay: `${index * 70}ms` }}
                    data-reveal="up"
                  >
                    <span className="hero-highlight-card__label">{item.label}</span>
                    <h3 className="hero-highlight-card__value">{item.value}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator" data-reveal="fade">
          <span className="hero-scroll-indicator__line" />
          <span className="hero-scroll-indicator__text">Scroll to explore</span>
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}

export default Hero;