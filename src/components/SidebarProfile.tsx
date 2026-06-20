import Image from "next/image";
import {
  HiOutlineBadgeCheck,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import { DictionaryData } from "@/src/app/[lang]/dictionaries";
import { getActionButtonsData, socialLinksData } from "@/src/data/sidebar";
import LanguageSwitcher from "./LanguageSwitcher";

interface SidebarProfileProps {
  lang: "en" | "id";
  dict: DictionaryData;
}

export default function SidebarProfile({ lang, dict }: SidebarProfileProps) {
  const actionButtons = getActionButtonsData(dict);

  return (
    <div className="py-8 lg:sticky lg:top-0 lg:col-span-4 lg:h-screen">
      <div className="custom-scrollbar group/card relative flex h-full flex-col overflow-y-auto rounded-2xl border border-gray-800/60 bg-gradient-to-b from-[#1a1f2c] to-[#11141d] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:border-cyan-500/30">
        {/* Language Switcher */}
        <div className="absolute right-4 top-4 z-10 opacity-80 transition hover:opacity-100">
          <LanguageSwitcher currentLang={lang} />
        </div>

        {/* Main Content */}
        <div className="flex w-full flex-1 flex-col items-center justify-center py-8">
          {/* 1. Avatar */}
          <div className="px-6 pb-5">
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full bg-gradient-to-tr from-cyan-500/20 via-zinc-700/40 to-cyan-400/40 p-[3px] shadow-inner transition-all duration-700 group-hover/card:from-cyan-500/50">
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#161920]">
                <Image
                  src="/images/harianto2.png"
                  alt="Harianto Rais"
                  fill
                  sizes="144px"
                  priority
                  className="object-cover transition duration-700 group-hover/card:scale-105"
                />
              </div>
            </div>
          </div>

          {/* 2. Name & Tagline */}
          <div className="flex flex-col items-center space-y-2 px-6 text-center">
            <h1 className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent">
              Harianto Rais
            </h1>
            <p className="inline-block rounded-full border border-cyan-900/40 bg-cyan-950/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
              Full Stack Developer
            </p>
          </div>

          {/* 3. Social Links */}
          <div className="mt-6 flex justify-center gap-4 px-6">
            {socialLinksData.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Social link ${href}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800/50 bg-zinc-900/60 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-[#161920] hover:text-cyan-400 hover:shadow-[0_5px_15px_rgba(6,182,212,0.15)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* 4. Action Buttons - Sticky Bottom */}
        <div className="mt-auto flex shrink-0 divide-x divide-gray-800/60 border-t border-gray-800 bg-zinc-950/20 text-sm">
          {actionButtons.map(({ href, label, icon: Icon, type }) => {
            const isPrimary = type === "primary";
            return (
              <a
                key={href}
                href={href}
                className={`flex w-1/2 items-center justify-center gap-2 py-4.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isPrimary
                    ? "bg-gradient-to-t from-cyan-950/20 to-transparent text-cyan-400 hover:from-cyan-500/10 hover:text-white"
                    : "bg-gradient-to-t from-zinc-900/10 to-transparent text-zinc-400 hover:from-zinc-800/30 hover:text-white"
                }`}
              >
                <Icon
                  size={13}
                  className={isPrimary ? "text-cyan-400" : "text-zinc-500"}
                />
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
