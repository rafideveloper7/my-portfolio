import { ArrowUpRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import Button from "./Button";
import Container from "./Container";
import MediaAsset from "./MediaAsset";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function GallerySection({ content, limit, showButton = false }) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <section className="section-pad bg-[#080a08]">
      <Container>
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow={content.eyebrow} title={content.title} text={content.text} />
          {showButton && content.button && (
            <Reveal>
              <Button href={content.button.href} variant="secondary">
                {content.button.label} <ArrowUpRight size={17} />
              </Button>
            </Reveal>
          )}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="overflow-hidden rounded-[1.25rem] border border-line bg-coal">
                <div className="relative aspect-[1.25] bg-panel">
                  {item.type === "video" && !item.src ? (
                    <MediaAsset media={{ type: "image", src: item.poster, alt: item.alt }} />
                  ) : (
                    <MediaAsset media={item} />
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[.16em] text-lime">{item.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-black leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
