// components/BlogImage.js
"use client";

import Image from "next/image";

export default function BlogImage({ image, className = "" }) {
  if (!image || !image.src) return null;

  const positionClasses = {
    center: "mx-auto",
    left: "mr-auto",
    right: "ml-auto",
    start: "mr-auto",
    end: "ml-auto"
  };

  const positionClass = positionClasses[image.position] || "mx-auto";

  return (
    <figure className={`my-8 max-w-2xl ${positionClass} ${className}`}>
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-line bg-coal">
        <Image
          src={image.src}
          alt={image.alt || "Blog post image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 text-sm text-center text-muted">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}