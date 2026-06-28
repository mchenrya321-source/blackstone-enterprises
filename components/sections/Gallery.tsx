"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/gallery";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-black">
      <Container>
        <AnimatedGroup className="section-heading-gap">
          <AnimatedItem>
            <SectionHeading
              eyebrow="Our Work"
              title="In the Field"
              description="Real jobs. Real equipment. The work we do every day across Northeast Louisiana."
              align="center"
              className="mx-auto"
            />
          </AnimatedItem>
        </AnimatedGroup>

        <AnimatedGroup>
          <AnimatedItem>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {GALLERY_IMAGES.map((image, index) => (
                <motion.button
                  key={image.id}
                  type="button"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative h-56 overflow-hidden rounded-lg shadow-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:h-64"
                  aria-label={`View photo: ${image.caption}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={85}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </motion.button>
              ))}
            </div>
          </AnimatedItem>
        </AnimatedGroup>
      </Container>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
