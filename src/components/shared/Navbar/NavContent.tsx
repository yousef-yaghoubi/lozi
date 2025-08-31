import { cn } from "@/lib/clsx";
import { navbarData } from "@/lib/dataPublic";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

function NavContent({
  className,
}: {
  className: ComponentProps<"div">["className"];
}) {
  return (
    <div
      className={cn(
        "justify-between items-center w-1/2 lg:w-5/12 xl:w-1/3 h-full",
        className
      )}
    >
      {navbarData.map((li) => (
        <Link
          key={li.id}
          to={li.link}
          className="flex items-center w-text-sm h-full"
          activeProps={{
            className: "border-b-3 border-primary w-text-sm-bold",
          }}
        >
          {li.title}
        </Link>
      ))}
      <Link
        to="/assist"
        className="h-11 w-fit p-2.5 rounded-full border-1 border-primary flex justify-center items-center m-text-sm md:w-text-sm"
        activeProps={{ className: "border-3" }}
      >
        همکاری با لوزی
      </Link>
    </div>
  );
}

export default NavContent;
