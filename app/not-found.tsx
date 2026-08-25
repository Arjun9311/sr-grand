import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 pt-28 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-foreground">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground">
          We could not find that page. The menu and contact pages are the quickest way forward.
        </p>
        <Button asChild className="mt-6">
          <TrackedLink href="/menu">View Menu</TrackedLink>
        </Button>
      </div>
    </section>
  );
}
