import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import ProjectMedia from "../components/ProjectMedia";
import { projectEnterTransition } from "../utils/motion";
import NotFoundPage from "./NotFoundPage";

function ProjectPage() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex((project) => project.slug === slug);

  const project = projects[projectIndex];

  if (!project) {
    return <NotFoundPage />;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <motion.section key={project.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={projectEnterTransition} className="mx-auto max-w-300 px-6 md:px-30 xl:px-20 pb-32 pt-32 md:pt-45">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold">{project.title}</h1>

        <p className="mt-4 text-sm">
          {project.year} · {project.context} · {project.role}
        </p>

        <p className="mt-8 max-w-xl text-base whitespace-pre-line">{project.description}</p>

        <div className="mt-8 flex gap-4 text-sm uppercase items-start">
          {project.liveUrl && (
            <a href={project.liveUrl.link} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-50">
              {project.liveUrl.label ? project.liveUrl.label : "Live"} ↗
            </a>
          )}

          {project.otherUrl && (
            <a href={project.otherUrl.link} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-50">
              {project.otherUrl.label} ↗
            </a>
          )}

          {project.githubUrl && (
            <a href={project.githubUrl.link} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-50">
              {project.githubUrl.label ? project.githubUrl.label : "GitHub"} ↗
            </a>
          )}
        </div>
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
