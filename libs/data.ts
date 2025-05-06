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
    link: "https://www.facebook.com/IEEE.UCSC",
    icon: React.createElement(FaFacebook),
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ucsc.ieee/ ",
    icon: React.createElement(FaInstagram),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/ieee-student-branch-ucsc/",
    icon: React.createElement(FaLinkedin),
  },
];

// timeline data
import { SponsorLogoProps, TimelineItem } from "./types";

export const timelineItems: TimelineItem[] = [
  {
    date: { day: "11", month: "APR" },
    header: "Workshop 01",
    content: "Awareness Session",
    time: "00:00 IST",
  },
  {
    date: { day: "20", month: "APR" },
    header: "Workshop 02",
    content: "Tools deep dive",
    time: "19:00 IST",
  },
  {
    date: { day: "04", month: "MAY" },
    header: "Initial Round",
    content: " ",
    time: "00:00 IST",
  },
  {
    date: { day: "09", month: "MAY" },
    header: "Final Round Awareness Session",
    content: " ",
    time: "00:00 IST",
  },
  {
    date: { day: "10", month: "MAY" },
    header: "Final Round",
    content: "Physical CTF Hackathon",
    time: "00:00 IST",
  },
];

export const FAQData = [
  {
    value: "item-1",
    question: "What is CodeQuest: Vault Edition?",
    answer:
      "A high-stakes Capture the Flag (CTF) competition that pushes the boundaries of cybersecurity, programming, and problem-solving. Get ready to crack codes, unravel digital mysteries, and outsmart security challenges in: Cryptography, Reverse Engineering, Web Security",
  },
  {
    value: "item-2",
    question: "Who can join?",
    answer:
      "Any university student who loves challenges. No specific background is required!",
  },
  {
    value: "item-3",
    question: "Do I need prior experience in CTFs?",
    answer:
      "Not at all! Whether you’re a beginner or a seasoned player, CodeQuest welcomes all skill levels.",
  },
  {
    value: "item-4",
    question: "Can I compete alone, or do I need a team?",
    answer:
      "You can team up with up to 4 friends (teams can have 3 to 4 members). But members of a team must be undergraduates of the same university.",
  },
  {
    value: "item-5",
    question: "What do I need to participate?",
    answer:
      "A computer, a stable internet connection, and a passion for cybersecurity! ",
  },
  {
    value: "item-6",
    question: "Is the entire event online?",
    answer:
      " The initial round is online, but the final showdown is an intense 8-hour physical CTF hackathon!",
  },
  // Add more FAQs as needed
];

export const FOOTER_DESC =
  "CodeQuest is a competition designed to challenge and inspire developers. Join us for a chance to win exciting prizes and showcase your coding skills!";

// Images and SVGs
import IEEElogo from "@/assets/logos/sb_logo.png";
import CQLogo from "@/assets/logos/cq_logo.png";
import SectionBg from "@/assets/sec-title-bg.png";
import HeroBg from "@/assets/hero-bg-img.webp";
import HeroLogo from "@/assets/hero-header.png";

export { IEEElogo, CQLogo, SectionBg, HeroBg, HeroLogo };

// competition section text
export const COMPETITION_TEXT = [
  `CodeQuest is an exciting Capture the Flag (CTF) event where participants test their skills in cryptography, ethical hacking, and problem-solving.`,
  `With challenges in web security, reverse engineering, and forensics, competitors will race to uncover hidden flags and climb the leaderboard.`,
  `Whether you're a cybersecurity enthusiast or a beginner, Code Quest offers a thrilling and rewarding challenge to sharpen your skills and think like a hacker!`,
];

// metadata
export const META_TITLE = "CodeQuest: Vault Edition";
export const META_DESC =
  "CodeQuest is a competition designed to challenge and inspire developers. Join us for a chance to win exciting prizes and showcase your coding skills!";

export const SITE_LINK = "https://codequest-25.vercel.app/";

// Prizes section data
import goldMedal from "@/assets/prizes/1st.png";
import silverMedal from "@/assets/prizes/2nd.png";
import bronzeMedal from "@/assets/prizes/3rd.png";

export { goldMedal, silverMedal, bronzeMedal };

// sponsors data
import HiveionLogo from "@/assets/sponsors/Hiveion_logo.png";
import Zone24x7Logo from "@/assets/sponsors//zone24x7_logo.png";
import SperaLogo from "@/assets/sponsors/spera_logo.png";

export const SPONSORS: SponsorLogoProps[] = [
  {
    title: "Hiveion",
    type: "Associate Sponsor",
    logo: HiveionLogo,
  },
  {
    title: "Zone24x7",
    type: "Silver Sponsor",
    logo: Zone24x7Logo,
  },
  {
    title: "Spera",
    type: "Gold Sponsor",
    logo: SperaLogo,
  },
];

export const START_TIME = new Date("2025-05-04T08:00:00Z");
export const END_TIME = new Date("2025-05-04T16:30:00Z");
