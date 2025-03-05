import Image from "next/image";

import { CompetitionBg } from "@/libs/data";
import ScrollBaseText from "../ScrollBasedText";
import SectionHeader from "../SectionHeader";

const Competition = () => {
  return (
    <div className="main-section top-element relative">
      <SectionHeader title="Competition" />
      <div className="border-primary-400 sec-inner-y background-glow bg-dark-300 rounded-2xl border-8 px-4 py-8">
        <ScrollBaseText className="mx-auto w-full text-2xl text-white">
          Code Quest is an exciting Capture the Flag (CTF) event where
          participants test their skills in cryptography, ethical hacking, and
          problem-solving. With challenges in web security, reverse engineering,
          and forensics, competitors will race to uncover hidden flags and climb
          the leaderboard. Whether you&apos;re a cybersecurity enthusiast or a
          beginner, Code Quest offers a thrilling and rewarding challenge to
          sharpen your skills and think like a hacker!
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
