import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectMedia from "../components/ProjectMedia";
import { projectEnterTransition } from "../utils/motion";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={projectEnterTransition} className="mx-auto max-w-300 px-6 pb-32 pt-40">
      <div className="mb-20 max-w-3xl">
        <h1 className="text-6xl font-bold uppercase">{project.title}</h1>

        <p className="mt-4 text-sm">
          {project.year} · {project.context} · {project.role}
        </p>

        <p className="mt-8 max-w-xl text-lg">{project.description}</p>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex gap-6 text-sm font-medium">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                VIEW PROJECT ↗
              </a>
            )}

            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GITHUB ↗
              </a>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {project.media.map((item) => (
          <ProjectMedia key={item.src} item={item} />
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectPage;
