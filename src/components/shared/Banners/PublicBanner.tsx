import useWindowWidth from "@/hooks/WindowWidth";
import { cn } from "@/lib/clsx";
import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import ShapeTexture from "/public/images/FullShapes.svg?react";
function PublicBanner({
  children,
  srcImage,
  title,
  desc,
  className,
  classNameForTitle,
  classNameForImage,
}: {
  children: ReactNode;
  srcImage?: string;
  title: string;
  desc: string;
  className?: ComponentProps<"div">["className"];
  classNameForTitle?: ComponentProps<"div">["className"];
  classNameForImage?: ComponentProps<"image">["className"];
}) {
  const width = useWindowWidth();
  return (
    <div
      className={cn(
        "h-[424px] md:h-[432px] max-w-[1116px] bg-primary rounded-2xl md:rounded-3xl p-6 md:p-8 md:mb-7 m-auto relative overflow-x-clip",
        className
      )}
    >
      <>
        <motion.div
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          initial={{ x: 200 }}
          viewport={{ once: true }}
          className={cn("md:w-full lg:w-[79%] xl:w-full", classNameForTitle)}
        >
          <h3 className="m-h3 md:w-h4 lg:w-h2 text-white whitespace-pre-line">
            {title}
          </h3>
          <p className="m-text lg:w-text-lg text-white whitespace-pre-line">
            {desc}
          </p>
        </motion.div>

        {srcImage && (
          <motion.img
            src={srcImage}
            alt="home page"
            className={cn(
              "h-[236px] md:h-[260px] lg:h-[356px] absolute left-0 bottom-0 z-10 rounded-e-3xl",
              classNameForImage
            )}
            initial={{ x: width > 768 ? -300 : -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        )}
        <ShapeTexture className="absolute right-0 top-0" />
      </>
      {children}
    </div>
  );
}

export default PublicBanner;
