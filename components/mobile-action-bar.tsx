"use client";

import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackConversion } from "@/lib/tracking";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-background/92 px-3 py-2 safe-bottom backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={siteConfig.orderLinks.callOrder}
          onClick={() => trackConversion("call_click", { placement: "mobile_bar" })}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl border border-border/70 bg-secondary/70 text-xs font-semibold text-foreground"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={siteConfig.orderLinks.whatsappOrder}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackConversion("whatsapp_click", { placement: "mobile_bar" })}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl border border-leaf/35 bg-leaf/22 text-xs font-semibold text-foreground"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={siteConfig.orderLinks.zomato || "/menu"}
          target={siteConfig.orderLinks.zomato ? "_blank" : undefined}
          rel={siteConfig.orderLinks.zomato ? "noreferrer" : undefined}
          onClick={() => trackConversion("order_click", { placement: "mobile_bar" })}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl bg-primary text-xs font-semibold text-primary-foreground shadow-glow"
        >
          <ShoppingBag className="size-4" aria-hidden="true" />
          Order
        </a>
      </div>
    </div>
  );
}
