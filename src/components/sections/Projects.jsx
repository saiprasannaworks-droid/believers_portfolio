import { useState } from "react";
import { mernProjects, frontendProjects } from "../../data/projectsData";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    if (project) setSelectedProject(project);
  };

  const handleClose = () => setSelectedProject(null);

  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <div data-reveal="up">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">
            Work built across{" "}
            <span className="gradient-text">multiple categories</span>
          </h2>
          <p className="section-description">
            A curated showcase of full stack MERN builds and frontend React applications
            demonstrating real-world problem solving.
          </p>
        </div>

        <div className="projects-subsection" data-reveal="up">
          <h3 className="projects-subsection__title">
            🔥 Full Stack — MERN Projects
          </h3>
          <div className="projects-grid">
            {mernProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={handleOpen} />
            ))}
          </div>
        </div>

        <div className="projects-subsection" data-reveal="up">
          <h3 className="projects-subsection__title">
            ⚡ Frontend — React Projects
          </h3>
          <div className="projects-grid">
            {frontendProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={handleOpen} />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleClose}
      />
    </section>
  );
}

export default Projects;