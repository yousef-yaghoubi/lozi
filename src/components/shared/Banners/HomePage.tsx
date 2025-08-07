import IconSearch from "@icons/search.svg?react";
import Button from "../Button";
import ShapeTexture from "/public/images/FullShapes.svg?react";
function HomePage() {
  return (
    <div className="h-[424px] md:h-[432px] max-w-[1116px] bg-primary rounded-2xl md:rounded-3xl p-6 md:p-8 m-auto relative">
      <>
        <div className="md:w-[calc(100%_-_480px)] lg:w-auto">
          <h3 className="m-h3 md:w-h4 lg:w-h2 text-white">
            الـهام بـگیر، طـراحی‌کن،بـدرخش
          </h3>
          <p className="m-text lg:w-text-lg text-white">
            هـمه چـیز بـرای یـک طـراحی بـی‌نقص، در یـک جـا
          </p>
        </div>
        <img
          src="/images/iliustration/homePage.png"
          alt="home page"
          className="h-[236px] md:h-[260px] lg:h-[356px] absolute left-0 bottom-0 z-10"
        />
        <ShapeTexture className="absolute right-0 top-0" />
      </>
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
    </div>
  );
}

export default HomePage;
