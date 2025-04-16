import { StaticImageData } from "next/image";
import likithaImg from "@/assets/contacts/likitha_new.jpg";
import NojiImg from "@/assets/contacts/noji_new.jpg";
import chamudiImg from "@/assets/contacts/chamudi.jpg";
import dinethImg from "@/assets/contacts/Dineth_new.jpg";

export interface ContactDataProps {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: StaticImageData;
}

const contactData: ContactDataProps[] = [
  {
    id: 1,
    name: "Likitha Chathubhashini",
    role: "Event Co Chair",
    email: "likithachathu@gmail.com",
    phone: "076 698 8362",
    image: likithaImg,
  },
  {
    id: 2,
    name: "Noji Yudara",
    role: "Event Co - chair",
    email: "noji.yu123@gmail.com",
    phone: "070 351 7563",
    image: NojiImg,
  },
  {
    id: 3,
    name: "Chamudi Upeka",
    role: "Event Co - chair",
    email: "chamudiupeka21@gmail.com",
    phone: "076 710 5536",
    image: chamudiImg,
  },
  {
    id: 4,
    name: "Dineth Theekshana",
    role: "Program team Lead",
    email: "dineththeekshana@gmail.com",
    phone: "077 410 4170",
    image: dinethImg,
  },
];

export default contactData;
