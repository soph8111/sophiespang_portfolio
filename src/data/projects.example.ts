import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    year: 2026,
    context: "Personal Project",
    role: "Design & Development",
    description: "Example project used as a template for portfolio content.",
    cover: {
      type: "image",
      src: "/projects/example/cover.webp",
      alt: "Example project cover image",
    },
    media: [
      {
        type: "image",
        src: "/projects/example/detail-01.png",
        alt: "Example project detail",
      },
      {
        type: "video",
        src: "/projects/example/demo.mp4",
      },
    ],
    gallery: {
      size: "medium",
      y: 0,
    },
    liveUrl: {
      link: "https://example.com",
      label: "Live Demo",
    },
    githubUrl: {
      link: "https://github.com/example/example-project",
    },
  },
];
