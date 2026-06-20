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

export default function Home() {
  const mainAboutImg =
    "https://res.cloudinary.com/dtsn7jlsf/image/upload/v1781846663/WhatsApp_Image_2026-06-19_at_10.19.44_AM_1_xjiooq.jpg";
  return (
    <main>
      <Hero />
      <Marquee />


     {/* main about sec */}
      <section className="section-pad">
        <Container className="relative w-[100vw] h-auto">
          <div className="w-fit h-[fit-content] border rounded-[20px] border-gray-700  flex flex-wrap md:flex-nowrap items-center p-6 gap-6 hover:border-green-300 hover:border-1 mx-auto ">
            {/* Left Column: Header Information */}
            <div className="flex flex-col gap-6 items-start h-fit">
              <SectionHeader
              className="hover:text-green-600"
                eyebrow={homeContent.aboutTeaser.eyebrow}
                title={homeContent.aboutTeaser.title}
                // text={site.about.split("\n\n")[0]}
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

            {/* Right Column: Visual Image adjusting to natural content height */}
            <Reveal className="relative w-fit h-fit">
              {/* Blur background effect */}
              <div className="absolute -inset-4 rounded-[2rem] bg-lime/10 blur-2xl pointer-events-none" />
              
              {/* Image Container adapts to the image height */}
              <div className="w-[fit-content] h-fit relative overflow-hidden rounded-[1.75rem] border border-line bg-coal shadow-2xl">
                <img
                  src={mainAboutImg}
                  alt="myImage"
                  className="w-[300px] block" 
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

    {/* services sec in home */}
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
            {/* projects sec in home */}
      <section className="section-pad">
        <Container>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow={homeContent.featuredProjects.eyebrow}
              title={homeContent.featuredProjects.title}
            />
            <Reveal>
              <Button
              className="border-3"
                href={homeContent.featuredProjects.button.href}
                variant="secondary"
              >
                {homeContent.featuredProjects.button.label}
              </Button>
            </Reveal>
          </div>
          <PortfolioGrid limit={3} />
        </Container>
      </section>

      <section className="section-pad bg-[#080a08]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <SectionHeader
              eyebrow={homeContent.whyChoose.eyebrow}
              title={homeContent.whyChoose.title}
              text={homeContent.whyChoose.text}
            />
            <Reveal>
              <Stats />
            </Reveal>
          </div>
        </Container>
      </section>

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

      <GallerySection content={homeContent.gallery} limit={3} showButton />

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="rounded-[1.5rem] border border-lime/40 bg-lime p-6 text-ink sm:p-10 lg:flex lg:items-center lg:justify-between">
              <h2 className="font-display text-4xl font-black leading-none sm:text-5xl">
                {homeContent.cta.title}
              </h2>
              <Button
                href={homeContent.cta.button.href}
                variant="light"
                className="mt-6 lg:mt-0 text-green-700 border-3 border-green-400"
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
