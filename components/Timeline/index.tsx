import SectionHeader from "../SectionHeader";
import MobileArea from "./TimelineComp/MobileArea";
import { timelineItems } from "@/libs/data";

const TimelineSection = () => {
  return (
    <div className="top-element main-section flex flex-col px-2" id="timeline">
      <SectionHeader title="Timeline" />
      <div className="sec-inner-y">
        <div className="mx-auto w-full overflow-clip lg:max-w-xl">
          <MobileArea data={timelineItems} />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
