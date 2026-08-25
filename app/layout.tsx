import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import { JsonLd } from "@/components/json-ld";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { MotionProvider } from "@/components/motion-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { restaurantJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  ...createPageMetadata({
    title: siteConfig.businessName,
    path: "/"
  })
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#140f0c"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} dark`} data-scroll-behavior="smooth">
      <body className="font-sans">
        <MotionProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <MobileActionBar />
          <Toaster
            richColors
            theme="dark"
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast: "border-border bg-card text-foreground"
              }
            }}
          />
        </MotionProvider>
        <JsonLd data={restaurantJsonLd("/")} />
      </body>
    </html>
  );
}
