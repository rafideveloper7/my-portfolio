import Image from "next/image";
import Link from "next/link";
import { assets, site } from "@/data/site";

export default function BrandLogo({ compact = false, onClick }) {
  return (
    <Link href="/" onClick={onClick} className="flex min-h-11 items-center gap-2 rounded-full pr-2 font-display text-lg font-black">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-lime text-sm text-ink">
        {assets.logo?.src ? (
          <Image src={assets.logo.src} alt={assets.logo.alt || `${site.brandName} logo`} fill sizes="36px" className="object-cover" />
        ) : (
          site.initials
        )}
      </span>
      {!compact && <span className="hidden text-paper min-[340px]:block">{site.brandName}</span>}
    </Link>
  );
}
