import SectionCard from "@/src/components/SectionCard";
import { DictionaryData } from "@/src/app/[lang]/dictionaries";
import { IconType } from "react-icons";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdOutlineStorefront } from "react-icons/md";
import { PiGraduationCapLight } from "react-icons/pi";
import { GrCloudComputer } from "react-icons/gr";

interface ServicesSectionProps {
  dict: DictionaryData;
}

interface ServiceItem {
  title: string;
  desc: string;
  icon: IconType;
}

export default function ServicesSection({ dict }: ServicesSectionProps) {
  const services: ServiceItem[] = [
    { title: dict.srv_h1, desc: dict.srv_d1, icon: HiOutlineComputerDesktop },
    { title: dict.srv_h2, desc: dict.srv_d2, icon: MdOutlineStorefront },
    { title: dict.srv_h3, desc: dict.srv_d3, icon: PiGraduationCapLight },
    { title: dict.srv_h4, desc: dict.srv_d4, icon: GrCloudComputer },
  ];

  return (
    <SectionCard title={dict.srv_title} className="mt-6">
      {/* Service Cards */}
      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
        {services.map(({ title, desc, icon: Icon }, index) => (
          <div
            key={index}
            className="group rounded-lg border border-gray-800/40 bg-[#0f1115] p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#12151b]"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-cyan-800/30 bg-cyan-950/40 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-[#0f1115]">
                <Icon size={14} />
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {title}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">{desc}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-800 pt-5 text-center">
        <div>
          <span className="text-2xl font-bold tracking-tight text-cyan-400">
            25+
          </span>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">
            {dict.mt_clients}
          </p>
        </div>
        <div>
          <span className="text-2xl font-bold tracking-tight text-cyan-400">
            70+
          </span>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">
            {dict.mt_projects}
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
