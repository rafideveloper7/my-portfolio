"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Can you build both frontend and backend?",
    a: "Yes. The service covers responsive UI, secure Node.js APIs, MongoDB data models, authentication, and deployment."
  },
  {
    q: "Do you work on existing websites?",
    a: "Yes. Existing websites can be improved for speed, responsiveness, accessibility, SEO, and conversion-focused structure."
  },
  {
    q: "How should I start a project?",
    a: "Send the project goal, required pages or features, timeline, and any references through the contact form or WhatsApp."
  }
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-3">
      {faqs.map((item, index) => (
        <div key={item.q} className="rounded-2xl border border-line bg-coal">
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-black"
            aria-expanded={open === index}
          >
            {item.q}
            <ChevronDown className={`shrink-0 transition ${open === index ? "rotate-180 text-lime" : ""}`} size={20} />
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 leading-7 text-muted">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
