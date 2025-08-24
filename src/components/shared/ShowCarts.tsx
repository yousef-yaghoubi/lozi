import useWindowWidth from "@/hooks/WindowWidth";
import type { BlogCart, ProductCart } from "@/types/Cart";
import IconLeft from "@icons/direaction-left.svg?react";
import Button from "./Button";
import Cart from "./Cart";
import TitleHead from "./TitleHead";

type ProductWithType = { carts: ProductCart[]; type: "product" };
type BlogWithType = { carts: BlogCart[]; type: "blog" };

type ShowCartsProps = (ProductWithType | BlogWithType) & {title: string, desc: string};

function ShowCarts({ type, carts, title, desc }: ShowCartsProps) {
  const width = useWindowWidth();

  return (
    <section className="flex flex-col justify-around gap-y-4 md:gap-y-6">
      <TitleHead
        header={title}
        desc={desc}
      />

      {/* دکمه دسکتاپ */}
      <Button
        btn="fill"
        size="medium"
        className="max-w-52 hidden md:flex self-end"
      >
        <span>دیدن بیشتر</span>
        <IconLeft className="md:w-2.5 h-fit w-1.5" />
      </Button>

      {/* لیست کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-y-2 md:gap-y-3.5">
        {carts.map((cartObj) => {
          return (
            <Cart
              key={cartObj.id}
              content={
                { ...cartObj, type } as
                  | (ProductCart & { type: "product" })
                  | (BlogCart & { type: "blog" })
              }
            />
          );
        })}
      </div>

      {/* دکمه موبایل */}
      <Button
        btn="fill"
        size={width > 680 ? "small" : "superSmall"}
        className="max-w-52 flex md:hidden self-center"
      >
        <span>دیدن بیشتر</span>
        <IconLeft className="md:w-2.5 h-fit w-1.5" />
      </Button>
    </section>
  );
}

export default ShowCarts;
