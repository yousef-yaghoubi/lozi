import PublicBanner from "./PublicBanner";
import Puzzle from "../Puzzle";
import { PuzzleFull } from "@/lib/dataPublic";
import { motion } from "motion/react";

function UiKitPage() {
  return (
    <PublicBanner
      title="راه سریع؛
       به طراحی بی نقص!"
      desc="بازار جهانی المان‌های طراحی منتظر توئه!
       لوزی پل ارتباطی تو با مشتریان حرفه‌ایِ سراسر جهانه!"
      className="relative"
      classNameForTitle="md:max-w-[58%] lg:max-w-1/2 sm:space-y-4 md:absolute bottom-4 lg:static"
      classNameForImage="md:hidden scale-x-[-1]"
      srcImage="/images/iliustration/homePage.png"
    >
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        initial={{ y: -100, opacity: 0 }}
        className="absolute left-0 -top-4 h-44 w-[28rem] bg-background parentRoundedPuzzle hidden md:flex"
      >
        <div className="w-2/5 h-[55%] bg-background absolute -bottom-[55%] rounded-b-2.5xl childRoundedPuzzle"></div>
      </motion.div>

      <Puzzle
        size="lg"
        state={PuzzleFull[0].state}
        icon={PuzzleFull[0].icon}
        text={PuzzleFull[0].title}
        className="absolute top-0 left-0 hidden md:flex"
        isActive
      />
    </PublicBanner>
  );
}

export default UiKitPage;
