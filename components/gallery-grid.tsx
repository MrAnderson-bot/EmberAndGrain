import Image from "next/image";
import { galleryImages } from "@/lib/data";

// Alternate between portrait and landscape to create masonry variety
const imageSizes = [
  { width: 600, height: 400 },
  { width: 600, height: 800 },
  { width: 600, height: 400 },
  { width: 600, height: 800 },
  { width: 600, height: 400 },
  { width: 600, height: 800 },
  { width: 600, height: 400 },
  { width: 600, height: 400 },
];

export function GalleryGrid() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
      {galleryImages.map((image, index) => {
        const dims = imageSizes[index % imageSizes.length];
        return (
          <div
            key={image.src}
            className="break-inside-avoid mb-4 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={dims.width}
              height={dims.height}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        );
      })}
    </div>
  );
}
