import Button from "./Button/Button";
import IconSearch from "@icons/search.svg?react";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Button as ButtonHero,
// } from "@heroui/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Input from "./Input/Input";
import { Lock } from "lucide-react";

function FilterProducts() {
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

  return (
    <div className="flex w-full max-w-[1116px] bg-primary h-[115px] m-auto rounded-2.5xl px-4 items-center justify-between gap-x-4">
      <div className="gap-x-4 flex">
        <DropdownMenu>
          <DropdownMenuTrigger className="h-fit outline-none">
            <Button
              btn="stroke"
              size="large"
              color="background"
              className="min-w-max"
            >
              دسته بندی بر اساس
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="h-fit outline-none">
            <Button
              btn="stroke"
              size="large"
              color="background"
              className="min-w-max"
            >
              بازه قیمتی
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-fourground">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Input label="عنوان" size="lg" icon={<Lock/>} variant="default"  type="password" showPasswordToggle/>
      <Button
        btn="fill"
        color="background"
        size="large"
        className="m-text-sm-bold lg:w-text-md-bold px-5 lg:px-10"
      >
        <span className="flex gap-x-3 items-center">
          <span>جستجو</span>
          <IconSearch className="h-4 w-4 lg:w-6 lg:h-6" />
        </span>
      </Button>
    </div>
  );
}

export default FilterProducts;
