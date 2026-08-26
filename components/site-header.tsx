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
    const onScroll = () => {
      const isScrolled = window.scrollY > 16;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled ? "border-b border-border/70 bg-background/94 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 sm:h-20 items-center justify-between" aria-label="Main navigation">
        <LogoMark />

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/25 p-1 backdrop-blur-md lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <TrackedLink
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground font-semibold"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/16"
                    transition={{ duration: 0.25 }}
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
          className="lg:hidden active:scale-95 transition-transform"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Open navigation menu"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </Button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container pb-4 lg:hidden max-h-[calc(100svh-4.5rem)] overflow-y-auto"
          >
            <div className="glass-panel grid gap-2 rounded-2xl border border-border/80 p-3 shadow-xl">
              {navItems.map((item) => (
                <TrackedLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-semibold text-muted-foreground transition-colors active:bg-primary/20",
                    pathname === item.href ? "bg-primary/15 text-primary" : "hover:bg-primary/10 hover:text-foreground"
                  )}
                >
                  {item.label}
                </TrackedLink>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/50">
                <Button asChild variant="outline" className="active:scale-95 transition-transform">
                  <TrackedLink href={siteConfig.orderLinks.callOrder} trackingEvent="call_click">
                    <Phone aria-hidden="true" className="mr-1.5 size-4" />
                    Call
                  </TrackedLink>
                </Button>
                <Button asChild className="active:scale-95 transition-transform">
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
