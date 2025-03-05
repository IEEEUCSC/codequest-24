"use client";

import { useState } from "react";

import ProfileCard from "./ProfileCard";
import DataCell from "./DataCell";
import contactData from "@/libs/contactData";
import SectionHeader from "../SectionHeader";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const TeamGrid: React.FC = () => {
  // State to track which contact is being hovered on
  const [hoveredContactIndex, setHoveredContactIndex] = useState<number>(1);

  const desktop = useMediaQuery("(min-width: 768px");

  // Handler for when mouse enters a profile card
  const handleHover = (id: number) => {
    setHoveredContactIndex(id);
  };

  const handleMouseClick = (id: number) => {
    setHoveredContactIndex(id);
  };

  // Handler for when mouse leaves a profile card
  const handleHoverEnd = () => {
    setHoveredContactIndex(1); // set default to first contact
  };

  // Determine which contact to display in the data cell
  const displayedContact =
    contactData.find((contact) => contact.id === hoveredContactIndex) ||
    contactData[0]; // provide a default value

  return (
    <div className="main-section top-element">
      <SectionHeader title="Our Team" />
      <div className="px-1.5 md:px-0">
        <div className="sec-inner-y bg-dark-300 top-element border-primary-400 relative grid w-full max-w-6xl gap-2 rounded-lg border-2 p-2 md:mx-auto md:grid-cols-3 md:grid-rows-2">
          {contactData.map((contact) => (
            <ProfileCard
              key={contact.id}
              contact={contact}
              onMouseEnter={() => handleHover(contact.id)}
              onMouseLeave={handleHoverEnd}
              onMouseClick={() => handleMouseClick(contact.id)}
            />
          ))}
          {desktop && <DataCell contact={displayedContact} />}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
