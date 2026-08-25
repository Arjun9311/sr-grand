import { Award, Clock3, MapPinned, Utensils } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const items = [
  {
    icon: MapPinned,
    label: "Local identity",
    text: "Built for Bhongir and Bhuvanagiri searches"
  },
  {
    icon: Utensils,
    label: "Cuisine focus",
    text: siteConfig.cuisines.join(" · ")
  },
  {
    icon: Clock3,
    label: "Daily rhythm",
    text: "Lunch, dinner, takeaway and family meals"
  },
  {
    icon: Award,
    label: "Official source",
    text: "Clear calls, location and menu paths in one place"
  }
];

export function SocialProofBand() {
  return (
    <section aria-label="Restaurant highlights" className="border-y border-border/70 bg-secondary/30">
      <div className="container grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
