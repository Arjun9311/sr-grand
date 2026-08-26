import Image from "next/image";
import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { warmBlurDataUrl } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card px-5 py-12 sm:px-10 lg:px-14">
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Ready when you are
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance text-foreground sm:text-5xl">
              Order biryani tonight, plan a family table, or ask about bulk meals.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <TrackedLink
                  href={siteConfig.orderLinks.zomato || siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="order_click"
                  trackingMeta={{ placement: "final_cta" }}
                >
                  <ShoppingBag aria-hidden="true" />
                  Order Now
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="outline">
                <TrackedLink
                  href={siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="whatsapp_click"
                  trackingMeta={{ placement: "final_cta" }}
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <TrackedLink
                  href={siteConfig.orderLinks.callOrder}
                  trackingEvent="call_click"
                  trackingMeta={{ placement: "final_cta" }}
                >
                  <Phone aria-hidden="true" />
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
