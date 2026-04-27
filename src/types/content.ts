export interface ProjectItem {
  label: string;
  content: string;
}

// Collections

export interface Project {
  id: string;
  title: string;
  slug: string;
  icon: string | null;
  featured: boolean;
  quote: string;
  description: string;
  details: ProjectItem[];
  meta: ProjectItem[];
  get_started: string | null;
  status: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

// Single Types

export interface Home {
  id: string;
  quote: string;
  faq: ProjectItem[];
  status: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}
