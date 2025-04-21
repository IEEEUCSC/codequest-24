import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertificatePreview = ({ data }: { data: any }) => {
  const handleDownload = () => {
    const input = document.getElementById("certificate");
    if (!input) return;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape");
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save(`${data.name}_certificate.pdf`);
    });
  };

  return (
    <div className="mt-8 text-center">
      <div
        id="certificate"
        className="bg-white border border-gray-300 p-8 rounded shadow-lg inline-block text-left"
      >
        <h3 className="text-2xl font-bold mb-2">Certificate of Participation</h3>
        <p>This is to certify that</p>
        <p className="text-xl font-semibold">{data.name}</p>
        <p>participated in the event</p>
        <p className="font-semibold">{data.event}</p>
        <p>on {data.date}</p>
      </div>

      <button
        onClick={handleDownload}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default CertificatePreview;
