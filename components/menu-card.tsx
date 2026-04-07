import Image from "next/image";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  popular: boolean;
}

export function MenuCard({
  name,
  description,
  price,
  image,
  popular,
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E0D4] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {popular && (
          <span className="absolute top-3 right-3 bg-[#C4613A] text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#2C1810]">
          {name}
        </h3>
        <p className="text-sm text-[#8B7D6B] mt-1 leading-relaxed">
          {description}
        </p>
        <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#C4613A] mt-3">
          {price}
        </p>
      </div>
    </div>
  );
}
