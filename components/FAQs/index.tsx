import { FAQData } from "@/libs/data";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "./Accordion";
import SectionHeader from "../SectionHeader";

const FAQs = () => {
  return (
    <div
      className="top-element section-gap-y main-section relative px-2"
      id="faqs"
    >
      <SectionHeader title="FAQs" />
      <div className="sec-inner-y mx-auto max-w-6xl will-change-[height]">
        <AccordionRoot allowMultiple={false} className="flex flex-col gap-y-4">
          {FAQData.map((item) => (
            <AccordionItem
              key={item.value}
              className="top-element relative border border-gray-600 text-white"
              value={item.value}
            >
              <div className="bg-primary-400/40 absolute top-0 left-0 h-full w-full mask-radial-[100%_100%] mask-radial-from-60% mask-radial-to-100% mask-radial-at-top-left" />
              <AccordionItemTrigger value={item.value}>
                <AccordionItemHeader value={item.value} strokeColor="white">
                  <span className="flex-1">{item.question}</span>
                </AccordionItemHeader>
              </AccordionItemTrigger>
              <AccordionItemContent value={item.value}>
                <p className="">{item.answer}</p>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>
    </div>
  );
};

export default FAQs;
