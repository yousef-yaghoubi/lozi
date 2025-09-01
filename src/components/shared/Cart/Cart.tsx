import useWindowWidth from "@/hooks/WindowWidth";
import TruncateString from "@/lib/TruncateString";
import { cn } from "@/lib/clsx";
import { numberToPersian } from "@/lib/numberToPersian";
import type { BlogCart, ProductCart } from "@/types/Cart";
import Button from "@components/Button/Button";
import IconHeart from "@icons/Heart.svg?react";
import IconPolygon from "@icons/Polygon1.svg?react";
import IconCBig from "@icons/VectorCBig.svg?react";
import IconLeft from "@icons/direaction-left.svg?react";
import { forwardRef, useState } from "react";
type ProductCartFull = ProductCart & { type: "product" };
type BlogCartFull = BlogCart & { type: "blog" };

interface CartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ProductCartFull | BlogCartFull;
}

const Cart = forwardRef<HTMLDivElement, CartProps>(
  ({ data, ...rest }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const width = useWindowWidth();

    return (
      <div
        ref={ref}
        className="flex flex-col w-[90%] max-w-80 md:max-w-[30em] h-[115%] bg-white border md:border-2 border-primary rounded-[10px] md:rounded-2.5xl px-1 pb-2 pt-2 md:px-4 md:pt-6 md:pb-4 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...rest}
      >
        <>
          <img src="/images/imageCart.jpg" className="mx-1 md:mx-0 z-10" />
          <h5 className="m-caption-bold md:w-h6 m-1 md:m-2 text-black-400">
            {TruncateString(data.title, 20)}
          </h5>
          {data.type == "product" ? (
            <>
              <div className="flex w-fit p-1 gap-x-1 md:gap-x-4 md:px-4 md:py-2 bg-black-50 m-caption-xs md:w-caption-lg items-center rounded-xs md:rounded-sm md:mt-2 text-black-400">
                <button className="px-1 py-0.5 md:px-2.5 md:py-2 rounded-xs md:rounded-sm bg-white h-full">
                  <IconHeart className="text-black-100 w-2 md:w-5 h-fit" />
                </button>
                <div className="flex px-1 py-0.5 md:py-2.5 md:px-[5px] gap-x-0.5 md:gap-x-[5px] rounded-xs md:rounded-sm bg-white items-center">
                  <img
                    src="/images/teamProfile.png"
                    alt="profile"
                    className="w-[7px] md:w-[18px] h-fit"
                  />
                  <span>{data.ownerTeam}</span>
                </div>
                <IconPolygon className="w-1.5 md:w-3" />
                <div className="flex px-1 py-0.5 md:py-2.5 md:px-[5px] rounded-xs md:rounded-sm bg-white items-center">
                  <span>{data.categorie}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2 absolute bottom-2 md:bottom-4 left-[13px] md:left-8">
                <span className="m-caption-bold md:w-h6">
                  {numberToPersian(data.price.toLocaleString())}
                </span>
                <span className="m-caption-sm w-text-md">تومان</span>
              </div>
            </>
          ) : (
            <p className="m-caption-xs md:w-text-sm text-justify text-black-300">
              {TruncateString(data.desc, 120)}
            </p>
          )}
        </>

        <div
          className={cn(
            "min-w-[45%] w-fit min-h-8 h-[13%] md:h-[76px] bg-white z-10 absolute",
            data.type == "product"
              ? "boxForCardProduct pl-2  pt-1 md:pl-4 md:pt-4"
              : "boxForCardBlog px-2  pt-1 md:px-4 md:pt-4"
          )}
        >
          <Button
            btn={isHovered ? "fill" : "stroke"}
            size={width >= 768 ? "medium" : "superSmall"}
            className="w-full h-[90%] md:h-full"
          >
            <span>{data.type == "product" ? "خرید" : "مشاهده مقاله"}</span>
            <IconLeft className="w-2.5 h-2.5 md:w-5 md:h-5" />
          </Button>
        </div>
        <div className="w-full absolute h-[192px] md:h-[494px]  overflow-hidden top-0 right-0">
          <IconCBig className="absolute w-full h-full -top-24 md:-top-56 text-primary" />
        </div>
      </div>
    );
  }
);

Cart.displayName = "Cart";
export default Cart;
