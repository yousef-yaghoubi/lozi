import { cn } from "@/lib/clsx";
import { IconPuzzels } from "@/lib/IndexIcon";
import type { PuzzleProps, StateType } from "@/types/Puzzle";
import { motion } from "motion/react";
import IconCBig from "@icons/VectorCBig.svg?react";

const parentClasses: Record<StateType, string> = {
  topToRight: "rounded-br-none",
  topToLeft: "rounded-bl-none",
  topToBottom: "",
  bottomToRight: "rounded-tr-none",
  bottomToLeft: "rounded-tl-none",
  bottomToTop: "rounded-t-none",
};

const childClasses: Record<StateType, string> = {
  topToRight: "right-0 border-3",
  topToLeft: "left-0 border-3",
  topToBottom: "left-0 right-0 mx-auto border-3",
  bottomToRight: "right-0 -top-[67%] border-3",
  bottomToLeft: "left-0 -top-[67%] border-3",
  bottomToTop: "-top-[67%] border-3 bottomToTop",
};

const classes = {
  lg: {
    bottom: "rounded-t-2.5xl border-b-0",
    top: "rounded-b-2.5xl border-t-0 top-[97%]",
  },
  small: {
    bottom: "rounded-t-xl border-b-0 -top-[66%]",
    top: "rounded-b-xl border-t-0 top-[96%]",
  },
  mobile: {
    bottom: "rounded-t-[10px] border-b-0 -top-[66%]",
    top: "rounded-b-[10px] border-t-0 top-[95%]",
  },
};

function Puzzle({
  state,
  size,
  text,
  icon,
  iconFar,
  className,
  isActive = false,
}: PuzzleProps) {
  const isBottom = state.startsWith("bottom");
  const IconForPuzzle = IconPuzzels[icon as keyof typeof IconPuzzels];
  const roundedChild = classes[size]?.[isBottom ? "bottom" : "top"];

  // Size configurations
  const containerSize =
    size === "lg"
      ? "w-[432px] h-36"
      : size === "small"
      ? "w-[216px] h-[73px]"
      : "w-[165px] h-16";

  const parentSize =
    size === "lg"
      ? "w-h5 p-8 gap-x-4"
      : size === "small"
      ? "w-text-md py-4 px-3 gap-x-2"
      : "m-text-sm py-4 px-3 gap-x-1";

  const iconSize =
    size === "lg"
      ? "p-2 rounded-lg"
      : size === "small"
      ? "p-1 rounded-sm"
      : "p-[3px] rounded-sm";

  const iconDimensions =
    size === "lg"
      ? "w-8 h-8"
      : size === "small"
      ? "rounded-sm w-4 h-4"
      : "rounded-sm w-3 h-3";

  const parentRounded =
    size === "lg"
      ? "rounded-2.5xl"
      : size === "small"
      ? "rounded-xl"
      : "rounded-[10px]";

  // Style classes based on active state
  const parentBg = !isActive
    ? "bg-background border-primary group-hover:bg-primary group-hover:border-background"
    : "bg-primary border-background";

  const childBg = !isActive
    ? "bg-background border-primary group-hover:bg-primary group-hover:border-background group-hover:after:border-background"
    : "bg-primary border-background after:border-background";

  const textColor = !isActive
    ? "text-primary group-hover:text-background"
    : "text-background";
  const iconBg = !isActive
    ? "bg-primary group-hover:bg-background"
    : "bg-background";
  const iconTextColor = !isActive
    ? "text-background group-hover:text-primary"
    : "text-primary";

  const baseParent = cn(
    "w-full h-full border-3 transition-colors duration-300",
    parentBg,
    parentRounded
  );

  const baseChild = cn(
    "w-1/3 h-[70%] boxForPuzzle absolute transition-colors duration-300",
    childBg
  );

  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      initial={{ y: 100, opacity: 0 }}
      className={cn(
        "relative group parenPuzzleRounded",
        isActive && "groupHovered",
        className,
        containerSize
      )}
    >
      <div
        className={cn(
          baseParent,
          parentClasses[state],
          "relative overflow-hidden flex items-center",
          textColor,
          parentSize
        )}
      >
        <i
          className={cn(
            iconSize,
            iconFar === true ? "hidden" : "flex",
            "h-fit transition-all duration-300",
            iconBg
          )}
        >
          <IconForPuzzle
            className={cn(iconDimensions, "h-fit", iconTextColor)}
          />
        </i>
        <span>{text}</span>
      </div>

      <div
        className={cn(
          baseChild,
          childClasses[state],
          roundedChild,
          state,
          size,
          "right flex justify-center items-center"
        )}
      >
        <i
          className={cn(
            iconSize,
            iconFar === true ? "flex" : "hidden",
            "h-fit transition-all duration-300",
            iconBg
          )}
        >
          <IconForPuzzle
            className={cn(iconDimensions, "h-fit", iconTextColor)}
          />
        </i>
      </div>

      {state === "bottomToTop" && (
        <div
          className={cn(
            baseChild,
            childClasses[state],
            roundedChild,
            state,
            size,
            "left left-0"
          )}
        />
      )}
    </motion.div>
  );
}

export default Puzzle;
