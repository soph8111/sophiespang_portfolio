import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    year: 2026,
    context: "Personal Project",
    role: "Design & Development",
    description: "Example project used as a template for portfolio content.",
    cover: "/projects/example/cover.png",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/example-project",
  },
];
