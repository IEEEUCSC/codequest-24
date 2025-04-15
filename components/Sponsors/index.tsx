import { DemoLogo } from "@/assets/svgs/DemoLogo";
import MarqueeAnimation from "../MarqueeAnimation";
import SectionHeader from "../SectionHeader";
import SponsorsCard from "./SponsorsCard";

const Sponsors = () => {
  return (
    <div className="main-section top-element" id="sponsors">
      <SectionHeader title="Sponsors" />
      <div className="sec-inner-y sponsor-bg relative h-fit w-full">
        <MarqueeAnimation
          className="bg-primary-400 top-element _background-glow w-full mask-radial-[80%_80%] mask-radial-from-40% mask-radial-to-75% mask-radial-at-center"
          itemGap="large"
          hoverStop
        >
          <div className="relative flex items-center justify-center gap-8 py-8">
            {Array.from({ length: 10 }, (_, index) => (
              <SponsorsCard key={index} type="Gold">
                <DemoLogo />
              </SponsorsCard>
            ))}
          </div>
        </MarqueeAnimation>
      </div>
    </div>
  );
};

export default Sponsors;
