// react
import type React from "react";
// application
import type { ICustomFields } from "./custom-fields";

/** Link target — a path string or a next/link-style URL object. */
export type IAppLinkHref =
  | string
  | { pathname: string; query?: Record<string, string> };

export interface ILink {
  customFields?: ICustomFields;
  title: string | React.ReactNode;
  url?: IAppLinkHref;
}

export interface INestedLink extends ILink {
  links?: INestedLink[];
}
