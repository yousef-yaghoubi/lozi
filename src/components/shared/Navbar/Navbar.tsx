import useWindowWidth from "@/hooks/WindowWidth";
import { cn } from "@/lib/clsx";
import Button from "@components/Button/Button";
import ButtonIcon from "@components/Button/ButtonIcon";
import IconMenu from "@icons/menu.svg?react";
import IconShoppingBasket from "@icons/shoppingBasket.svg?react";
import IconUser from "@icons/user.svg?react";
import { useEffect, useState } from "react";
import NavContent from "./NavContent";


function Navbar() {
  const width = useWindowWidth();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (showMenu) {
      html.classList.add("overflow-y-hidden");
    } else {
      html.classList.remove("overflow-y-hidden");
    }

    // Cleanup on unmount
    return () => {
      html.classList.remove("overflow-y-hidden");
    };
  }, [showMenu]);

  return (
    <nav className="w-full h-10 md:h-14 relative flex justify-between md:justify-around items-center mt-4 md:mt-11 mb-8 md:mb-[88px] px-8">
      <img
        alt="logo"
        src="/logo-lg.png"
        className="h-fit w-24 lg:w-auto lg:h-full"
      />
      <NavContent className="hidden md:flex" />

      <div className="flex">
        <div className="w-full gap-4 hidden md:flex">
          <ButtonIcon btn="fill" size={width < 1024 ? "small" : "medium"}>
            <IconShoppingBasket className="w-5 h-5" />
          </ButtonIcon>
          <Button
            btn="fill"
            size={width < 1024 ? "small" : "medium"}
            className="w-fit lg:w-48"
          >
            <IconUser />
            <>ورود / ثبت نام</>
          </Button>
        </div>
        <div
          className="bg-primary w-10 h-10 flex justify-center items-center rounded-md md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <IconMenu />
        </div>
      </div>

      <div
        className={cn(
          "w-full h-[calc(100dvh_-_4rem)] overflow-hidden bg-white/60 backdrop-blur-lg absolute right-0 top-12 transition-all ease-linear duration-300 z-20 md:hidden flex flex-col justify-between",
          showMenu ? "flex max-h-screen p-4" : "max-h-0"
        )}
      >
        <NavContent className="flex md:hidden flex-col w-full gap-4 h-fit" />
        <div className="w-full gap-4 flex md:hidden flex-col">
          <Button btn="stroke" size="small">
            <span className="flex gap-1 items-center">
              <IconShoppingBasket className="w-5 h-5 text-primary" />
              سبدخرید
            </span>
          </Button>
          <Button btn="fill" size="small" className="w-full lg:w-48">
            <span className="flex gap-1 items-center">
            <IconUser />
            <>ورود / ثبت نام</>
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
