import { ExternalLink, Info, MapPin, Navigation, Phone, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/lib/site-config";

export function GoogleMapSection() {
  return (
    <section className="py-16 sm:py-24 border-t border-border/60 bg-background/50 cv-auto">
      <div className="container">
        <SectionHeading
          eyebrow="Google Maps Location"
          title="Find SR Grand Family Restaurant"
          description="Medikuntapally, Bhuvanagiri, Telangana 508116, India — easily reachable near Bhuvanagiri Town Main Rd."
        />

        <div className="relative mt-8 sm:mt-10 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl gpu-layer">
          {/* Embedded Google Map Iframe */}
          <div className="relative h-[400px] w-full sm:h-[500px]">
            <iframe
              title="Google Map location of SR Grand Family Restaurant"
              src={siteConfig.mapEmbedUrl}
              className="h-full w-full border-0 grayscale-[0.15] contrast-[1.05] transition-all hover:grayscale-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Google Map Location Badge Overlay matching user's reference */}
            <div className="absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] rounded-xl border border-border/80 bg-background/95 p-3.5 shadow-xl backdrop-blur-md sm:left-6 sm:top-6 sm:max-w-sm sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-base font-bold tracking-tight text-foreground sm:text-xl">
                    SR GRAND FAMILY RESTAURANT
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.postalCode}
                  </p>
                </div>
                <TrackedLink
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="maps_click"
                  trackingMeta={{ placement: "map_overlay_icon" }}
                  className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground active:scale-95"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink className="size-3.5 sm:size-4" />
                </TrackedLink>
              </div>

              {/* Rating and Info */}
              <div className="mt-2.5 flex items-center gap-2 border-t border-border/60 pt-2.5 text-xs sm:text-sm">
                <span className="font-semibold text-foreground">3.9</span>
                <div className="flex items-center text-amber-500">
                  <Star className="size-3.5 fill-current" />
                </div>
                <TrackedLink
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="maps_click"
                  trackingMeta={{ placement: "map_overlay_reviews" }}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  (52 reviews)
                </TrackedLink>
                <Info className="size-3.5 text-muted-foreground ml-auto" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Action Bar beneath map */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border/70 bg-card p-4 sm:flex-row sm:px-8 sm:py-5">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
              <MapPin className="size-4 sm:size-5 text-primary shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-foreground font-medium">Medikuntapally, Bhuvanagiri</strong> — Near Bhuvanagiri Town Main Rd
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <Button asChild className="flex-1 sm:flex-none active:scale-95 transition-transform">
                <TrackedLink
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="maps_click"
                  trackingMeta={{ placement: "google_map_section" }}
                >
                  <Navigation className="mr-1.5 size-4" aria-hidden="true" />
                  Get Directions
                </TrackedLink>
              </Button>
              <Button asChild variant="outline" className="flex-1 sm:flex-none active:scale-95 transition-transform">
                <TrackedLink
                  href={siteConfig.orderLinks.callOrder}
                  trackingEvent="call_click"
                  trackingMeta={{ placement: "google_map_section" }}
                >
                  <Phone className="mr-1.5 size-4" aria-hidden="true" />
                  Call
                </TrackedLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
