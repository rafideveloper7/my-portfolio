import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Testimonials",
  description: "Client feedback for Rafi Ullah's full-stack web development, API, dashboard, and responsive frontend work."
};

export default function TestimonialsPage() {
  return (
    <main className="pt-28">
      <section className="section-pad">
        <Container>
          <SectionHeader eyebrow="Testimonials" title="Feedback from product-focused builds." align="center" />
          <Reveal className="mt-10"><TestimonialsSlider /></Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05} className="rounded-[1.25rem] border border-line bg-coal p-6">
                <p className="leading-8 text-paper">&ldquo;{item.quote}&rdquo;</p>
                <h3 className="mt-5 font-display text-xl font-black">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
