import Button from "./Button/Button";
import IconSearch from "@icons/search.svg?react";
import VectorCBig from "@icons/VectorCBig.svg?react";
import IconDown from "@icons/direction-down.svg?react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Input from "./Input/Input";
import { Slider } from "../ui/slider";
import { useState } from "react";

function FilterProducts() {
  const items = [
    { id: 0, label: "دسته بندی بر اساس", value: "none" },
    { id: 1, label: "کیت داشبورد", value: "dashboard" },
    { id: 2, label: "کیت اپلیکیشن", value: "application" },
    { id: 3, label: "کیت وبسایت", value: "website" },
    { id: 4, label: "لندینگ", value: "landing" },
  ];

  // Fixed: Use numbers instead of strings for slider values
  const [priceRange, setPriceRange] = useState([50000, 9000000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Helper function to format numbers with commas
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Helper function to parse formatted number string back to number
  const parseNumber = (str: string): number => {
    return parseInt(str.replace(/,/g, ""), 10) || 0;
  };

  const STEP = 100000;
  const MIN_PRICE = 0;
  const MAX_PRICE = 10000000;
  // Handle price input changes
  const handleMinPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newMin: number = parseNumber(e.target.value);

    const minValue = newMin ?? MIN_PRICE;

    const clampedMin = Math.max(MIN_PRICE, Math.min(MAX_PRICE, minValue));

    const finalMin = Math.min(clampedMin, priceRange[1] - 50000);

    setPriceRange([finalMin, priceRange[1]]);
  };

  const handleMaxPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newMax: number = parseNumber(e.target.value);

    const maxValue = newMax ?? MAX_PRICE;

    const clampedMax = Math.min(MAX_PRICE, Math.max(MIN_PRICE, maxValue));

    const finalMax = Math.max(clampedMax, priceRange[0] + 50000);

    setPriceRange([priceRange[0], finalMax]);
  };

  // Handle slider changes
  const handleSliderChange = (newValue: number[]): void => {
    let [newMin, newMax] = newValue;

    // clamp min
    newMin = Math.max(MIN_PRICE, Math.min(MAX_PRICE, newMin));
    newMin = Math.min(newMin, newMax - STEP);

    // clamp max
    newMax = Math.min(MAX_PRICE, Math.max(MIN_PRICE, newMax));
    newMax = Math.max(newMax, newMin + STEP);
    if (newMax == 0) newMax = STEP;

    setPriceRange([newMin, newMax]);
  };

  // Handle search
  const handleSearch = () => {
    // Add your search logic here
    console.log({
      category: selectedCategory,
      priceRange: priceRange,
      searchQuery: searchQuery,
    });
  };

  return (
    <div className="relative overflow-clip flex flex-col lg:flex-row h-auto gap-4 py-4 w-full max-w-[1116px] bg-primary min-h-[115px] mt-8 md:mt-12 mx-auto rounded-2.5xl px-4 items-center justify-between m-text-sm-bold lg:w-text-md-bold">
      <div className="flex w-full flex-col sm:flex-row gap-4">
        {/* Category Select */}
        <Select
          dir="rtl"
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="outline-none w-full rounded-xl !h-16 z-50 border-2 border-background text-background m-text-sm-bold lg:w-text-md-bold">
            <SelectValue
              placeholder="دسته بندی بر اساس"
              className="min-w-[13em] w-full focus-visible:border-transparent justify-between lg:px-4 outline-none"
            />
          </SelectTrigger>
          <SelectContent className="dark:bg-fourground">
            {items.map((item) => (
              <SelectItem key={item.id} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Price Range Dropdown */}
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger className="h-fit outline-none w-full">
            <Button
              btn="stroke"
              size="large"
              color="background"
              className="min-w-max w-full justify-between px-3"
            >
              بازه قیمتی
              <IconDown width={24} height={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-fourground w-80">
            <div className="w-4/5 h-auto flex flex-col py-4 gap-4 mx-auto">
              {/* Fixed: Pass correct value and handler to Slider */}
              <Slider
                value={priceRange}
                onValueChange={handleSliderChange}
                max={MAX_PRICE}
                min={MIN_PRICE}
                step={STEP}
              />
              <div className="flex flex-col justify-between gap-y-4">
                <div className="flex w-full items-center gap-4">
                  <span>از:</span>
                  <Input
                    size="md"
                    value={formatNumber(priceRange[0])}
                    onChange={handleMinPriceChange}
                    forPrice
                    mainColor="primary"
                    type="text"
                  />
                </div>
                <div className="flex w-full items-center gap-4">
                  <span>تا:</span>
                  <Input
                    size="md"
                    value={formatNumber(priceRange[1])}
                    mainColor="primary"
                    forPrice
                    onChange={handleMaxPriceChange}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Input */}
      <Input
        size="lg"
        placeholder="جست و جو"
        colorLabel="primary"
        mainColor="background"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
      />

      {/* Search Button */}
      <Button
        btn="fill"
        color="background"
        size="large"
        className=" px-5 lg:px-10 w-full lg:max-w-48"
        onClick={handleSearch}
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
