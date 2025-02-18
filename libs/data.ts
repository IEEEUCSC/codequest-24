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
    content: "Introduction to Machine Learning",
    time: "19:00 IST",
  },
  {
    date: { day: "22", month: "FEB" },
    header: "Workshop 02",
    content: "Large Language Models",
    time: "19:00 IST",
  },
  {
    date: { day: "01", month: "MAR" },
    header: "Workshop 03",
    content: "AI agents and RAG model",
    time: "19:00 IST",
  },
  {
    date: { day: "08", month: "MAR" },
    header: "Initial Round",
    content: " ",
    time: "00:00 IST",
  },
  {
    date: { day: "12", month: "MAR" },
    header: "Final Round Awareness Session",
    content: "AI agents and RAG model ",
    time: "00:00 IST",
  },
  {
    date: { day: "19", month: "APR" },
    header: "Final Round",
    content: " ",
    time: "00:00 IST",
  },
];


export const FAQData = [
  {
    value: "item-1",
    question: "What is IntelliHack ?",
    answer:
      "IntelliHack  is a Machine Learning Hackathon organized by IEEE CS Chapter of UCSC.",
  },
  {
    value: "item-2",
    question: "How can I register for IntelliHack ?",
    answer:
      "Visit our website and navigate to the registration page. Fill in the required details for your team to register.",
  },
  {
    value: "item-3",
    question: "Who can participate in IntelliHack ?",
    answer: "IntelliHack is open to all university undergraduate students.",
  },
  {
    value: "item-4",
    question: "Do I need a team to participate ?",
    answer: "Yes, participants are required to form a team of 2 to 4 members.",
  },
  {
    value: "item-5",
    question:
      "Can I form a team with undergraduates from different universities ?",
    answer:
      "No, a team must consist of undergraduates from the same university.",
  },
  {
    value: "item-6",
    question: "Do I need any prior knowledge in Machine Learning ?",
    answer:
      "Yes, Having some background knowledge in mathematics, programming, and data analysis is beneficial for understanding machine learning concepts.",
  },
  // Add more FAQs as needed
];


import HeaderLogo from "@/assets/logos/logo-header.png"

export const HeaderLogoSrc = HeaderLogo;
