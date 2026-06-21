'use client';

import { ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { homeContent } from "@/data/pageContent";
import { services } from "@/data/services";
import { site } from "@/data/site";
import MediaAsset from "@/components/MediaAsset";
import FeaturedProjectsSlider from "@/components/FeatureProjectsSlider";

export default function Home() {
  const mainAboutImg =
    "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781846663/WhatsApp_Image_2026-06-19_at_10.19.44_AM_1_xjiooq.jpg";

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Marquee />

      {/* Main About Section */}
      <section className="section-pad">
        <Container>
          {/* Main Content Box: Grid on large screens, stacked on small mobile */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center p-6 md:p-10 gap-8 md:gap-12 border rounded-[24px] border-gray-800 hover:border-green-300 transition-colors duration-300 mx-auto bg-coal/40 back-blur-sm">
            {/* Left Column: Header Information (Spans 7 out of 12 columns on large screens) */}
            <div className="flex flex-col gap-6 items-start lg:col-span-7 w-full">
              <SectionHeader
                className="hover:text-green-600 transition-colors duration-200"
                eyebrow={homeContent.aboutTeaser.eyebrow}
                title={homeContent.aboutTeaser.title}
                text={site.about.split("\n\n")[2]}
              />
              <Button
                href={homeContent.aboutTeaser.button.href}
                variant="secondary"
              >
                {homeContent.aboutTeaser.button.label}{" "}
                <ArrowUpRight size={17} className="ml-1 inline" />
              </Button>
            </div>

            {/* Right Column: Media Wrapper (Spans 5 out of 12 columns on large screens) */}
            <Reveal className="relative w-full lg:col-span-5 flex justify-center items-center">
              {/* Decorative background aura radial blur */}
              <div className="absolute -inset-4 rounded-[2rem] bg-lime/10 blur-2xl pointer-events-none" />

              {/* Media Aspect Ratio Box: Built for Next.js Image fill layout without breaking */}
              <div className="relative w-full aspect-[4/3] min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-0 overflow-hidden rounded-[1.75rem] border border-line bg-coal shadow-2xl">
                <MediaAsset
                  media={{
                    type: "image",
                    src: mainAboutImg,
                    alt: "Development team collaborating on code solution architecture",
                  }}
                  priority={true}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section-pad bg-[#080a08]">
        <Container>
          <SectionHeader
            eyebrow={homeContent.services.eyebrow}
            title={homeContent.services.title}
            text={homeContent.services.text}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={index * 0.05}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="section-pad bg-[#080a08]/30 overflow-hidden">
  <Container>
    {/* Header block */}
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-md">
        <SectionHeader
          eyebrow={homeContent.featuredProjects.eyebrow}
          title={homeContent.featuredProjects.title}
        />
      </div>
      <Reveal className="shrink-0">
        <Button
          className="py-2 px-4 text-sm"
          href={homeContent.featuredProjects.button.href}
          variant="secondary"
        >
          {homeContent.featuredProjects.button.label}
        </Button>
      </Reveal>
    </div>
    
    {/* SLIDER Featutred projects on home page*/}
    <FeaturedProjectsSlider />
    
  </Container>
</section>
      {/* Why Choose Us Section */}
      <section className="section-pad bg-[#080a08]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <SectionHeader
              eyebrow={homeContent.whyChoose.eyebrow}
              title={homeContent.whyChoose.title}
              text={homeContent.whyChoose.text}
            />
            <Reveal className=" w-full text-center">
              <Stats  />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section-pad">
        <Container>
          <SectionHeader
            eyebrow={homeContent.testimonials.eyebrow}
            title={homeContent.testimonials.title}
            align="center"
          />
          <Reveal className="mt-10">
            <TestimonialsSlider />
          </Reveal>
        </Container>
      </section>

      {/* Call To Action Section */}
      <section className="py-20">
        <Container>
          <Reveal>
            <div className="rounded-[1.5rem] border border-lime/40 bg-lime p-6 text-ink sm:p-10 lg:flex lg:items-center lg:justify-between">
              <h2 className="font-display text-4xl font-black leading-none sm:text-5xl">
                {homeContent.cta.title}
              </h2>
              <Button
                href={homeContent.cta.button.href}
                className="bg-white text-gray-600"
              >
                {homeContent.cta.button.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
