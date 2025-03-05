import SectionHeader from "../SectionHeader";
import { TimelineComp } from "./TimelineComp";
import { timelineItems } from "@/libs/data";

const TimelineSection = () => {
  return (
    <div className="top-element main-section flex flex-col px-2" id="timeline">
      <SectionHeader title="Timeline" />
      <div className="sec-inner-y">
        <TimelineComp items={timelineItems} />
      </div>
    </div>
  );
};

export default TimelineSection;
