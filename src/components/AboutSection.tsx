import { DictionaryData } from "@/src/app/[lang]/dictionaries";
import SectionCard from "./SectionCard";

interface AboutSectionProps {
  dict: DictionaryData;
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <SectionCard title={dict.about.title}>
      {/* Paragraf Deskripsi */}
      <p className="text-sm text-zinc-300 leading-relaxed text-left tracking-wide font-normal mb-8">
        {dict.about.desc}
      </p>

      {/* Grid Informasi Personal Premium */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm border-t border-gray-800/40 pt-6">
        <div className="flex items-center gap-2 text-zinc-200">
          <span className="text-zinc-500 font-medium min-w-[90px]">
            {dict.label_name}
          </span>
          <span className="font-semibold">Harianto Rais</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-200">
          <span className="text-zinc-500 font-medium min-w-[90px]">
            {dict.label_exp}
          </span>
          <span className="font-semibold text-cyan-400">7+ Years</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-200">
          <span className="text-zinc-500 font-medium min-w-[90px]">
            {dict.label_address}
          </span>
          <span className="font-semibold text-zinc-300">Batam, Indonesia</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-200 overflow-hidden">
          <span className="text-zinc-500 font-medium min-w-[90px]">Email:</span>
          <span
            className="font-semibold text-zinc-300 truncate select-all"
            title="hariantorais.dev@gmail.com"
          >
            hariantorais.dev@gmail.com
          </span>
        </div>
      </div>
    </SectionCard>
  );
}
