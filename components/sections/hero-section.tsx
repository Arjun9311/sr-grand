"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MapPin, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { ServiceModeBadges } from "@/components/service-mode-badges";
import { TrackedLink } from "@/components/tracked-link";
import { Button } from "@/components/ui/button";
import { warmBlurDataUrl } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneForDisplay } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[94svh] items-end overflow-hidden pb-10 pt-28">
      <Image
        src="/images/hero-biryani.png"
        alt="Signature biryani served in a copper handi with warm restaurant lighting"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={warmBlurDataUrl}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(20_24%_5%/.96)_0%,hsl(20_24%_5%/.76)_42%,hsl(20_24%_5%/.26)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(20_24%_5%/.35),transparent_40%,hsl(20_24%_5%/.92))]" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.78fr] lg:items-end">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04, duration: 0.35 }}
              className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/35 bg-primary/12 px-3 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-primary gpu-layer"
            >
              <MapPin className="size-3 sm:size-3.5" aria-hidden="true" />
              Bhongir / Bhuvanagiri, Telangana
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="font-display text-4xl font-semibold leading-[1.06] text-balance text-foreground sm:text-6xl lg:text-7xl gpu-layer"
            >
              {siteConfig.businessName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.35 }}
              className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl text-primary/90 gpu-layer"
              lang="te"
            >
              {siteConfig.localBusinessName}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.35 }}
              className="mt-4 sm:mt-5 max-w-2xl text-sm leading-7 text-cream/85 sm:text-lg sm:leading-8 gpu-layer"
            >
              Premium biryani, Indo-Chinese favourites and warm family dining for locals,
              takeaway customers and travelers passing through Bhongir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.35 }}
              className="mt-5 sm:mt-6 gpu-layer"
            >
              <ServiceModeBadges />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.35 }}
              className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap gpu-layer"
            >
              <Button asChild size="lg" className="active:scale-95 transition-transform shadow-md">
                <TrackedLink
                  href={siteConfig.orderLinks.zomato || siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="order_click"
                  trackingMeta={{ placement: "hero" }}
                >
                  <ShoppingBag aria-hidden="true" className="mr-1.5 size-4" />
                  Order Now
                  <ArrowRight aria-hidden="true" className="ml-1.5 size-4" />
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="active:scale-95 transition-transform">
                <TrackedLink
                  href="/menu"
                  trackingEvent="menu_click"
                  trackingMeta={{ placement: "hero" }}
                >
                  View Menu
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="secondary" className="active:scale-95 transition-transform">
                <TrackedLink
                  href={siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="whatsapp_click"
                  trackingMeta={{ placement: "hero" }}
                >
                  <MessageCircle aria-hidden="true" className="mr-1.5 size-4" />
                  WhatsApp
                </TrackedLink>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="ml-auto max-w-sm border-l border-primary/35 pl-6">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Today at SR Grand</p>
              <p className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground">
                Fresh batches, quick takeaway, calm family tables.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-cream/78">
                <p>Open {siteConfig.hours[0].open} - {siteConfig.hours[0].close}</p>
                <p>{siteConfig.address.landmark}</p>
                <a
                  href={siteConfig.orderLinks.callOrder}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {formatPhoneForDisplay(siteConfig.phones.primary)}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
