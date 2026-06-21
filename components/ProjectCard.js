"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project, onDetails, priority = false }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 22 }}
      className="w-[80vw] md:w-[30vw] h-[350px] group overflow-hidden rounded-[1.25rem] border-3 border-white bg-coal hover:border-green-300"
    >
      <div className="relative aspect-[1.24] overflow-hidden bg-panel">
        <Image
          src={project.image}
          alt={`${project.title} interface preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-contain transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-3 bottom-3 translate-y-3 rounded-2xl border border-white/10 bg-ink/88 p-4 opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <p className="text-sm leading-6 text-muted">{project.description}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[.16em] text-lime">
          {project.category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-black leading-tight">
          {project.title}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs font-bold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onDetails?.(project)}
          className="m-5 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-black text-lime"
        >
          Let&apos;s Discuss <ArrowUpRight size={12} />
        </button>
      </div>
    </motion.article>
  );
}
