import localFont from "next/font/local";

export const prime = localFont({
  src: [
    {
      path: "../fonts/Prime-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Prime-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-prime",
});

export const rusticRoadway = localFont({
  src: [
    {
      path: "../fonts/RusticRoadway.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-rustic-roadway",
});

export const BPMono = localFont({
  src: [
    {
      path: "../fonts/BPmono.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/BPmonoBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-bpmono",
});
