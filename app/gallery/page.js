import GallerySection from "@/components/GallerySection";
import { galleryContent } from "@/data/gallery";

export const metadata = {
  title: "Gallery",
  description: "Media gallery for Rafi Ullah with project screenshots, images, videos, demos, and workflow visuals."
};

export default function GalleryPage() {
  return (
    <main className="pt-28">
      <GallerySection content={galleryContent.hero} />
    </main>
  );
}
