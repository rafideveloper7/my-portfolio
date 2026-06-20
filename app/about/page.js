import { BriefcaseBusiness, Code2 } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import MediaAsset from "@/components/MediaAsset";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { aboutContent } from "@/data/pageContent";
import { assets, site, skills } from "@/data/site";

export const metadata = {
  title: "About",
  description:
    "About Rafi Ullah, Full Stack MERN Developer from Kohat / Orakzai, Khyber Pakhtunkhwa, Pakistan.",
};

export default function AboutPage() {
  const aboutImg =
    "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781846663/WhatsApp_Image_2026-06-19_at_10.19.44_AM_h5disn.jpg";
  return (
    <main className="pt-28">
      <section className="section-pad">
        <Container>
          <SectionHeader
            eyebrow={aboutContent.intro.eyebrow}
            title={aboutContent.intro.title}
          />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_.85fr]">
            <Reveal className="space-y-6 text-lg leading-9 text-muted">
              {site.about.split("\n\n").map((para) => (
                <p key={para}>{para}</p>
              ))}
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 md:-mt-58">
              <div className="overflow-hidden rounded-[1.25rem] border border-line bg-coal">
                <div className="relative aspect-[1.35] bg-panel">
                  <img src="https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781846663/WhatsApp_Image_2026-06-19_at_10.19.44_AM_h5disn.jpg" />
                </div>
                {/* {aboutContent.media.caption && (
                  <p className="p-5 text-sm leading-7 text-muted">
                    {aboutContent.media.caption}
                  </p>
                )} */}
              </div>
              <div className="rounded-[1.25rem] border border-line bg-coal p-6">
                <p className="text-xs font-black uppercase tracking-[.16em] text-lime">
                  {aboutContent.objective.eyebrow}
                </p>
                <p className="mt-4 text-lg leading-8 text-paper">
                  {site.objective}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-[#080a08]">
        <Container>
          <SectionHeader eyebrow={aboutContent.skills.eyebrow} title={aboutContent.skills.title} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {Object.entries(skills).map(([group, items], index) => (
              <Reveal key={group} delay={index * 0.04} className="rounded-[1.25rem] border border-line bg-coal p-6">
                <h3 className="font-display text-2xl font-black">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border-2 border-line px-4 py-2 text-sm font-bold text-muted hover:border-green-300">{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeader eyebrow={aboutContent.developer.eyebrow} title={aboutContent.developer.title} align="center" />
          <Reveal className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-line bg-coal p-6 text-center sm:p-10">
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-line bg-lime">
              <img
                src="https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781492254/rafios-projects/rer6pbhz2mxz9wfwi94n.png"
                alt={assets.profile.alt}
                width={assets.profile.width}
                height={assets.profile.height}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="mt-6 font-display text-4xl font-black">{site.name}</h2>
            <p className="mt-2 font-bold text-lime">{site.role}</p>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">{site.shortBio}</p>
            <div className="mt-6 flex justify-center gap-3">
              <a href={site.github} className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-lime hover:text-lime" aria-label="GitHub"><Code2 size={18} /></a>
              <a href={site.linkedin} className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-lime hover:text-lime" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.developer.roles.map((role, index) => (
              <Reveal key={role} delay={index * 0.05} className="rounded-2xl border border-line bg-coal p-5 text-center font-display text-xl font-black">
                {role}
              </Reveal>
            ))}
          </div>
        </Container>
      </section> 
    </main>
  );
}
