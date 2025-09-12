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
import { numberToPersian } from "@/lib/numberToPersian";

function FilterProducts() {
  const items = [
    { id: 0, label: "دسته بندی بر اساس", value: "none" },
    { id: 1, label: "کیت داشبود", value: "dashboard" },
    { id: 2, label: "کیت اپلیکیشن", value: "application" },
    { id: 3, label: "کیت وبسایت", value: "website" },
    { id: 4, label: "لندینگ", value: "landing" },
  ];

  const [value, setValue] = useState([50000, 9000000]);
  return (
    <div className="relative overflow-clip flex flex-col lg:flex-row h-auto gap-4 py-4  w-full max-w-[1116px] bg-primary min-h-[115px] mt-8 md:mt-12 m-auto rounded-2.5xl px-4 items-center justify-between gap-x-4">
      <div className="gap-x-4 flex w-full flex-col sm:flex-row gap-y-4">
        <Select dir="rtl">
          <SelectTrigger className="!outline-none w-full rounded-xl !h-16 z-50 border-2 border-background font-modam !text-background  m-text-sm-bold lg:w-text-md-bold">
            <SelectValue
              placeholder="دسته بندی بر اساس"
              className="min-w-[13em] w-full focus-visible:!border-transparent justify-between lg:px-4 !outline-none"
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
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger className="h-fit outline-none w-full">
            <Button
              btn="stroke"
              size="large"
              color="background"
              className="min-w-max w-full justify-between m-text-sm-bold px-3 lg:w-text-md-bold"
            >
              بازه قیمتی
              <IconDown width={24} height={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-fourground w-80">
            <div className="w-4/5 h-40 m-auto">
              <Slider
                value={value}
                onValueChange={setValue}
                max={10000000}
                step={50000}
              />
              <div className="flex flex-col justify-between m-text-sm-bold md:!w-text-md-bold">
                <div>
                  <span>از:</span>
                  <Input
                    size="md"
                    value={value[0]}
                    onChange={(e) =>
                      setValue([Number(e.target.value), value[1]])
                    }
                    type="text"
                  />
                </div>
                <div>
                  <span>تا:</span>
                  <Input
                    size="md"
                    value={value[1]}
                    onChange={(e) =>
                      setValue([value[1], Number(e.target.value)])
                    }
                    type="number"
                  />
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Input
        size="lg"
        placeholder="جست و جو"
        colorLabel="primary"
        mainColor="background"
      />
      <Button
        btn="fill"
        color="background"
        size="large"
        className="m-text-sm-bold lg:w-text-md-bold px-5 lg:px-10 w-full lg:max-w-48"
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

export default FilterProducts;
