import Image from "next/image";
import { galleryImages } from "@/lib/data";

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Row 1: large feature + 2 stacked */}
      <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={galleryImages[1].src}
          alt={galleryImages[1].alt}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={galleryImages[2].src}
          alt={galleryImages[2].alt}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={galleryImages[3].src}
          alt={galleryImages[3].alt}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={galleryImages[4].src}
          alt={galleryImages[4].alt}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Row 2: 2 regular + large feature */}
      <div className="rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={galleryImages[5].src}
          alt={galleryImages[5].alt}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={galleryImages[6].src}
          alt={galleryImages[6].alt}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="col-span-2 rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={galleryImages[7].src}
          alt={galleryImages[7].alt}
          width={800}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
