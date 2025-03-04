import React from "react";
import { StaticImageData } from "next/image";

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
import { TimelineItem } from "./types";

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

export const timelineItems: TimelineItem[] = [
  {
    date: { day: "15", month: "FEB" },
    header: "Workshop 01",
    content: "Demo content for Workshop 01",
    time: "19:00 IST",
  },
  {
    date: { day: "22", month: "FEB" },
    header: "Workshop 02",
    content: "Demo content for Workshop 02",
    time: "19:00 IST",
  },
  {
    date: { day: "01", month: "MAR" },
    header: "Workshop 03",
    content: "Demo content for Workshop 03",
    time: "19:00 IST",
  },
  {
    date: { day: "08", month: "MAR" },
    header: "Initial Round",
    content: "Demo content for Initial Round",
    time: "00:00 IST",
  },
  {
    date: { day: "12", month: "MAR" },
    header: "Final Round Awareness Session",
    content: "Demo content for Final Round Awareness Session",
    time: "00:00 IST",
  },
  {
    date: { day: "19", month: "APR" },
    header: "Final Round",
    content: "Demo content for Final Round",
    time: "00:00 IST",
  },
];

export const FAQData = [
  {
    value: "item-1",
    question: "What is CodeQuest?",
    answer:
      "CodeQuest is a coding competition designed to challenge and inspire developers.",
  },
  {
    value: "item-2",
    question: "How can I register for CodeQuest?",
    answer:
      "Visit our website and navigate to the registration page. Fill in the required details to register.",
  },
  {
    value: "item-3",
    question: "Who can participate in CodeQuest?",
    answer:
      "CodeQuest is open to all coding enthusiasts, regardless of their experience level.",
  },
  {
    value: "item-4",
    question: "Do I need a team to participate?",
    answer: "No, you can participate individually or as part of a team.",
  },
  {
    value: "item-5",
    question: "What are the prizes for CodeQuest?",
    answer:
      "Prizes include cash rewards, tech gadgets, and certificates of achievement.",
  },
  {
    value: "item-6",
    question: "Do I need any prior knowledge in coding?",
    answer:
      "Basic knowledge of coding is recommended, but we have resources to help beginners get started.",
  },
  // Add more FAQs as needed
];

export const FOOTER_DESC =
  "CodeQuest is a competition designed to challenge and inspire developers. Join us for a chance to win exciting prizes and showcase your coding skills!";

import IEEElogo from "@/assets/logos/sb_logo.png";
import CQLogo from "@/assets/logos/cq_logo.png";

import SectionBg from "@/assets/sec-title-bg.svg";
import CompetitionBg from "@/assets/competition-bg.svg";

export { IEEElogo, CQLogo, SectionBg, CompetitionBg };
