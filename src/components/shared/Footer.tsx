import { linksForFooter1, linksForFooter2 } from "@/lib/dataPublic";
import IconCBig from "@icons/VectorCBig.svg?react";
import SocialFooter from "./SocialFooter";
import UlForFooter from "./UlForFooter";
function Footer() {
  return (
    <footer className="h-[600px] footer sm:h-[552px] overflow-hidden w-full bg-black-50 rounded-t-3xl m-text-sm text-black-300 md:w-text-sm px-[17px] pb-0 pt-7 md:p-10 md:pb-11 flex flex-col relative">
      <div className="min-w-28 w-1/3 h-14 bg-white absolute left-0 top-0 boxForRounded footer"></div>
      <>
        <img src="/logo-lg-full.png" alt="logo" className="w-40 md:w-72" />
        <div className="flex justify-around flex-col md:flex-row w-full xl:w-2/3 gap-x-3">
          <div className="md:max-w-[365px]">
            <p className="md:text-justify">
              فروشگاه محصولات گرافیکی لوزی، مرجع تخصصی طراحـی و خریـد محصـولات
              با کیفیت گرافیکـی است. در لوزی مجموعه گسترده از قالب‌های آماده و
              ابزارهای کاربردی برای طراحان ارائه می‌شود.{" "}
            </p>
            <SocialFooter className="hidden md:flex flex-col" />
            <div className="absolute bottom-5 right-4 md:static flex gap-x-5 md:gap-x-6 mt-12">
              <img
                src="/images/enamad.png"
                alt="enamad"
                className="h-12 md:h-[88px]"
              />
              <img
                src="/images/neshanMeli.png"
                alt="enamad"
                className="h-12 md:h-[88px]"
              />
            </div>
          </div>

          <div className="flex w-full justify-around">
            <div>
              <UlForFooter title="دسترسی سریع" arrayFoLinks={linksForFooter1} />
            </div>
            <div>
              <UlForFooter
                title="خدمات مشتریان"
                arrayFoLinks={linksForFooter2}
              />
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 w-2/5 min-w-[261px] max-w-[280] md:max-w-[338px] xl:max-w-[594px]">
          <SocialFooter className="flex md:hidden flex-col " />

          <img
            src="/images/iliustration/footer.png"
            alt="footer illustration"
            className=""
          />
        </div>
      </>

      <IconCBig className="absolute -bottom-4 sm:-bottom-80 -right-60 rotate-0 sm:rotate-45 text-primary" />
    </footer>
  );
}

export default Footer;
