"use client";

import { useState } from "react";

import ProfileCard from "./ProfileCard";
import DataCell from "./DataCell";
import contactData from "@/libs/contactData";

const TeamGrid: React.FC = () => {
  // State to track which contact is being hovered on
  const [hoveredContactIndex, setHoveredContactIndex] = useState<number>(1);

  // Handler for when mouse enters a profile card
  const handleHover = (id: number) => {
    setHoveredContactIndex(id);
  };

  // Handler for when mouse leaves a profile card
  const handleHoverEnd = () => {
    setHoveredContactIndex(1); // set default to first contact
  };

  // Determine which contact to display in the data cell
  const displayedContact = contactData.find(
    (contact) => contact.id === hoveredContactIndex,
  ) || contactData[0]; // provide a default value

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-3 grid-rows-2 gap-2 rounded-lg border-2 border-red-600 bg-black p-2">
      {contactData.map((contact) => (
        <ProfileCard
          key={contact.id}
          contact={contact}
          onMouseEnter={() => handleHover(contact.id)}
          onMouseLeave={handleHoverEnd}
        />
      ))}

      {/* The data cell that displays the currently hovered/selected contact's information */}
      <DataCell contact={displayedContact} />
    </div>
  );
};

export default TeamGrid;
