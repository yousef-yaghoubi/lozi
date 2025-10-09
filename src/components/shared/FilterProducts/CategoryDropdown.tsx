import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import IconDown from "@icons/direction-down.svg?react";
import Button from "../Button/Button";
import { CATEGORIES } from "@/lib/FilterProducts/category";

interface Props {
  selectedValue: string;
  onSelectionChange: (val: string) => void;
}

export default function CategoryDropdown({
  selectedValue,
  onSelectionChange,
}: Props) {
  return (
    <Dropdown backdrop="opaque">
      <DropdownTrigger className="w-full">
        <Button
          btn="stroke"
          size="large"
          color="background"
          className="w-full min-w-fit justify-between lg:px-4"
        >
          {selectedValue}
          <IconDown width={24} height={24} />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        variant="faded"
        aria-label="انتخاب دسته"
        selectionMode="single"
        selectedKeys={new Set([selectedValue])}
        onSelectionChange={(keys) => {
          const val = Array.from(keys).find((k) => typeof k === "string");
          if (val) onSelectionChange(val);
        }}
      >
        {CATEGORIES.map((item) => (
          <DropdownItem key={item.value}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
