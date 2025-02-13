import { ContactInfo } from "@/libs/data";
import Image from "next/image";

const ContactCard = ({ name, title, email, phone, imageSrc }: ContactInfo) => {
  return (
    <div className="contact-card-bg top-element transform rounded-lg border border-gray-700 p-6 text-white shadow-lg transition-transform">
      <div className="relative flex items-center justify-center">
        <div className="relative aspect-square h-[240px]">
          <Image
            src={imageSrc}
            alt={`${name}'s profile`}
            className="rounded-full"
            fill
          />
        </div>
      </div>
      <h2 className="mb-2 text-xl font-bold">{name}</h2>
      <p className="text-sm">
        <span className="font-medium">{title}</span>
      </p>
      <p className="text-sm">
        Email: <span className="font-medium">{email}</span>
      </p>
      <p className="text-sm">
        Phone: <span className="font-medium">{phone}</span>
      </p>
    </div>
  );
};

export default ContactCard;
