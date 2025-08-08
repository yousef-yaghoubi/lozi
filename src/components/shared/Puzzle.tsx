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
  topToRight:
    "right-0 top-[97%] rounded-b-2.5xl border-3 border-primary border-t-0",
  topToLeft:
    "left-0 top-[97%] rounded-b-2.5xl border-3 border-primary border-t-0",
  topTobottom:
    "left-0 right-0 mx-auto top-[97%] rounded-b-2.5xl border-3 border-primary border-t-0",
  bottomToRight:
    "right-0 -top-[67%] rounded-t-2.5xl border-3 border-primary border-b-0",
  bottomToLeft:
    "left-0 -top-[67%] rounded-t-2.5xl border-3 border-primary border-b-0",
  bottomToTop:
    "-top-[67%] rounded-t-2.5xl border-3 border-primary border-b-0 bottomToTop",
};

function Puzzle({ state }: PuzzleProps) {
  const baseParent =
    "rounded-2.5xl bg-white w-full h-full border-3 border-primary transition-colors duration-300 group-hover:bg-primary group-hover:border-white";
  const baseChild =
    "w-1/3 h-[70%] bg-white boxForPuzzle absolute transition-colors duration-300 group-hover:bg-primary group-hover:border-white group-hover:after:border-white group-hover:.hoverBox";

  return (
    <div className="w-[432px] h-36 relative group parenPuzzleRounded">
      {/* Parent */}
      <div
        className={cn(
          baseParent,
          parentClasses[state],
          "relative overflow-hidden"
        )}
      />

      {/* Main Child */}
      <div className={cn(baseChild, childClasses[state], state, "right")} />

      {/* Extra child only for bottomToTop */}
      {state === "bottomToTop" && (
        <div
          className={cn(baseChild, childClasses[state], state, "left left-0")}
        />
      )}
    </div>
  );
}

export default Puzzle;
