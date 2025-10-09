import { DEFAULT_CATEGORY, getCategoryLabel } from "@/lib/FilterProducts/category";
import { useState, useMemo } from "react";

export function useCategoryFilter() {
  const [selectedValue, setSelectedValue] = useState(DEFAULT_CATEGORY);

  const selectedLabel = useMemo(
    () => getCategoryLabel(selectedValue),
    [selectedValue]
  );

  return { selectedValue, selectedLabel, setSelectedValue };
}
