"use client";

import React, { useState } from "react";
import { CertificateData, validateEmailAndContact } from "@/libs/validateEmail";
import CertificatePreview from "./CertificatePreview";
import ErrorMessage from "./ErrorMessage";
import Glassmorphism from "../Glassmorphism";

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
      <div className="z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <CertificatePreview data={certificateData} />
      </div>
    );
  }

  return (
    <div className="absolute z-10 flex min-w-[300px] flex-col items-center justify-center p-4">
      <Glassmorphism className="w-full rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-4 rounded-2xl p-6 shadow-md lg:gap-6 lg:p-8"
        >
          <h2 className="text-center text-xl font-bold text-slate-200 lg:text-5xl">
            Get Your E-Certificate
          </h2>
          <div className="flex flex-col gap-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded border border-gray-300 bg-slate-200/60 px-3 py-2 lg:text-lg"
            />
            <input
              type="text"
              placeholder="Enter your contact number"
              required
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="rounded border border-gray-300 bg-slate-200/60 px-3 py-2 lg:text-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-400 inline-block cursor-pointer rounded-2xl px-4 py-2 text-white lg:text-xl"
          >
            <span className=" leading-[1]">Enter</span>
          </button>
        </form>
      </Glassmorphism>

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default ECertificateForm;
