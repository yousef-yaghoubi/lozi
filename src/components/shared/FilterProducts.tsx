import { useState, useCallback, useMemo } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import Button from "./Button/Button";
import Input from "./Input/Input";
import IconSearch from "@icons/search.svg?react";
import VectorCBig from "@icons/VectorCBig.svg?react";
import IconDown from "@icons/direction-down.svg?react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu as DropdownMenuHero,
  DropdownItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@heroui/react";
import { Slider } from "@heroui/react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Slider } from "../ui/slider";

function FilterProducts() {
  const navigate = useNavigate();

  const items = [
    { id: 0, label: "دسته بندی بر اساس", value: "none" },
    { id: 1, label: "کیت داشبورد", value: "dashboard" },
    { id: 2, label: "کیت اپلیکیشن", value: "application" },
    { id: 3, label: "کیت وبسایت", value: "website" },
    { id: 4, label: "لندینگ", value: "landing" },
  ];

  const STEP = 100_000;
  const MIN_PRICE = 0;
  const MAX_PRICE = 10_000_000;

  const [priceRange, setPriceRange] = useState<[number, number]>([
    MIN_PRICE,
    MAX_PRICE,
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [isMinFocused, setIsMinFocused] = useState(false);
  const [isMaxFocused, setIsMaxFocused] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<Set<string | number>>(
    new Set(["دسته بندی بر اساس"])
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );
  // --- helpers ---
  const formatNumber = useCallback((num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, []);

  const parseNumber = useCallback((str: string): number => {
    const num = parseInt(str.replace(/,/g, ""), 10);
    return Number.isNaN(num) ? 0 : num;
  }, []);

  // --- handlers ---
  const handleMinPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMin = parseNumber(e.target.value);
      const clampedMin = Math.max(MIN_PRICE, Math.min(MAX_PRICE, newMin));
      const finalMin = Math.min(clampedMin, priceRange[1] - STEP);
      setPriceRange([finalMin, priceRange[1]]);
    },
    [parseNumber, priceRange]
  );

  const handleMaxPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMax = parseNumber(e.target.value);
      const clampedMax = Math.min(MAX_PRICE, Math.max(MIN_PRICE, newMax));
      const finalMax = Math.max(clampedMax, priceRange[0] + STEP);
      setPriceRange([priceRange[0], finalMax]);
    },
    [parseNumber, priceRange]
  );

  const handleSliderChange = useCallback((newValue: number[]) => {
    let [newMin, newMax] = newValue;
    newMin = Math.max(MIN_PRICE, Math.min(MAX_PRICE, newMin));
    newMin =
      Math.min(newMin, newMax - STEP) < 0 ? 0 : Math.min(newMin, newMax - STEP);
    newMax = Math.min(MAX_PRICE, Math.max(MIN_PRICE, newMax));
    newMax = Math.max(newMax, newMin + STEP);
    setPriceRange([newMin, newMax]);
  }, []);

  const handleSearch = useCallback(() => {
    navigate({
      to: "/productList",
      search: {
        search: searchQuery || undefined,
        minPrice: priceRange[0] !== MIN_PRICE ? priceRange[0] : undefined,
        maxPrice: priceRange[1] !== MAX_PRICE ? priceRange[1] : undefined,
        category: selectedCategory !== "none" ? selectedCategory : undefined,
      },
    });
  }, [navigate, searchQuery, priceRange, selectedCategory]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleSearch();
    },
    [handleSearch]
  );

  // --- render ---
  return (
    <div className="relative overflow-clip flex flex-col lg:flex-row gap-4 py-4 w-full max-w-[1116px] bg-primary min-h-[115px] mt-8 md:mt-12 mx-auto rounded-2.5xl px-4 items-center justify-between m-text-sm-bold lg:w-text-md-bold">
      {/* Category Select */}
      <div className="flex w-full flex-col sm:flex-row gap-4">
        <Dropdown backdrop="opaque">
          <DropdownTrigger
            className="outline-none w-full rounded-xl !h-16 z-50 border-2 border-background text-background text-xl"
            aria-label="انتخاب دسته بندی محصولات"
          >
            <Button
              btn="stroke"
              size="large"
              className="min-w-[13em] w-full justify-between lg:px-4"
            >
              {selectedValue}
              <IconDown width={24} height={24} />
            </Button>
          </DropdownTrigger>
          <DropdownMenuHero
            variant="faded"
            aria-label="Static Actions"
            items={items}
            selectedKeys={selectedKeys}
            selectionMode="single"
            onSelectionChange={(keys) => {
              setSelectedKeys(new Set(keys));
            }}
          >
            {items.map((item) => (
              <DropdownItem key={item.label} value={item.value}>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenuHero>
        </Dropdown>

        <Popover placement="bottom" backdrop="opaque">
          <PopoverTrigger>
            <Button
              btn="stroke"
              size="large"
              color="background"
              className="min-w-max w-full justify-between px-3"
            >
              بازه قیمتی
              <IconDown width={24} height={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="w-4/5 flex flex-col py-4 gap-4 mx-auto">
              {/* <Slider
                value={priceRange}
                onValueChange={handleSliderChange}
                max={MAX_PRICE}
                min={MIN_PRICE}
                step={STEP}
                aria-label="انتخاب بازه قیمتی"
              /> */}

              <Slider 
                defaultValue={priceRange}
                label="بازه قیمتی"
                lang="fa"
                onChange={(value) => setPriceRange(value as [number, number])}
                maxValue={MAX_PRICE}
                minValue={MIN_PRICE}
                step={STEP}
                size="sm"
              />
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-4">
                  <span>از:</span>
                  <Input
                    size="md"
                    type="text"
                    forPrice
                    mainColor="primary"
                    value={
                      isMinFocused
                        ? priceRange[0].toString()
                        : formatNumber(priceRange[0])
                    }
                    onChange={handleMinPriceChange}
                    onFocus={() => setIsMinFocused(true)}
                    onBlur={() => setIsMinFocused(false)}
                    aria-label="حداقل قیمت"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span>تا:</span>
                  <Input
                    size="md"
                    type="text"
                    forPrice
                    mainColor="primary"
                    value={
                      isMaxFocused
                        ? priceRange[1].toString()
                        : formatNumber(priceRange[1])
                    }
                    onChange={handleMaxPriceChange}
                    onFocus={() => setIsMaxFocused(true)}
                    onBlur={() => setIsMaxFocused(false)}
                    aria-label="حداکثر قیمت"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Search Input */}
      <Input
        size="lg"
        placeholder="جست و جو"
        colorLabel="primary"
        mainColor="background"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        aria-label="جستجوی محصولات"
      />

      {/* Search Button */}
      <Button
        title="دیدن کل محصولات"
        btn="fill"
        color="background"
        size="large"
        className="px-5 lg:px-10 w-full lg:max-w-48"
        onClick={handleSearch}
        aria-label="شروع جستجو"
      >
        <span className="flex gap-x-3 items-center">
          <span>جستجو</span>
          <IconSearch className="h-4 w-4 lg:w-6 lg:h-6" />
        </span>
      </Button>

      {/* Background Decoration */}
      <VectorCBig className="absolute stroke-1 -top-36 -right-80 text-background -rotate-45 w-80 h-auto" />
    </div>
  );
}

export default FilterProducts;
