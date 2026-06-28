"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { HERO_IMAGE } from "@/lib/gallery";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-0 items-start overflow-hidden bg-black sm:min-h-[100dvh] sm:items-center"
    >
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: HERO_IMAGE.objectPosition }}
      />

      <div className="absolute inset-0 z-[1] bg-black/55" />
      <div className="absolute inset-0 z-[1] bg-charcoal-950/30" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />

      <Container className="relative z-10 pt-20 pb-12 sm:py-28 lg:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/logo.png"
              alt="Blackstone Enterprises"
              width={1514}
              height={1023}
              priority
              quality={100}
              className="mx-auto h-auto w-full max-w-[540px] sm:max-w-[720px] md:max-w-[880px] lg:max-w-[1020px]"
              style={{ filter: "none", opacity: 1 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 sm:mt-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange sm:text-sm">
              Heavy Diesel Specialists
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
              Heavy Diesel
              <br />
              Repair Done Right.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
              Professional mobile diesel repair, diagnostics, maintenance, and
              heavy equipment service built around keeping your equipment
              moving.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-5">
              <Button href={SITE.phoneHref} variant="primary" size="large">
                Call Now
              </Button>
              <Button href="#contact" variant="outline" size="large">
                Request Service
              </Button>
            </div>

            <a
              href={SITE.phoneHref}
              className="mt-5 hidden font-display text-2xl font-bold tracking-tight text-white transition-colors hover:text-brand-orange sm:mt-8 sm:inline-block sm:text-3xl"
            >
              {SITE.phone}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
