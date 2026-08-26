"use client";

import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackConversion } from "@/lib/tracking";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 px-3 py-2 safe-bottom backdrop-blur-md md:hidden gpu-layer shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={siteConfig.orderLinks.callOrder}
          onClick={() => trackConversion("call_click", { placement: "mobile_bar" })}
          className="flex min-h-[50px] flex-col items-center justify-center gap-1 rounded-xl border border-border/80 bg-secondary/80 text-xs font-semibold text-foreground active:scale-95 active:bg-secondary transition-transform duration-100"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={siteConfig.orderLinks.whatsappOrder}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackConversion("whatsapp_click", { placement: "mobile_bar" })}
          className="flex min-h-[50px] flex-col items-center justify-center gap-1 rounded-xl border border-leaf/40 bg-leaf/20 text-xs font-semibold text-foreground active:scale-95 active:bg-leaf/30 transition-transform duration-100"
        >
          <MessageCircle className="size-4 text-leaf" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={siteConfig.orderLinks.zomato || "/menu"}
          target={siteConfig.orderLinks.zomato ? "_blank" : undefined}
          rel={siteConfig.orderLinks.zomato ? "noreferrer" : undefined}
          onClick={() => trackConversion("order_click", { placement: "mobile_bar" })}
          className="flex min-h-[50px] flex-col items-center justify-center gap-1 rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-md active:scale-95 active:bg-primary/90 transition-transform duration-100"
        >
          <ShoppingBag className="size-4" aria-hidden="true" />
          Order
        </a>
      </div>
    </div>
  );
}
