// components/TeamGrid.tsx
"use client";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import DataCell from "./DataCell";
import { ContactData } from "@/libs/contactData";

interface TeamGridProps {
  contactData: ContactData[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ contactData }) => {
  // State to track which contact is being hovered on
  const [hoveredContact, setHoveredContact] = useState<ContactData | null>(
    contactData[0],
  );

  // State to track the last clicked contact (default to first contact)
  const [selectedContact, setSelectedContact] = useState<ContactData>(
    contactData[0],
  );

  // Handler for when mouse enters a profile card
  const handleHover = (contact: ContactData) => {
    setHoveredContact(contact);
  };

  // Handler for when mouse leaves a profile card
  const handleHoverEnd = () => {
    setHoveredContact(null);
  };

  // Handler for when a profile card is clicked
  const handleClick = (contact: ContactData) => {
    setSelectedContact(contact);
  };

  // Determine which contact to display in the data cell
  const displayedContact = hoveredContact || selectedContact;

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-3 grid-rows-2 gap-2 rounded-lg border-2 border-red-600 bg-black p-2">
      {contactData.map((contact) => (
        <ProfileCard
          key={contact.id}
          contact={contact}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
          onClick={handleClick}
        />
      ))}

      {/* The data cell that displays the currently hovered/selected contact's information */}
      <DataCell contact={displayedContact} />
    </div>
  );
};

export default TeamGrid;
