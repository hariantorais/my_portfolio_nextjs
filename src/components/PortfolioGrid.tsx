"use client";

import { useState } from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import ProjectModal from "./ProjectModal";
import { ProjectData } from "@/src/data/projects";

interface PortfolioGridProps {
  projects: ProjectData[];
  closeLabel: string;
}

export default function PortfolioGrid({
  projects,
  closeLabel,
}: PortfolioGridProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModal(project.id)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-800/80 bg-[#0f1115] shadow-md transition-all duration-300 hover:border-cyan-500/30"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                className="object-cover transition duration-500 group-hover:scale-105"
                src={project.imageSrc}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={project.id === "spp" || project.id === "ppdb"}
              />
            </div>
            <div className="flex items-center justify-between bg-[#0f1115] p-4">
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white">
                  {project.title}
                </h3>
                <p className="mt-0.5 text-xs text-cyan-400">
                  {project.category}
                </p>
              </div>

              {/* Icon Panah Baru */}
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-gray-400 transition-all duration-300 group-hover:rotate-45 group-hover:bg-cyan-500 group-hover:text-[#0f1115]">
                <HiArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.map((project) => (
        <ProjectModal
          key={`modal-${project.id}`}
          isOpen={activeModal === project.id}
          onClose={() => setActiveModal(null)}
          title={project.title}
          imageSrc={project.imageSrc}
          description={project.description}
          techStack={project.techStack}
          closeLabel={closeLabel}
        />
      ))}
    </>
  );
}
