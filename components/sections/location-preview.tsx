import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneForDisplay } from "@/lib/utils";

export function LocationPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Hours & location"
            title="Easy to reach near Bhongir / Bhuvanagiri."
            description="Visitors can call, open maps or send a WhatsApp order without hunting through public listings."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <TrackedLink
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                trackingEvent="maps_click"
                trackingMeta={{ placement: "location_preview" }}
              >
                <Navigation aria-hidden="true" />
                Directions
              </TrackedLink>
            </Button>
            <Button asChild variant="outline">
              <TrackedLink
                href={siteConfig.orderLinks.callOrder}
                trackingEvent="call_click"
                trackingMeta={{ placement: "location_preview" }}
              >
                <Phone aria-hidden="true" />
                Call Restaurant
              </TrackedLink>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
            <MapPin className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">Address</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground break-words">
              {siteConfig.address.line1}
              {siteConfig.address.line2 ? `, ${siteConfig.address.line2}` : ""}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}
              <br />
              Landmark: {siteConfig.address.landmark}
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
            <Clock className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">Open Today</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {siteConfig.hours[0].open} - {siteConfig.hours[0].close}
              <br />
              Call {formatPhoneForDisplay(siteConfig.phones.primary)} for holiday timing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
