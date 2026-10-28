import type { ProjectMedia as ProjectMediaType } from "../types/project";

interface ProjectMediaProps {
  item: ProjectMediaType;
}

function ProjectMedia({ item }: ProjectMediaProps) {
  const layoutClass = item.layout === "half" ? "col-span-1" : "col-span-1 md:col-span-2";

  if (item.type === "image") {
    return (
      <div className={layoutClass}>
        <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`${layoutClass} aspect-video overflow-hidden`}>
      <video src={item.src} poster={item.poster} controls playsInline className="h-full w-full object-cover" />
    </div>
  );
}

export default ProjectMedia;
