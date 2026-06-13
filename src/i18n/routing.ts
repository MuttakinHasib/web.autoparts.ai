import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "ar"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];

export const rtlLocales: Locale[] = ["ar"];

export function getDirection(locale: string): "ltr" | "rtl" {
  return rtlLocales.includes(locale as Locale) ? "rtl" : "ltr";
}
