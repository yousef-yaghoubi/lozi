import HomePage from "@/components/shared/Banners/HomePage";
import Puzzle from "@/components/shared/Puzzle";
import TitleHead from "@/components/shared/TitleHead";
import { ThreePuzzle } from "@/lib/dataPublic";
import type { StateType } from "@/types/Puzzle";
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
          <h2 className="m-h2 md:w-h5">پـروژه‌ت رو بـا مـا کـامل کـن!</h2>
          <h4 className="m-h5 md:w-h7 text-black-200">
            هر قطعه‌ای که برای طراحی نیاز داری، اینجاست
          </h4>
        </div>
        <div className="w-full max-w-2xl gap-y-32 grid md:grid-rows-[120px] grid-rows-[170px] grid-cols-3 mt-4 md:mt-8">
          {ThreePuzzle.map((puzzle) => (
            <Puzzle
              className={puzzle.id === 2 ? "self-start" : "self-end"}
              key={puzzle.id}
              icon={puzzle.icon}
              state={puzzle.state as StateType}
              text={puzzle.title}
              size={windowWidth > 780 ? "small" : "mobile"}
              iconFar
              isActive
            />
          ))}
        </div>
      </section>

      <TitleHead
        header="پـرفــروش تـرین های لــــوزی"
        desc="داغ ترین محصولات منتشر شده توسط برترین دیزاینر ها"
      />
    </>
  );
}
