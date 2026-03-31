import type { SimpleIcon } from "simple-icons";

export interface FaqItem {
  value: string;
  trigger: string;
  content: string;
}

export interface ProjectDetail {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectContentProps {
  title: string;
  icon: string;
  description: string;
  details: ProjectDetail[];
  license: string;
  repository?: ProjectLink;
  availability: string;
  deployment: string;
  started: string;
  updated: string;
  owner: ProjectLink;
}

export interface PageDescriptionProps {
  description: string;
}

export interface GridProps {
  class?: string;
  gap?: string;
}

export interface BrandIconProps {
  icon: SimpleIcon;
  size?: number;
  "aria-label"?: string;
}

export interface LogoTileProps {
  logo: string;
  title: string;
  href?: string;
}

export interface SocNavProps {
  href: string;
  icon: SimpleIcon;
  size?: number;
}

export interface NavProps {
  label: string;
  href: string;
  icon?: string;
}

export interface RootLayoutProps {
  title?: string;
}
