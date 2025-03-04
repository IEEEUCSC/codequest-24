"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import HeroHeader from "@/assets/hero-header.svg";
import { CountdownTimer } from "../CountdownTimer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useComponentDimensions } from "@/hooks/useComponentDimensions";
import HeroBgImg from "@/assets/hero-bg.svg";

const Hero = () => {
  const [targetDate, setTargetDate] = useState(new Date());

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    setTargetDate(date);
  }, []);

  const desktop = useMediaQuery("(min-width: 1024px)");

  const dimensions = useComponentDimensions("register-button");

  const [heroLineRight, setHeroLineRight] = useState(0);
  const heroLineWidth = 48;

  useEffect(() => {
    setHeroLineRight(dimensions.width / 2);
  }, [dimensions, heroLineRight]);

  return (
    <div className="hero hero-bg relative min-h-svh text-white">
      <div className="relative container mx-auto flex min-h-screen flex-col items-center justify-between">
        {desktop && (
          <div
            className="bg-primary-400 background-glow top-element absolute top-8 block h-[calc(100svh+108px)]"
            style={{ width: heroLineWidth, right: 280 / 2 - heroLineWidth / 2 }}
          />
        )}
        <div className="top-element flex h-[calc(100%-125px)] grow flex-col items-center justify-center gap-y-3 pt-[85px] lg:gap-y-8 xl:h-auto">
          <h3 className="text-center text-base md:text-lg lg:text-2xl">
            IEEE STUDENT BRANCH OF <br />
            UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING <br />
            PROUDLY PRESENTS
          </h3>
          <Image
            src={HeroHeader}
            alt="CodeQuest: Vault Edition"
            height={180}
            className="w-auto"
            priority={true}
            quality={65}
          />
          <p className="text-center text-xs text-balance lg:max-w-[65ch] lg:text-base">
            A Capture the Flag (CTF) hackathon aimed at enhancing cybersecurity
            skills among undergraduates.
          </p>
          <CountdownTimer targetDate={targetDate} title="Event starts in" />
        </div>
      </div>
      <div className="absolute bottom-0 h-full w-full">
        {desktop && (
          <Image
            src={HeroBgImg}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={65}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
