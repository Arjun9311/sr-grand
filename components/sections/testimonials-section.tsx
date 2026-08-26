"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="border-y border-border/70 bg-secondary/25 py-16 sm:py-24 cv-auto">
      <div className="container">
        <SectionHeading
          eyebrow="Guest notes"
          title="What guests appreciate."
          description="Comforting portions, easy takeaway and a welcoming stop for families and travelers."
        />
        <div className="mt-8 sm:mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -30px 0px" }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="rounded-2xl border border-border/70 bg-card/80 p-5 sm:p-6 shadow-sm gpu-layer transition hover:border-primary/40"
            >
              <Quote className="size-7 sm:size-8 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border/70 pt-3.5">
                <p className="font-semibold text-foreground text-sm sm:text-base">{item.name}</p>
                <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{item.context}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
