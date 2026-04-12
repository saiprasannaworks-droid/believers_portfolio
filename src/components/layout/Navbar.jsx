import { useEffect, useMemo, useRef, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaFileArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";
import socialLinks from "../../data/socialLinks";
import ThemeToggle from "../ui/ThemeToggle";
import PageContainer from "./PageContainer";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionMetricsRef = useRef([]);
  const tickingRef = useRef(false);

  const { fullName, resumeUrl } = portfolioData;

  const socialMap = useMemo(() => {
    const map = {};
    for (const link of socialLinks) {
      map[link.id] = link.url;
    }
    return map;
  }, []);

  useEffect(() => {
    const buildSectionMetrics = () => {
      sectionMetricsRef.current = NAV_ITEMS.map((item) => {
        const sectionId = item.href.replace("#", "");
        const element = document.getElementById(sectionId);

        if (!element) return null;

        return {
          id: sectionId,
          element,
          top: element.offsetTop,
          height: element.offsetHeight,
        };
      }).filter(Boolean);
    };

    const updateActiveState = () => {
      setIsScrolled(window.scrollY > 16);

      const navOffset = 140;
      const scrollPosition = window.scrollY + navOffset;
      const visibleSections = sectionMetricsRef.current;

      let currentSection = "home";

      for (const section of visibleSections) {
        if (
          scrollPosition >= section.top &&
          scrollPosition < section.top + section.height
        ) {
          currentSection = section.id;
          break;
        }
      }

      const lastSection = visibleSections[visibleSections.length - 1];
      if (lastSection && scrollPosition >= lastSection.top) {
        currentSection = lastSection.id;
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    const requestScrollUpdate = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        updateActiveState();
        tickingRef.current = false;
      });
    };

    const handleResize = () => {
      buildSectionMetrics();
      requestScrollUpdate();
    };

    buildSectionMetrics();
    updateActiveState();

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            buildSectionMetrics();
            requestScrollUpdate();
          })
        : null;

    sectionMetricsRef.current.forEach((section) => {
      if (section?.element && resizeObserver) {
        resizeObserver.observe(section.element);
      }
    });

    return () => {
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", handleResize);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <PageContainer className="site-header__container">
          <nav className="site-nav">
            <a href="#home" className="site-brand" aria-label="Go to Home section">
              <span className="site-brand__mark">SP</span>
              <span className="site-brand__text">
                <span className="site-brand__name">{fullName}</span>
                <span className="site-brand__role">Full Stack Developer</span>
              </span>
            </a>

            <div className="site-nav__desktop">
              <div className="site-nav__links">
                {NAV_ITEMS.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`site-nav__link ${isActive ? "is-active" : ""}`}
                    >
                      <span className="site-nav__link-text">{item.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="site-nav__actions">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button premium-button--secondary"
                  aria-label="Open resume"
                  title="Resume"
                >
                  <span>Resume</span>
                  <FaFileArrowDown />
                </a>

                <a
                  href={socialMap.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-button"
                  aria-label="Open LinkedIn profile"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href={socialMap.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-button"
                  aria-label="Open GitHub profile"
                  title="GitHub"
                >
                  <FaGithub />
                </a>

                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            </div>

            <div className="site-nav__mobile-actions">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              <button
                type="button"
                className="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <HiXMark /> : <HiBars3 />}
              </button>
            </div>
          </nav>
        </PageContainer>
      </header>

      <div className={`mobile-nav ${isMobileMenuOpen ? "is-open" : ""}`}>
        <PageContainer className="mobile-nav__container">
          <div className="mobile-nav__panel glass-card glow-ring panel-blur">
            <div className="mobile-nav__links">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`mobile-nav__link ${isActive ? "is-active" : ""}`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                );
              })}

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mobile-nav__link"
                onClick={handleNavClick}
                aria-label="Open resume"
              >
                Resume
              </a>
            </div>

            <div className="mobile-nav__footer">
              <a
                href={socialMap.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-button"
                aria-label="Open LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href={socialMap.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-button"
                aria-label="Open GitHub profile"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-button premium-button--secondary"
                aria-label="Open resume"
              >
                <span>View Resume</span>
                <FaFileArrowDown />
              </a>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
}

export default Navbar;