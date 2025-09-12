import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import IconCBig from "@icons/VectorCBig.svg?react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="container relative mt-[88px] md:mt-[132px] min-h-screen">
        <Outlet />
        <TanStackRouterDevtools />
        <IconCBig
          className="absolute top-0 -right-48 rotate-[20deg] text-primary stroke-1 -z-10"
          width={300}
        />
        <IconCBig
          className="absolute top-80 -left-36 rotate-[20deg] text-primary stroke-1 -z-10"
          width={300}
        />
      </main>

      <Footer />
    </>
  ),
});
