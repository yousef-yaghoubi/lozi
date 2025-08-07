import HomePage from "@/components/shared/Banners/HomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  notFoundComponent: () => <p>404 not found</p>,
});

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}
