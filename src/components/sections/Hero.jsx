import {
  FaArrowRight,
  FaEnvelope,
  FaFileArrowDown,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";

function Hero() {
  const {
    fullName,
    role,
    heroTagline,
    careerObjective,
    email,
    linkedin,
    github,
    resumeUrl,
    profileImage,
    highlights,
  } = portfolioData;

  return (
    <section id="home" className="section-shell section-shell--hero hero-section">
      <div className="container-shell">
        <div className="hero-layout">
          <div className="hero-content" data-reveal="up">
            <span className="section-eyebrow">MERN Stack Developer</span>

            <h1 className="hero-title">
              Building{" "}
              <span className="gradient-text">scalable web applications</span>{" "}
              with modern full stack development.
            </h1>

            <p className="hero-subtitle">{heroTagline}</p>
            <p className="hero-description">{careerObjective}</p>

            <div className="hero-actions">
              <a href="#projects" className="premium-button premium-button--primary">
                View Projects
                <FaArrowRight />
              </a>
              <a href="#contact" className="premium-button premium-button--secondary">
                Contact Me
                <FaEnvelope />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-button premium-button--secondary"
              >
                Resume
                <FaFileArrowDown />
              </a>
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
          </div>

          <div className="hero-visual" data-reveal="scale">
            <div className="hero-profile-card glass-card glow-ring noise-overlay">
              <div className="hero-profile-frame">
                <img
                  src={profileImage}
                  alt={`${fullName} profile`}
                  className="hero-profile-image"
                />
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
      </div>
    </section>
  );
}

export default Hero;