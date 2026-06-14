export type IDirection = "ltr" | "rtl";

export interface ILanguage {
  code: string;
  direction: IDirection;
  icon: string;
  locale: string;
  name: string;
}
