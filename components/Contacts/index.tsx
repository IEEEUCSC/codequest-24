"use client";

import ProfileCard from "./ProfileCard";
import contactData from "@/libs/contactData";
import SectionHeader from "../SectionHeader";

const TeamGrid: React.FC = () => {

  return (
    <div className="main-section top-element">
      <SectionHeader title="Contact us" />
      <div className="px-1.5 md:px-0">
        <div className="sec-inner-y bg-dark-300 top-element border-primary-400 relative grid w-full max-w-6xl gap-2 rounded-lg border-2 p-2 md:mx-auto md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          {contactData.map((contact, i) => (
            <ProfileCard key={contact.id} {...contact} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
