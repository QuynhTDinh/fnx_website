export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface HubData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  features: string[];
}

export interface HeroData {
  id: number;
  documentId: string;
  title_part_1: string;
  title_part_2: string;
  video_url: string;
  cta_text: string;
  cta_link: string;
}

export interface ProjectData {
  id: number;
  documentId: string;
  title: string;
  client: string;
  description: string;
  image_url: string;
}
