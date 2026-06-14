// application
import type { ILink } from "./link";
import type { IMegamenu } from "./menu";

export interface IDepartmentsLink extends ILink {
  submenu?: IMegamenu;
}
