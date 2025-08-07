import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
        <TanStackRouterDevtools />
      </main>
      <Footer />
    </>
  ),
});
