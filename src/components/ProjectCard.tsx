import { Link } from "react-router-dom";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/${project.slug}`}>
      <article>
        <img src={project.cover} alt={project.title} />

        <div>
          <h2>{project.title}</h2>
          <span>{project.year}</span>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
