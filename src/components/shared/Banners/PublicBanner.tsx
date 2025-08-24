import { cn } from "@/lib/clsx";
import type { ComponentProps, ReactNode } from "react";
import ShapeTexture from "/public/images/FullShapes.svg?react";
function PublicBanner({
  children,
  srcImage,
  title,
  desc,
  className,
}: {
  children: ReactNode;
  srcImage: string;
  title: string;
  desc: string;
  className?: ComponentProps<"div">["className"];
}) {
  return (
    <div
      className={cn(
        "h-[424px] md:h-[432px] max-w-[1116px] bg-primary rounded-2xl md:rounded-3xl p-6 md:p-8 md:mb-7 m-auto relative",
        className
      )}
    >
      <>
        <div className="md:w-[calc(100%_-_480px)] lg:w-auto">
          <h3 className="m-h3 md:w-h4 lg:w-h2 text-white">{title}</h3>
          <p className="m-text lg:w-text-lg text-white">{desc}</p>
        </div>
        <img
          src={srcImage}
          alt="home page"
          className="h-[236px] md:h-[260px] lg:h-[356px] absolute left-0 bottom-0 z-10"
        />
        <ShapeTexture className="absolute right-0 top-0" />
      </>
      {children}
    </div>
  );
}

export default PublicBanner;
