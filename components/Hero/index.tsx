"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import HeroHeader from "@/public/hero-header.png";
import { CountdownTimer } from "../CountdownTimer";

const Hero = () => {
  const [targetDate, setTargetDate] = useState(new Date());

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    setTargetDate(date);
  }, []);

  return (
    <div className="hero hero-bg relative min-h-svh overflow-hidden text-white">
      <div className="relative container mx-auto flex min-h-screen flex-col items-center justify-between">
        <div className="bg-primary-400 background-glow top-element absolute top-8 right-[70px] block h-svh w-[48px]" />
        <div className="top-element flex h-[calc(100%-125px)] grow flex-col items-center justify-center gap-y-3 pt-[85px] lg:gap-y-6 xl:h-auto">
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
          />
          <p className="text-center text-xs text-balance lg:max-w-[65ch] lg:text-base">
            A Capture the Flag (CTF) hackathon aimed at enhancing cybersecurity
            skills among undergraduates.
          </p>
          <CountdownTimer targetDate={targetDate} title="Event starts in" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
