import { Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { TrackedLink } from "@/components/tracked-link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneForDisplay } from "@/lib/utils";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/catering", label: "Bulk Orders" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-[#0b0806] pb-24 pt-14 md:pb-10">
      <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.8fr_0.9fr_0.9fr]">
        <div>
          <LogoMark imageClassName="size-12 rounded-2xl border-primary/50 shadow-lg" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild size="sm">
              <TrackedLink
                href={siteConfig.orderLinks.zomato || siteConfig.orderLinks.whatsappOrder}
                target="_blank"
                rel="noreferrer"
                trackingEvent="order_click"
                trackingMeta={{ placement: "footer" }}
              >
                <ShoppingBag aria-hidden="true" />
                Order Now
              </TrackedLink>
            </Button>
            <Button asChild size="sm" variant="outline">
              <TrackedLink
                href={siteConfig.orderLinks.callOrder}
                trackingEvent="call_click"
                trackingMeta={{ placement: "footer" }}
              >
                <Phone aria-hidden="true" />
                {formatPhoneForDisplay(siteConfig.phones.primary)}
              </TrackedLink>
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Visit</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {siteConfig.address.line1}
            {siteConfig.address.line2 ? `, ${siteConfig.address.line2}` : ""}
            <br />
            {siteConfig.address.locality}, {siteConfig.address.city}
            <br />
            {siteConfig.address.state}
            {siteConfig.address.postalCode ? ` ${siteConfig.address.postalCode}` : ""}
          </p>
          <TrackedLink
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noreferrer"
            trackingEvent="maps_click"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Get directions
          </TrackedLink>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Hours</h2>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            {siteConfig.hours.slice(0, 4).map((item) => (
              <p key={item.day} className="flex justify-between gap-4">
                <span>{item.day}</span>
                <span>
                  {item.open} - {item.close}
                </span>
              </p>
            ))}
          </div>
          <p className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-4" aria-hidden="true" />
            Weekend hours may vary on holidays.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Explore</h2>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
