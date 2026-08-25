import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  path: "/gallery",
  description:
    "View food, ambience and family dining photos for SR Grand Family Restaurant in Bhongir / Bhuvanagiri.",
  keywords: ["SR Grand Family Restaurant photos", "Bhongir restaurant gallery"]
});

export default function GalleryPage() {
  return (
    <section className="bg-charcoal-radial pb-20 pt-32 sm:pb-24">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          as="h1"
          title="A warmer look at the table, the food and the room."
          description="Filterable visual storytelling for food, ambience, kitchen moments and the team."
        />
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
