import { LinksForSocialFooter } from "@/lib/dataPublic";
import { IconSocial } from "@/lib/IndexIcon";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

function SocialFooter({className}: {className?: ComponentProps<'div'>["className"]}) {
  return (
    <div className={className}>
      <h3 className="m-text-sm-bold md:!w-text-md-bold md:mt-8">
        لوزی در شبکه های اجتماعی؛ همراه ما باشید!
      </h3>

      <div className="flex gap-x-4 w-full mt-2 md:mt-4">
        {LinksForSocialFooter.map((link) => {
          const Icon = IconSocial[link.name as keyof typeof IconSocial];
          return (
            <Link to={link.link} key={link.id}>
              <div className="w-4 h-4 md:w-8 md:h-8 bg-primary flex justify-center items-center rounded-sm md:rounded-lg">
                <Icon className="w-3 h-3 md:w-6 md:h-6" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SocialFooter;
