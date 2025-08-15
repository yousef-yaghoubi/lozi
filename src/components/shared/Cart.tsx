import { numberToPersian } from "@/lib/numberToPersian";
import IconHeart from "@icons/Heart.svg?react";
import IconPolygon from "@icons/Polygon1.svg?react";
import IconLeft from "@icons/direaction-left.svg?react";
import Button from "./Button";
function Cart({ type }: { type: "product" | "blog" }) {
  const price = 350000;
  if (type == "product") {
    return (
      <div className="flex flex-col w-full max-w-[165px] md:max-w-[432px] h-48 md:h-[496px] bg-white border md:border-2 border-primary rounded-[10px] md:rounded-2.5xl px-1 pb-2 pt-4 md:px-4 md:pt-6 md:pb-4 relative">
        <>
          <img src="/images/imageCart.jpg" className="mx-1 md:mx-0" />
          <h5 className="m-caption-bold md:w-h6 m-1 md:m-2 text-black-400">
            عنوان کارت محصول حتی بلند
          </h5>
          <div className="flex w-fit p-1 gap-x-1 md:gap-x-4 md:px-4 md:py-2 bg-black-50 m-caption-xs md:w-caption-lg items-center rounded-xs md:rounded-sm md:mt-2">
            <button className="px-1 py-0.5 md:px-2.5 md:py-2 rounded-xs md:rounded-sm bg-white h-full">
              <IconHeart className="text-black-100 w-2 md:w-5 h-fit" />
            </button>
            <div className="flex px-1 py-0.5 md:py-2.5 md:px-[5px] gap-x-0.5 md:gap-x-[5px] rounded-xs md:rounded-sm bg-white items-center">
              <img
                src="/images/teamProfile.png"
                alt="profile"
                className="w-[7px] md:w-[18px] h-fit"
              />
              <span>نام تیم طراح</span>
            </div>
            <IconPolygon className="w-1.5 md:w-3" />
            <div className="flex px-1 py-0.5 md:py-2.5 md:px-[5px] rounded-xs md:rounded-sm bg-white items-center">
              <span>نوع کتگوری</span>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2 absolute bottom-2 md:bottom-4 left-[13px] md:left-8">
            <span className="m-caption-bold md:w-h6">
              {numberToPersian(price.toLocaleString())}
            </span>
            <span className="m-caption-sm w-text-md">تومان</span>
          </div>
        </>
        <div className="w-[45%] h-8 md:h-[76px] bg-white pl-2 pt-2 md:pl-4 md:pt-4 boxForCardProduct">
          <Button btn="stroke" size="medium" className="w-full">
            <span>خرید</span>
            <IconLeft className="w-2.5 h-2.5 md:w-5 md:h-5"/>
          </Button>
        </div>
      </div>
    );
  } else {
    return <div>blog</div>;
  }
}

export default Cart;
