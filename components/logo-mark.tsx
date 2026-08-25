import Link from "next/link";
import { Utensils } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function LogoMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label={`${siteConfig.businessName} home`}>
      <span className="grid size-11 place-items-center rounded-2xl border border-primary/35 bg-primary/12 text-primary shadow-glow transition group-hover:scale-105">
        <Utensils className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-semibold text-foreground">
          SR Grand
        </span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Family Restaurant
        </span>
      </span>
    </Link>
  );
}
