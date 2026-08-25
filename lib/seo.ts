import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/utils";

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description = siteConfig.seo.description,
  path = "/",
  image = "/images/hero-biryani.png",
  keywords = []
}: PageMetadataInput): Metadata {
  const fullTitle =
    title === siteConfig.businessName
      ? `${siteConfig.businessName} | Biryani & Chinese in Bhongir`
      : siteConfig.seo.titleTemplate.replace("%s", title);
  const url = absoluteUrl(path, siteConfig.siteUrl);

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.seo.keywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.businessName,
      title: fullTitle,
      description,
      url,
      images: [
        {
          url: absoluteUrl(image, siteConfig.siteUrl),
          width: 1536,
          height: 864,
          alt: `${siteConfig.businessName} signature food and dining`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image, siteConfig.siteUrl)]
    }
  };
}
