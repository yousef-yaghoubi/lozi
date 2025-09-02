import useWindowWidth from "@/hooks/WindowWidth";
import { cn } from "@/lib/clsx";
import { useDarkMode } from "@/store/useDarkMode";
import Button from "@components/Button/Button";
import ButtonIcon from "@components/Button/ButtonIcon";
import IconMenu from "@icons/menu.svg?react";
import IconMoon from "@icons/moon.svg?react";
import IconShoppingBasket from "@icons/shoppingBasket.svg?react";
import IconSun from "@icons/sun.svg?react";
import IconUser from "@icons/user.svg?react";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import NavContent from "./NavContent";

function Navbar() {
  const width = useWindowWidth();
  const [showMenu, setShowMenu] = useState(false);
  const router = useLocation();
  const { darkMode, toggleMode } = useDarkMode();

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    setShowMenu(false);
  }, [router.pathname]);

  return (
    <nav className="w-full h-[70px] md:h-14 fixed top-0 z-20 md:relative flex justify-between md:justify-around items-center md:mt-11 px-8 bg-background">
      <div className="flex items-center gap-2">
        <img alt="logo" src="/logo-shape.png" className="h-6 w-auto lg:h-14" />
        <img
          alt="logo"
          src="/logo-type-small7.png"
          className="h-4 w-auto lg:h-10 dark:invert"
        />
      </div>
      <NavContent className="hidden md:flex" />

      <div className="flex">
        <div className="w-full gap-2 lg:gap-4 hidden md:flex">
          <ButtonIcon btn="fill" size={width < 1024 ? "small" : "medium"}>
            <IconShoppingBasket className="w-5 h-5" />
          </ButtonIcon>
          <ButtonIcon
            btn="stroke"
            size={width < 1024 ? "small" : "medium"}
            onClick={toggleMode}
          >
            {darkMode ? (
              <IconSun className="w-5 h-5" />
            ) : (
              <IconMoon className="w-5 h-5" />
            )}
          </ButtonIcon>
          <Button
            btn="fill"
            size={width < 1024 ? "small" : "medium"}
            className="w-fit xl:w-48"
          >
            <IconUser />
            <span className="hidden xl:flex">ورود / ثبت نام</span>
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
        data-testid="mobile-menu"
        className={cn(
          "w-full h-[calc(100dvh_-_70px)] overflow-hidden bg-background/60 backdrop-blur-lg absolute right-0 top-[70px] transition-all ease-linear duration-300 z-20 md:hidden flex flex-col justify-between",
          showMenu ? "flex max-h-screen p-4" : "max-h-0"
        )}
      >
        <NavContent className="flex md:hidden flex-col w-full gap-4 h-fit" />
        <div className="w-full gap-4 flex md:hidden flex-col">
          <div className="grid grid-cols-2 gap-2">
            <Button btn="fill" size="small" onClick={toggleMode}>
              <span className="flex gap-1 items-center">
                {darkMode ? (
                  <IconSun className="w-5 h-5" />
                ) : (
                  <IconMoon className="w-5 h-5" />
                )}
              </span>
            </Button>
            <Button btn="stroke" size="small">
              <span className="flex gap-1 items-center">
                <IconShoppingBasket className="w-5 h-5 text-primary" />
                سبدخرید
              </span>
            </Button>
          </div>
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
