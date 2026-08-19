import { FaFileArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";

function Footer() {
  const { fullName, role, email, github, linkedin, resumeUrl } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="site-footer__panel glass-card glow-ring noise-overlay" data-reveal="up">
          <div className="site-footer__top">
            <div className="site-footer__intro">
              <span className="section-eyebrow">Let's Connect</span>
              <h2 className="site-footer__title">
                Ready to contribute to{" "}
                <span className="gradient-text">impactful projects</span>.
              </h2>
              <p className="site-footer__text">
                Open to full-time roles, internships, and entry-level positions in full stack
                web development. Let's build something great together.
              </p>
            </div>

            <div className="site-footer__actions">
              <a href="#contact" className="premium-button premium-button--primary">
                Contact Me
              </a>
              <a
                href={resumeUrl || "#"}
                target={resumeUrl ? "_blank" : undefined}
                rel={resumeUrl ? "noreferrer" : undefined}
                className="premium-button premium-button--secondary"
              >
                <span>Resume</span>
                <FaFileArrowDown />
              </a>
            </div>
          </div>

          <div className="site-footer__grid">
            <article className="site-footer__card glass-card glass-card--soft" data-reveal="up">
              <p className="site-footer__label">Developer</p>
              <h3 className="site-footer__value">{fullName}</h3>
              <p className="site-footer__meta-text">{role}</p>
            </article>

            <article className="site-footer__card glass-card glass-card--soft" data-reveal="up">
              <p className="site-footer__label">Email</p>
              <a href={`mailto:${email}`} className="site-footer__value site-footer__link">
                {email}
              </a>
              <p className="site-footer__meta-text">Primary contact</p>
            </article>

            <article className="site-footer__card glass-card glass-card--soft" data-reveal="up">
              <p className="site-footer__label">Socials</p>
              <div className="site-footer__socials">
                <a href={linkedin} target="_blank" rel="noreferrer" className="site-footer__social" aria-label="LinkedIn">
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
                <a href={github} target="_blank" rel="noreferrer" className="site-footer__social" aria-label="GitHub">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__copyright">
              © {currentYear} {fullName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;