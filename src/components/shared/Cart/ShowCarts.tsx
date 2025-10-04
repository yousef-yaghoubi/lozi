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
  showBtn?: "bottom-center" | "top-left";
  className?: string;
  onClick?: () => void;
  disableMore?: boolean;
  loadingBtn?: boolean;
};

const MotionCart = motion(Cart);

function ShowCarts({
  type,
  carts,
  title,
  desc,
  showBtn,
  className,
  onClick,
  disableMore = false,
  loadingBtn,
}: ShowCartsProps) {
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
      {showBtn !== "bottom-center" && (
        <Button
          btn="fill"
          size="medium"
          className="max-w-fit hidden md:flex self-end disabled:bg-white-600"
          onClick={onClick}
          disabled={disableMore || loadingBtn}
        >
          {loadingBtn ? (
            <span>در حال بارگذاری...</span>
          ) : (
            <span>دیدن بیشتر</span>
          )}
          <IconLeft className="md:w-2.5 h-fit w-1.5" />
        </Button>
      )}

      {/* لیست کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-y-16 md:gap-y-20 mb-12">
        {carts.map((cartObj) => {
          return (
            <MotionCart
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              initial={{ y: 100, opacity: 0 }}
              key={cartObj._id}
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
        size={
          showBtn == "bottom-center"
            ? width > 680
              ? "medium"
              : "superSmall"
            : width > 680
            ? "small"
            : "superSmall"
        }
        disabled={disableMore || loadingBtn}
        onClick={onClick}
        className={cn(
          `max-w-fit flex self-center disabled:bg-white-600`,
          showBtn !== "bottom-center" ? "md:hidden" : ""
        )}
      >
        {loadingBtn ? <span>در حال بارگذاری...</span> : <span>دیدن بیشتر</span>}
        <IconLeft className="md:w-2.5 h-fit w-1.5" />
      </Button>
    </section>
  );
}

export default ShowCarts;
