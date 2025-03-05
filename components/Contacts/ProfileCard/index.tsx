"use client";

import { useState } from "react";
import Image from "next/image";

import { ContactDataProps } from "@/libs/contactData";

interface ProfileCardProps {
  contact: ContactDataProps;
  onMouseEnter: (contact: ContactDataProps) => void;
  onMouseLeave: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  contact,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handler functions for mouse events
  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter(contact);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  // Skip rendering the data cell position - we'll render that separately
  if (
    contact.position.gridColumn === "1 / span 2" &&
    contact.position.gridRow === "2"
  ) {
    return null;
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded bg-red-600 pt-[100%] ease-in-out hover:cursor-pointer ${contact.position.gridColumn === "3" ? "col-start-3" : ""} ${contact.position.gridRow === "2" ? "row-start-2" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={contact.image}
            alt={`${contact.name}`}
            fill
            style={{ objectFit: "cover" }}
            className="h-full w-full object-cover"
          />

          {/* Overlay that appears on hover */}
          <div
            className={`bg-opacity-85 absolute inset-0 flex flex-col items-center justify-center bg-red-600 transition-opacity duration-300 ${isHovered ? "opacity-50" : "opacity-0"}`}
          >
            {/* <div className="p-4 text-center text-white">
              {contact.email && (
                <div className="mb-2">
                  <span className="mr-1 font-bold">Email:</span>
                  <span>{contact.email}</span>
                </div>
              )}

              {contact.phone && (
                <div className="mb-2">
                  <span className="mr-1 font-bold">Phone:</span>
                  <span>{contact.phone}</span>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
