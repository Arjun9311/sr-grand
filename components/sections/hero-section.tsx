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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              <MapPin className="size-3.5" aria-hidden="true" />
              Bhongir / Bhuvanagiri, Telangana
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="font-display text-5xl font-semibold leading-[1.02] text-balance text-foreground sm:text-6xl lg:text-7xl"
            >
              {siteConfig.businessName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="mt-4 font-display text-2xl text-primary/90"
              lang="te"
            >
              {siteConfig.localBusinessName}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-5 max-w-2xl text-base leading-8 text-cream/82 sm:text-lg"
            >
              Premium biryani, Indo-Chinese favourites and warm family dining for locals,
              takeaway customers and travelers passing through Bhongir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.38 }}
              className="mt-6"
            >
              <ServiceModeBadges />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.46 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Button asChild size="lg">
                <TrackedLink
                  href={siteConfig.orderLinks.zomato || siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="order_click"
                  trackingMeta={{ placement: "hero" }}
                >
                  <ShoppingBag aria-hidden="true" />
                  Order Now
                  <ArrowRight aria-hidden="true" />
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="outline">
                <TrackedLink
                  href="/menu"
                  trackingEvent="menu_click"
                  trackingMeta={{ placement: "hero" }}
                >
                  View Menu
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <TrackedLink
                  href={siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="whatsapp_click"
                  trackingMeta={{ placement: "hero" }}
                >
                  <MessageCircle aria-hidden="true" />
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
