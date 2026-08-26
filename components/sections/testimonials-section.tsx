"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="border-y border-border/70 bg-secondary/25 py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Guest notes"
          title="What guests appreciate."
          description="Comforting portions, easy takeaway and a welcoming stop for families and travelers."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-border/70 bg-card/80 p-6"
            >
              <Quote className="size-8 text-primary" aria-hidden="true" />
              <blockquote className="mt-5 text-base leading-8 text-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border/70 pt-4">
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.context}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
