"use client";

import Image from "next/image";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface SponsorsProps {
  logo: string;
  name: string;
}

const sponsors: SponsorsProps[] = [
  {
    logo: "/logos/dex-screener.png",
    name: "Dex Screener",
  },
  {
    logo: "/logos/raydium.png",
    name: "Raydium",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ logo, name }) => (
            <div key={name} className="flex items-center text-xl md:text-2xl font-medium">
              <Image
                src={logo}
                alt={name}
                width={40}
                height={40}
                className="mr-2 object-contain"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
