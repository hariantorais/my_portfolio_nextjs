import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({
  title,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`bg-linear-to-b from-[#161920] to-[#0f1115] p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group/section transition-all duration-500 hover:border-cyan-500/30 ${className}`}
    >
      {/* Efek Lampu Ambient Halus di Sudut Kartu */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/section:bg-cyan-500/10" />
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/0 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/section:bg-cyan-500/5" />

      {/* KEMBALI KE STANDAR ASLI ANDA: text-xl font-bold */}
      <div className="mb-6 border-b border-gray-800 pb-3">
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>

      {/* Tempat Konten Utama Disuntikkan */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
