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
    link: "https://facebook.com/IEEECSUCSC ",
    icon: React.createElement(FaFacebook),
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ieee.cs.ucsc/ ",
    icon: React.createElement(FaInstagram),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/ieee-computer-society-student-branch-chapter-of-ucsc",
    icon: React.createElement(FaLinkedin),
  },
];
