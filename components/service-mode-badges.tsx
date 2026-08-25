import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

const labels = {
  dineIn: "Dine-in",
  takeaway: "Takeaway",
  delivery: "Delivery"
} as const;

export function ServiceModeBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(siteConfig.serviceModes)
        .filter(([, enabled]) => enabled)
        .map(([key]) => (
          <Badge key={key} variant="success" className={compact ? "px-2.5 py-1" : undefined}>
            <CheckCircle2 className="mr-1.5 size-3.5" aria-hidden="true" />
            {labels[key as keyof typeof labels]}
          </Badge>
        ))}
    </div>
  );
}
