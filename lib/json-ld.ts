import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/utils";

const dayMap: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday"
};

export function restaurantJsonLd(path = "/") {
  const sameAs = [
    siteConfig.socialLinks.instagram,
    siteConfig.socialLinks.facebook,
    siteConfig.socialLinks.googleMaps,
    siteConfig.socialLinks.zomato
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness", "Organization"],
    name: siteConfig.businessName,
    alternateName: siteConfig.localBusinessName,
    url: absoluteUrl(path, siteConfig.siteUrl),
    logo: absoluteUrl("/images/logo.png", siteConfig.siteUrl),
    image: absoluteUrl("/images/hero-biryani.png", siteConfig.siteUrl),
    description: siteConfig.description,
    telephone: siteConfig.phones.primary,
    servesCuisine: siteConfig.cuisines,
    priceRange: siteConfig.priceRange,
    menu: absoluteUrl("/menu", siteConfig.siteUrl),
    sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: [siteConfig.address.line1, siteConfig.address.line2].filter(Boolean).join(", "),
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN"
    },
    ...(siteConfig.geo.lat && siteConfig.geo.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.lat,
            longitude: siteConfig.geo.lng
          }
        }
      : {}),
    openingHoursSpecification: siteConfig.hours.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[item.day],
      opens: item.open,
      closes: item.close
    })),
    potentialAction: [
      {
        "@type": "OrderAction",
        target: siteConfig.orderLinks.zomato || siteConfig.orderLinks.whatsappOrder
      },
      {
        "@type": "ReserveAction",
        target: siteConfig.orderLinks.callOrder
      }
    ]
  };
}
