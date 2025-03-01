import { StaticImageData } from "next/image";
import likithaImg from "@/assets/contacts/likitha.jpg";
import NojiImg from "@/assets/contacts/noji.jpg";
import chamudiImg from "@/assets/contacts/chamudi.jpg";
import personImg from "@/assets/contacts/person.jpg";

export interface ContactDataProps {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: StaticImageData;
  isFeature: boolean;
  position: {
    gridColumn: string;
    gridRow: string;
  };
}

const contactData: ContactDataProps[] = [
  {
    id: 1,
    name: "Lakshitha",
    role: "Member",
    email: "Lakshitha@gmail.com",
    phone: "070 777 7777",
    image: likithaImg,
    isFeature: false,
    position: {
      gridColumn: "1",
      gridRow: "1",
    },
  },
  {
    id: 2,
    name: "Noji Yudara",
    role: "Event Co Chair",
    email: "Noji@gmail.com",
    phone: "070 111 7777",
    image: NojiImg,
    isFeature: false,
    position: {
      gridColumn: "2",
      gridRow: "1",
    },
  },
  {
    id: 3,
    name: "Chamudi",
    role: "Member",
    email: "Chamudi@gmail.com",
    phone: "070 222 7777",
    image: chamudiImg,
    isFeature: false,
    position: {
      gridColumn: "3",
      gridRow: "1",
    },
  },
  {
    id: 4,
    name: "Person",
    role: "Member",
    email: "Person@gmail.com",
    phone: "070 333 7777",
    image: personImg,
    isFeature: false,
    position: {
      gridColumn: "3",
      gridRow: "2",
    },
  },
];

export default contactData;
