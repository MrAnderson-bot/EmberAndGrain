import { Instagram } from "lucide-react";
import { business, navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-[#1E3F2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-2xl italic text-white">
              Ember{" "}
              <span className="text-[#C4613A] not-italic">&amp;</span>{" "}
              Grain
            </p>
            <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-xs">
              Specialty coffee and house-baked goods in the heart of Braidwood.
              Locally sourced, house roasted, baked daily.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-white mb-5">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-white/60">
              <p>
                {business.address}
                <br />
                {business.suburb}, {business.state} {business.postcode}
              </p>
              <p>
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {business.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {business.email}
                </a>
              </p>
              <p>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <Instagram size={15} />
                  Instagram
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; 2025 Ember &amp; Grain. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://www.smewebdesigner.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors duration-200"
            >
              SME Web Designer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
