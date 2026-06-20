import SectionCard from "@/src/components/SectionCard";
import { stacksData } from "@/src/data/skills";

export default function SkillsSection() {
  return (
    <SectionCard title="Tech Stack & Tools">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {stacksData.map(({ name, url, icon: Icon, color }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            style={{ "--stack-color": color } as React.CSSProperties}
            className="group/item flex flex-col items-center justify-center gap-2.5 rounded-xl border border-gray-800/60 bg-zinc-900/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-[#161920] hover:shadow-[0_8px_20px_rgba(6,182,212,0.1)]"
          >
            <div className="transition-all duration-300 group-hover/item:scale-110 [&>svg]:text-gray-500 group-hover/item:[&>svg]:text-[var(--stack-color)]">
              <Icon size={32} />
            </div>
            <span className="text-[11px] font-medium leading-tight text-gray-400 transition-colors group-hover/item:text-white">
              {name}
            </span>
          </a>
        ))}
      </div>
    </SectionCard>
  );
}
