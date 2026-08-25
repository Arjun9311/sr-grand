import { toTelHref, toWhatsAppHref } from "@/lib/utils";

const primaryPhone = "+919866010030"; // TODO_VERIFY: Zomato listing shows +91 98660 10030; confirm with owner before launch.
const orderMessage =
  "Hi SR Grand Family Restaurant, I would like to place an order. Please share today's menu and availability.";

export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://srgrandfamilyrestaurant.com", // TODO_VERIFY: Replace with the final official domain before deployment.
  businessName: "SR Grand Family Restaurant",
  localBusinessName: "SR గ్రాండ్ ఫ్యామిలీ రెస్టారెంట్",
  tagline: "Biryani, Chinese & warm family dining in Bhongir",
  description:
    "A premium local family restaurant in Bhongir / Bhuvanagiri serving biryani, Chinese favourites, Indian comfort dishes, takeaway and delivery-ready meals.",
  cuisines: ["Biryani", "Chinese", "Indian", "Family Dining"],
  serviceModes: {
    dineIn: true, // TODO_VERIFY: Public listings disagree; keep configurable.
    takeaway: true, // TODO_VERIFY: Public listings disagree; keep configurable.
    delivery: true
  },
  phones: {
    primary: primaryPhone,
    secondary: "", // TODO_VERIFY: Add owner-approved secondary phone if available.
    whatsapp: primaryPhone
  },
  address: {
    line1: "Medikuntapally",
    line2: "Near New Bus Stand, RTC Complex",
    locality: "Bhongir",
    city: "Bhuvanagiri",
    state: "Telangana",
    postalCode: "508116",
    landmark: "Bhuvanagiri Town Main Rd"
  },
  rating: {
    score: 3.9,
    reviewsCount: 52
  },
  geo: {
    lat: 17.514,
    lng: 78.889
  } as { lat: number | null; lng: number | null },
  hours: [
    { day: "Monday", open: "11:00", close: "23:00" },
    { day: "Tuesday", open: "11:00", close: "23:00" },
    { day: "Wednesday", open: "11:00", close: "23:00" },
    { day: "Thursday", open: "11:00", close: "23:00" },
    { day: "Friday", open: "11:00", close: "23:30" },
    { day: "Saturday", open: "11:00", close: "23:30" },
    { day: "Sunday", open: "11:00", close: "23:30" }
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=SR+GRAND+FAMILY+RESTAURANT+Medikuntapally+Bhuvanagiri+Telangana+508116",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=SR%20GRAND%20FAMILY%20RESTAURANT%20Medikuntapally%20Bhuvanagiri%20Telangana%20508116&t=&z=15&ie=UTF8&iwloc=&output=embed",
  orderLinks: {
    zomato: "https://www.zomato.com/hyderabad/sr-grand-family-restaurant-bhongiri-hyderabad-/order",
    swiggy: "", // TODO_VERIFY: Add official Swiggy link if/when confirmed.
    whatsappOrder: toWhatsAppHref(primaryPhone, orderMessage),
    callOrder: toTelHref(primaryPhone)
  },
  socialLinks: {
    instagram: "", // TODO_VERIFY: Add official Instagram profile.
    facebook: "", // TODO_VERIFY: Add official Facebook profile.
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=SR%20Grand%20Family%20Restaurant%20Bhongir",
    zomato: "https://www.zomato.com/hyderabad/sr-grand-family-restaurant-bhongiri-hyderabad-"
  },
  priceRange: "₹₹",
  heroBadges: ["Bhongir favourite", "Fresh biryani batches", "Family tables", "Takeaway ready"],
  featuredDishes: [
    "Chicken Dum Biryani",
    "Mutton Dum Biryani",
    "Chicken 65",
    "Veg Fried Rice",
    "Paneer Butter Masala"
  ],
  seo: {
    titleTemplate: "%s | SR Grand Family Restaurant",
    description:
      "SR Grand Family Restaurant in Bhongir / Bhuvanagiri serves biryani, Chinese favourites, family dining, takeaway and delivery-ready meals.",
    keywords: [
      "SR Grand Family Restaurant",
      "SR Grand Family Restaurant menu",
      "Bhongir restaurant",
      "Bhuvanagiri restaurant",
      "biryani in Bhongir",
      "Chinese restaurant Bhongir",
      "family restaurant Bhuvanagiri",
      "takeaway Bhongir"
    ]
  },
  legal: {
    fssai: "", // TODO_VERIFY: Add FSSAI license number if provided by owner.
    privacyEmail: "" // TODO_VERIFY: Add official privacy/contact email if available.
  },
  notes: [
    "TODO_VERIFY: Confirm exact address, postal code, geo coordinates and landmark with the owner.",
    "TODO_VERIFY: Confirm dine-in, takeaway, delivery and marketplace availability before launch.",
    "TODO_VERIFY: Replace generated food/interior imagery with owner-approved real photography when available.",
    "TODO_VERIFY: Replace sample menu prices with the final owner-approved menu."
  ]
} as const;

export type SiteConfig = typeof siteConfig;
