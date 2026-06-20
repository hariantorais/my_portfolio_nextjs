import { DictionaryData } from "@/src/app/[lang]/dictionaries";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  techStack: string[];
}

export const getProjectsData = (dict: DictionaryData): ProjectData[] => [
  {
    id: "spp",
    title: "SPP Management",
    category: dict.cat_finance,
    imageSrc: "/images/spp.png",
    description: dict.mdl_spp_desc,
    techStack: ["Laravel", "React.js", "MySQL"],
  },
  {
    id: "ppdb",
    title: "New Student Admission",
    category: dict.cat_academic,
    imageSrc: "/images/ppdb.png",
    description: dict.mdl_ppdb_desc,
    techStack: ["Laravel", "React.js", "MySQL"],
  },
  {
    id: "rapor",
    title: "Student Info System",
    category: dict.cat_mgmt,
    imageSrc: "/images/rapor.png",
    description: dict.mdl_rapor_desc,
    techStack: ["Laravel", "React.js"],
  },
  {
    id: "inventaris",
    title: "Inventory Management",
    category: dict.cat_retail,
    imageSrc: "/images/inventaris.png",
    description: dict.mdl_inv_desc,
    techStack: ["Laravel", "JavaScript"],
  },
  {
    id: "pos",
    title: "Point of Sale (POS)",
    category: dict.cat_ecommerce,
    imageSrc: "/images/pos.png",
    description: dict.mdl_pos_desc,
    techStack: ["Laravel", "React.js"],
  },
  {
    id: "travel",
    title: "Travel Management",
    category: dict.cat_logistics,
    imageSrc: "/images/travel.png",
    description: dict.mdl_trv_desc,
    techStack: ["Laravel", "JavaScript"],
  },
];
