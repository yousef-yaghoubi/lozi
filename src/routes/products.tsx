import UiKitPage from "@/components/shared/Banners/UiKitPage";
import FilterProducts from "@/components/shared/FilterProducts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <UiKitPage />
      <FilterProducts/>
    </>
  );
}
