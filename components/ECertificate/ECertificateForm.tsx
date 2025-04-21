"use client";
import React, { useState } from "react";
import { validateEmail } from "@/libs/validateEmail";
import CertificatePreview from "./CertificatePreview";
import ErrorMessage from "./ErrorMessage";

const ECertificateForm = () => {
  const [email, setEmail] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const data = await validateEmail(email.trim().toLowerCase());

    if (data) {
      setCertificateData(data);
    } else {
      setCertificateData(null);
      setError("No certificate found for this email.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center p-6">
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4 bg-white p-6 shadow rounded">
        <h2 className="text-xl font-bold text-center">Get Your E-Certificate</h2>
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="border border-gray-300 rounded p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      {certificateData && <CertificatePreview data={certificateData} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default ECertificateForm;
