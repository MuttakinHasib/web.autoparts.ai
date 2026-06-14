import { type CurrencyOptions, formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

type PriceProps = CurrencyOptions & {
  value: number;
  /** Optional original price to show struck-through alongside the current one. */
  oldValue?: number;
  className?: string;
};

/** Renders a formatted price, with an optional struck-through original price. */
export function Price({
  value,
  oldValue,
  className,
  currency,
  locale,
}: PriceProps) {
  const opts = { currency, locale };

  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <span className="font-semibold text-foreground">
        {formatCurrency(value, opts)}
      </span>
      {oldValue != null && oldValue > value ? (
        <span className="font-normal text-muted-foreground text-sm line-through">
          {formatCurrency(oldValue, opts)}
        </span>
      ) : null}
    </span>
  );
}
