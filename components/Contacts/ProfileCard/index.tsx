"use client";
import Image from "next/image";

import { ContactDataProps } from "@/libs/contactData";
import Glassmorphism from "@/components/Glassmorphism";
import { motion } from "motion/react";

type ProfileCardProps = ContactDataProps & {
  index: number;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  index,
  ...props
}: ProfileCardProps) => {
  const { image, name, role, email, phone } = props;

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <Glassmorphism className="rounded">
        <div className="bg-primary-400/40 absolute top-0 left-0 h-full w-full mask-radial-[100%_100%] mask-radial-from-60% mask-radial-to-100% mask-radial-at-bottom-left" />
        <div className="relative w-full overflow-hidden rounded ease-in-out">
          <div className="xs:grid-cols-2 relative grid h-full w-full md:grid-cols-1">
            <div className="relative min-h-[320px]">
              <Image
                src={image}
                alt={`${name}`}
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-y-1 p-4">
              <h2 className="text-xl font-bold text-white">{name}</h2>
              <p className="text-white">{role}</p>
              <div className="text-sm text-white">
                <span className="mr-1 font-bold">Email:</span>
                <span>{email}</span>
              </div>
              <div className="text-sm text-white">
                <span className="mr-1 font-bold">Phone:</span>
                <span>{phone}</span>
              </div>
            </div>
          </div>
        </div>
      </Glassmorphism>
    </motion.div>
  );
};

export default ProfileCard;

const fadeUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};
