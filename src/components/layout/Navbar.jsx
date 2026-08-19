import { useEffect, useMemo, useRef, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaFileArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import portfolioData from "../../data/portfolioData";
import ThemeToggle from "../ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionMetricsRef = useRef([]);
  const tickingRef = useRef(false);

  const { fullName, resumeUrl, linkedin, github } = portfolioData;

  useEffect(() => {
    const buildSectionMetrics = () => {
      sectionMetricsRef.current = NAV_ITEMS.map((item) => {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return null;
        return { id, element: el, top: el.offsetTop, height: el.offsetHeight };
      }).filter(Boolean);
    };

    const updateActiveState = () => {
      setIsScrolled(window.scrollY > 16);
      const scrollPos = window.scrollY + 140;
      let current = "home";
      for (const sec of sectionMetricsRef.current) {
        if (scrollPos >= sec.top && scrollPos < sec.top + sec.height) {
          current = sec.id;
          break;
        }
      }
      const last = sectionMetricsRef.current[sectionMetricsRef.current.length - 1];
      if (last && scrollPos >= last.top) current = last.id;
      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        updateActiveState();
        tickingRef.current = false;
      });
    };

    const onResize = () => {
      buildSectionMetrics();
      onScroll();
    };

    buildSectionMetrics();
    updateActiveState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = orig; };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <div className="container-shell">
          <nav className="site-nav">
            <a href="#home" className="site-brand" aria-label="Go to Home">
              <span className="site-brand__mark">SP</span>
              <span className="site-brand__text">
                <span className="site-brand__name">{fullName}</span>
                <span className="site-brand__role">Full Stack Developer</span>
              </span>
            </a>

            <div className="site-nav__desktop">
              <div className="site-nav__links">
                {NAV_ITEMS.map((item) => {
                  const id = item.href.replace("#", "");
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`site-nav__link ${activeSection === id ? "is-active" : ""}`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="site-nav__actions">
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="premium-button premium-button--secondary" title="Resume">
                  <span>Resume</span>
                  <FaFileArrowDown />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="social-icon-button" aria-label="LinkedIn" title="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href={github} target="_blank" rel="noreferrer" className="social-icon-button" aria-label="GitHub" title="GitHub">
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
                onClick={() => setIsMobileMenuOpen((c) => !c)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <HiXMark /> : <HiBars3 />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-nav ${isMobileMenuOpen ? "is-open" : ""}`}>
        <div className="container-shell">
          <div className="mobile-nav__panel glass-card glow-ring">
            <div className="mobile-nav__links">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`mobile-nav__link ${activeSection === id ? "is-active" : ""}`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="mobile-nav__footer">
              <a href={linkedin} target="_blank" rel="noreferrer" className="social-icon-button" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href={github} target="_blank" rel="noreferrer" className="social-icon-button" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="premium-button premium-button--secondary">
                <span>Resume</span>
                <FaFileArrowDown />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;