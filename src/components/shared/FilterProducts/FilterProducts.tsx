import { useCategoryFilter } from "@/hooks/FilterProducts/useCategoryFilter";
import { useFilterNavigation } from "@/hooks/FilterProducts/useFilterNavigation";
import { usePriceFilter } from "@/hooks/FilterProducts/usePriceFilter";
import { useSearchFilter } from "@/hooks/FilterProducts/useSearchFilter";
import VectorCBig from "@icons/VectorCBig.svg?react";
import CategoryDropdown from "./CategoryDropdown";
import PriceFilter from "./PriceFilter";
import IconSearch from "@icons/search.svg?react";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function FilterProducts() {
  const priceFilter = usePriceFilter(0, 10_000_000);
  const categoryFilter = useCategoryFilter();
  const searchFilter = useSearchFilter();

  const { handleSearch, handleKeyDown } = useFilterNavigation(
    searchFilter.searchQuery,
    priceFilter.priceRange,
    categoryFilter.selectedLabel,
    priceFilter.PRICE_CONFIG
  );

  return (
    <div className="relative overflow-clip flex flex-col lg:flex-row gap-4 py-4 w-full max-w-[1116px] bg-primary min-h-[115px] mt-8 md:mt-12 mx-auto rounded-2.5xl px-4 items-center justify-between">
      <div className="flex w-full flex-col sm:flex-row gap-4">
        <CategoryDropdown
          selectedValue={categoryFilter.selectedLabel}
          onSelectionChange={categoryFilter.setSelectedValue}
        />

        <PriceFilter
          PRICE_CONFIG={priceFilter.PRICE_CONFIG}
          priceRange={priceFilter.priceRange}
          isMinFocused={priceFilter.isMinFocused}
          isMaxFocused={priceFilter.isMaxFocused}
          onMinPriceChange={priceFilter.handleMinPriceChange}
          onMaxPriceChange={priceFilter.handleMaxPriceChange}
          onSliderChange={priceFilter.handleSliderChange}
          onMinFocus={() => priceFilter.setIsMinFocused(true)}
          onMinBlur={() => priceFilter.setIsMinFocused(false)}
          onMaxFocus={() => priceFilter.setIsMaxFocused(true)}
          onMaxBlur={() => priceFilter.setIsMaxFocused(false)}
        />
      </div>

      <Input
        size="lg"
        placeholder="جست و جو"
        colorLabel="primary"
        mainColor="background"
        value={searchFilter.searchQuery}
        onChange={searchFilter.handleSearchChange}
        onKeyDown={handleKeyDown}
        aria-label="جستجوی محصولات"
        className="rounded-xl"
      />

      <Button
        title="دیدن کل محصولات"
        btn="fill"
        color="background"
        size="large"
        className="px-5 lg:px-10 w-full lg:max-w-48"
        onClick={handleSearch}
      >
        <span className="flex gap-x-3 items-center">
          <span>جستجو</span>
          <IconSearch className="h-4 w-4 lg:w-6 lg:h-6" />
        </span>
      </Button>

      <VectorCBig className="absolute stroke-1 -top-36 -right-80 text-background -rotate-45 w-80 h-auto" />
    </div>
  );
}
