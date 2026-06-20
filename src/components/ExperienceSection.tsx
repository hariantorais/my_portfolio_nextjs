import SectionCard from "@/src/components/SectionCard";
import { DictionaryData } from "@/src/app/[lang]/dictionaries";

interface ExperienceSectionProps {
  dict: DictionaryData;
}

export default function ExperienceSection({ dict }: ExperienceSectionProps) {
  const experiences = [
    {
      role: "IT Support",
      company: "Pondok Pesantren Assunnah",
      period: "2013 – 2015",
      description: dict.exp_desc1,
      isCurrent: false,
    },
    {
      role: dict.exp_role2,
      company: "Pondok Pesantren Assunnah",
      period: "2016 – 2022",
      description: dict.exp_desc2,
      isCurrent: false,
    },
    {
      role: "Team Lead",
      company: "Pondok Pesantren Assunnah",
      period: "2022 – Present",
      description: dict.exp_desc3,
      isCurrent: true,
    },
  ];

  return (
    <SectionCard title={dict.exp_title}>
      <div className="relative ml-2 border-l border-gray-800 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative pl-6">
            {/* Timeline Dot */}
            <div
              className={`absolute -left-1.5 top-1.5 h-2 w-2 rounded-full ring-4 ring-[#0f1115] transition-all duration-300 ${
                exp.isCurrent
                  ? "bg-cyan-400 animate-pulse group-hover:scale-125"
                  : "bg-cyan-600 group-hover:bg-cyan-500"
              }`}
            />

            <h3 className="text-base font-semibold text-white transition duration-300 group-hover:text-cyan-400">
              {exp.role}
            </h3>

            <p
              className={`mb-2 text-xs font-medium ${
                exp.isCurrent ? "text-cyan-400/80" : "text-gray-500"
              }`}
            >
              {exp.company} <span className="mx-1.5 text-gray-700">•</span>{" "}
              {exp.period}
            </p>

            <p className="text-justify text-sm leading-relaxed text-gray-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
