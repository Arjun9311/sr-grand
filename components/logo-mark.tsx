import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function LogoMark({
  className,
  imageClassName,
  showText = true,
  size = "md"
}: LogoMarkProps) {
  const sizeConfig = {
    sm: { dimension: 36, container: "size-9 rounded-xl" },
    md: { dimension: 44, container: "size-11 sm:size-12 rounded-2xl" },
    lg: { dimension: 56, container: "size-14 sm:size-16 rounded-2xl" }
  }[size];

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${siteConfig.businessName} home`}
    >
      <span
        className={cn(
          "relative grid place-items-center overflow-hidden border border-red-500/40 bg-[#d60000] p-1 shadow-[0_0_18px_rgba(214,0,0,0.28)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(214,0,0,0.45)]",
          sizeConfig.container,
          imageClassName
        )}
      >
        <Image
          src="/images/logo.png"
          alt={`${siteConfig.businessName} logo`}
          width={sizeConfig.dimension}
          height={sizeConfig.dimension}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      {showText && (
        <span className="leading-none">
          <span className="block font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
            SR Grand
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400 sm:text-[11px]">
            Family Restaurant
          </span>
        </span>
      )}
    </Link>
  );
}

