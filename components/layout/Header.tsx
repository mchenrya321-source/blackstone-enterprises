"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/5 bg-black shadow-premium backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <Container as="nav" aria-label="Main navigation">
        <div className="flex h-18 items-center justify-between py-4 sm:h-20">
          <a
            href="#home"
            className="relative z-50 block shrink-0 bg-transparent p-0"
          >
            <Image
              src="/logo.png"
              alt="Blackstone Enterprises"
              width={1514}
              height={1023}
              priority
              className="block h-[52px] w-auto opacity-100 mix-blend-normal sm:h-[58px] lg:h-[68px]"
            />
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
            <Button href={SITE.phoneHref} variant="primary" size="default">
              Call Now
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-white transition-all duration-300",
                isOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-white transition-all duration-300",
                isOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-white transition-all duration-300",
                isOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/98 lg:hidden"
          >
            <Container className="flex h-full flex-col justify-center gap-8 pt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-4xl font-bold uppercase tracking-tight text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-4 flex flex-col gap-4"
              >
                <Button
                  href={SITE.phoneHref}
                  variant="primary"
                  size="large"
                  className="w-full"
                >
                  Call Now
                </Button>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-sm border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold uppercase tracking-wider text-white transition-all hover:border-brand-orange/50 hover:bg-white/10"
                >
                  Request Service
                </a>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
