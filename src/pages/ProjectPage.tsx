import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import ProjectMedia from "../components/ProjectMedia";
import { projectEnterTransition } from "../utils/motion";

function ProjectPage() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex((project) => project.slug === slug);

  const project = projects[projectIndex];

  if (!project) {
    return <p>Project not found.</p>;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={projectEnterTransition} className="mx-auto max-w-300 px-6 pb-32 mt-32 md:pt-40">
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {project.media.map((item) => (
          <ProjectMedia key={item.src} item={item} />
        ))}
      </div>

      <div className="mt-15 md:ml-auto w-fit">
        <Link to={`/${nextProject.slug}`} className="group block">
          <span className="text-sm uppercase">Next project</span>

          <div className="mt-1 flex gap-2">
            <h2 className="text-3xl font-bold uppercase">{nextProject.title}</h2>

            <span className="text-3xl transition-transform group-hover:translate-x-2">→</span>
          </div>
        </Link>
      </div>
    </motion.section>
  );
}

export default ProjectPage;
