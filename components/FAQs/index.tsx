import { FAQData } from "@/libs/data";
// import SectionTitle from "../SectionTitle";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "./Accordion";

const FAQs = () => {
  return (
    <div className="top-element section-gap-y main-section px-2" id="faqs">
      {/* <SectionTitle title="FAQs" /> */}
      <div className="section-inner-gap-y will-change-[height]">
        <AccordionRoot allowMultiple={false} className="flex flex-col gap-y-4">
          {FAQData.map((item) => (
            <AccordionItem
              key={item.value}
              className="faq-item-bg top-element text-white"
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
