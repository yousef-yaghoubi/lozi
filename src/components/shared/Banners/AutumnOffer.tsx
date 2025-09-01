import IconLeft from "@icons/direaction-left.svg?react";
import { motion } from "motion/react";
import Button from "../Button/Button";
import PublicBanner from "./PublicBanner";

function AutumnOffer() {
  return (
    <PublicBanner
      title="جـشنواره پــایـیـزی لـــوزی"
      desc="تا ۵۰ % تخفیف روی بهترین قالب‌ها، طرح‌ها و ابزارهای گرافیکی!"
      srcImage="/images/iliustration/AutumnOffer.png"
      className="my-12 md:my-[72px]"
    >
      <motion.div
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        initial={{ x: 300 }}
        className="hidden md:flex w-fit h-fit boxForRounded bg-background rounded-se-3xl absolute right-0 bottom-0 homePage p-5 pr-0 flex-col gap-y-6"
      >
        <Button btn="stroke" size="large">
          <span>همین حالا خریدت‌رو تکمیل کن</span>
          <IconLeft width={10} height={10} />
        </Button>
      </motion.div>
    </PublicBanner>
  );
}

export default AutumnOffer;
