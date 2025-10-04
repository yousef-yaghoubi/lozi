import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/productList")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/productList"!</div>;
}
