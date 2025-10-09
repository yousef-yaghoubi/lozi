import { Popover, PopoverTrigger, PopoverContent, Slider } from "@heroui/react";
import IconDown from "@icons/direction-down.svg?react";
import PriceInput from "./PriceInput";
import type { PriceRange } from "@/hooks/FilterProducts/usePriceFilter";
import Button from "../Button/Button";

interface Props {
  PRICE_CONFIG: { MIN: number; MAX: number; STEP: number };
  priceRange: PriceRange;
  isMinFocused: boolean;
  isMaxFocused: boolean;
  onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSliderChange: (value: number | number[]) => void;
  onMinFocus: () => void;
  onMinBlur: () => void;
  onMaxFocus: () => void;
  onMaxBlur: () => void;
}

export default function PriceFilter({
  PRICE_CONFIG,
  priceRange,
  isMinFocused,
  isMaxFocused,
  onMinPriceChange,
  onMaxPriceChange,
  onSliderChange,
  onMinFocus,
  onMinBlur,
  onMaxFocus,
  onMaxBlur,
}: Props) {
  return (
    <Popover placement="bottom" backdrop="opaque">
      <PopoverTrigger>
        <Button
          btn="stroke"
          size="large"
          color="background"
          className="w-full justify-between px-3"
        >
          بازه قیمتی
          <IconDown width={24} height={24} />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className="w-4/5 flex flex-col py-4 gap-3 mx-auto">
          <span>انتخاب بازه قیمتی</span>

          <Slider
            value={priceRange}
            onChange={onSliderChange}
            hideValue
            maxValue={PRICE_CONFIG.MAX}
            minValue={PRICE_CONFIG.MIN}
            step={PRICE_CONFIG.STEP}
            dir="ltr"
          />

          <div className="flex flex-col gap-y-4">
            <PriceInput
              label="از:"
              value={priceRange[0]}
              isFocused={isMinFocused}
              onChange={onMinPriceChange}
              onFocus={onMinFocus}
              onBlur={onMinBlur}
              ariaLabel="حداقل قیمت"
            />
            <PriceInput
              label="تا:"
              value={priceRange[1]}
              isFocused={isMaxFocused}
              onChange={onMaxPriceChange}
              onFocus={onMaxFocus}
              onBlur={onMaxBlur}
              ariaLabel="حداکثر قیمت"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
