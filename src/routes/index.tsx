import HomePage from "@/components/shared/Banners/HomePage";
import Puzzle from "@/components/shared/Puzzle";
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
        <Puzzle state="topToRight" size="lg" />
        <Puzzle state="topTobottom" size="lg" />
        <Puzzle state="topToLeft" size="lg" />

        <Puzzle state="bottomToRight" size="lg" />
        <Puzzle state="bottomToTop" size="lg" />
        <Puzzle state="bottomToLeft" size="lg" />
      </div>
    </>
  );
}
