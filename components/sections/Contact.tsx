"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedGroup, AnimatedItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Mobile Diesel Repair",
  "Fleet Maintenance",
  "Engine Diagnostics",
  "Heavy Equipment Repair",
  "Preventative Maintenance",
  "Emergency Service",
  "Other",
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-black">
      <Container>
        <AnimatedGroup className="section-heading-gap">
          <AnimatedItem>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Request Service"
              description="Need diesel repair or heavy equipment service? Call us directly or send a request — we'll get back to you fast."
              align="center"
              className="mx-auto"
            />
          </AnimatedItem>
        </AnimatedGroup>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
          <AnimatedGroup className="lg:col-span-2">
            <AnimatedItem>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
                  Direct Line
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-4 block font-display text-4xl font-bold tracking-tight text-white transition-colors hover:text-brand-orange sm:text-5xl"
                >
                  {SITE.phone}
                </a>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  Available for emergency and scheduled service across Northeast
                  Louisiana.
                </p>
                <div className="mt-8">
                  <Button href={SITE.phoneHref} variant="primary" size="large">
                    Call Now
                  </Button>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedGroup>

          <AnimatedGroup className="lg:col-span-3">
            <AnimatedItem>
              <motion.form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </Field>

                  <Field label="Phone" htmlFor="phone" required>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="(318) 555-0100"
                    />
                  </Field>

                  <Field label="Email" htmlFor="email" className="sm:col-span-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </Field>

                  <Field
                    label="Service Needed"
                    htmlFor="service"
                    className="sm:col-span-2"
                    required
                  >
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={cn(inputClass, "appearance-none")}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Message"
                    htmlFor="message"
                    className="sm:col-span-2"
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={cn(inputClass, "resize-none")}
                      placeholder="Tell us about your equipment and what you need..."
                    />
                  </Field>
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center bg-brand-orange px-9 py-4 text-base font-bold uppercase tracking-widest text-black transition-all hover:bg-brand-orange-light disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>

                  {status === "success" && (
                    <p className="text-sm text-brand-orange" role="status">
                      Request received. We&apos;ll be in touch shortly.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-brand-red-light" role="alert">
                      Something went wrong. Please call us directly.
                    </p>
                  )}
                </div>
              </motion.form>
            </AnimatedItem>
          </AnimatedGroup>
        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full bg-charcoal-900 px-4 py-3.5 text-white placeholder:text-white/30 transition-colors focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/40";

function Field({
  label,
  htmlFor,
  children,
  className,
  required,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60"
      >
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
      {children}
    </div>
  );
}
