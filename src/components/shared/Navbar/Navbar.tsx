import useWindowWidth from "@/hooks/WindowWidth";
import { cn } from "@/lib/clsx";
import { navbarData } from "@/lib/dataPublic";
import Button from "@components/Button/Button";
import ButtonIcon from "@components/Button/ButtonIcon";
import IconMenu from "@icons/menu.svg?react";
import IconShoppingBasket from "@icons/shoppingBasket.svg?react";
import IconUser from "@icons/user.svg?react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

function Navbar() {
  const width = useWindowWidth();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const html = document.documentElement; // <html> tag
    if (showMenu) {
      html.classList.add("overflow-y-hidden");
    } else {
      html.classList.remove("overflow-y-hidden");
    }
  }, [showMenu]);

  return (
    <nav className="w-full h-10 md:h-14 relative flex justify-between md:justify-around items-center mt-4 md:mt-11 mb-8 md:mb-[88px] px-8">
      <img
        alt="logo"
        src="/logo-lg.png"
        className="h-fit w-24 lg:w-auto lg:h-full"
      />
      <div className="hidden md:flex justify-between items-center w-1/2 lg:w-5/12 xl:w-1/3 h-full">
        {navbarData.map((li) => (
          <Link
            key={li.id}
            to={li.link}
            className="flex items-center w-text-sm h-full"
            activeProps={{
              className: "border-b-3 border-primary w-text-sm-bold",
            }}
          >
            {li.title}
          </Link>
        ))}
        <Link
          to="/assist"
          className="h-11 w-fit p-2.5 rounded-full border-1 border-primary flex justify-center items-center m-text-sm md:w-text-sm"
          activeProps={{ className: "border-3" }}
        >
          همکاری با لوزی
        </Link>
      </div>
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
          "w-full h-screen overflow-hidden bg-primary/50 backdrop-blur-lg absolute right-0 top-12 transition-all ease-linear duration-300 z-20 md:hidden",
          showMenu ? "flex max-h-screen" : "max-h-0"
        )}
      ></div>
    </nav>
  );
}

export default Navbar;
