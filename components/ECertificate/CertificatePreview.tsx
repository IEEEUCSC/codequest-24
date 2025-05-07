import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CertificateData } from "@/libs/validateEmail";
import { rusticRoadway } from "@/fonts";
import AnimatedButton from "../AnimatedButton";

const CertificatePreview = ({ data }: { data: CertificateData }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!certificateRef.current) return;

    const canvas = await html2canvas(certificateRef.current);
    const imgData = canvas.toDataURL("image/png");

    canvas.width = 2000;
    canvas.height = 1350;

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${data.name}_certificate.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 text-center lg:mt-6 lg:gap-y-4 lg:py-16">
      <div
        ref={certificateRef}
        className="relative flex w-[375px] h-[253.125px] md:h-[675px] md:w-[1000px]  flex-row items-center justify-center lg:scale-none"
      >
        <img
          src="/ecertificate/CERTIFICATE.png"
          alt="Certificate"
          style={{
            width: "100%",
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
            top: "57%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          {data.name}
        </div>
      </div>

      <AnimatedButton
        text="Download Certificate"
        onClick={() => handleDownload()}
        className="bg-primary-400 background-glow inline-block translate-y-[50px] cursor-pointer rounded-2xl px-4 py-2 text-white"
      />
    </div>
  );
};

export default CertificatePreview;
