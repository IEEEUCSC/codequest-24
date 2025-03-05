import Image from "next/image";

import { COMPETITION_TEXT, CompetitionBg } from "@/libs/data";
import ScrollBaseText from "../ScrollBasedText";
import SectionHeader from "../SectionHeader";

const Competition = () => {
  return (
    <div
      className="main-section top-element relative px-1.5 md:px-0"
      id="competition"
    >
      <SectionHeader title="Competition" />
      <div className="border-primary-400 sec-inner-y competition-bg-glow bg-dark-300 rounded-2xl border-2 px-4 py-8 lg:border-8">
        <ScrollBaseText className="mx-auto w-full text-lg text-white lg:max-w-[80%] lg:text-2xl">
          {COMPETITION_TEXT}
        </ScrollBaseText>
        <div className="absolute -bottom-2 -left-2 container h-[100%] w-[100%]">
          <Image
            src={CompetitionBg}
            alt="section title background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Competition;
