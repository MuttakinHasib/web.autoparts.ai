// application
import type { ILink } from "./link";
import type { IMegamenu, IMenu } from "./menu";

export interface IMainMenuLink extends ILink {
  submenu?: IMenu | IMegamenu;
}
