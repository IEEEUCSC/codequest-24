import ScrollBaseText from "../ScrollBasedText";
import SectionHeader from "../SectionHeader";
import AnimatedButton from "../AnimatedButton";

const Competition = () => {
  return (
    <section
      className="main-section top-element 3xl:px-0 relative px-1.5 lg:px-2"
      id="competition"
    >
      <SectionHeader title="Competition" />
      <div className="border-primary-400 sec-inner-y competition-bg-glow bg-dark-300 container mx-auto flex flex-col items-center gap-y-4 rounded-2xl px-4 py-8 text-white *:justify-center">
        <h3 className="text-center text-lg font-semibold *:justify-center lg:text-2xl">
          <ScrollBaseText className="lg:w-full lg:max-w-[50vw]">
            Step into the ultimate Capture the Flag (CTF) challenge, where
            cybersecurity meets strategy, skill, and innovation.
          </ScrollBaseText>
        </h3>
        <div className="flex flex-col gap-y-2 text-lg *:justify-start lg:w-full lg:max-w-[50vw] lg:grow lg:*:ml-32">
          <ScrollBaseText>Decrypt intricate puzzles.</ScrollBaseText>
          <ScrollBaseText>Exploit security vulnerabilities.</ScrollBaseText>
          <ScrollBaseText>
            Master logic-based challenges inspired by real-world cyber threats.
          </ScrollBaseText>
        </div>
        <h3 className="my-4 w-full text-lg font-semibold *:justify-center lg:max-w-[50vw] lg:text-2xl">
          <ScrollBaseText>What Awaits You?</ScrollBaseText>
        </h3>
        <div className="flex flex-col gap-y-2 text-center text-lg *:justify-start lg:w-full lg:max-w-[50vw] lg:*:ml-32">
          <ScrollBaseText className=" ">
            Gain cutting-edge insights from industry experts through exclusive
            workshops.
          </ScrollBaseText>
          <ScrollBaseText>
            Compete in thrilling online & on-site hackathon rounds.
          </ScrollBaseText>
          <ScrollBaseText>
            Claim prestigious prizes and connect with top professionals.
          </ScrollBaseText>
        </div>
        <div className="flex w-full items-center justify-center">
          <AnimatedButton text="Download Booklet" to="/CodeQuest.pdf" />
        </div>
      </div>
    </section>
  );
};

export default Competition;
