import React from "react";
import contactInfo from "../../data/contactInfo.json";

type ContactInfo = {
  name: string;
  email: string;
  phone: string;
};

const ContactInfoTile = ({ name, email, phone }: ContactInfo) => {
  return (
    <div className="contact-info-tile cq-bg-pr-500 transform rounded-lg border border-gray-700 p-6 text-white shadow-lg transition-transform hover:scale-105">
      <h2 className="mb-2 text-xl font-bold">{name}</h2>
      <p className="text-sm">
        Email: <span className="font-medium">{email}</span>
      </p>
      <p className="text-sm">
        Phone: <span className="font-medium">{phone}</span>
      </p>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="home-page">
      <h1 className="transform transition-transform hover:scale-105">
        Contact Information
      </h1>
      <div className="contact-info-tiles grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {contactInfo.map((info, index) => (
          <ContactInfoTile
            key={index}
            name={info.name}
            email={info.email}
            phone={info.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
