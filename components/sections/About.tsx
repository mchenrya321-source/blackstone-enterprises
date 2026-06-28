"use client";

import Image from "next/image";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";
import { ABOUT_IMAGE } from "@/lib/gallery";

export function About() {
  return (
    <section id="about" className="section-padding bg-charcoal-950">
      <Container>
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">
          <AnimatedGroup>
            <AnimatedItem>
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  loading="lazy"
                  className="object-cover"
                  style={{ objectPosition: ABOUT_IMAGE.objectPosition }}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </AnimatedItem>
          </AnimatedGroup>

          <AnimatedGroup>
            <AnimatedItem>
              <SectionHeading
                eyebrow="About Us"
                title="Built on Workmanship"
                description="Blackstone Enterprises is focused on dependable heavy diesel repair — with pride in workmanship, professionalism, and keeping customers operating with minimal downtime."
              />
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-5 text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
                From mobile diesel repair to heavy equipment service, we deliver
                the kind of work that keeps fleets, contractors, and operators
                moving. No shortcuts. No excuses. Just solid service built for
                the real world.
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-orange md:mt-6">
                Service Area
              </p>
              <p className="mt-1.5 font-display text-xl font-bold uppercase text-white md:mt-2 md:text-3xl">
                {SITE.serviceArea}
              </p>
            </AnimatedItem>
          </AnimatedGroup>
        </div>
      </Container>
    </section>
  );
}
