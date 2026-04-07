import Image from "next/image";
import { Leaf, Flame, Cookie, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { MenuCard } from "@/components/menu-card";
import { ValueCard } from "@/components/value-card";
import { GalleryGrid } from "@/components/gallery-grid";
import { business, aboutText, aboutStats, menuItems, values } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Background image */}
        <Image
          src="/images/pexels/cafe-interior.jpg"
          alt="Ember & Grain cafe interior — warm timber and exposed brick"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Forest-green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D5F3E]/75 via-[#2D5F3E]/50 to-[#1E3F2A]/80" />

        {/* Content */}
        <div className="relative flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white/70 mb-6">
                Specialty Coffee &amp; House-Baked Goods
              </p>

              {/* Headline */}
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
                {business.tagline}
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
                {business.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="#menu" className="btn-primary">
                  View Menu
                </a>
                <a href="#visit" className="btn-outline">
                  Find Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────── */}
      <section id="about" className="bg-[#F7F3ED] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            {/* Left — text */}
            <div>
              {/* Eyebrow */}
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2D5F3E] mb-5">
                Our Story
              </p>

              {/* Heading */}
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#2C1810] leading-[1.15] mb-8">
                A neighbourhood spot for good coffee and honest food.
              </h2>

              {/* Body copy — left-border treatment */}
              <p className="border-l-4 border-[#2D5F3E] pl-6 text-[#8B7D6B] leading-relaxed mb-10">
                {aboutText}
              </p>

              {/* Stats pills */}
              <div className="flex flex-wrap gap-3">
                {aboutStats.map((stat) => (
                  <span
                    key={stat}
                    className="bg-[#2D5F3E] text-white text-xs font-semibold px-4 py-1.5 rounded-full"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div>
              <Image
                src="/images/pexels/barista.jpg"
                alt="Our barista preparing a house-roasted espresso"
                width={600}
                height={800}
                className="rounded-3xl shadow-xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Menu Highlights ──────────────────────────────────── */}
      <section id="menu" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading area */}
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2D5F3E] mb-4">
              From the Kitchen &amp; Bar
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#2C1810] leading-[1.15]">
              What we&apos;re known for.
            </h2>
          </div>

          {/* Menu card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────────── */}
      <section className="bg-white border-y border-[#E8E0D4] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading area */}
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2D5F3E] mb-4">
              What We Stand For
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#2C1810] leading-[1.15]">
              Good habits make good food.
            </h2>
          </div>

          {/* Values grid — items-stretch ensures equal height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <ValueCard
              icon={Leaf}
              title={values[0].title}
              description={values[0].description}
            />
            <ValueCard
              icon={Flame}
              title={values[1].title}
              description={values[1].description}
            />
            <ValueCard
              icon={Cookie}
              title={values[2].title}
              description={values[2].description}
            />
          </div>
        </div>
      </section>

      {/* ─── Gallery ──────────────────────────────────────────── */}
      <section id="gallery" className="bg-[#F7F3ED] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading area */}
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2D5F3E] mb-4">
              Inside Ember &amp; Grain
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#2C1810] leading-[1.15]">
              A peek inside.
            </h2>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* ─── Hours & Location ─────────────────────────────────── */}
      <section id="visit" className="bg-[#2D5F3E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading area */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 mb-4">
              Plan Your Visit
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15]">
              Drop in any time.
            </h2>
          </div>

          {/* Two-column cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Opening Hours card */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white mb-6">
                Opening Hours
              </h3>
              <ul>
                {business.hours.map((row) => (
                  <li
                    key={row.days}
                    className="flex justify-between py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-sm font-medium text-white">
                      {row.days}
                    </span>
                    <span className="text-sm text-white/70">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Find Us card */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white mb-6">
                Location
              </h3>

              <address className="not-italic space-y-4 text-sm">
                <p className="text-white leading-relaxed">
                  {business.address}
                  <br />
                  {business.suburb}, {business.state} {business.postcode}
                </p>
                <p>
                  <a
                    href={`tel:${business.phone}`}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {business.phoneDisplay}
                  </a>
                </p>
              </address>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${business.address}, ${business.suburb} ${business.state} ${business.postcode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Get Directions
                </a>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <Instagram size={15} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
