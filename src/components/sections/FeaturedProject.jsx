import {
  FaArrowUpRightFromSquare,
  FaCodeBranch,
  FaServer,
  FaStar,
} from "react-icons/fa6";

function FeaturedProject({ project, onOpen }) {
  if (!project) return null;

  const hasImage = Boolean(project?.images?.thumbnail);
  const hasLive = Boolean(project?.links?.live);
  const hasFrontend = Boolean(project?.links?.frontend);
  const hasBackend = Boolean(project?.links?.backend);
  const hasGithub = Boolean(project?.links?.github);

  return (
    <article className="featured-project featured-project--premium glass-card glow-ring noise-overlay">
      <button
        type="button"
        className="featured-project__interactive"
        onClick={() => onOpen?.(project)}
        aria-label={`Open details for ${project.name}`}
      >
        <div className="featured-project__media">
          {hasImage ? (
            <>
              <img
                src={project.images.thumbnail}
                alt={project.name}
                className="featured-project__image"
              />
              <div className="featured-project__overlay" />
              <div className="featured-project__shine" />
            </>
          ) : (
            <div className="featured-project__placeholder">
              <div className="featured-project__placeholder-orb featured-project__placeholder-orb--one" />
              <div className="featured-project__placeholder-orb featured-project__placeholder-orb--two" />
              <div className="featured-project__placeholder-content">
                <span className="featured-project__placeholder-title">
                  Featured Preview
                </span>
                <span className="featured-project__placeholder-text">
                  Screenshot will appear here after image upload.
                </span>
              </div>
            </div>
          )}

          <span className="featured-project__badge">Featured Project</span>
        </div>

        <div className="featured-project__content">
          <div className="featured-project__top">
            <div className="featured-project__meta-row">
              <span className="section-eyebrow">{project.category}</span>
              <span className="project-modal__status">{project.status || "Project"}</span>
            </div>

            <div className="featured-project__title-row">
              <h3 className="featured-project__title">{project.name}</h3>
              <span className="featured-project__view-hint">Explore build</span>
            </div>

            <p className="featured-project__description">{project.detailedDescription}</p>
          </div>

          <div className="featured-project__feature-strip">
            {(project.keyFeatures || []).slice(0, 4).map((item) => (
              <div key={item} className="featured-project__feature-item">
                <FaStar className="featured-project__feature-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="featured-project__tech">
            {(project.techStack || []).map((item) => (
              <span key={item} className="skills-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </button>

      <div className="featured-project__actions">
        <button
          type="button"
          className="premium-button premium-button--secondary"
          onClick={() => onOpen?.(project)}
        >
          View Details
          <FaArrowUpRightFromSquare />
        </button>

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
      </div>
    </article>
  );
}

export default FeaturedProject;