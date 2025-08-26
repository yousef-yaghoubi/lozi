import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import IconCBig from "@icons/VectorCBig.svg?react";
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
      <IconCBig
        className="absolute top-0 -right-48 rotate-[20deg] text-primary stroke-3"
        width={300}
      />
      <IconCBig
        className="absolute top-80 -left-36 rotate-[20deg] text-primary stroke-3"
        width={300}
      />
      
      <Footer />
    </>
  ),
});
