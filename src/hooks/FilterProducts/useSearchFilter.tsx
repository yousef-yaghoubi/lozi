import { useState, useCallback } from "react";

export function useSearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  return { searchQuery, handleSearchChange };
}
