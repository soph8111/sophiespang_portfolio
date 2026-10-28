import { Link } from "react-router-dom";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  mobile?: boolean;
}

function ProjectCard({ project, mobile = false }: ProjectCardProps) {
  if (mobile) {
    return (
      <Link to={`/${project.slug}`} className="block">
        <img src={project.cover} alt={project.title} className="h-auto w-full" />

        <div className="mt-2 flex justify-between">
          <h2>{project.title}</h2>
          <span>{project.year}</span>
        </div>
      </Link>
    );
  }

  const sizeClasses = {
    small: "h-[32dvh]",
    medium: "h-[42dvh]",
    large: "h-[52dvh]",
  };

  return (
    <Link
      to={`/${project.slug}`}
      className="group block shrink-0"
      style={{
        transform: `translateY(${project.gallery.y}dvh)`,
      }}
    >
      <article>
        <div className="overflow-hidden">
          <img src={project.cover} alt={project.title} className={`block w-auto max-w-none object-contain transition-transform duration-500 ease-out group-hover:scale-[1.07s] ${sizeClasses[project.gallery.size]}`} />
        </div>

        <div className="mt-2 flex justify-between text-sm">
          <h2 className="font-medium">{project.title}</h2>
          <span>{project.year}</span>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
