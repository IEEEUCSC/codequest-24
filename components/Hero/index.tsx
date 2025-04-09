import Image from "next/image";

import HeroBg from "./HeroBg";
import { HeroSecHeader } from "./HeroText";
import { HeroLogo } from "@/libs/data";

const Hero = () => {
  return (
    <div className="hero relative min-h-svh text-white">
      <div className="relative container mx-auto flex min-h-screen flex-col items-center justify-center">
        <div className="top-element flex h-[calc(100%-125px)] grow flex-col items-center justify-center gap-y-3 lg:gap-y-8">
          <HeroSecHeader />
          <Image
            src={HeroLogo}
            alt="CodeQuest: Vault Edition"
            height={280}
            className="w-auto"
            priority={true}
          />
          <p className="text-center text-xs text-balance lg:max-w-[65ch] lg:text-base">
            A Capture the Flag (CTF) hackathon aimed at enhancing cybersecurity
            skills among undergraduates.
          </p>
        </div>
      </div>
      <HeroBg />
    </div>
  );
};

export default Hero;
