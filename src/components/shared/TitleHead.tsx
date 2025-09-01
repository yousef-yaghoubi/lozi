import IconLoziHead from "@icons/LoziForHeading.svg?react";
import { motion } from "motion/react";

function TitleHead({ header, desc }: { header: string; desc: string }) {
  return (
    <motion.header
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      initial={{ y: 100, opacity: 0 }}
      className="relative"
    >
      <IconLoziHead className="absolute -right-16 h-12 md:h-32 -z-10" />
      <h2 className="m-h5 md:w-h5 text-black-400 dark:text-gray-300">
        {header}
      </h2>
      <p className="m-caption-sm md:w-caption-lg text-black-200 dark:text-white mr-4 md:mr-16">
        {desc}
      </p>
    </motion.header>
  );
}

export default TitleHead;
