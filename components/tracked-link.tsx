"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackConversion, type ConversionEvent } from "@/lib/tracking";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  trackingEvent?: ConversionEvent;
  trackingMeta?: Record<string, string | number | boolean | undefined>;
};

export function TrackedLink({
  href,
  children,
  trackingEvent,
  trackingMeta,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (trackingEvent) trackConversion(trackingEvent, trackingMeta);
    onClick?.(event);
  };
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    return (
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
