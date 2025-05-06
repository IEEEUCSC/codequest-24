"use client";
import React from "react";
import Image from "next/image";
import { CountdownTimer } from "../CountdownTimer";
import { END_TIME, SectionBg } from "@/libs/data";

const Timer = () => {
  const showTimer = false;

  return (
    <section
      className="main-section top-element 3xl:px-0 relative min-h-[30vh] px-1.5 lg:px-2"
      id="timer"
    >
      <div className="sec-inner-y pb-8">
        <h1 className="top-element section-title relative mx-auto w-fit px-4 py-2 text-xl text-white select-none lg:text-4xl">
          Countdown Timer
          <div className="absolute -bottom-3 -left-4 h-[140%] w-[120%] lg:-bottom-2 lg:-left-12 lg:w-[140%]">
            <Image
              src={SectionBg}
              alt="section title background"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1240px) 100vw, 1240px"
            />
          </div>
        </h1>
      </div>
      <div className="sec-inner-y">
        {showTimer ? (
          <CountdownTimer
            targetDate={END_TIME}
            title="Time Remaining for the Initial Round"
          />
        ) : (
          <p className="text-primary-100 text-center text-lg font-semibold lg:text-2xl">
            Time’s up — the initial round is now closed.
          </p>
        )}
      </div>
    </section>
  );
};

export default Timer;
