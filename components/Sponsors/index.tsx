import { DemoLogo } from "@/assets/svgs/DemoLogo";
import MarqueeAnimation from "../MarqueeAnimation";
import SectionHeader from "../SectionHeader";
import SponsorsCard from "./SponsorsCard";

const Sponsors = () => {
  return (
    <div className="main-section top-element">
      <SectionHeader title="Sponsors" />
      <div className="sec-inner-y sponsor-bg relative w-full">
        <MarqueeAnimation
          className="bg-primary-400 top-element background-glow w-full"
          itemGap="large"
          hoverStop
        >
          <div className="flex items-center justify-center gap-8 py-8">
            <SponsorsCard type="Gold">
              <DemoLogo />
            </SponsorsCard>
            <SponsorsCard type="Gold">
              <DemoLogo />
            </SponsorsCard>
            <SponsorsCard type="Gold">
              <DemoLogo />
            </SponsorsCard>
            <SponsorsCard type="Gold">
              <DemoLogo />
            </SponsorsCard>
            <SponsorsCard type="Gold">
              <DemoLogo />
            </SponsorsCard>
          </div>
        </MarqueeAnimation>
      </div>
    </div>
  );
};

export default Sponsors;
