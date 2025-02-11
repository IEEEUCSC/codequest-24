"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import MarqueeAnimation from "../MarqueeAnimation";
import StarIcon from "./StarIcon";
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
    <div className="hero container mx-auto flex-grow  flex flex-col justify-center items-center text-white  relative min-h-screen">
      <div className="flex flex-col items-center gap-y-3 lg:gap-y-6">
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
        <p className="text-balance text-center text-xs lg:max-w-[65ch] lg:text-base">
          A Capture the Flag (CTF) hackathon aimed at enhancing cybersecurity
          skills among undergraduates.
        </p>
        <CountdownTimer targetDate={targetDate} title="Event starts in" />
      </div>
      <div className="  absolute  bottom-0 w-[100vw]   flex flex-col items-center justify-center overflow-hidden py-4">
        <MarqueeAnimation
          className="w-[105vw]  md:w-full md:max-w-[100vw] rotate-8 md:rotate-2 overflow-clip translate-y-[22px] md:translate-y-[26px] py-2 bg-primary-100"
          hoverStop
          itemGap="xlarge"
        >
          <div className="text-marquee flex gap-8 lg:gap-x-16">
            <p>CodeQuest: Vault Edition</p>
            <p>IEEE Student Branch UCSC</p>
          </div>
          <StarIcon size={36} />
          <div className="text-marquee flex gap-8 lg:gap-x-16">
            <p>CodeQuest: Vault Edition</p>
            <p>IEEE Student Branch UCSC</p>
          </div>
          <StarIcon size={36} />
          <div className="text-marquee flex gap-8 lg:gap-x-16">
            <p>CodeQuest: Vault Edition</p>
            <p>IEEE Student Branch UCSC</p>
          </div>
        </MarqueeAnimation>
        <MarqueeAnimation
          className=" w-[105vw] md:w-full md:max-w-[100vw] -rotate-8 md:-rotate-2 -translate-y-[22px] md:-translate-y-[26px] py-2 bg-primary-100"
          reverse
          hoverStop
          itemGap="xlarge"
        >
          <div className="text-marquee flex gap-8 lg:gap-x-16">
            <p>CodeQuest: Vault Edition</p>
            <p>IEEE Student Branch UCSC</p>
          </div>
          <StarIcon size={36} />
          <div className="text-marquee flex gap-8 lg:gap-x-16">
            <p>CodeQuest: Vault Edition</p>
            <p>IEEE Student Branch UCSC</p>
          </div>
          <StarIcon size={36} />
          <div className="text-marquee flex gap-8 lg:gap-x-16">
            <p>CodeQuest: Vault Edition</p>
            <p>IEEE Student Branch UCSC</p>
          </div>
        </MarqueeAnimation>
      </div>
    </div>
  );
};

export default Hero;
