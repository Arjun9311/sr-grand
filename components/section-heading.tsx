import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <Heading className="font-display text-4xl font-semibold leading-tight text-balance text-foreground sm:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
