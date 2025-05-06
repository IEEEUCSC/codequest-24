"use client";

import React, { useState } from "react";
import { CertificateData, validateEmailAndContact } from "@/libs/validateEmail";
import CertificatePreview from "./CertificatePreview";
import ErrorMessage from "./ErrorMessage";

const ECertificateForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [certificateData, setCertificateData] =
    useState<CertificateData | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setCertificateData(null);

    const result = await validateEmailAndContact(
      email.trim(),
      contactNumber.trim(),
    );
    if (result) {
      setCertificateData(result);
    } else {
      setError(
        "No certificate found for the provided email and contact number.",
      );
    }
  };

  if (certificateData) {
    return (
      <div className="z-10 flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <CertificatePreview data={certificateData} />
      </div>
    );
  }

  return (
    <div className="z-10 flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-4 rounded bg-white p-6 shadow-md"
      >
        <h2 className="text-center text-xl font-bold text-gray-800">
          Get Your E-Certificate
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded border border-gray-300 px-3 py-2"
        />

        <input
          type="text"
          placeholder="Enter your contact number"
          required
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="rounded border border-gray-300 px-3 py-2"
        />

        <button
          type="submit"
          className="bg-primary-400 inline-block rounded-2xl px-4 py-2 text-white"
        >
          Enter
        </button>
      </form>

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default ECertificateForm;
