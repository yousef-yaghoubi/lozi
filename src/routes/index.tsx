import HomePage from "@/components/shared/Banners/HomePage";
import Puzzle from "@/components/shared/Puzzle";
import { PuzzleFull } from "@/lib/dataPublic";
import type { StateType } from "@/types/Puzzle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  notFoundComponent: () => <p>404 not found</p>,
});

function App() {
  return (
    <>
      <HomePage />

      <div className="w-full grid grid-cols-3 justify-items-center gap-y-56 mt-10">
        {PuzzleFull.map((puzzle) => (
          <Puzzle state={puzzle.state as StateType} size="lg" text={puzzle.title} icon={puzzle.icon} />
        ))}
      </div>
    </>
  );
}
