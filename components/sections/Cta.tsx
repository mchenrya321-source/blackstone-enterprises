import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { CTA_IMAGE } from "@/lib/gallery";

export function Cta() {
  return (
    <section className="relative min-h-0 overflow-hidden md:min-h-[480px]">
      <Image
        src={CTA_IMAGE.src}
        alt={CTA_IMAGE.alt}
        fill
        sizes="100vw"
        quality={85}
        loading="lazy"
        className="object-cover"
        style={{ objectPosition: CTA_IMAGE.objectPosition }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-charcoal-950/50" />

      <Container className="relative z-10 py-10 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange md:text-sm">
            Get Back to Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[0.92] tracking-tight text-white md:mt-5 md:text-5xl lg:text-6xl">
            Equipment Down?
            <br />
            Call Blackstone.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/65 md:mt-6 md:text-lg">
            Mobile diesel repair and heavy equipment service across Northeast
            Louisiana. One call gets a professional on the way.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-5 block font-display text-4xl font-bold tracking-tight text-white transition-colors hover:text-brand-orange md:mt-8 md:text-6xl lg:text-7xl"
          >
            {SITE.phone}
          </a>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 md:mt-10 md:flex-row md:gap-5">
            <Button href={SITE.phoneHref} variant="primary" size="large">
              Call Now
            </Button>
            <Button href="#contact" variant="secondary" size="large">
              Request Service
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
