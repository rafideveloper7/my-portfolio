const items = ["MERN STACK", "REACT", "NODE.JS", "NEXT.JS", "MONGODB", "REST APIs", "FULL STACK DEVELOPMENT", "TAILWIND CSS"];

export default function Marquee() {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <section className="marquee relative z-10 overflow-hidden border-y border-line bg-lime py-4 text-ink">
      <div className="marquee-track flex w-max animate-marquee items-center gap-5 font-display text-xl font-black uppercase sm:text-3xl">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-5 whitespace-nowrap">
            {item} <span>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
