import SectionCard from "@/src/components/SectionCard";
import { DictionaryData } from "@/src/app/[lang]/dictionaries";
import { getProjectsData } from "@/src/data/projects";
import PortfolioGrid from "./PortfolioGrid";
import { FaGithub } from "react-icons/fa";

interface PortfolioSectionProps {
  dict: DictionaryData;
}

export default function PortfolioSection({ dict }: PortfolioSectionProps) {
  const projects = getProjectsData(dict);

  return (
    <SectionCard title="Portfolio">
      {/* Portfolio Grid */}
      <PortfolioGrid projects={projects} closeLabel={dict.mdl_close} />
      {/* GitHub Button */}
      <div className="mt-6">
        <a
          href="https://github.com/hariantorais"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-gray-800 bg-[#0f1115] py-3.5 text-sm font-medium text-gray-300 transition duration-300 hover:border-cyan-500/40 hover:bg-[#12151b] hover:text-white"
        >
          <FaGithub className="text-base text-gray-400 transition duration-300 group-hover:text-cyan-400" />
          <span>{dict.btn_github}</span>
        </a>
      </div>
    </SectionCard>
  );
}
