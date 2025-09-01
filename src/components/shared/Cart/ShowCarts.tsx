import useWindowWidth from "@/hooks/WindowWidth";
import { cn } from "@/lib/clsx";
import type { BlogCart, ProductCart } from "@/types/Cart";
import IconLeft from "@icons/direaction-left.svg?react";
import Button from "../Button/Button";
import TitleHead from "../TitleHead";
import Cart from "./Cart";

import { motion } from "motion/react";

type ProductWithType = { carts: ProductCart[]; type: "product" };
type BlogWithType = { carts: BlogCart[]; type: "blog" };

type ShowCartsProps = (ProductWithType | BlogWithType) & {
  title: string;
  desc: string;
  className?: string;
};

const MotionCart = motion(Cart);

function ShowCarts({ type, carts, title, desc, className }: ShowCartsProps) {
  const width = useWindowWidth();

  return (
    <section
      className={cn(
        "flex flex-col justify-around gap-y-4 md:gap-y-6",
        className
      )}
    >
      <TitleHead header={title} desc={desc} />

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-y-16 md:gap-y-20 mb-12">
        {carts.map((cartObj) => {
          return (
            <MotionCart
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              initial={{ y: 100, opacity: 0 }}
              key={cartObj.id}
              data={
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
