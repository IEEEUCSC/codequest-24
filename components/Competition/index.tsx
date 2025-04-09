import { COMPETITION_TEXT } from "@/libs/data";
import ScrollBaseText from "../ScrollBasedText";
import SectionHeader from "../SectionHeader";

const Competition = () => {
  return (
    <div
      className="main-section top-element 3xl:px-0 relative px-1.5 lg:px-2"
      id="competition"
    >
      <SectionHeader title="Competition" />
      <div className="border-primary-400 sec-inner-y competition-bg-glow bg-dark-300 _lg:border-8 rounded-2xl border-2 px-4 py-8">
        <div className="flex flex-col gap-y-4">
          {COMPETITION_TEXT.map((text, index) => (
            <ScrollBaseText
              key={index}
              className="mx-auto w-full text-center text-lg text-balance text-white lg:max-w-[80%] lg:text-2xl"
              startOffset={index + 1}
              ariaText={text}
            >
              {text}
            </ScrollBaseText>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competition;
