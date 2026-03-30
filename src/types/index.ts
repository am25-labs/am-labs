import type { SimpleIcon } from "simple-icons";

export interface PageDescriptionProps {
  description: string;
}

export interface GridProps {
  class?: string;
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

export interface RootLayoutProps {
  title?: string;
}
