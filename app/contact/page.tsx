import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { faqs } from "@/data/faqs";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneForDisplay } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Location",
  path: "/contact",
  description:
    "Contact SR Grand Family Restaurant in Bhongir / Bhuvanagiri for dine-in, takeaway, WhatsApp orders, directions, timings and bulk order inquiries.",
  keywords: ["SR Grand Family Restaurant contact", "SR Grand Bhongir phone", "Bhuvanagiri restaurant location"]
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal-radial pb-16 pt-32 sm:pb-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              as="h1"
              title="Call, WhatsApp, order or get directions."
              description="Reach SR Grand quickly for family dining, takeaway, delivery questions and bulk order inquiries."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <TrackedLink
                  href={siteConfig.orderLinks.callOrder}
                  trackingEvent="call_click"
                  trackingMeta={{ placement: "contact_hero" }}
                >
                  <Phone aria-hidden="true" />
                  {formatPhoneForDisplay(siteConfig.phones.primary)}
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="outline">
                <TrackedLink
                  href={siteConfig.orderLinks.whatsappOrder}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="whatsapp_click"
                  trackingMeta={{ placement: "contact_hero" }}
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <TrackedLink
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  trackingEvent="maps_click"
                  trackingMeta={{ placement: "contact_hero" }}
                >
                  <Navigation aria-hidden="true" />
                  Directions
                </TrackedLink>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
            <iframe
              title="Map to SR Grand Family Restaurant"
              src={siteConfig.mapEmbedUrl}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
              <MapPin className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-foreground">Official address</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground break-words">
                {siteConfig.address.line1}
                {siteConfig.address.line2 ? `, ${siteConfig.address.line2}` : ""}
                <br />
                {siteConfig.address.locality}, {siteConfig.address.city}
                <br />
                {siteConfig.address.state}
                {siteConfig.address.postalCode ? ` ${siteConfig.address.postalCode}` : ""}
                <br />
                Landmark: {siteConfig.address.landmark}
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
              <Clock className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-foreground">Timings</h2>
              <div className="mt-4 divide-y divide-border/60">
                {siteConfig.hours.map((item) => (
                  <p key={item.day} className="flex justify-between gap-4 py-2 text-sm text-muted-foreground">
                    <span>{item.day}</span>
                    <span className="text-right">
                      {item.open} - {item.close}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-semibold text-foreground">Inquiry form</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Use this for catering, family tables, bulk orders or a quick restaurant follow-up.
            </p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-secondary/25 py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Helpful answers for Bhongir / Bhuvanagiri visitors."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-border/70 bg-card p-6">
                <h2 className="font-display text-2xl font-semibold text-foreground">{faq.question}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
