// application
import type { INestedLink } from "./link";

export interface IMenuBase {
  type: string;
}

export type IMegamenuSize = "xl" | "lg" | "md" | "nl" | "sm";

export type IMegamenuColumnSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "1of1"
  | "1of2"
  | "1of3"
  | "1of4"
  | "1of5";

export interface IMegamenuColumn {
  links: INestedLink[];
  size: IMegamenuColumnSize;
}

export interface IMegamenu extends IMenuBase {
  columns: IMegamenuColumn[];
  image?: string;
  size: IMegamenuSize;
  type: "megamenu";
}

export interface IMenu extends IMenuBase {
  links: INestedLink[];
  type: "menu";
}
