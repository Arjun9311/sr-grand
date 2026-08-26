import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  showText = true,
  imageClassName
}: {
  className?: string;
  showText?: boolean;
  imageClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 sm:gap-3", className)}
      aria-label={`${siteConfig.businessName} home`}
    >
      <div
        className={cn(
          "relative size-10 sm:size-11 shrink-0 overflow-hidden rounded-xl border border-primary/40 bg-[#e51b24] shadow-md transition-transform duration-200 group-hover:scale-105 gpu-layer",
          imageClassName
        )}
      >
        <Image
          src="/images/logo.png"
          alt="SR Grand Family Restaurant Official Logo"
          fill
          sizes="48px"
          priority
          className="object-cover"
        />
      </div>
      {showText ? (
        <span className="leading-none">
          <span className="block font-display text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            SR Grand
          </span>
          <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/90">
            Family Restaurant
          </span>
        </span>
      ) : null}
    </Link>
  );
}
