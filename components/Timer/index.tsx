import React from "react";
import { CountdownTimer } from "../CountdownTimer";
import { END_TIME } from "@/libs/data";
import SectionHeader from "../SectionHeader";

const Timer = () => {
  return (
    <section
      className="main-section top-element 3xl:px-0 relative px-1.5 lg:px-2"
      id="timer"
    >
      <SectionHeader title="Time " />
      <div className="sec-inner-y">
        <CountdownTimer targetDate={END_TIME} title=" " />
      </div>
    </section>
  );
};

export default Timer;
