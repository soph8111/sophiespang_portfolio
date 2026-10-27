import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectGallery() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;
