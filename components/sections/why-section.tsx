import { ChefHat, HandHeart, PackageCheck, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const reasons = [
  {
    icon: ChefHat,
    title: "Biryani-first memory",
    text: "A menu led by hearty biryani, warm spices and familiar family dining favourites."
  },
  {
    icon: Sparkles,
    title: "Premium local feel",
    text: "A polished restaurant experience without losing the easy hospitality Bhongir guests expect."
  },
  {
    icon: PackageCheck,
    title: "Takeaway-ready",
    text: "Quick order paths for phone, WhatsApp and marketplace delivery when dinner needs to move fast."
  },
  {
    icon: HandHeart,
    title: "Made for families",
    text: "Comforting portions, shareable starters and a calm table rhythm for everyday celebrations."
  }
];

export function WhySection() {
  return (
    <section className="bg-charcoal-radial py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Why SR Grand"
          title="Warm hospitality, sharper digital ordering."
          description="Everything is arranged around what guests need first: good food, clear location, fast ordering and a comfortable family meal."
        />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="h-full rounded-2xl border border-border/70 bg-card/72 p-5 transition hover:-translate-y-1 hover:border-primary/35">
                <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                  <reason.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{reason.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 h-px bg-copper-line" aria-hidden="true" />
      </div>
    </section>
  );
}
