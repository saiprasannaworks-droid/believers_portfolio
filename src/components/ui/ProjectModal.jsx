import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCircleCheck,
  FaCodeBranch,
  FaXmark,
} from "react-icons/fa6";

function ProjectModal({ project, isOpen, onClose }) {
  const [activeImage, setActiveImage] = useState("");
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) {
      setActiveImage("");
      return;
    }
    setActiveImage(project.images?.thumbnail || "");
  }, [project]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onEscape = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    const t = setTimeout(() => closeRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = origOverflow;
      window.removeEventListener("keydown", onEscape);
      clearTimeout(t);
    };
  }, [isOpen, onClose]);

  const gallery = useMemo(() => {
    if (!project) return [];
    return [project.images?.thumbnail, ...(project.images?.gallery || [])].filter(Boolean);
  }, [project]);

  if (!isOpen || !project) return null;

  const hasLive = Boolean(project.links?.live);
  const hasFrontend = Boolean(project.links?.frontend);
  const hasBackend = Boolean(project.links?.backend);
  const hasGithub = Boolean(project.links?.github);
  const features = Array.isArray(project.keyFeatures) ? project.keyFeatures : [];
  const tech = Array.isArray(project.techStack) ? project.techStack : [];

  return (
    <div className="project-modal" role="dialog" aria-modal="true">
      <button
        type="button"
        className="project-modal__backdrop"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="project-modal__dialog glass-card glow-ring noise-overlay">
        {/* Header */}
        <div className="project-modal__header">
          <div className="project-modal__header-copy">
            <h3 className="project-modal__title">{project.name}</h3>
            <p className="project-modal__summary">{project.shortDescription}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <FaXmark />
          </button>
        </div>

        {/* Scrollable content — NO tabs, everything shown */}
        <div className="project-modal__content">
          {/* Left: Media */}
          <div className="project-modal__media">
            {activeImage ? (
              <div className="project-modal__active-image-wrap">
                <img
                  src={activeImage}
                  alt={project.name}
                  className="project-modal__active-image"
                />
              </div>
            ) : (
              <div className="project-modal__media-placeholder">
                <span>Screenshot coming soon</span>
              </div>
            )}

            {gallery.length > 1 && (
              <div className="project-modal__thumbs">
                {gallery.map((img, i) => (
                  <button
                    key={`gallery-${i}`}
                    type="button"
                    className={`project-modal__thumb ${activeImage === img ? "is-active" : ""}`}
                    onClick={() => setActiveImage(img)}
                    aria-label={`Preview ${i + 1}`}
                  >
                    <img src={img} alt={`${project.name} preview ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details — all sections visible, no tabs */}
          <div className="project-modal__details">
            {/* Overview */}
            <div className="project-modal__section">
              <h4 className="project-modal__section-title">Overview</h4>
              <p className="project-modal__text">
                {project.detailedDescription || project.shortDescription}
              </p>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div className="project-modal__section">
                <h4 className="project-modal__section-title">Key Features</h4>
                <div className="project-modal__feature-list">
                  {features.map((feat) => (
                    <div key={feat} className="project-modal__feature-item">
                      <FaCircleCheck className="project-modal__feature-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {tech.length > 0 && (
              <div className="project-modal__section">
                <h4 className="project-modal__section-title">Tech Stack</h4>
                <div className="project-modal__chips">
                  {tech.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="project-modal__section">
              <h4 className="project-modal__section-title">Project Links</h4>
              <div className="project-modal__actions">
                {hasLive && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="premium-button premium-button--primary">
                    Live Demo <FaArrowUpRightFromSquare />
                  </a>
                )}
                {hasFrontend && (
                  <a href={project.links.frontend} target="_blank" rel="noreferrer" className="premium-button premium-button--secondary">
                    Frontend <FaCodeBranch />
                  </a>
                )}
                {hasBackend && (
                  <a href={project.links.backend} target="_blank" rel="noreferrer" className="premium-button premium-button--secondary">
                    Backend <FaCodeBranch />
                  </a>
                )}
                {!hasFrontend && !hasBackend && hasGithub && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="premium-button premium-button--secondary">
                    GitHub <FaCodeBranch />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
