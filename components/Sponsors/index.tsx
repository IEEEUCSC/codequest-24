import MarqueeAnimation from "../MarqueeAnimation";
import SectionHeader from "../SectionHeader";
import SponsorsCard from "./SponsorsCard";
import { SPONSORS } from "@/libs/data";

const Sponsors = () => {
  const groupedSponsors = SPONSORS.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.type]) acc[sponsor.type] = [];
      acc[sponsor.type].push(sponsor);
      return acc;
    },
    {} as Record<string, typeof SPONSORS>,
  );
  
  return (
    <div className="main-section top-element" id="sponsors">
      <SectionHeader title="Sponsors" />
      <div className="sec-inner-y sponsor-bg relative h-fit w-full">
        <MarqueeAnimation
          className="bg-primary-400 top-element _background-glow w-full mask-radial-[80%_80%] mask-radial-from-40% mask-radial-to-75% mask-radial-at-center"
          itemGap="xlarge"
          hoverStop
        >
          <div className="relative flex items-center justify-center gap-8 py-8">
            {Object.values(groupedSponsors).flat().map((logo, i) => (
              <SponsorsCard key={i} {...logo}/>
            ))}
          </div>
          <div className="relative flex items-center justify-center gap-8 py-8">
            {Object.values(groupedSponsors).flat().map((logo, i) => (
              <SponsorsCard key={i} {...logo}/>
            ))}
          </div>
        </MarqueeAnimation>
      </div>
    </div>
  );
};

export default Sponsors;
