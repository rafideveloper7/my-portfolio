import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ServiceCard({ service, delay = 0 }) {
  const Icon = service.icon;
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-coal p-5 transition duration-300 hover:-translate-y-1 hover:border-lime/70 hover:shadow-glow sm:p-6">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-lime text-ink transition group-hover:scale-110">
          <Icon size={22} />
        </div>
        <h3 className="mt-6 font-display text-2xl font-black leading-tight text-paper">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{service.summary}</p>
        {service.includes && (
          <div className="mt-5 flex flex-wrap gap-2">
            {service.includes.slice(0, 3).map((item) => (
              <span key={item} className="rounded-full border border-line px-3 py-1 text-xs font-bold text-muted">
                {item}
              </span>
            ))}
          </div>
        )}
        <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-black text-lime">
          Let&apos;s discuss <ArrowUpRight size={16} />
        </Link>
      </article>
    </Reveal>
  );
}
