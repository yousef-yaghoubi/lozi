import IconLoziHead from "@icons/LoziForHeading.svg?react";

function TitleHead({ header, desc }: { header: string; desc: string }) {
  return (
    <header>
      <IconLoziHead className="absolute right-0 h-12 md:h-32 -z-10" />
      <h2 className="m-h5 md:w-h5 text-black-400">{header}</h2>
      <p className="m-caption-sm md:w-caption-lg text-black-200 mr-4 md:mr-16">
        {desc}
      </p>
    </header>
  );
}

export default TitleHead;
