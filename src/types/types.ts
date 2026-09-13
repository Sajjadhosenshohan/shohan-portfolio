
export interface TSkill {
  id: string;
  name: string;
  category: string;
  image?: string;
  sortOrder?: number;
  createdAt: string;
  updatedAt: string
}

type TTechnology ={
  // id: string;
  name: string;
  icon?: string;
}
export type TProject = {
  id: string;
  title: string;
  description: string;
  features?: string[];
  project_image?: string | null;
  client_link?: string;
  server_link?: string;
  live_link?: string;
  video_url?: string;
  tags?: string[];
  sortOrder?: number;
  technologies?: TTechnology[];
  authorId?: string;
  createdAt: string;
  updatedAt: string;
};


export type TBlog = {
  id: string;
  title: string;
  short_description: string;
  blog_image?: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  publishDate?: Date;
  tags?: string[];
  video_url?: string;
  sortOrder?: number;
  author: {
    name: string;
    email:string;
    profile_image?: string | null;
  }
  authorId?: string;
  createdAt: string;
  updatedAt: string;
};


  export type TResume = {
    createdAt: string;
    id: string;
    isActive: true;
    pdfUrl: string;
    publicId: null;
    sortOrder?: number;
    title: string;
    updatedAt: string;
  };