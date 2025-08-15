import HomePage from "@/components/shared/Banners/HomePage";
import Cart from "@/components/shared/Cart";
import Puzzle from "@/components/shared/Puzzle";
import TitleHead from "@/components/shared/TitleHead";
import { PuzzleFull, ThreePuzzle } from "@/lib/dataPublic";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
  notFoundComponent: () => <p>404 not found</p>,
});

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HomePage />
      <section className="flex flex-col w-full items-center my-4 md:my-16">
        <div className="max-w-2xl flex flex-col items-center">
          <h2 className="m-h2 md:w-h5 text-center">پـروژه‌ت رو بـا مـا کـامل کـن!</h2>
          <h4 className="m-h5 md:w-h7 text-black-200">
            هر قطعه‌ای که برای طراحی نیاز داری، اینجاست
          </h4>
        </div>
        <div className="w-full max-w-2xl gap-y-12 md:gap-y-2 grid grid-rows-2 grid-cols-2 mt-4 md:mt-8 justify-items-center">
          {ThreePuzzle.map((puzzle) => (
            <Puzzle
              className={puzzle.id === 2 ? "col-start-1 col-end-3 row-start-1" : "self-end"}
              key={puzzle.id}
              icon={puzzle.icon}
              state={puzzle.state}
              text={puzzle.title}
              size={windowWidth > 780 ? "small" : "mobile"}
              iconFar
              isActive
            />
          ))}
        </div>
      </section>

      <section>
        <TitleHead
          header="پـرفــروش تـرین های لــــوزی"
          desc="داغ ترین محصولات منتشر شده توسط برترین دیزاینر ها"
        />
        <div className="grid grid-cols-1 gap-y-18 md:gap-y-10 2xl:gap-y-36 gap-x-4 justify-items-center my-4 md:my-12 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col">
          {PuzzleFull.map((puzzle) => (
            <Puzzle
              className={puzzle.id == 3 ? "mb-4 md:mb-20" : ""}
              key={puzzle.id}
              state={puzzle.state}
              text={puzzle.title}
              icon={puzzle.icon}
              size={windowWidth > 1536 ? "lg" : "small"}
              isActive={puzzle.id == 1 && true}
            />
          ))}
        </div>
      </section>

      <Cart type="product"/>
    </>
  );
}
