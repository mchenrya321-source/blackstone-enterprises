"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "@/lib/gallery";

type LightboxProps = {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const image = images[activeIndex];

  const goPrev = useCallback(() => {
    onNavigate(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }, [activeIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Photo gallery lightbox"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-white/70 transition-colors hover:text-white sm:right-8 sm:top-8"
          aria-label="Close lightbox"
        >
          <X className="h-7 w-7" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center text-white/70 transition-colors hover:text-brand-orange sm:left-6"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-9 w-9" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center text-white/70 transition-colors hover:text-brand-orange sm:right-6"
          aria-label="Next image"
        >
          <ChevronRight className="h-9 w-9" />
        </button>

        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex max-h-[85vh] max-w-5xl flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-h-[75vh] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality={90}
              className="max-h-[75vh] w-auto max-w-full object-contain"
              priority
            />
          </div>
          <p className="mt-4 max-w-lg text-center text-sm text-white/60 sm:text-base">
            {image.caption}
          </p>
          <p className="mt-2 text-xs text-white/40">
            {activeIndex + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
