import Image from "next/image";

export default function MediaAsset({ media, priority = false, className = "" }) {
  if (!media) return null;

  const commonClass = `h-full w-full object-cover ${className}`;

  if (media.type === "video") {
    return (
      <video
        className={commonClass}
        src={media.src || undefined}
        poster={media.poster}
        controls={media.controls !== false}
        muted={media.muted ?? true}
        loop={media.loop ?? true}
        autoPlay={media.autoPlay ?? false}
        playsInline
        aria-label={media.alt || media.title}
      />
    );
  }

  if (media.type === "embed") {
    return (
      <iframe
        className={commonClass}
        src={media.src}
        title={media.title || media.alt || "Embedded media"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt || media.title || ""}
      fill
      sizes={media.sizes || "(max-width: 768px) 100vw, 50vw"}
      priority={priority}
      className={commonClass}
    />
  );
}
