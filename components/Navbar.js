"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import BrandLogo from "./BrandLogo";
import Button from "./Button";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setScrolled(latest > 20);
    setHidden(latest > previous && latest > 120);
  });

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden ? -112 : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50 px-2 pt-3 sm:px-4"
      >
        <nav
          className={`mx-auto flex min-h-[64px] w-full max-w-[1160px] items-center justify-between rounded-full border px-3 transition duration-300 sm:px-5 ${
            scrolled ? "border-line bg-ink/88 shadow-2xl backdrop-blur-xl" : "border-white/10 bg-coal/70 backdrop-blur-lg"
          }`}
          aria-label="Primary navigation"
        >
          <BrandLogo />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-4 py-3 text-sm font-bold transition ${
                  pathname === link.href ? "text-lime" : "text-paper/78 hover:text-paper"
                }`}
              >
                {link.label}
                <span className="absolute bottom-2 left-4 h-px w-0 bg-lime transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* <button
              className="hidden h-11 w-11 place-items-center rounded-full border border-line bg-ink text-paper transition hover:border-lime hover:text-lime sm:grid"
              aria-label="Search"
            >
              <Search size={18} />
            </button> */}
            <Button href="/contact" className="hidden sm:inline-flex">Hire Me</Button>
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-ink text-paper lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={21} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink px-4 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <BrandLogo onClick={() => setOpen(false)} />
              <button className="grid h-11 w-11 place-items-center rounded-full border border-line" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <motion.div
              className="mt-14 grid gap-3"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-line bg-coal px-5 py-5 font-display text-3xl font-black"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button href="/contact" onClick={() => setOpen(false)} className="mt-4 w-full">Start a Project</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
