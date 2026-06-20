"use client";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  description: string;
  techStack: string[];
  closeLabel: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  imageSrc,
  description,
  techStack,
  closeLabel,
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        // Menutup modal jika area backdrop hitam di luar card diklik
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-[#161920] border border-gray-800 rounded-xl max-w-xl w-full overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h5 className="font-bold text-white tracking-wide">{title}</h5>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <img
            className="w-full rounded-lg object-cover h-48 border border-gray-800"
            src={imageSrc}
            alt={title}
          />
          <p className="text-gray-300 text-sm leading-relaxed text-justify">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="pt-2 border-t border-gray-800/60">
            <p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-300">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-[#0f1115] border border-gray-800 rounded flex items-center gap-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-lg transition"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
