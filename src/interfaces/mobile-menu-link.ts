// application
import type { ILink } from "./link";

export interface IMobileMenuLink extends ILink {
  image?: string;
  submenu?: IMobileMenuLink[];
}
