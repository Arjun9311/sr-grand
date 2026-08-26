"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { galleryCategories, galleryImages, type GalleryCategory, type GalleryImage } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { warmBlurDataUrl } from "@/lib/images";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const filtered = active === "All" ? galleryImages : galleryImages.filter((item) => item.category === active);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-1 touch-scroll-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "relative h-10 sm:h-11 shrink-0 rounded-full px-4 text-xs sm:text-sm font-semibold transition active:scale-95",
              active === category ? "text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {active === category ? (
              <motion.span
                layoutId="gallery-filter-pill"
                className="absolute inset-0 rounded-full bg-primary shadow-sm"
                transition={{ duration: 0.22 }}
              />
            ) : (
              <span className="absolute inset-0 rounded-full border border-border/70 bg-secondary/30" />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            aria-label={`${item.category}: ${item.title}`}
            className="group mb-4 block w-full overflow-hidden rounded-2xl border border-border/70 bg-card text-left transition-all duration-200 hover:border-primary/40 hover:shadow-md active:scale-[0.99] gpu-layer"
          >
            <div
              className={cn(
                "relative overflow-hidden",
                item.aspect === "wide" && "aspect-[16/10]",
                item.aspect === "square" && "aspect-square",
                item.aspect === "portrait" && "aspect-[4/5]"
              )}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={warmBlurDataUrl}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/86 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.category}
                </p>
                <h2 className="mt-1 font-display text-xl sm:text-2xl font-semibold text-foreground">
                  {item.title}
                </h2>
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/90 p-4 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl gpu-layer"
              onClick={(event) => event.stopPropagation()}
            >
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-3 top-3 z-10 active:scale-95 shadow-md"
                onClick={() => setSelected(null)}
                aria-label="Close gallery image"
              >
                <X aria-hidden="true" />
              </Button>
              <div className="relative aspect-[16/10] max-h-[70vh]">
                <Image
                  src={selected.image}
                  alt={selected.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  placeholder="blur"
                  blurDataURL={warmBlurDataUrl}
                  className="object-contain"
                />
              </div>
              <div className="border-t border-border/70 p-4 sm:p-5 bg-card">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {selected.category}
                </p>
                <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold text-foreground">
                  {selected.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
