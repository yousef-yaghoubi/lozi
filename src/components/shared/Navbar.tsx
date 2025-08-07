import { navbarData } from "@/lib/dataPublic";
import ShoppingBasket from "@icons/shoppingBasket.svg?react";
import { Link } from "@tanstack/react-router";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";

function Navbar() {
  return (
    <nav className="w-full h-10 md:h-14 relative flex justify-around my-4 md:mt-11 md:mb-11">
      <img alt="logo" src="/logo-lg.png" className="h-full" />
      <div className="flex justify-between items-center w-1/3">
        {navbarData.map((li) => (
          <Link
            key={li.id}
            to={li.link}
            className="flex items-center w-text-sm h-full"
            activeProps={{ className: "border-b-3 border-primary" }}
          >
            {li.title}
          </Link>
        ))}
        <Link
          to="/assist"
          className="h-11 w-fit p-2.5 rounded-full border-1 border-primary flex justify-center items-center w-text-sm"
          activeProps={{ className: "border-3" }}
        >
          همکاری با لوزی
        </Link>
      </div>
      <div className="flex gap-4">
        <ButtonIcon btn="fill" size="medium">
          <ShoppingBasket className="w-5 h-5" />
        </ButtonIcon>
        <Button btn="fill" size="medium" className="w-48">
          <>ثبت نام</>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
