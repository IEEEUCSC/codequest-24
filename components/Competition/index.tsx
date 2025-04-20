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
      <div className="border-primary-400 sec-inner-y competition-bg-glow bg-dark-300 container mx-auto flex flex-col gap-y-4 rounded-2xl px-4 py-8 text-white">
        <h3 className="text-lg font-semibold lg:text-2xl">
          <ScrollBaseText>
            Step into the ultimate Capture the Flag (CTF) challenge, where
            cybersecurity meets strategy, skill, and innovation.
          </ScrollBaseText>
        </h3>
        <div className="flex flex-col gap-y-2 text-lg">
          <ScrollBaseText>Decrypt intricate puzzles.</ScrollBaseText>
          <ScrollBaseText>Exploit security vulnerabilities.</ScrollBaseText>
          <ScrollBaseText>
            Master logic-based challenges inspired by real-world cyber threats.
          </ScrollBaseText>
        </div>
        <h3 className="my-4 text-lg font-semibold lg:text-2xl">
          <ScrollBaseText>What Awaits You?</ScrollBaseText>
        </h3>
        <div className="flex flex-col gap-y-2 text-lg">
          <ScrollBaseText>
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
        <div className=" w-full flex items-center justify-center">
          <AnimatedButton text="Download Booklet" to="/" />
        </div>
      </div>
    </section>
  );
};

export default Competition;
