import Image from "next/image";
import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { warmBlurDataUrl } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24 cv-auto">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card px-5 py-10 sm:px-10 sm:py-12 lg:px-14 gpu-layer">
          <Image
            src="/images/family-dining-spread.png"
            alt="Family dining spread with biryani, curries, naan and rice"
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={warmBlurDataUrl}
            className="object-cover opacity-[0.24]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/50" />
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Ready when you are
            </p>
            <h2 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl font-semibold leading-tight text-balance text-foreground sm:text-5xl">
              Order biryani tonight, plan a family table, or ask about bulk meals.
            </h2>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="active:scale-95 transition-transform shadow-md">
                <TrackedLink
                  href={siteConfig.orderLinks.zomato || siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="order_click"
                  trackingMeta={{ placement: "final_cta" }}
                >
                  <ShoppingBag className="mr-1.5 size-4" aria-hidden="true" />
                  Order Now
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="active:scale-95 transition-transform">
                <TrackedLink
                  href={siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="whatsapp_click"
                  trackingMeta={{ placement: "final_cta" }}
                >
                  <MessageCircle className="mr-1.5 size-4" aria-hidden="true" />
                  WhatsApp
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="secondary" className="active:scale-95 transition-transform">
                <TrackedLink
                  href={siteConfig.orderLinks.callOrder}
                  trackingEvent="call_click"
                  trackingMeta={{ placement: "final_cta" }}
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
