"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="section-padding bg-charcoal-950">
      <Container>
        <AnimatedGroup className="section-heading-gap">
          <AnimatedItem>
            <SectionHeading
              eyebrow="What We Do"
              title="Built for Heavy Work"
              description="Full-spectrum diesel and heavy equipment service — mobile, reliable, and engineered to minimize downtime."
            />
          </AnimatedItem>
        </AnimatedGroup>

        <AnimatedGroup className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <AnimatedItem key={service.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex h-full flex-col overflow-hidden bg-charcoal-900"
              >
                <div className="relative h-[136px] shrink-0 overflow-hidden md:h-56">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-7">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-snug text-white/55 md:mt-3 md:line-clamp-none md:text-base md:leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            </AnimatedItem>
          ))}
        </AnimatedGroup>
      </Container>
    </section>
  );
}
