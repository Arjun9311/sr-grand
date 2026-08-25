"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/logo-mark";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/88 shadow-lg backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between" aria-label="Main navigation">
        <LogoMark />

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/18 p-1 backdrop-blur-md lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <TrackedLink
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/16"
                    transition={{ duration: 0.35 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </TrackedLink>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <TrackedLink href={siteConfig.orderLinks.callOrder} trackingEvent="call_click">
              <Phone aria-hidden="true" />
              Call
            </TrackedLink>
          </Button>
          <Button asChild size="sm">
            <TrackedLink
              href={siteConfig.orderLinks.zomato || siteConfig.orderLinks.whatsappOrder}
              trackingEvent="order_click"
              target="_blank"
              rel="noreferrer"
            >
              <ShoppingBag aria-hidden="true" />
              Order Now
            </TrackedLink>
          </Button>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Open navigation menu"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container pb-4 lg:hidden"
          >
            <div className="glass-panel grid gap-2 rounded-2xl border border-border/70 p-3">
              {navItems.map((item) => (
                <TrackedLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-primary/10 hover:text-foreground",
                    pathname === item.href && "bg-primary/12 text-foreground"
                  )}
                >
                  {item.label}
                </TrackedLink>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button asChild variant="outline">
                  <TrackedLink href={siteConfig.orderLinks.callOrder} trackingEvent="call_click">
                    <Phone aria-hidden="true" />
                    Call
                  </TrackedLink>
                </Button>
                <Button asChild>
                  <TrackedLink
                    href={siteConfig.orderLinks.whatsappOrder}
                    trackingEvent="whatsapp_click"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </TrackedLink>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
