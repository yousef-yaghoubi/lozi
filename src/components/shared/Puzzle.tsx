import { cn } from "@/lib/clsx";
type StateType =
  | "topToRight"
  | "topToLeft"
  | "topTobottom"
  | "bottomToRight"
  | "bottomToLeft"
  | "bottomToTop";

interface PuzzleProps {
  state: StateType;
  size: "lg" | "small" | "mobile";
}

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

function Puzzle({ state, size }: PuzzleProps) {
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

  // let roundedChild;
  // if (size == "lg") {
  //   if (
  //     state == "bottomToLeft" ||
  //     state == "bottomToRight" ||
  //     state == "bottomToTop"
  //   ) {
  //     roundedChild = "rounded-b-2.5xl border-b-0";
  //   } else {
  //     roundedChild = "rounded-t-2.5xl border-t-0";
  //   }
  // } else if (size == "small") {
  //   if (
  //     state == "bottomToLeft" ||
  //     state == "bottomToRight" ||
  //     state == "bottomToTop"
  //   ) {
  //     roundedChild = "rounded-b-xl border-b-0";
  //   } else {
  //     roundedChild = "rounded-t-xl border-t-0";
  //   }
  // } else if (size == "mobile") {
  //   if (
  //     state == "bottomToLeft" ||
  //     state == "bottomToRight" ||
  //     state == "bottomToTop"
  //   ) {
  //     roundedChild = "rounded-b-[10px] border-b-0";
  //   } else {
  //     roundedChild = "rounded-t-[10px] border-t-0";
  //   }
  // }

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
          "relative overflow-hidden"
        )}
      ></div>

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
