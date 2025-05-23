import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CertificateDataActive } from "@/libs/validateEmail";
import { rusticRoadway } from "@/fonts";
import AnimatedButton from "../AnimatedButton";

const CertificatePreview = ({ data }: { data: CertificateDataActive }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!certificateRef.current) return;

    const canvas = await html2canvas(certificateRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
    });

    const a4WidthPx = 3508;
    const a4HeightPx = 2480;

    const outputCanvas = document.createElement("canvas");
    outputCanvas.width = a4WidthPx;
    outputCanvas.height = a4HeightPx;
    const ctx = outputCanvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(canvas, 0, 0, a4WidthPx, a4HeightPx);
    }

    const imgData = outputCanvas.toDataURL("image/png", 1.0); 

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4", 
    });

    pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
    pdf.save(`${data.name}_initial_round_certificate.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 text-center lg:mt-6 lg:gap-y-4 lg:py-16">
      <div
        ref={certificateRef}
        className="relative flex w-[375px] h-[253.125px] md:w-[1000px] md:h-[675px] flex-row items-center justify-center lg:scale-100"
      >
        <img
          src="/ecertificate/CERTIFICATE_FINAL.png"
          alt="Certificate"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div
          className="absolute text-center text-base md:text-4xl font-semibold text-white"
          style={{
            fontFamily: rusticRoadway.style.fontFamily,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          {data.name}
        </div>
        <div
          className="absolute text-center text-base md:text-xl font-semibold text-white"
          style={{
            top: "64%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          {data.teamName}
        </div>
      </div>

      <AnimatedButton
        text="Download Certificate"
        onClick={handleDownload}
        className="bg-primary-400 background-glow inline-block translate-y-[50px] cursor-pointer rounded-2xl px-4 py-2 text-white"
      />
    </div>
  );
};

export default CertificatePreview;