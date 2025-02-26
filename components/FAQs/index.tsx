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
    <div className="top-element section-gap-y main-section px-2" id="faqs">
      <SectionHeader title="FAQs" />
      <div className="sec-inner-y will-change-[height]">
        <AccordionRoot allowMultiple={false} className="flex flex-col gap-y-4">
          {FAQData.map((item) => (
            <AccordionItem
              key={item.value}
              className="faq-item-bg top-element border border-gray-600 text-white"
              value={item.value}
            >
              <AccordionItemTrigger value={item.value}>
                <AccordionItemHeader value={item.value}>
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
