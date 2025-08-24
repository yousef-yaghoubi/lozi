import IconSearch from "@icons/search.svg?react";
import Button from "../Button";
import PublicBanner from "./PublicBanner";

function HomePage() {
  return (
    <PublicBanner
      title="الـهام بـگیر، طـراحی‌کن،بـدرخش"
      desc="هـمه چـیز بـرای یـک طـراحی بـی‌نقص، در یـک جـا"
      srcImage="/images/iliustration/homePage.png"
    >
      <div className="hidden md:flex h-36 w-1/2 boxForRounded bg-white rounded-se-3xl absolute right-0 bottom-0 homePage p-7 pr-0 flex-col gap-y-6">
        <div className="flex w-full justify-between gap-x-4">
          <Button
            btn="stroke"
            size="large"
            disabled
            className="m-text-bold xl:w-text-md-bold px-5 lg:px-10 w-full"
          >
            دانلود دیزاین سیستم سنت...
          </Button>

          <Button
            btn="fill"
            size="large"
            className="m-text-sm-bold lg:w-text-md-bold px-5 lg:px-10 "
          >
            <span className="flex gap-x-3 items-center">
              <span>جستجو</span>
              <IconSearch className="h-4 w-4 lg:w-6 lg:h-6" />
            </span>
          </Button>
        </div>

        <div className="flex gap-x-5 m-caption-bold">
          <Button btn="fill" size="superSmall" disabled>
            آیکن پک...
          </Button>
          <Button btn="fill" size="superSmall" disabled>
            کیت رابط کاربری ...
          </Button>
          <Button btn="fill" size="superSmall" disabled>
            ایلاستریشن ...
          </Button>
        </div>
      </div>
    </PublicBanner>
  );
}

export default HomePage;
