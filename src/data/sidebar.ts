import { IconType } from "react-icons";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaRegFileAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { DictionaryData } from "@/src/app/[lang]/dictionaries";

export interface SocialLink {
  href: string;
  icon: IconType;
}

export interface ActionButton {
  href: string;
  label: string;
  icon: IconType;
  type: "primary" | "secondary"; // Kontrak strict union type
}

export const socialLinksData: SocialLink[] = [
  { href: "https://x.com/@RaisHarianto", icon: FaTwitter },
  { href: "https://facebook.com/hariantorais", icon: FaFacebookF },
  {
    href: "https://linkedin.com/in/harianto-rais-36214997/",
    icon: FaLinkedinIn,
  },
  { href: "https://instagram.com/hariantorais", icon: FaInstagram },
];

export const getActionButtonsData = (dict: DictionaryData): ActionButton[] => [
  {
    href: "/documents/cv_hariantorais_fullstack_dev.pdf",
    label: dict.label_cv || "Curriculum Vitae",
    icon: FaRegFileAlt,
    type: "secondary", // PENGGANTIAN: Menghapus className kaku, menggantinya dengan penanda tipe varian
  },
  {
    href: "mailto:hariantorais.dev@gmail.com?subject=Project%20Discussion",
    label: dict.label_hire || "Hire Me",
    icon: FaRegEnvelope,
    type: "primary", // PENGGANTIAN: Menghapus className kaku, menggantinya dengan penanda tipe varian
  },
];
