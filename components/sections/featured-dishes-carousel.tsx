"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredMenuItems } from "@/data/menu";
import { warmBlurDataUrl } from "@/lib/images";
import { cn } from "@/lib/utils";

export function FeaturedDishesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollerRef.current?.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth"
    });
  };

  return (
    <section className="overflow-hidden py-20 sm:py-24">
      <div className="container">
        <div className="flex items-end justify-between gap-5">
          <SectionHeading
            eyebrow="Featured dishes"
            title="The dishes people come back for."
            description="A focused menu preview for biryani, Indo-Chinese starters and comforting family staples."
          />
          <div className="hidden gap-2 sm:flex">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Previous dishes">
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Next dishes">
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {featuredMenuItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative w-[80vw] max-w-[310px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm sm:w-auto sm:max-w-none sm:min-w-[360px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={item.image || "/images/family-dining-spread.png"}
                  alt={`${item.name} at SR Grand Family Restaurant`}
                  fill
                  sizes="(min-width: 768px) 360px, 80vw"
                  placeholder="blur"
                  blurDataURL={warmBlurDataUrl}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {item.bestseller ? (
                  <Badge className="absolute left-3 top-3 sm:left-4 sm:top-4 text-xs font-semibold">
                    <Flame className="mr-1.5 size-3.5" aria-hidden="true" />
                    Bestseller
                  </Badge>
                ) : null}
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold leading-tight text-foreground">
                    {item.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-primary/12 px-2.5 py-1 text-xs sm:text-sm font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <div className="mt-5 flex items-center gap-1" aria-label={`Spice level ${item.spice || 0}`}>
                  {[1, 2, 3].map((level) => (
                    <span
                      key={level}
                      className={cn(
                        "size-2.5 rounded-full",
                        (item.spice || 0) >= level ? "bg-primary" : "bg-muted"
                      )}
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
