export type ConversionEvent =
  | "call_click"
  | "whatsapp_click"
  | "order_click"
  | "menu_click"
  | "maps_click"
  | "catering_click"
  | "form_submit";

type TrackingPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(event: ConversionEvent, payload: TrackingPayload = {}) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("srgrand:conversion", {
      detail: {
        event,
        payload,
        at: new Date().toISOString()
      }
    })
  );

  window.gtag?.("event", event, {
    event_category: "conversion",
    ...payload
  });
}
