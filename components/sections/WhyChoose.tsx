"use client";

import { motion } from "framer-motion";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE } from "@/lib/constants";

export function WhyChoose() {
  return (
    <section className="section-padding bg-black">
      <Container>
        <AnimatedGroup className="section-heading-gap">
          <AnimatedItem>
            <SectionHeading
              eyebrow="Why Blackstone"
              title="Why Choose Blackstone"
              description="We operate like your uptime depends on it — because it does."
              align="center"
              className="mx-auto"
            />
          </AnimatedItem>
        </AnimatedGroup>

        <AnimatedGroup className="grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-5">
          {WHY_CHOOSE.map((item, index) => (
            <AnimatedItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="text-center lg:text-left"
              >
                <span className="font-display text-4xl font-bold text-brand-orange/30 md:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-bold uppercase tracking-tight text-white md:mt-3 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/55 md:mt-3 md:text-base md:leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedGroup>
      </Container>
    </section>
  );
}
