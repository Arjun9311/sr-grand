"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, X, UtensilsCrossed, Sparkles } from "lucide-react";
import { menuCategories, menuItems, type MenuCategoryId, type MenuItem } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { TrackedLink } from "@/components/tracked-link";
import { warmBlurDataUrl } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type DietaryFilter = "all" | "veg" | "non-veg" | "egg";

function DietaryMark({ dietary }: { dietary: MenuItem["dietary"] }) {
  const styles = {
    veg: "border-leaf text-leaf",
    "non-veg": "border-red-500 text-red-500",
    egg: "border-primary text-primary"
  };

  return (
    <span
      className={cn("grid size-5 place-items-center rounded-[4px] border", styles[dietary])}
      title={dietary === "veg" ? "Pure Vegetarian" : dietary === "non-veg" ? "Non-Vegetarian" : "Contains Egg"}
    >
      <span
        className={cn(
          "size-2.5 rounded-full",
          dietary === "veg" && "bg-leaf",
          dietary === "non-veg" && "bg-red-500",
          dietary === "egg" && "bg-primary"
        )}
      />
      <span className="sr-only">{dietary}</span>
    </span>
  );
}

function SpiceDots({ spice = 0 }: { spice?: MenuItem["spice"] }) {
  if (spice === 0) return null;
  return (
    <div className="flex items-center gap-1.5" title={`Spice Level ${spice}/3`}>
      <span className="text-[11px] font-medium text-muted-foreground">Spice:</span>
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((level) => (
          <span
            key={level}
            className={cn(
              "size-2 rounded-full transition-colors",
              spice >= level ? "bg-red-500" : "bg-muted-foreground/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}

function MenuItemImage({ item }: { item: MenuItem }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
      <Image
        src={hasError ? "/images/hero-biryani.png" : item.image || "/images/hero-biryani.png"}
        alt={`Freshly prepared ${item.name} (${item.dietary === "veg" ? "Pure Veg" : item.dietary === "egg" ? "Egg" : "Non-Veg"}) at SR Grand Family Restaurant`}
        fill
        loading="lazy"
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        placeholder="blur"
        blurDataURL={warmBlurDataUrl}
        onError={() => setHasError(true)}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
    </div>
  );
}

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>("all");
  const [dietaryFilter, setDietaryFilter] = useState<DietaryFilter>("all");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all"
          ? true
          : activeCategory === "specials"
            ? item.featured || item.category === "specials" || item.bestseller
            : item.category === activeCategory;

      const matchesDietary =
        dietaryFilter === "all" ? true : item.dietary === dietaryFilter;

      const matchesQuery =
        !normalized ||
        item.name.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized);

      return matchesCategory && matchesDietary && matchesQuery;
    });
  }, [activeCategory, dietaryFilter, query]);

  const activeCategoryObj = menuCategories.find((c) => c.id === activeCategory);

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Controls */}
      <div className="sticky top-20 z-30 -mx-4 space-y-3 border-y border-border/70 bg-background/95 p-4 shadow-sm backdrop-blur-xl sm:top-20 sm:mx-0 sm:rounded-2xl sm:border sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_320px]">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={cn(
                  "relative h-11 shrink-0 rounded-full px-4 text-sm font-semibold transition hover:text-foreground",
                  activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground"
                )}
              >
                {activeCategory === category.id ? (
                  <motion.span
                    layoutId="menu-category-pill"
                    className="absolute inset-0 rounded-full bg-primary shadow-sm"
                    transition={{ duration: 0.28 }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full border border-border/70 bg-secondary/30 transition hover:bg-secondary/60" />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <label className="relative block">
            <span className="sr-only">Search menu items</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search dishes, paneer, biryani, chicken..."
              className="pr-9 pl-10 h-11 rounded-full bg-secondary/20"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </label>
        </div>

        {/* Dietary preference filter pills & Active Count */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-3">
          <div className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="mr-1 text-xs font-semibold text-muted-foreground">Filter:</span>
            {(
              [
                { id: "all", label: "All Items" },
                { id: "veg", label: "Pure Veg 🌿" },
                { id: "non-veg", label: "Non-Veg 🍗" },
                { id: "egg", label: "Egg 🥚" }
              ] as const
            ).map((filter) => (
              <button
                key={filter.id}
                onClick={() => setDietaryFilter(filter.id)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold transition",
                  dietaryFilter === filter.id
                    ? "bg-foreground text-background shadow"
                    : "border border-border/70 bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-muted-foreground">
            Showing <strong className="text-foreground">{filteredItems.length}</strong> items
          </div>
        </div>
      </div>

      {/* Category description */}
      {activeCategoryObj && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {activeCategoryObj.description}
          </p>
        </div>
      )}

      {/* Grid of Dishes */}
      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition hover:border-primary/40 hover:shadow-md"
              >
                <MenuItemImage item={item} />

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <DietaryMark dietary={item.dietary} />
                        {item.bestseller ? (
                          <Badge className="bg-primary/20 text-primary border-primary/30 text-[11px] font-semibold">
                            <Sparkles className="mr-1 size-3" />
                            Bestseller
                          </Badge>
                        ) : null}
                      </div>
                      <span className="shrink-0 rounded-full bg-primary/12 px-3 py-1 font-display text-base font-bold text-primary">
                        {item.price}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-3">
                    <SpiceDots spice={item.spice} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full rounded-2xl border border-dashed border-border/80 bg-card/60 p-12 text-center"
            >
              <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                <UtensilsCrossed className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                No matching dishes found
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Try searching for something else, clearing your dietary filter, or choosing a different category.
              </p>
              <Button
                variant="outline"
                className="mt-5"
                onClick={() => {
                  setActiveCategory("all");
                  setDietaryFilter("all");
                  setQuery("");
                }}
              >
                Reset All Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Call to action card */}
      <div className="rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5 p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Craving your favourites?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Order directly for fast takeaway or delivery in Bhongir via WhatsApp or Zomato.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Button asChild className="shadow-md">
              <TrackedLink
                href={siteConfig.orderLinks.zomato || siteConfig.orderLinks.whatsappOrder}
                target="_blank"
                rel="noreferrer"
                trackingEvent="order_click"
                trackingMeta={{ placement: "menu_cta" }}
              >
                <ShoppingBag aria-hidden="true" className="mr-1.5 size-4" />
                Order on Zomato
              </TrackedLink>
            </Button>
            <Button asChild variant="outline" className="bg-background/60">
              <TrackedLink
                href={siteConfig.orderLinks.whatsappOrder}
                target="_blank"
                rel="noreferrer"
                trackingEvent="whatsapp_click"
                trackingMeta={{ placement: "menu_cta" }}
              >
                WhatsApp Order
              </TrackedLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
