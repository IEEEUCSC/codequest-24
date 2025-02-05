import { TextHighlighter } from "../TextHighlighter";

const Hero = () => {
  return (
    <div className="hero container mx-auto flex-grow  flex flex-col justify-center items-center text-white">
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
    </div>
  );
};

export default Hero;
