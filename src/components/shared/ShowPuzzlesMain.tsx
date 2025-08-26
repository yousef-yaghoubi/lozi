import useWindowWidth from "@/hooks/WindowWidth";
import { ThreePuzzle } from "@/lib/dataPublic";
import Puzzle from "./Puzzle";

function ShowPuzzlesMain() {
  const width = useWindowWidth();
  
  return (
    <section className="flex flex-col w-full items-center my-4 md:my-16">
      <div className="max-w-2xl flex flex-col items-center">
        <h2 className="m-h2 md:w-h5 text-center">
          پـروژه‌ت رو بـا مـا کـامل کـن!
        </h2>
        <h4 className="m-h5 md:w-h7 text-black-200">
          هر قطعه‌ای که برای طراحی نیاز داری، اینجاست
        </h4>
      </div>
      <div className="w-full max-w-2xl gap-y-12 md:gap-y-2 grid grid-rows-2 grid-cols-2 mt-4 md:mt-8 justify-items-center">
        {ThreePuzzle.map((puzzle) => (
          <Puzzle
            className={
              puzzle.id === 2 ? "col-start-1 col-end-3 row-start-1" : "self-end"
            }
            key={puzzle.id}
            icon={puzzle.icon}
            state={puzzle.state}
            text={puzzle.title}
            size={width > 780 ? "small" : "mobile"}
            iconFar
            isActive
          />
        ))}
      </div>
    </section>
  );
}

export default ShowPuzzlesMain;
