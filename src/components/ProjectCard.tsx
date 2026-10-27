import { Link } from "react-router-dom";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const sizeClasses = {
    small: "h-[32dvh]",
    medium: "h-[42dvh]",
    large: "h-[52dvh]",
  };

  return (
    <Link
      to={`/${project.slug}`}
      className="block shrink-0"
      style={{
        transform: `translateY(${project.gallery.y}dvh)`,
      }}
    >
      <article>
        <img src={project.cover} alt={project.title} className={`block w-auto max-w-none object-contain ${sizeClasses[project.gallery.size]}`} />

        <div className="mt-2 flex justify-between">
          <h2>{project.title}</h2>
          <span>{project.year}</span>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
