// application
import type { IBrand } from "./brand";
import type { IShopCategory } from "./category";
import type { ICustomFields } from "./custom-fields";
import type { IFilterableList, INavigableList, ISortableList } from "./list";

export interface IBaseAttributeGroup {
  customFields?: ICustomFields;
  name: string;
  slug: string;
}

export type IProductAttributeGroup = IBaseAttributeGroup & {
  attributes: IProductAttribute[];
};
export type IProductTypeAttributeGroup = IBaseAttributeGroup & {
  attributes: string[];
};

export interface IProductType {
  attributeGroups: IProductTypeAttributeGroup[];
  customFields?: ICustomFields;
  name: string;
  slug: string;
}

export interface IProductAttributeValue {
  customFields?: ICustomFields;
  name: string;
  slug: string;
}

export interface IProductAttribute {
  customFields?: ICustomFields;
  featured: boolean;
  name: string;
  slug: string;
  values: IProductAttributeValue[];
}

export interface IProductOptionValueBase {
  customFields?: ICustomFields;
  name: string;
  slug: string;
}

export interface IProductOptionValueColor extends IProductOptionValueBase {
  color: string;
}

export interface IProductOptionBase {
  customFields?: ICustomFields;
  name: string;
  slug: string;
  type: string;
  values: IProductOptionValueBase[];
}

export interface IProductOptionDefault extends IProductOptionBase {
  type: "default";
}

export interface IProductOptionColor extends IProductOptionBase {
  type: "color";
  values: IProductOptionValueColor[];
}

export type IProductOption = IProductOptionDefault | IProductOptionColor;

export type IProductStock = "in-stock" | "out-of-stock" | "on-backorder";

export type IProductCompatibilityResult = "all" | "fit" | "not-fit" | "unknown";

export interface IProduct {
  attributes: IProductAttribute[];
  availability?: string;
  badges?: string[];
  brand?: IBrand | null;
  categories?: IShopCategory[];
  compareAtPrice: number | null;
  /**
   * 'all'     - Compatible with all vehicles.
   * 'unknown' - No compatibility information. Part may not fit the specified vehicle.
   * number[]  - An array of vehicle identifiers with which this part is compatible.
   */
  compatibility: "all" | "unknown" | number[];
  customFields?: ICustomFields;
  description: string;
  /**
   * A short product description without HTML tags.
   */
  excerpt: string;
  id: number;
  images?: string[];
  name: string;
  options: IProductOption[];
  partNumber: string;
  price: number;
  rating?: number;
  reviews?: number;
  sku?: string;
  slug: string;
  stock: IProductStock;
  tags?: string[];
  type: IProductType;
}

export type IProductsList = ISortableList<IProduct> &
  INavigableList<IProduct> &
  IFilterableList<IProduct>;
