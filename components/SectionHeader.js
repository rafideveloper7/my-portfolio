import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 inline-flex rounded-full border border-line bg-coal px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-lime">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-black leading-[.95] text-paper sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{text}</p>}
    </Reveal>
  );
}
