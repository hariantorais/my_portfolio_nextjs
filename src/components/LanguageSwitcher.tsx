"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: "en" | "id";
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: "en" | "id") => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex bg-[#0f1115] border border-gray-800 rounded-full p-0.5 text-xs font-semibold tracking-wider w-max ml-auto mb-4">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-2.5 py-1 rounded-full transition-all ${
          currentLang === "en"
            ? "text-cyan-400 bg-gray-800/40"
            : "text-gray-500 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("id")}
        className={`px-2.5 py-1 rounded-full transition-all ${
          currentLang === "id"
            ? "text-cyan-400 bg-gray-800/40"
            : "text-gray-500 hover:text-white"
        }`}
      >
        ID
      </button>
    </div>
  );
}
