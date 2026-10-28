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
        <div className="relative overflow-hidden">
          <img src={project.cover} alt={project.title} className={`block w-auto max-w-none object-contain ${sizeClasses[project.gallery.size]}`} />

          <div className="absolute inset-x-0 bottom-0 hidden translate-y-full items-center justify-between bg-foreground px-4 py-3 text-background transition-transform duration-300 ease-out group-hover:translate-y-0 md:flex">
            <h2 className="font-medium">{project.title}</h2>
            <span>{project.year}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
