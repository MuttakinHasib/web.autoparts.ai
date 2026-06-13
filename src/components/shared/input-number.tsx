"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clamp } from "@/lib/format";
import { cn } from "@/lib/utils";

interface InputNumberProps {
  "aria-label"?: string;
  className?: string;
  defaultValue?: number;
  disabled?: boolean;
  max?: number;
  min?: number;
  onValueChange?: (value: number) => void;
  step?: number;
  value?: number;
}

/**
 * Quantity stepper ported from the legacy `InputNumber`. Works controlled
 * (pass `value` + `onValueChange`) or uncontrolled (pass `defaultValue`).
 */
export function InputNumber({
  value,
  defaultValue = 1,
  onValueChange,
  min = 1,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  disabled,
  className,
  "aria-label": ariaLabel = "Quantity",
}: InputNumberProps) {
  const id = useId();
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = value != null;
  const current = isControlled ? value : internal;

  const commit = (next: number) => {
    const clamped = clamp(next, min, max);
    if (!isControlled) {
      setInternal(clamped);
    }
    onValueChange?.(clamped);
  };

  return (
    <div
      className={cn(
        "inline-flex h-10 items-center rounded-md border border-input",
        disabled && "opacity-50",
        className
      )}
    >
      <Button
        aria-label="Decrease quantity"
        className="size-10 rounded-e-none"
        disabled={disabled || current <= min}
        onClick={() => commit(current - step)}
        size="icon"
        type="button"
        variant="ghost"
      >
        <Minus className="size-4" />
      </Button>
      <Input
        aria-label={ariaLabel}
        className="h-10 w-12 border-0 px-0 text-center shadow-none focus-visible:ring-0"
        disabled={disabled}
        id={id}
        inputMode="numeric"
        onChange={(e) => {
          const parsed = Number.parseInt(e.target.value, 10);
          commit(Number.isNaN(parsed) ? min : parsed);
        }}
        value={current}
      />
      <Button
        aria-label="Increase quantity"
        className="size-10 rounded-s-none"
        disabled={disabled || current >= max}
        onClick={() => commit(current + step)}
        size="icon"
        type="button"
        variant="ghost"
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
}
