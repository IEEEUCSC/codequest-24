import { contactInfo } from "@/libs/data";
import ContactCard from "./ContactCard";
import SectionHeader from "../SectionHeader";

const Contacts = () => {
  return (
    <div className="main-section border">
      <SectionHeader title="Contact Us" className="" id="contactUS"/>
      <div className="contact-info-tiles grid grid-cols-1 gap-4 p-4 md:grid-cols-3 mt-4o">
        {contactInfo.map((info, index) => (
          <ContactCard
            key={index}
            name={info.name}
            title={info.title}
            email={info.email}
            phone={info.phone}
            imageSrc={info.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
