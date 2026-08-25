"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  UsersRound,
  UtensilsCrossed,
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle2,
  Flame,
  Truck,
  ShieldCheck,
  ChefHat,
  ArrowRight,
  Calculator,
  CalendarCheck2
} from "lucide-react";
import { cateringPackages, cateringStats, cateringServices, cateringOccasions, type CateringPackage } from "@/data/catering";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrackedLink } from "@/components/tracked-link";
import { warmBlurDataUrl } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { cn, formatPhoneForDisplay } from "@/lib/utils";

export function CateringSection() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(cateringPackages[0].id);
  const [guestCount, setGuestCount] = useState<number>(50);
  const [selectedOccasion, setSelectedOccasion] = useState<string>("Weddings & Receptions");

  const selectedPkg = useMemo(() => {
    return cateringPackages.find((p) => p.id === selectedPackageId) || cateringPackages[0];
  }, [selectedPackageId]);

  // Estimate per guest price based on package
  const pricePerGuest = useMemo(() => {
    if (selectedPackageId === "royal-biryani-feast") return 299;
    if (selectedPackageId === "grand-wedding-celebration") return 499;
    if (selectedPackageId === "corporate-executive-buffet") return 249;
    return 299;
  }, [selectedPackageId]);

  const estimatedTotal = useMemo(() => {
    return (guestCount * pricePerGuest).toLocaleString("en-IN");
  }, [guestCount, pricePerGuest]);

  const whatsappInquiryUrl = useMemo(() => {
    const message = encodeURIComponent(
      `Hello SR Grand Team, I would like to inquire about Catering / Bulk Order:\n` +
      `• Package: ${selectedPkg.name}\n` +
      `• Occasion: ${selectedOccasion}\n` +
      `• Approx Guests: ${guestCount}\n` +
      `• Estimated Budget: ₹${estimatedTotal}\n` +
      `Please let me know availability and customized menu options.`
    );
    return `https://wa.me/${siteConfig.phones.whatsapp.replace(/\D/g, "")}?text=${message}`;
  }, [selectedPkg, selectedOccasion, guestCount, estimatedTotal]);

  return (
    <section id="caterers" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-background via-card/50 to-background border-t border-border/60">
      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 size-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Outdoor Catering & Bulk Food Orders"
            title="Authentic feasts catered for your grand moments."
            description="From intimate family pujas and birthdays to 1,000+ guest weddings and corporate summits in Bhongir, Yadagirigutta, and surrounding regions."
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="shadow-md">
              <TrackedLink
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noreferrer"
                trackingEvent="whatsapp_click"
                trackingMeta={{ placement: "catering_section_header" }}
              >
                <MessageCircle className="mr-2 size-4" />
                Quick WhatsApp Quote
              </TrackedLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <TrackedLink
                href="/catering"
                trackingEvent="catering_click"
                trackingMeta={{ placement: "catering_section_header" }}
              >
                Detailed Booking Form
                <ArrowRight className="ml-2 size-4" />
              </TrackedLink>
            </Button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {cateringStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-border/70 bg-card/80 p-5 text-center shadow-sm backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Catering Packages Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Curated Catering Packages
            </h3>
            <span className="text-xs font-semibold text-muted-foreground">
              *Fully customizable to your menu preferences
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {cateringPackages.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <motion.div
                  key={pkg.id}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={cn(
                    "cursor-pointer group flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 shadow-md",
                    isSelected
                      ? "border-primary bg-card ring-2 ring-primary/40 shadow-primary/10 shadow-xl"
                      : "border-border/70 bg-card/70 hover:border-primary/50"
                  )}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      placeholder="blur"
                      blurDataURL={warmBlurDataUrl}
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                    
                    {pkg.popular ? (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-none font-semibold">
                        <Flame className="mr-1.5 size-3.5" />
                        Most Requested
                      </Badge>
                    ) : null}

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Starts at
                        </span>
                        <p className="font-display text-2xl font-black text-foreground">
                          {pkg.startingPrice}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-border text-xs">
                        Min {pkg.minGuests}+ Guests
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h4 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {pkg.name}
                      </h4>
                      <p className="mt-2 text-xs font-medium text-primary/90">
                        {pkg.idealFor}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {pkg.tagline}
                      </p>

                      <div className="mt-6 space-y-2.5 border-t border-border/50 pt-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Package Highlights:
                        </p>
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-leaf" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between">
                      <Button
                        variant={isSelected ? "default" : "outline"}
                        className="w-full font-semibold"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPackageId(pkg.id);
                        }}
                      >
                        {isSelected ? "Selected for Quote" : "Select Package"}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive Instant Catering Estimator */}
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card/95 to-primary/5 p-6 shadow-xl sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Calculator className="size-3.5" />
                Instant Catering Estimator
              </div>

              <h3 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Plan your event with transparent pricing.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Choose your occasion and guest count to get an estimated quote. Our head catering coordinator will customize the exact menu, sweets, and live counters for your date.
              </p>

              {/* Occasion Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                  Select Event Occasion:
                </label>
                <div className="flex flex-wrap gap-2">
                  {cateringOccasions.map((occ) => (
                    <button
                      key={occ.name}
                      onClick={() => setSelectedOccasion(occ.name)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-semibold transition",
                        selectedOccasion === occ.name
                          ? "bg-primary text-primary-foreground shadow"
                          : "border border-border/70 bg-secondary/30 text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                      )}
                    >
                      {occ.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider & Pills */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Number of Guests:
                  </label>
                  <span className="font-display text-2xl font-black text-primary">
                    {guestCount} Guests
                  </span>
                </div>

                <input
                  type="range"
                  min="25"
                  max="1000"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-secondary rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-muted-foreground font-semibold">
                  <span>25 Guests (Intimate)</span>
                  <span>250 Guests (Medium)</span>
                  <span>500+ Guests (Large Banquet)</span>
                </div>
              </div>
            </div>

            {/* Estimated Quote Card */}
            <div className="rounded-2xl border border-border/80 bg-background/80 p-6 sm:p-8 shadow-md backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase">
                    Selected Package
                  </span>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    {selectedPkg.name}
                  </h4>
                </div>
                <Badge className="bg-leaf/20 text-leaf border-leaf/30 font-semibold">
                  {guestCount} Pax
                </Badge>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Occasion:</span>
                  <strong className="text-foreground">{selectedOccasion}</strong>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Base Rate:</span>
                  <span className="text-foreground">₹{pricePerGuest} / plate</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Included Service:</span>
                  <span className="text-leaf font-medium">Hot Delivery + Salan/Raita</span>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/10 p-4 text-center">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Approximate Estimate
                </span>
                <p className="font-display text-4xl font-extrabold text-foreground mt-1">
                  ₹{estimatedTotal}
                </p>
                <span className="text-[11px] text-muted-foreground">
                  *Taxes, travel, and custom live counters computed upon final menu confirmation
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <Button asChild size="lg" className="w-full shadow-lg font-bold">
                  <TrackedLink
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                    trackingEvent="whatsapp_click"
                    trackingMeta={{ placement: "catering_calculator" }}
                  >
                    <MessageCircle className="mr-2 size-5" />
                    Book / Inquire via WhatsApp
                  </TrackedLink>
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Phone className="size-3.5 text-primary" />
                  <span>Call Catering Coordinator:</span>
                  <a
                    href={siteConfig.orderLinks.callOrder}
                    className="font-bold text-primary hover:underline"
                  >
                    {formatPhoneForDisplay(siteConfig.phones.primary)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose SR Grand Catering Services */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-3xl font-bold text-foreground">
              Full-Spectrum Catering Excellence
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We handle cooking, packaging, transportation, warm chafing dish setup, and serving staff with meticulous care.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cateringServices.map((srv, index) => (
              <div
                key={srv.title}
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary mb-4">
                    {index === 0 && <UtensilsCrossed className="size-6" />}
                    {index === 1 && <Truck className="size-6" />}
                    {index === 2 && <UsersRound className="size-6" />}
                    {index === 3 && <ShieldCheck className="size-6" />}
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    {srv.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-r from-[#1b120c] via-card to-[#120e0a] p-8 sm:p-12 shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <Badge className="bg-primary/20 text-primary border-primary/30 font-semibold">
              <CalendarCheck2 className="mr-1.5 size-3.5" />
              Advance Bookings Open
            </Badge>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Have an upcoming celebration in Bhongir or Yadagirigutta?
            </h3>
            <p className="text-sm sm:text-base text-cream/80 leading-relaxed">
              Lock in your event dates early for festival seasons, wedding muhurthams, and weekend gatherings. We offer complimentary tasting sessions for bookings above 100 guests.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="shadow-md">
                <TrackedLink
                  href="/catering"
                  trackingEvent="catering_click"
                  trackingMeta={{ placement: "catering_banner" }}
                >
                  Submit Catering Request Form
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/40">
                <TrackedLink
                  href={siteConfig.orderLinks.callOrder}
                  trackingEvent="call_click"
                  trackingMeta={{ placement: "catering_banner" }}
                >
                  <Phone className="mr-2 size-4" />
                  Direct Call ({formatPhoneForDisplay(siteConfig.phones.primary)})
                </TrackedLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
