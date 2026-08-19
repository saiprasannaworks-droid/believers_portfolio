import {
  FaArrowUpRightFromSquare,
  FaCodeBranch,
  FaStar,
} from "react-icons/fa6";

function ProjectCard({ project, onOpen }) {
  if (!project) return null;

  const hasImage = Boolean(project.images?.thumbnail);
  const hasLive = Boolean(project.links?.live);
  const hasGithub = Boolean(project.links?.github);
  const hasFrontend = Boolean(project.links?.frontend);
  const hasBackend = Boolean(project.links?.backend);

  const features = Array.isArray(project.keyFeatures)
    ? project.keyFeatures.slice(0, 3)
    : [];

  const tech = Array.isArray(project.techStack)
    ? project.techStack.slice(0, 6)
    : [];

  return (
    <article className="project-card glass-card glow-ring noise-overlay">
      {/* Clickable area opens modal */}
      <button
        type="button"
        className="project-card__interactive"
        onClick={() => onOpen?.(project)}
        aria-label={`Open details for ${project.name}`}
      >
        <div className="project-card__media">
          {hasImage ? (
            <div className="project-card__image-wrap">
              <img
                src={project.images.thumbnail}
                alt={project.name}
                className="project-card__image"
              />
              <div className="project-card__image-overlay" />
            </div>
          ) : (
            <div className="project-card__placeholder">
              <span className="project-card__placeholder-text">
                Screenshot coming soon
              </span>
            </div>
          )}
          <span className="project-card__category-pill">View Details</span>
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__description">{project.shortDescription}</p>

          {features.length > 0 && (
            <ul className="project-card__features">
              {features.map((feat) => (
                <li key={feat} className="project-card__feature">
                  <FaStar className="project-card__feature-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="project-card__tech">
            {tech.map((item) => (
              <span key={item} className="project-card__chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </button>

      <div className="project-card__actions">
        {hasLive && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="project-card__action project-card__action--primary"
          >
            <FaArrowUpRightFromSquare />
            <span>Live Demo</span>
          </a>
        )}

        {hasFrontend && (
          <a
            href={project.links.frontend}
            target="_blank"
            rel="noreferrer"
            className="project-card__action project-card__action--secondary"
          >
            <FaCodeBranch />
            <span>Frontend</span>
          </a>
        )}

        {hasBackend && (
          <a
            href={project.links.backend}
            target="_blank"
            rel="noreferrer"
            className="project-card__action project-card__action--secondary"
          >
            <FaCodeBranch />
            <span>Backend</span>
          </a>
        )}

        {!hasFrontend && !hasBackend && hasGithub && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__action project-card__action--secondary"
          >
            <FaCodeBranch />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;