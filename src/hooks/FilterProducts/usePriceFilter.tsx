import { clampValue } from "@/lib/FilterProducts/clamp";
import { parseNumber } from "@/lib/FilterProducts/number";
import { useState, useCallback } from "react";

const PRICE_CONFIG = {
  STEP: 100_000,
  MIN: 0,
  MAX: 10_000_000,
} as const;

export type PriceRange = [number, number];

export function usePriceFilter(initialMin: number, initialMax: number) {
  const [priceRange, setPriceRange] = useState<PriceRange>([
    initialMin,
    initialMax,
  ]);
  const [isMinFocused, setIsMinFocused] = useState(false);
  const [isMaxFocused, setIsMaxFocused] = useState(false);

  const handleMinPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseNumber(e.target.value);
      setPriceRange(([_, max]) => {
        const valid = clampValue(val, PRICE_CONFIG.MIN, PRICE_CONFIG.MAX);
        const final = Math.min(valid, max - PRICE_CONFIG.STEP);
        return [final, max];
      });
    },
    []
  );

  const handleMaxPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseNumber(e.target.value);
      setPriceRange(([min, _]) => {
        const valid = clampValue(val, PRICE_CONFIG.MIN, PRICE_CONFIG.MAX);
        const final = Math.max(valid, min + PRICE_CONFIG.STEP);
        return [min, final];
      });
    },
    []
  );

  const handleSliderChange = useCallback((value: number | number[]) => {
    const [minValue, maxValue] = value as PriceRange;
    const validMin = clampValue(minValue, PRICE_CONFIG.MIN, PRICE_CONFIG.MAX);
    const validMax = clampValue(maxValue, PRICE_CONFIG.MIN, PRICE_CONFIG.MAX);
    const finalMin = Math.min(validMin, validMax - PRICE_CONFIG.STEP);
    const finalMax = Math.max(finalMin + PRICE_CONFIG.STEP, validMax);
    setPriceRange([finalMin, finalMax]);
  }, []);

  return {
    PRICE_CONFIG,
    priceRange,
    isMinFocused,
    isMaxFocused,
    setIsMinFocused,
    setIsMaxFocused,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleSliderChange,
  };
}
