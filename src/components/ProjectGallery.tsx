import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectGallery() {
  return (
    <div className="flex h-dvh items-center gap-6 px-6">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;
