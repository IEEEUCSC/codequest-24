"use client";

import React, { useState } from "react";
import { CertificateData, validateEmailAndContact } from "@/libs/validateEmail";
import CertificatePreview from "./CertificatePreview";
import ErrorMessage from "./ErrorMessage";

const ECertificateForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setCertificateData(null);

    const result = await validateEmailAndContact(email.trim(), contactNumber.trim());
    if (result) {
      setCertificateData(result);
    } else {
      setError("No certificate found for the provided email and contact number.");
    }
  };

  if (certificateData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black z-10">
      <CertificatePreview data={certificateData} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black z-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow-md flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-center text-gray-800">Get Your E-Certificate</h2>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />

        <input
          type="text"
          placeholder="Enter your contact number"
          required
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />

        <button
          type="submit"
          className="bg-primary-400 inline-block rounded-2xl px-4 py-2"
        >
          Enter
        </button>
      </form>

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default ECertificateForm;
