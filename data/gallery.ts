export type GalleryCategory = "All" | "Food" | "Ambience" | "Kitchen" | "Team";

export type GalleryImage = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  alt: string;
  aspect: "wide" | "square" | "portrait";
  featured?: boolean;
};

// TODO_VERIFY: Generated launch placeholders. Replace with real owner-approved photos.
export const galleryImages: GalleryImage[] = [
  {
    id: "hero-biryani",
    title: "Signature biryani service",
    category: "Food",
    image: "/images/hero-biryani.png",
    alt: "Copper handi of chicken biryani with raita and salan at SR Grand Family Restaurant",
    aspect: "wide",
    featured: true
  },
  {
    id: "family-spread",
    title: "Family table spread",
    category: "Food",
    image: "/images/family-dining-spread.png",
    alt: "Biryani, naan, curries, rice and starters arranged for family dining",
    aspect: "wide",
    featured: true
  },
  {
    id: "chilli-starter",
    title: "Indo-Chinese starters",
    category: "Food",
    image: "/images/chilli-starter.png",
    alt: "Glossy chilli chicken style starter with spring onion and lemon",
    aspect: "square",
    featured: true
  },
  {
    id: "dining-room",
    title: "Warm dining room",
    category: "Ambience",
    image: "/images/restaurant-ambience.png",
    alt: "Warm modern family restaurant dining room with copper accents",
    aspect: "wide",
    featured: true
  },
  {
    id: "takeaway-counter",
    title: "Takeaway-ready packing",
    category: "Kitchen",
    image: "/images/family-dining-spread.png",
    alt: "Restaurant food spread prepared for takeaway and family meals",
    aspect: "square"
  },
  {
    id: "hospitality-table",
    title: "Set for families",
    category: "Team",
    image: "/images/restaurant-ambience.png",
    alt: "Comfortable table setting for families at a warm restaurant",
    aspect: "portrait"
  }
];

export const galleryCategories: GalleryCategory[] = ["All", "Food", "Ambience", "Kitchen", "Team"];
