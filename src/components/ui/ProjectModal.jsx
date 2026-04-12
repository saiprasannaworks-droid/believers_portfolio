import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCircleCheck,
  FaCodeBranch,
  FaServer,
  FaXmark,
} from "react-icons/fa6";

const TABS = ["overview", "features", "usage", "stack"];

function ProjectModal({ project, isOpen, onClose }) {
  const [activeImage, setActiveImage] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) {
      setActiveImage("");
      setActiveTab("overview");
      return;
    }

    setActiveImage(project?.images?.thumbnail || "");
    setActiveTab("overview");
  }, [project]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, onClose]);

  const galleryImages = useMemo(() => {
    if (!project) return [];
    return [project?.images?.thumbnail, ...(project?.images?.gallery || [])].filter(Boolean);
  }, [project]);

  if (!isOpen || !project) return null;

  const hasLive = Boolean(project?.links?.live);
  const hasFrontend = Boolean(project?.links?.frontend);
  const hasBackend = Boolean(project?.links?.backend);
  const hasGithub = Boolean(project?.links?.github);

  const keyFeatures = Array.isArray(project?.keyFeatures) ? project.keyFeatures : [];
  const howToUse = Array.isArray(project?.howToUse) ? project.howToUse : [];
  const techStack = Array.isArray(project?.techStack) ? project.techStack : [];

  const modalTitleId = `project-modal-title-${project?.id || "active"}`;
  const modalSummaryId = `project-modal-summary-${project?.id || "active"}`;

  return (
    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalTitleId}
      aria-describedby={modalSummaryId}
    >
      <button
        type="button"
        className="project-modal__backdrop"
        onClick={onClose}
        aria-label="Close project modal"
      />

      <div
        className="project-modal__dialog glass-card glow-ring noise-overlay"
        style={{
          maxHeight: "min(92vh, 980px)",
          overflow: "hidden",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-modal__header">
          <div className="project-modal__header-copy">
            <div className="project-modal__meta-row">
              <span className="section-eyebrow">{project?.category || "Category"}</span>
              <span className="project-modal__status">{project?.status || "Project"}</span>
            </div>

            <h3 id={modalTitleId} className="project-modal__title">
              {project?.name || "Untitled Project"}
            </h3>

            <p id={modalSummaryId} className="project-modal__summary">
              {project?.shortDescription || "Project description not added yet."}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <FaXmark />
          </button>
        </div>

        <div
          className="project-modal__content"
          style={{
            overflowY: "auto",
            overscrollBehavior: "contain",
            paddingRight: "0.25rem",
          }}
        >
          <div className="project-modal__media">
            {activeImage ? (
              <div className="project-modal__active-image-wrap">
                <img
                  src={activeImage}
                  alt={project?.name || "Project"}
                  className="project-modal__active-image"
                />
                <div className="project-modal__active-image-glow" />
              </div>
            ) : (
              <div className="project-modal__media-placeholder">
                <div className="project-modal__media-placeholder-inner">
                  <span className="project-modal__media-placeholder-title">Project Preview</span>
                  <span className="project-modal__media-placeholder-text">
                    This project currently has no uploaded screenshots.
                  </span>
                </div>
              </div>
            )}

            {galleryImages.length > 1 ? (
              <div className="project-modal__thumbs">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${project.id}-gallery-${index}`}
                    type="button"
                    className={`project-modal__thumb ${
                      activeImage === image ? "is-active" : ""
                    }`}
                    onClick={() => setActiveImage(image)}
                    aria-label={`Open preview ${index + 1}`}
                  >
                    <img src={image} alt={`${project.name} preview ${index + 1}`} />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="project-modal__details">
            <div className="project-modal__tabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`project-modal__tab ${activeTab === tab ? "is-active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "overview" && "Overview"}
                  {tab === "features" && "Key Features"}
                  {tab === "usage" && "How to Use"}
                  {tab === "stack" && "Tech Stack"}
                </button>
              ))}
            </div>

            {activeTab === "overview" ? (
              <div className="project-modal__section">
                <h4 className="project-modal__section-title">Detailed Explanation</h4>
                <p className="project-modal__text">
                  {project?.detailedDescription || "Detailed explanation not added yet."}
                </p>
              </div>
            ) : null}

            {activeTab === "features" ? (
              <div className="project-modal__section">
                <h4 className="project-modal__section-title">Key Features</h4>

                {keyFeatures.length > 0 ? (
                  <div className="project-modal__highlight-list">
                    {keyFeatures.map((item) => (
                      <div key={item} className="project-modal__highlight-item">
                        <span className="project-modal__highlight-icon">
                          <FaCircleCheck />
                        </span>
                        <p className="project-modal__highlight-text">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="project-modal__text">No feature list has been added yet.</p>
                )}
              </div>
            ) : null}

            {activeTab === "usage" ? (
              <div className="project-modal__section">
                <h4 className="project-modal__section-title">How to Use</h4>

                {howToUse.length > 0 ? (
                  <div className="project-modal__highlight-list">
                    {howToUse.map((item) => (
                      <div key={item} className="project-modal__highlight-item">
                        <span className="project-modal__highlight-icon">
                          <FaCircleCheck />
                        </span>
                        <p className="project-modal__highlight-text">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="project-modal__text">Usage steps have not been added yet.</p>
                )}
              </div>
            ) : null}

            {activeTab === "stack" ? (
              <div className="project-modal__section">
                <h4 className="project-modal__section-title">Tech Stack</h4>

                {techStack.length > 0 ? (
                  <div className="project-modal__chips">
                    {techStack.map((item) => (
                      <span key={item} className="skills-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="project-modal__text">Tech stack information is not available yet.</p>
                )}
              </div>
            ) : null}

            <div className="project-modal__section">
              <h4 className="project-modal__section-title">Project Links</h4>

              <div className="project-modal__actions">
                {hasLive ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="premium-button premium-button--primary"
                  >
                    Live Demo
                    <FaArrowUpRightFromSquare />
                  </a>
                ) : null}

                {hasFrontend ? (
                  <a
                    href={project.links.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="premium-button premium-button--secondary"
                  >
                    Frontend
                    <FaCodeBranch />
                  </a>
                ) : null}

                {hasBackend ? (
                  <a
                    href={project.links.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="premium-button premium-button--secondary"
                  >
                    Backend
                    <FaServer />
                  </a>
                ) : null}

                {!hasFrontend && !hasBackend && hasGithub ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="premium-button premium-button--secondary"
                  >
                    GitHub
                    <FaCodeBranch />
                  </a>
                ) : null}

                {!hasLive && !hasFrontend && !hasBackend && !hasGithub ? (
                  <p className="project-modal__text">
                    External project links have not been added yet.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;