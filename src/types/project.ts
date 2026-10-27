export interface Project {
  slug: string;
  title: string;
  year: number;
  context: string;
  role: string;
  description: string;
  cover: string;
  media: ProjectMedia[];

  gallery: {
    size: "small" | "medium" | "large";
    y: number;
  };

  liveUrl?: string;
  githubUrl?: string;
}

export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
    };
