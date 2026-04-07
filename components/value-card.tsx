import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Equal-height card — must be rendered inside a flex container
export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col flex-1 bg-[#F7F3ED] rounded-2xl p-8">
      {/* Icon circle */}
      <div className="size-14 rounded-full bg-[#2D5F3E]/10 flex items-center justify-center shrink-0">
        <Icon className="size-6 text-[#2D5F3E]" />
      </div>

      {/* Title */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#2C1810] mt-5">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#8B7D6B] leading-relaxed mt-3">{description}</p>
    </div>
  );
}
