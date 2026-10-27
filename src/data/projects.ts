import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "dhl-relay",
    title: "DHL Relay",

    year: 2026,
    context: "Bachelor Project",
    role: "Design & Development",

    description: "A realtime tracking experience created for Dwarf’s annual DHL Relay.",

    cover: "/projects/dhl-relay/cover.png",

    media: [
      {
        type: "image",
        src: "/projects/dhl-relay/cover.png",
        alt: "DHL Relay project",
      },
      {
        type: "image",
        src: "/projects/dhl-relay/cover.png",
        alt: "DHL Relay project",
      },
    ],

    githubUrl: "https://github.com/soph8111/dhl-relay",
    liveUrl: "https://dhl-relay.onrender.com/",
  },
];
