import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-charcoal-950">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Blackstone Enterprises"
              width={1514}
              height={1023}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/50">
              Dependable heavy diesel repair built for uptime. Professional
              mobile service across Northeast Louisiana.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="text-lg font-semibold text-white transition-colors hover:text-brand-orange"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">
            &copy; {year} Blackstone Enterprises. All rights reserved.
          </p>
          <p className="text-sm text-white/40">{SITE.serviceArea}</p>
        </div>
      </Container>
    </footer>
  );
}
