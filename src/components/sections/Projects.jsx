import { useMemo, useState } from "react";
import { projectCategories, projectsData } from "../../data/projectsData";
import PageContainer from "../layout/PageContainer";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../common/SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const safeProjects = Array.isArray(projectsData) ? projectsData : [];

  const featuredProject = useMemo(() => {
    return safeProjects.find((project) => project?.featured) || null;
  }, [safeProjects]);

  const regularProjects = useMemo(() => {
    return safeProjects.filter((project) => !project?.featured);
  }, [safeProjects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return regularProjects;
    return regularProjects.filter((project) => project?.category === activeCategory);
  }, [activeCategory, regularProjects]);

  const filterItems = ["All", ...projectCategories];

  const handleOpenProject = (project) => {
    if (!project) return;
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <SectionWrapper id="projects" className="projects-section">
      <PageContainer>
        <SectionHeading
          eyebrow="Projects"
          title="Work built across"
          highlight="multiple categories"
          description="A categorized showcase of full stack builds, frontend applications, React-based experiences, and landing-page implementations."
        />

        {featuredProject ? (
          <div className="projects-featured">
            <FeaturedProject
              project={featuredProject}
              onOpen={handleOpenProject}
            />
          </div>
        ) : null}

        <div className="projects-filter-bar">
          {filterItems.map((item) => (
            <button
              key={item}
              type="button"
              className={`projects-filter-bar__button ${
                activeCategory === item ? "is-active" : ""
              }`}
              onClick={() => setActiveCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="projects-grid projects-grid--premium">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={handleOpenProject}
              />
            ))
          ) : (
            <div className="projects-empty-state glass-card glass-card--soft">
              <h3 className="projects-empty-state__title">No projects in this category yet</h3>
              <p className="projects-empty-state__text">
                Try switching the filter or check the project data file.
              </p>
            </div>
          )}
        </div>
      </PageContainer>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseProject}
      />
    </SectionWrapper>
  );
}

export default Projects;