import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { galleryImages } from "@/data/gallery";
import { warmBlurDataUrl } from "@/lib/images";

export function GalleryPreview() {
  const images = galleryImages.filter((image) => image.featured).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 cv-auto">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="Food and ambience with a restaurant-first eye."
            description="A curated look at signature dishes, a warm dining room and family-style meals."
          />
          <Button asChild variant="outline" className="w-fit active:scale-95 transition-transform">
            <TrackedLink href="/gallery">
              View Gallery
              <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
            </TrackedLink>
          </Button>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-4 md:grid-cols-4 md:grid-rows-[220px_220px]">
          {images.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.05}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <article className="group relative h-64 sm:h-72 overflow-hidden rounded-2xl border border-border/70 bg-secondary md:h-full gpu-layer">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                  placeholder="blur"
                  blurDataURL={warmBlurDataUrl}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl sm:text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
