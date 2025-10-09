import { useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { PriceRange } from "./usePriceFilter";
import { getCategoryValue } from "@/lib/FilterProducts/category";

export interface SearchParams {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
}

export function useFilterNavigation(
  searchQuery: string,
  priceRange: PriceRange,
  selectedCategory: string,
  PRICE_CONFIG: { MIN: number; MAX: number }
) {
  const navigate = useNavigate();

  const buildSearchParams = useCallback((): SearchParams => {
    const params: SearchParams = {};

    if (searchQuery) params.search = searchQuery;
    if (priceRange[0] !== PRICE_CONFIG.MIN) params.minPrice = priceRange[0];
    if (priceRange[1] !== PRICE_CONFIG.MAX) params.maxPrice = priceRange[1];

    const categoryValue = getCategoryValue(selectedCategory);
    if (categoryValue) params.category = categoryValue;

    return params;
  }, [searchQuery, priceRange, selectedCategory]);

  const handleSearch = useCallback(() => {
    navigate({ to: "/productList", search: buildSearchParams() });
  }, [navigate, buildSearchParams]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleSearch();
    },
    [handleSearch]
  );

  return { handleSearch, handleKeyDown };
}
