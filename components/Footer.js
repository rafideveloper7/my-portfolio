import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { navLinks, site } from "@/data/site";
import BrandLogo from "./BrandLogo";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#080a08]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr_.9fr]">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{site.shortBio}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-lime hover:text-lime" href={site.github} aria-label="GitHub"><Code2 size={18} /></a>
              <a className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-lime hover:text-lime" href={site.linkedin} aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a>
              <a className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-lime hover:text-lime" href={`mailto:${site.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-black">Pages</h3>
            <div className="mt-4 grid gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-lime">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-black">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-lime"><Phone size={16} /> {site.phone}</a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-lime"><Mail size={16} /> {site.email}</a>
              <a href={site.whatsapp} className="flex items-center gap-2 text-lime"><ArrowUpRight size={16} /> WhatsApp project brief</a>
              <p>{site.location}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rafi Ullah. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, Framer Motion, and FormSubmit.</p>
        </div>
      </Container>
    </footer>
  );
}
