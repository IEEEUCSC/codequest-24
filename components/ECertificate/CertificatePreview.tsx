import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CertificateData } from "@/libs/validateEmail";
import { rusticRoadway } from "@/fonts";

const CertificatePreview = ({ data }: { data: CertificateData }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!certificateRef.current) return;

    const canvas = await html2canvas(certificateRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${data.name}_certificate.pdf`);
  };

  return (
    <div className="mt-25 text-center">
      <div
        ref={certificateRef}
        className="relative flex flex-row justify-center items-center"
        style={{ width: "1000px", height: "700px" }}
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
          className="absolute text-4xl font-semibold text-center text-white"
          style={{
            fontFamily: rusticRoadway.style.fontFamily,
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          {data.name}
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="bg-primary-400 background-glow inline-block rounded-2xl px-4 py-2"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default CertificatePreview;
