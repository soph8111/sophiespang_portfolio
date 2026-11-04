import { Link } from "react-router-dom";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  mobile?: boolean;
  onCoverReady?: () => void;
}

function ProjectCard({ project, mobile = false, onCoverReady }: ProjectCardProps) {
  const sizeClasses = {
    small: "h-[28dvh]",
    medium: "h-[38dvh]",
    large: "h-[45dvh]",
  };

  const renderCover = (mobile = false) => {
    const className = mobile ? "block h-auto w-full object-contain" : `block w-auto max-w-none object-contain ${sizeClasses[project.gallery.size]}`;

    if (project.cover.type === "video") {
      return <video src={project.cover.src} poster={project.cover.poster} autoPlay muted loop playsInline preload="auto" onLoadedData={onCoverReady} onError={onCoverReady} className={className} />;
    }

    return <img src={project.cover.src} alt={project.cover.alt} onLoad={onCoverReady} onError={onCoverReady} className={className} />;
  };

  if (mobile) {
    return (
      <Link to={`/${project.slug}`} className="block">
        {renderCover(true)}

        <div className="mt-2 flex justify-between">
          <h2>{project.title}</h2>
          <span>{project.year}</span>
        </div>
      </Link>
    );
  }

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
          {renderCover()}

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
