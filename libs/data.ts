import { StaticImageData } from "next/image";
import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export const NAV_LINKS = [
  { href: "#competition", label: "Competition" },
  { href: "#timeline", label: "Timeline" },
  { href: "#prizes", label: "Prizes" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#faqs", label: "FAQ" },
];

export const SITE_TITLE = "CodeQuest: Vault Edition";

interface SocialMediaLink {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Facebook",
    link: "https://facebook.com/",
    icon: React.createElement(FaFacebook),
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ ",
    icon: React.createElement(FaInstagram),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: React.createElement(FaLinkedin),
  },
];

// contact persons data
export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  imageSrc: string | StaticImageData;
}

// contact persons images
// import person1 from "@/assets/contacts/a.avif";
import person2 from "@/assets/contacts/images.jpg";
import person3 from "@/assets/contacts/img.jpg";

export const contactInfo: ContactInfo[] = [
  {
    name: "John Doe",
    title: "Vice President",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    imageSrc: person2,
  },
  {
    name: "Jane Smith",
    title: "Secretary",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    imageSrc: person2,
  },
  {
    name: "Alice Johnson",
    title: "Treasurer",
    email: "alice.johnson@example.com",
    phone: "555-123-4567",
    imageSrc: person3,
  },
];
