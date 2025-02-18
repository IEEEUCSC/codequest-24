// import SectionTitle from "../SectionTitle";
import { TimelineComp } from "./TimelineComp";
import { timelineItems } from "@/libs/data";

const TimelineSection = () => {
  return (
    <div
      className="top-element main-section flex flex-col gap-y-8 px-2"
      id="timeline"
    >
      {/* <SectionTitle title="Timeline" /> */}
      <div>
        <TimelineComp items={timelineItems} />
      </div>
    </div>
  );
};

export default TimelineSection;
