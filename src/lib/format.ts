/**
 * Formatting helpers ported from the legacy template's CurrencyFormat /
 * number utilities. Kept framework-agnostic so server and client both use them.
 */

export interface CurrencyOptions {
  currency?: string;
  locale?: string;
}

const DEFAULT_CURRENCY = "USD";
const DEFAULT_LOCALE = "en-US";

export function formatCurrency(
  value: number,
  { currency = DEFAULT_CURRENCY, locale = DEFAULT_LOCALE }: CurrencyOptions = {}
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

export function formatNumber(value: number, locale = DEFAULT_LOCALE): string {
  return new Intl.NumberFormat(locale).format(value);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
