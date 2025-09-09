import Button from "./Button/Button";
import IconSearch from "@icons/search.svg?react";

function FilterProducts() {
  return (
    <div className="flex w-full max-w-[1116px] bg-primary h-[115px] m-auto rounded-2.5xl">
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
