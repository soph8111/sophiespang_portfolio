export interface Project {
  slug: string;
  title: string;
  year: number;
  context: string;
  role: string;
  description: string;
  cover: ProjectMedia;
  media: ProjectMedia[];

  gallery: {
    size: "small" | "medium" | "large";
    y: number;
  };

  liveUrl?: {
    link: string;
    label?: string;
  };
  githubUrl?: {
    link: string;
    label?: string;
  };
  otherUrl?: {
    link: string;
    label: string;
  };
}

export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      layout?: "full" | "half";
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      layout?: "full" | "half";
    };
