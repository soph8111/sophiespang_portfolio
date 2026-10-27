import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section>
      <h1>{project.title}</h1>

      <p>
        {project.year} · {project.context} · {project.role}
      </p>

      <p>{project.description}</p>

      <div>
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

      <div>
        {project.media.map((item, index) => {
          if (item.type === "image") {
            return <img key={index} src={item.src} alt={item.alt} />;
          }

          if (item.type === "video") {
            return <video key={index} src={item.src} poster={item.poster} controls />;
          }

          return null;
        })}
      </div>
    </section>
  );
}

export default ProjectPage;
