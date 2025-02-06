import MarqueeAnimation from "../MarqueeAnimation";
import { TextHighlighter } from "../TextHighlighter";
import StarIcon from "./StarIcon";

const Hero = () => {
  return (
    <div className="hero container mx-auto flex-grow  flex flex-col justify-center items-center text-white  relative">
      <div className="flex flex-col items-center gap-y-3 lg:gap-y-5">
        <h3 className="text-center text-lg lg:text-2xl">
          IEEE STUDENT BRANCH OF <br />
          UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING <br />
          PROUDLY PRESENTS
        </h3>
        <h1 className=" text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          CodeQuest: <TextHighlighter>Vault Edition</TextHighlighter>
        </h1>
        <p className="text-balance text-center text-sm lg:max-w-[65ch] lg:text-base">
          A Capture the Flag (CTF) hackathon aimed at enhancing cybersecurity
          skills among undergraduates.
        </p>
      </div>
      <div className="  absolute  bottom-10 w-[100vw]   flex flex-col items-center justify-center">
        <MarqueeAnimation
          className="  w-full rotate-2 overflow-clip translate-y-6 py-2 bg-primary-100"
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
          className="  w-full -rotate-2 -translate-y-6 py-2 bg-primary-100"
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
