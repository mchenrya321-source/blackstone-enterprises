"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { defaultViewport, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, defaultViewport);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedGroup({ children, className }: AnimatedGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, defaultViewport);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: 0.05 },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}
