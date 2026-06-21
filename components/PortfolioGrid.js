"use client";

import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { filters, projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function PortfolioGrid({ limit, layout = "grid" }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  
  const visible = useMemo(() => {
    const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <>
      {!limit && (
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-black transition ${
                active === filter ? "border-lime bg-lime text-ink" : "border-line bg-coal text-paper hover:border-lime"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {/* Conditional layout based on prop */}
      {layout === "slider" ? (
        // Slider layout - horizontal flex row with proper card widths
        <div className="flex flex-nowrap gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <div 
                key={project.id} // Use id instead of title
                className="flex-shrink-0"
                style={{
                  width: 'calc(100vw - 3rem)',
                }}
              >
                <ProjectCard 
                  project={project} 
                  onDetails={setSelected} 
                  priority={index === 0}
                  className="w-full h-[380px]" // Fixed height for consistency
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        // Grid layout - default
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <ProjectCard 
                key={project.id} // Use id instead of title
                project={project} 
                onDetails={setSelected} 
                priority={index === 0} 
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur">
            <div className="w-full max-w-xl rounded-[1.25rem] border border-line bg-coal p-5 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-lime">{selected.category}</p>
                  <h3 className="mt-2 font-display text-3xl font-black">{selected.title}</h3>
                </div>
                <button 
                  onClick={() => setSelected(null)} 
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line" 
                  aria-label="Close project details"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="mt-4 leading-7 text-muted">{selected.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs font-bold text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}