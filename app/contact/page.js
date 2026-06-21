// app/contact/page.js
import { BriefcaseBusiness, Code2, Mail, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact Rafi Ullah for full-stack MERN development, business websites, dashboards, APIs, and custom web applications."
};

export default function ContactPage() {
  return (
    <main className="pt-28">
      <section className="section-pad">
        <Container>
          <SectionHeader 
            eyebrow="Contact" 
            title="Tell us what you want to build." 
            text="Use the form for project details, or contact directly through WhatsApp and email for faster conversation." 
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
            <Reveal className="rounded-[1.25rem] border border-line bg-coal p-6">
              <ContactForm />
            </Reveal>
            <Reveal delay={0.1} className="space-y-5">
              <div className="rounded-[1.25rem] border border-line bg-coal p-6">
                <h2 className="font-display text-3xl font-black">Direct contact</h2>
                <div className="mt-5 grid gap-3 text-muted">
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex min-h-11 items-center gap-3 hover:text-lime">
                    <Phone size={18} /> {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-3 hover:text-lime">
                    <Mail size={18} /> {site.email}
                  </a>
                  <a href={site.whatsapp} className="flex min-h-11 items-center gap-3 text-lime">
                    <MessageCircle size={18} /> WhatsApp click-to-chat
                  </a>
                  <p className="flex items-center gap-3">
                    <span className="text-muted">📍</span> {site.location}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={site.whatsapp}>WhatsApp</Button>
                  <Button href={`mailto:${site.email}`} variant="secondary">Email</Button>
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={site.github} className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-lime hover:text-lime transition-colors" aria-label="GitHub">
                    <Code2 size={18} />
                  </a>
                  <a href={site.linkedin} className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-lime hover:text-lime transition-colors" aria-label="LinkedIn">
                    <BriefcaseBusiness size={18} />
                  </a>
                </div>
              </div>
              <div className="rounded-[1.25rem] border border-line bg-coal p-6">
                <h2 className="font-display text-3xl font-black">Location</h2>
                <p className="mt-3 leading-8 text-muted">Kohat / KPK, Pakistan. Available for remote software and web development projects.</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="section-pad bg-[#080a08]">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Common project questions." align="center" />
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <Faq />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}