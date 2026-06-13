// application
import type { ICustomFields } from "./custom-fields";

export interface IBaseCategory {
  children?: this[];
  customFields: ICustomFields;
  id: number;
  image: string | null;
  items?: number;
  name: string;
  parent?: this | null;
  slug: string;
  type: string;
}

export type IShopCategoryLayout = "categories" | "products";

export interface IShopCategory extends IBaseCategory {
  layout: IShopCategoryLayout;
  type: "shop";
}

export interface IBlogCategory extends IBaseCategory {
  type: "blog";
}

export type ICategory = IShopCategory | IBlogCategory;
