import {
  FaArrowUpRightFromSquare,
  FaCodeBranch,
  FaLayerGroup,
  FaServer,
  FaStar,
} from "react-icons/fa6";

function ProjectCard({ project, onOpen }) {
  if (!project) return null;

  const hasImage = Boolean(project?.images?.thumbnail);
  const hasLive = Boolean(project?.links?.live);
  const hasFrontend = Boolean(project?.links?.frontend);
  const hasBackend = Boolean(project?.links?.backend);
  const hasGithub = Boolean(project?.links?.github);

  const featureList = Array.isArray(project?.keyFeatures)
    ? project.keyFeatures.slice(0, 3)
    : [];

  const techList = Array.isArray(project?.techStack)
    ? project.techStack.slice(0, 5)
    : [];

  return (
    <article className="project-card project-card--premium glass-card glow-ring noise-overlay">
      <button
        type="button"
        className="project-card__interactive"
        onClick={() => onOpen?.(project)}
        aria-label={`Open details for ${project?.name || "project"}`}
      >
        <div className="project-card__media">
          {hasImage ? (
            <div className="project-card__image-wrap">
              <img
                src={project.images.thumbnail}
                alt={project.name || "Project"}
                className="project-card__image"
              />
              <div className="project-card__image-overlay" />
              <div className="project-card__shine" />
            </div>
          ) : (
            <div className="project-card__placeholder">
              <div className="project-card__placeholder-orb project-card__placeholder-orb--one" />
              <div className="project-card__placeholder-orb project-card__placeholder-orb--two" />
              <div className="project-card__placeholder-content">
                <span className="project-card__placeholder-icon">
                  <FaLayerGroup />
                </span>
                <span className="project-card__placeholder-text">
                  Preview coming soon
                </span>
              </div>
            </div>
          )}

          <div className="project-card__floating-row">
            <span className="project-card__status">{project?.status || "Project"}</span>
            <span className="project-card__category-pill">
              {project?.category || "Category"}
            </span>
          </div>
        </div>

        <div className="project-card__body">
          <div className="project-card__header">
            <div className="project-card__title-row">
              <h3 className="project-card__title">{project?.name || "Untitled Project"}</h3>
              <span className="project-card__view-hint">Open details</span>
            </div>

            <p className="project-card__description">
              {project?.shortDescription || "Project description not added yet."}
            </p>
          </div>

          <div className="project-card__info-grid">
            <div className="project-card__info-block">
              <span className="project-card__info-label">Highlights</span>

              {featureList.length > 0 ? (
                <ul className="project-card__mini-list">
                  {featureList.map((item) => (
                    <li key={item} className="project-card__mini-list-item">
                      <FaStar className="project-card__mini-list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="project-card__mini-list">
                  <li className="project-card__mini-list-item">
                    <FaStar className="project-card__mini-list-icon" />
                    <span>Detailed features available inside the project modal.</span>
                  </li>
                </ul>
              )}
            </div>

            <div className="project-card__info-block">
              <span className="project-card__info-label">Tech Stack</span>
              <div className="project-card__tech">
                {techList.length > 0 ? (
                  techList.map((item) => (
                    <span key={item} className="project-card__chip">
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="project-card__chip">Stack not added yet</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </button>

      <div className="project-card__actions">
        <button
          type="button"
          className="project-card__action project-card__action--primary"
          onClick={() => onOpen?.(project)}
        >
          <FaArrowUpRightFromSquare />
          <span>View Full Details</span>
        </button>

        {hasLive ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="project-card__action project-card__action--secondary"
            aria-label={`Open live demo for ${project?.name || "project"}`}
          >
            <FaArrowUpRightFromSquare />
            <span>Live Demo</span>
          </a>
        ) : null}

        {hasFrontend ? (
          <a
            href={project.links.frontend}
            target="_blank"
            rel="noreferrer"
            className="project-card__action project-card__action--secondary"
            aria-label={`Open frontend repository for ${project?.name || "project"}`}
          >
            <FaCodeBranch />
            <span>Frontend</span>
          </a>
        ) : null}

        {hasBackend ? (
          <a
            href={project.links.backend}
            target="_blank"
            rel="noreferrer"
            className="project-card__action project-card__action--secondary"
            aria-label={`Open backend repository for ${project?.name || "project"}`}
          >
            <FaServer />
            <span>Backend</span>
          </a>
        ) : null}

        {!hasFrontend && !hasBackend && hasGithub ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__action project-card__action--secondary"
            aria-label={`Open GitHub repository for ${project?.name || "project"}`}
          >
            <FaCodeBranch />
            <span>GitHub</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;