import { getDictionary } from "./dictionaries";
import SidebarProfile from "@/src/components/SidebarProfile";
import AboutSection from "@/src/components/AboutSection";
import SkillsSection from "@/src/components/SkillsSection";
import ExperienceSection from "@/src/components/ExperienceSection";
import ServicesSection from "@/src/components/ServicesSection";
import PortfolioSection from "@/src/components/PortfolioSection";

interface PageProps {
  params: Promise<{ lang: "en" | "id" }>;
}

// metadata engine tetap ditaruh di sini...

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Kiri */}
        <SidebarProfile lang={lang} dict={dict} />

        {/* Konten Kanan */}
        <div className="lg:col-span-8 py-8 space-y-10">
          <AboutSection dict={dict} />
          <SkillsSection />
          <ExperienceSection dict={dict} />
          <ServicesSection dict={dict} />
          <PortfolioSection dict={dict} />

          {/* Footer */}
          <footer className="bg-[#161920] p-6 rounded-xl border border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2026 Harianto Rais. All Rights Reserved.</p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="hover:text-cyan-400 transition">
                {dict.btn_top}
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
