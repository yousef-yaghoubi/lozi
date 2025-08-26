import { navbarData } from "@/lib/dataPublic";
import Button from "@components/Button/Button";
import ButtonIcon from "@components/Button/ButtonIcon";
import ShoppingBasket from "@icons/shoppingBasket.svg?react";
import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <nav className="w-full h-10 md:h-14 relative flex justify-around items-center mt-4 md:mt-11 mb-8 md:mb-[88px]">
      <img
        alt="logo"
        src="/logo-lg.png"
        className="h-fit w-24 lg:w-auto lg:h-full"
      />
      <div className="flex justify-between items-center w-1/2 lg:w-5/12 xl:w-1/3 h-full">
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
      <div className="flex gap-4">
        <ButtonIcon btn="fill" size="medium">
          <ShoppingBasket className="w-5 h-5" />
        </ButtonIcon>
        <Button btn="fill" size="medium" className="w-fit lg:w-48">
          <>ثبت نام</>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
