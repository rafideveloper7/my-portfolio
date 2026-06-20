import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { process, services } from "@/data/services";

export const metadata = {
  title: "Services",
  description: "Full stack web development, frontend, backend, APIs, dashboards, business websites, and website optimization services."
};

export default function ServicesPage() {
  return (
    <main className="pt-28">
      <section className="section-pad">
        <Container>
          <SectionHeader eyebrow="Services" title="Production-ready development services." text="Each service is designed around clean implementation, responsive UX, secure backend structure, and deployment-ready delivery." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => <ServiceCard key={service.title} service={service} delay={index * 0.04} />)}
          </div>
        </Container>
      </section>
      <section className="section-pad bg-[#080a08]">
        <Container>
          <SectionHeader eyebrow="Process" title="A clear workflow from idea to support." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {process.map((step, index) => (
              <Reveal key={step} delay={index * 0.05} className="relative rounded-[1.25rem] border border-line bg-coal p-5">
                <span className="text-sm font-black text-lime">0{index + 1}</span>
                <h3 className="mt-4 font-display text-xl font-black">{step}</h3>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
