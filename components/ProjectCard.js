"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project, onDetails, priority = false, className = "" }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 22 }}
      className={`w-[300px] h-[300px] p-16 group overflow-hidden rounded-[1.25rem] border-3 border-white bg-coal hover:border-green-300 ${className}`}
    >
      <div className=" relative aspect-[1.24] overflow-hidden bg-panel">
        <Image
          src={project.image}
          alt={`${project.title} interface preview`}
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-contain transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-3 bottom-3 translate-y-3 rounded-2xl border border-white/10 bg-ink/88 p-4 opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <p className="text-sm leading-6 text-muted">{project.description}</p>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-black uppercase tracking-[.16em] text-lime">
          {project.category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-black leading-tight line-clamp-2">
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

        {/* Action Buttons */}
        <div className="mt-4 flex items-center gap-3">
          {/* Live Demo Button */}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-black text-ink transition hover:bg-lime/80 hover:scale-105"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          
          {/* GitHub Button */}
          {/* {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-black text-white transition hover:bg-white/10 hover:scale-105"
            >
              <Github size={16} /> Code
            </a>
          )} */}
          
          {/* Details Button */}
          <button
            type="button"
            onClick={() => onDetails?.(project)}
            className="inline-flex items-center gap-2 rounded-full text-sm font-black text-lime transition hover:text-lime/80 ml-auto"
          >
            Details <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}