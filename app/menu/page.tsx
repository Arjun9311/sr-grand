import type { Metadata } from "next";
import { MenuBrowser } from "@/components/menu-browser";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Menu",
  path: "/menu",
  description:
    "Explore the SR Grand Family Restaurant menu for biryani, Chinese, starters, curries, breads, rice and beverages in Bhongir / Bhuvanagiri.",
  keywords: ["SR Grand Family Restaurant menu", "biryani menu Bhongir", "Chinese food Bhongir"]
});

export default function MenuPage() {
  return (
    <section className="bg-charcoal-radial pb-20 pt-32 sm:pb-24">
      <div className="container">
        <SectionHeading
          eyebrow="Menu"
          as="h1"
          title="Search biryani, Chinese and family dining favourites."
          description="Browse signature biryanis, Indo-Chinese plates, starters, curries, breads, rice and beverages."
        />
        <div className="mt-10">
          <MenuBrowser />
        </div>
      </div>
    </section>
  );
}
