import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarDays,
  UsersRound,
  UtensilsCrossed,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Flame,
  ChefHat
} from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { cateringPackages, cateringStats, cateringServices } from "@/data/catering";
import { warmBlurDataUrl } from "@/lib/images";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneForDisplay } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Outdoor Catering & Bulk Orders | SR Grand Family Restaurant",
  path: "/catering",
  description:
    "Professional outdoor catering and bulk food orders in Bhongir, Yadagirigutta, and surrounding regions. Biryani feasts, live tandoor, wedding banquets, and corporate meals.",
  keywords: [
    "caterers in Bhongir",
    "outdoor catering Yadagirigutta",
    "bulk biryani order Bhongir",
    "SR Grand catering",
    "wedding catering Bhuvanagiri",
    "corporate lunch boxes Bhongir"
  ]
});

const cateringFaqs = [
  {
    q: "How much advance notice is required for bulk catering orders?",
    a: "For smaller family feasts (25 - 75 guests), 24 hours advance notice is recommended. For weddings, receptions, and major events (100 - 1,000+ guests), we recommend booking 3 to 7 days in advance to ensure slot availability and fresh provisioning."
  },
  {
    q: "Do you deliver to venues in Yadagirigutta and nearby highways?",
    a: "Yes! We regularly cater events, pilgrimage tour buses, marriage halls, and farmhouses across Bhongir, Yadagirigutta, Alair, Bibinagar, and the Hyderabad-Warangal highway corridor."
  },
  {
    q: "Can we have live tandoori roti and starter counters at the venue?",
    a: "Absolutely. We provide portable tandoor clay ovens, live sizzling starter stations, and uniformed chefs with dedicated serving crew on request."
  },
  {
    q: "Are vegetarian and non-vegetarian dishes prepared separately?",
    a: "Yes, we maintain 100% strict culinary segregation with dedicated cooking vessels, service ladles, and separate buffet lines."
  }
];

export default function CateringPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
        <Image
          src="/images/family-dining-spread.png"
          alt="Family dining spread for catering and bulk orders at SR Grand"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={warmBlurDataUrl}
          className="object-cover opacity-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        <div className="container relative z-10 max-w-4xl space-y-6 text-center">
          <Badge className="bg-primary/20 text-primary border-primary/30 font-semibold uppercase tracking-wider text-xs">
            SR Grand Professional Catering Services
          </Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
            Grand Flavours for Your Grand Celebrations
          </h1>
          <p className="text-base sm:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Authentic dum biryanis, sizzling tandoori starters, rich curries, and live counters catered for weddings, housewarmings, birthdays, and corporate events across Bhongir & Yadagirigutta.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button asChild size="lg" className="shadow-lg font-bold">
              <TrackedLink
                href={siteConfig.orderLinks.whatsappOrder}
                target="_blank"
                rel="noreferrer"
                trackingEvent="whatsapp_click"
                trackingMeta={{ placement: "catering_hero" }}
              >
                <MessageCircle className="mr-2 size-5" />
                WhatsApp Catering Manager
              </TrackedLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/50">
              <a href="#inquiry-form">
                <ChefHat className="mr-2 size-5" />
                Request Custom Menu Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="border-y border-border/70 bg-card/60 py-8 backdrop-blur-md">
        <div className="container grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          {cateringStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Catering Packages */}
      <section className="py-20 sm:py-28">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="Set Menus & Packages"
            title="Choose a curated banquet plan."
            description="All packages include salan, raita, paper plates, spoons, and warm container delivery. Menus can be customized on request."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {cateringPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card shadow-md transition hover:border-primary/50 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    placeholder="blur"
                    blurDataURL={warmBlurDataUrl}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  {pkg.popular ? (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold">
                      <Flame className="mr-1.5 size-3.5" />
                      Most Popular
                    </Badge>
                  ) : null}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-foreground">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground bg-background/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      Min {pkg.minGuests} Guests
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {pkg.name}
                      </h3>
                      <p className="text-xs font-semibold text-primary mt-1">
                        {pkg.idealFor}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Menu items breakdown */}
                    <div className="rounded-2xl border border-border/60 bg-secondary/20 p-4 space-y-2.5 text-xs">
                      <div className="flex justify-between">
                        <strong className="text-primary font-bold">Starters:</strong>
                        <span className="text-foreground text-right">{pkg.menuIncludes.starters.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <strong className="text-primary font-bold">Main Curries:</strong>
                        <span className="text-foreground text-right">{pkg.menuIncludes.mains.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <strong className="text-primary font-bold">Biryani / Rice:</strong>
                        <span className="text-foreground text-right">{pkg.menuIncludes.riceAndBiryani.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <strong className="text-primary font-bold">Breads:</strong>
                        <span className="text-foreground text-right">{pkg.menuIncludes.breads.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <strong className="text-primary font-bold">Sweet / Drinks:</strong>
                        <span className="text-foreground text-right">{pkg.menuIncludes.dessertAndDrinks.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full font-semibold">
                    <a href="#inquiry-form">
                      Select for Inquiry
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form & Direct Contact Section */}
      <section id="inquiry-form" className="py-20 sm:py-28 bg-gradient-to-b from-card/30 via-card/70 to-background border-t border-border/70">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 uppercase text-xs font-semibold mb-3">
                Event Booking
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Tell us about your event
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Fill in your expected date, approximate guest count, and preferred dishes. Our head catering coordinator will review and call you with a tailored menu and pricing quotation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border/70 bg-card p-5 space-y-2">
                <div className="flex items-center gap-3 text-primary font-semibold text-sm">
                  <Phone className="size-4" />
                  <span>Direct Catering Hotline:</span>
                </div>
                <a
                  href={siteConfig.orderLinks.callOrder}
                  className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors block"
                >
                  {formatPhoneForDisplay(siteConfig.phones.primary)}
                </a>
                <p className="text-xs text-muted-foreground">
                  Available daily 11:00 AM - 11:00 PM for instant event coordination.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-card p-5 space-y-2">
                <div className="flex items-center gap-3 text-leaf font-semibold text-sm">
                  <Truck className="size-4" />
                  <span>Delivery & Setup Radius:</span>
                </div>
                <p className="text-sm text-foreground">
                  Bhongir City, Yadagirigutta, Alair, Bibinagar, Ghatkesar, and surrounding Telangana venues.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xl">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Catering Inquiry Form
            </h3>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Catering FAQs */}
      <section className="py-20 border-t border-border/70">
        <div className="container max-w-4xl space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground">
              Everything you need to know about our outdoor catering and bulk food service.
            </p>
          </div>

          <div className="grid gap-4">
            {cateringFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-border/70 bg-card p-6 space-y-2">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

