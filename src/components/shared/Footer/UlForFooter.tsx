import type { LinkType } from "@/types/Links";
import { Link } from "@tanstack/react-router";

function UlForFooter({ arrayFoLinks, title }: { arrayFoLinks: LinkType[], title: string }) {
  return (
    <>
      <h4 className="m-text-sm-bold md:w-text-md-bold">{title}</h4>

      <ul className="m-text-sm md:w-text-sm list-disc marker:text-primary gap-y-4 mt-3 md:!mt-4 mb-0">
        {arrayFoLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UlForFooter;
