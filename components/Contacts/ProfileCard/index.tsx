"use client";

import { useState } from "react";
import Image from "next/image";

import { ContactDataProps } from "@/libs/contactData";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/libs/utils";

interface ProfileCardProps {
  contact: ContactDataProps;
  onMouseEnter: (contact: ContactDataProps) => void;
  onMouseLeave: () => void;
  onMouseClick: (contact: ContactDataProps) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  contact,
  onMouseEnter,
  onMouseLeave,
  onMouseClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const desktop = useMediaQuery("(min-width: 768px");

  // Handler functions for mouse events
  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter(contact);
  };

  const handleMouseCLick = () => {
    onMouseClick(contact);
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

  const gridColumnClass = desktop
    ? contact.position.gridColumn === "3"
      ? "col-start-3"
      : ""
    : "";
  const gridRowClass = desktop
    ? contact.position.gridRow === "2"
      ? "row-start-2"
      : ""
    : "";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded bg-red-600 ease-in-out hover:cursor-pointer md:pt-[100%]",
        gridColumnClass,
        gridRowClass,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseCLick}
    >
      <div className="md:absolute md:inset-0">
        <div className="xs:grid-cols-2 relative grid h-full w-full md:grid-cols-none">
          <div className="relative min-h-[280px] md:min-h-0">
            <Image
              src={contact.image}
              alt={`${contact.name}`}
              fill
              style={{ objectFit: "cover" }}
              className="h-full w-full object-cover"
            />
          </div>

          {!desktop && (
            <div className="flex flex-col gap-y-1 p-4">
              <h2 className="text-xl font-bold text-white">{contact.name}</h2>
              <p className="text-white">{contact.role}</p>

              <div className="text-sm text-white">
                <span className="mr-1 font-bold">Email:</span>
                <span>{contact.email}</span>
              </div>

              <div className="text-sm text-white">
                <span className="mr-1 font-bold">Phone:</span>
                <span>{contact.phone}</span>
              </div>
            </div>
          )}

          {desktop && (
            <div
              className={`bg-opacity-85 absolute inset-0 flex flex-col items-center justify-center bg-red-600 transition-opacity duration-300 ${isHovered ? "opacity-50" : "opacity-0"}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
