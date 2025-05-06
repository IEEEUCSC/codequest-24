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
    }
  ],
  display: "swap",
  variable: "--font-prime"
});

export const rusticRoadway = localFont({
  src: [
    {
      path: "../fonts/RusticRoadway.otf",
      weight: "500",
      style: "normal",
    }
  ],
  display: "swap",
  variable: "--font-rustic-roadway"
});
