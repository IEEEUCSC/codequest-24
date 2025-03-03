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
    name: "Likitha Chathubhashini",
    role: "Event Co Chair",
    email: "likithachathu@gmail.com",
    phone: "076 698 8362",
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
    role: "Event Co - chair",
    email: "noji.yu123@gmail.com",
    phone: "070 351 7563",
    image: NojiImg,
    isFeature: false,
    position: {
      gridColumn: "2",
      gridRow: "1",
    },
  },
  {
    id: 3,
    name: "Chamudi Upeka",
    role: "Event Co - chair",
    email: "chamudiupeka21@gmail.com",
    phone: "076 710 5536",
    image: chamudiImg,
    isFeature: false,
    position: {
      gridColumn: "3",
      gridRow: "1",
    },
  },
  {
    id: 4,
    name: "Dineth Theekshana",
    role: "Program team Lead",
    email: "dineththeekshana@gmail.com",
    phone: "077 410 4170",
    image: personImg,
    isFeature: false,
    position: {
      gridColumn: "3",
      gridRow: "2",
    },
  },
];

export default contactData;
