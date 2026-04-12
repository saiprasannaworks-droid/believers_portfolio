import { FaFileArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";
import PageContainer from "./PageContainer";

function Footer() {
  const { fullName, role, email, github, linkedin, resumeUrl } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="site-footer__panel glass-card glow-ring noise-overlay" data-reveal="up">
          <div className="site-footer__top">
            <div className="site-footer__intro">
              <span className="section-eyebrow">Let’s Connect</span>

              <h2 className="site-footer__title">
                Let’s turn ideas into <span className="gradient-text">high-quality products</span>.
              </h2>

              <p className="site-footer__text">
                Open to full stack roles, frontend opportunities, freelance work, and
                product-focused collaborations.
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
                className={`premium-button premium-button--secondary ${
                  !resumeUrl ? "is-disabled" : ""
                }`}
                aria-disabled={!resumeUrl}
                onClick={(event) => {
                  if (!resumeUrl) event.preventDefault();
                }}
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
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="site-footer__social"
                  aria-label="Open LinkedIn"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="site-footer__social"
                  aria-label="Open GitHub"
                >
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
      </PageContainer>
    </footer>
  );
}

export default Footer;