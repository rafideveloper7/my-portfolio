"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { assets, site } from "@/data/site";
import Button from "./Button";
import Container from "./Container";
import MediaAsset from "./MediaAsset";

export default function Hero() {
  const hero = assets.hero;

  return (
    <section className="relative z-10 overflow-hidden pb-12 pt-28 sm:pt-32 lg:min-h-screen lg:pb-0">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-5 inline-flex rounded-full border border-line bg-coal px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-lime"
            >
              {hero.eyebrow}
            </motion.p>
            <h1 className="headline font-display font-black uppercase text-paper">
              {hero.headlineLines.map((line, index) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 56 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.52 }}
              className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.64 }}
              className="mt-8 flex flex-col gap-3 min-[430px]:flex-row"
            >
              <Button href="/portfolio">View Our Work <ArrowUpRight size={18} /></Button>
              <Button href="/contact" variant="secondary">Book a free Meeting</Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-lime/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-coal shadow-2xl">
              <div className="relative aspect-[1.48]">
                <MediaAsset media={hero.media} priority/>
              </div>
              
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.8 }}
          className="mt-10 grid gap-3 border-y border-line py-5 text-sm text-muted sm:grid-cols-3"
        >
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex min-h-11 items-center gap-3 hover:text-lime">
            <Phone size={17} /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-3 hover:text-lime">
            <Mail size={17} /> {site.email}
          </a>
          <p className="flex min-h-11 items-center gap-3">{site.location}</p>
        </motion.div>
      </Container>
    </section>
  );
}
