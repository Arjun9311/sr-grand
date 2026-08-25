import type { Metadata } from "next";
import Image from "next/image";
import { ChefHat, HeartHandshake, Leaf, Utensils } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { warmBlurDataUrl } from "@/lib/images";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn the story and hospitality philosophy behind SR Grand Family Restaurant, a biryani and Chinese family restaurant in Bhongir / Bhuvanagiri.",
  keywords: ["about SR Grand Family Restaurant", "family restaurant Bhongir"]
});

const values = [
  {
    icon: ChefHat,
    title: "Food with memory",
    text: "Biryani leads the table, supported by Chinese favourites, curries and familiar comfort food."
  },
  {
    icon: HeartHandshake,
    title: "Hospitality first",
    text: "The experience should feel polished without becoming distant: warm, clear and easy for families."
  },
  {
    icon: Leaf,
    title: "Freshness cues",
    text: "Food, ambience and service details are presented with the same care guests expect at the table."
  },
  {
    icon: Utensils,
    title: "Everyday occasions",
    text: "Built for casual dinners, road-trip meals, takeaway, delivery and bulk order conversations."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-32">
        <Image
          src="/images/restaurant-ambience.png"
          alt="Warm dining room ambience for family dining"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={warmBlurDataUrl}
          className="object-cover opacity-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/55" />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <Badge>About SR Grand</Badge>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-balance text-foreground sm:text-6xl">
              A family restaurant shaped for Bhongir tables.
            </h1>
            <p className="mt-4 font-display text-2xl text-primary" lang="te">
              {siteConfig.localBusinessName}
            </p>
          </div>
          <p className="max-w-xl text-base leading-8 text-cream/82 sm:text-lg">
            {siteConfig.businessName} is positioned as a premium local destination for biryani,
            Chinese favourites and easy family dining in Bhongir / Bhuvanagiri. The restaurant is
            shaped for everyday meals, small celebrations, takeaway plans and travelers looking for
            a warm stop near town.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Story"
            title="Premium, local and confidently hospitable."
            description="The restaurant experience is intentionally direct: find the food, trust the location, order fast and feel welcome before arriving."
          />
          <Reveal className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              For nearby residents, SR Grand should feel like the reliable choice for a warm
              family meal. For travelers, it should feel easy to discover and easy to act on. For
              delivery and takeaway customers, every path should reduce hesitation.
            </p>
            <p>
              The dining promise is simple: generous portions, familiar flavours, quick ordering
              and hospitality that feels local without feeling ordinary.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/25 py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="What makes us special"
            title="What makes SR Grand feel like home."
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="h-full rounded-2xl border border-border/70 bg-card p-5">
                  <value.icon className="size-7 text-primary" aria-hidden="true" />
                  <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
