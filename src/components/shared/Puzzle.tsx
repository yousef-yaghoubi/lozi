import { cn } from "@/lib/clsx";
import { IconPuzzels } from "@/lib/IndexIcon";
import type { PuzzleProps, StateType } from "@/types/Puzzle";

const parentClasses: Record<StateType, string> = {
  topToRight: "rounded-br-none",
  topToLeft: "rounded-bl-none",
  topTobottom: "",
  bottomToRight: "rounded-tr-none",
  bottomToLeft: "rounded-tl-none",
  bottomToTop: "rounded-t-none",
};

const childClasses: Record<StateType, string> = {
  topToRight: cn("right-0 border-3 border-primary"),
  topToLeft: cn("left-0 border-3 border-primary"),
  topTobottom: cn("left-0 right-0 mx-auto border-3 border-primary"),
  bottomToRight: cn("right-0 -top-[67%] border-3 border-primary"),
  bottomToLeft: cn("left-0 -top-[67%] border-3 border-primary"),
  bottomToTop: cn("-top-[67%] border-3 border-primary bottomToTop"),
};

function Puzzle({ state, size, text, icon }: PuzzleProps) {
  const baseParent = cn(
    "bg-white w-full h-full border-3 border-primary transition-colors duration-300 group-hover:bg-primary group-hover:border-white",
    size == "lg"
      ? "rounded-2.5xl"
      : size == "small"
      ? "rounded-xl"
      : "rounded-[10px]"
  );
  const baseChild =
    "w-1/3 h-[70%] bg-white boxForPuzzle absolute transition-colors duration-300 group-hover:bg-primary group-hover:border-white group-hover:after:border-white";

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
      top: "rounded-b-[10px] border-t-0 top-[96%]",
    },
  };

  const isBottom = state.startsWith("bottom");
  const roundedChild = classes[size]?.[isBottom ? "bottom" : "top"];

  const IconForPuzzle = IconPuzzels[icon as keyof typeof IconPuzzels];

  return (
    <div
      className={cn(
        "relative group parenPuzzleRounded",
        size == "lg"
          ? "w-[432px] h-36"
          : size == "small"
          ? "w-[216px] h-[73px]"
          : "w-[165px] h-16"
      )}
    >
      {/* Parent */}
      <div
        className={cn(
          baseParent,
          parentClasses[state],
          "relative overflow-hidden text-primary group-hover:text-white flex items-center",
          size == "lg"
            ? "w-h5 p-8 gap-x-4"
            : size == "small"
            ? "w-text-md-bold p-4 gap-x-2"
            : "m-text-sm py-4 px-3 gap-x-1"
        )}
      >
        <i
          className={cn(
            size == "lg"
              ? "p-2 rounded-lg"
              : size == "small"
              ? "p-1 rounded-sm"
              : "p-[3px] rounded-sm",
            "bg-primary group-hover:bg-white h-fit transition-all duration-300"
          )}
        >
          <IconForPuzzle
            className={cn(
              size == "lg"
                ? "w-8 h-8"
                : size == "small"
                ? "rounded-sm w-4 h-4"
                : "rounded-sm w-3 h-3",
              "text-white group-hover:text-primary h-fit"
            )}
          />
        </i>
        <span>{text}</span>
      </div>

      {/* Main Child */}
      <div
        className={cn(
          baseChild,
          childClasses[state],
          roundedChild,
          state,
          size,
          "right "
        )}
      />

      {/* Extra child only for bottomToTop */}
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
    </div>
  );
}

export default Puzzle;
