import IconLeft from "@icons/direaction-left.svg?react";
import Button from "../Button";
import PublicBanner from "./PublicBanner";

function AutumnOffer() {
  return (
    <PublicBanner
      title="جـشنواره پــایـیـزی لـــوزی"
      desc="تا ۵۰ % تخفیف روی بهترین قالب‌ها، طرح‌ها و ابزارهای گرافیکی!"
      srcImage="/images/iliustration/AutumnOffer.png"
      className="my-12 md:my-[72px]"
    >
      <div className="hidden md:flex w-fit h-fit boxForRounded bg-white rounded-se-3xl absolute right-0 bottom-0 homePage p-5 pr-0 flex-col gap-y-6">
        <Button btn="stroke" size="large">
          <span>همین حالا خریدت‌رو تکمیل کن</span>
          <IconLeft width={10} height={10} />
        </Button>
      </div>
    </PublicBanner>
  );
}

export default AutumnOffer;
