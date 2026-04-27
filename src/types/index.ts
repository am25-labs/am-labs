import type { SimpleIcon } from "simple-icons";
import type { ProjectItem } from "./content";

export type { PlankListResponse, PlankParams } from "@am25/plank-client";
export type { ProjectItem, Project, Home } from "./content";

export interface AccordionWrapItem {
  value: string;
  label: string;
  content: string;
}

export interface ProjectContentProps {
  title: string;
  icon: string | null;
  description: string;
  details: ProjectItem[];
  meta: ProjectItem[];
  get_started: string | null;
}

export interface PageDescriptionProps {
  description: string;
  variant?: "default" | "display";
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
  variant?: "default" | "yellow" | "light";
}
