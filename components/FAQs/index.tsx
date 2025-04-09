import { FAQData } from "@/libs/data";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "./Accordion";
import SectionHeader from "../SectionHeader";
import Glassmorphism from "../Glassmorphism";

const FAQs = () => {
  return (
    <div
      className="top-element section-gap-y main-section relative px-2"
      id="faqs"
    >
      <SectionHeader title="FAQs" />
      <div className="sec-inner-y mx-auto max-w-6xl will-change-[height]">
        <AccordionRoot allowMultiple={false} className="flex flex-col gap-y-2">
          {FAQData.map((item) => (
            <AccordionItem
              key={item.value}
              className="top-element _border relative border-gray-600 text-white"
              value={item.value}
            >
              <div className="bg-primary-400/40 absolute top-0 left-0 h-full w-full mask-radial-[100%_100%] mask-radial-from-60% mask-radial-to-100% mask-radial-at-top-left" />
              <Glassmorphism className="border-primary-400 overflow-clip rounded-xl border-1">
                <AccordionItemTrigger value={item.value}>
                  <AccordionItemHeader value={item.value} strokeColor="white">
                    <span className="flex-1 text-xl ">
                      {item.question}
                    </span>
                  </AccordionItemHeader>
                </AccordionItemTrigger>
                <AccordionItemContent value={item.value}>
                  <p className="pr-8 text-balance text-gray-400">{item.answer}</p>
                </AccordionItemContent>
              </Glassmorphism>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>
    </div>
  );
};

export default FAQs;
