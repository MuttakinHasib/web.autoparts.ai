// application
import type { IFilter } from "./filter";
import type { IOrder } from "./order";
import type { IReview } from "./review";

export interface IList<T> {
  /** Array of list items. */
  items: T[];
}

export interface ISortableList<T> extends IList<T> {
  /** Sorting algorithm. */
  sort: string;
}

export interface ICursorBasedNavigation {
  endCursor: string | null;

  hasNextPage: boolean;

  hasPreviousPage: boolean;

  /** Items per page. */
  limit: number;

  startCursor: string | null;

  /** Total items in list. Not a items.length. */
  total?: number;
  type: "cursor";
}

export interface IPageBasedNavigation {
  /** Common number of the first item on the current page. */
  from: number;

  /** Items per page. */
  limit: number;

  /** Current page. */
  page: number;

  /** Total number of pages. */
  pages: number;

  /** Common number of the last item on the current page. */
  to: number;

  /** Total items in list. Not a items.length. */
  total: number;
  type: "page";
}

export type INavigation = ICursorBasedNavigation | IPageBasedNavigation;

export interface INavigableList<T> extends IList<T> {
  navigation: INavigation;
}

export interface IFilterableList<T> extends IList<T> {
  filters: IFilter[];
}

export interface IListOptions {
  after?: string;
  // Cursor based navigation
  before?: string;
  limit?: number;
  // Page based navigation
  page?: number;
  sort?: string;
}

export interface IFilterValues {
  [filterSlug: string]: string;
}

export type IOrdersList = ISortableList<IOrder> & INavigableList<IOrder>;

export type IReviewsList = ISortableList<IReview> & INavigableList<IReview>;
