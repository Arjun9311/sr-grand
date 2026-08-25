export type CateringPackage = {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  minGuests: number;
  startingPrice: string;
  popular?: boolean;
  image: string;
  highlights: string[];
  menuIncludes: {
    starters: string[];
    mains: string[];
    riceAndBiryani: string[];
    breads: string[];
    dessertAndDrinks: string[];
  };
};

export type CateringService = {
  icon: string;
  title: string;
  description: string;
};

export const cateringStats = [
  { value: "500+", label: "Catering Events Served" },
  { value: "50 - 2,000+", label: "Guest Capacity" },
  { value: "100%", label: "Fresh On-Site / Hot Handi Delivery" },
  { value: "4.8 ★", label: "Customer Satisfaction" }
];

export const cateringServices: CateringService[] = [
  {
    icon: "Utensils",
    title: "Live Cooking Counters",
    description: "Live hot Tandoor rotis, sizzler starters, and dosa/chaat stations managed by uniformed chefs."
  },
  {
    icon: "Truck",
    title: "Insulated Hot-Handi Delivery",
    description: "Sealed copper-finish handis and thermal containers preserving steaming aroma and temperature."
  },
  {
    icon: "Users",
    title: "Full-Service Hospitality Staff",
    description: "Trained, courteous service crew, chafing dish buffet setup, cutlery, and clean-up services."
  },
  {
    icon: "ShieldCheck",
    title: "Strict Veg & Non-Veg Segregation",
    description: "Dedicated kitchen vessels, utensils, and service lines ensuring pristine culinary integrity."
  }
];

export const cateringPackages: CateringPackage[] = [
  {
    id: "royal-biryani-feast",
    name: "Royal Biryani Feast",
    tagline: "The signature SR Grand biryani feast for memorable gatherings.",
    idealFor: "Family get-togethers, birthdays, housewarmings & weekend parties",
    minGuests: 25,
    startingPrice: "₹299 / guest",
    popular: true,
    image: "/images/hero-biryani.png",
    highlights: [
      "Signature Chicken Dum Biryani / Paneer Dum Biryani",
      "Crispy Starters (Chicken 65 / Paneer 65)",
      "Mirchi Ka Salan & Cucumber-Mint Raita",
      "Choice of Fresh Beverage or Sweet Dessert"
    ],
    menuIncludes: {
      starters: ["Chicken 65 / Gobi 65", "Veg Spring Rolls"],
      mains: ["Special Gravy Curry"],
      riceAndBiryani: ["Hyderabadi Chicken Dum Biryani", "Special Paneer Biryani"],
      breads: ["Butter Naan / Rumali Roti"],
      dessertAndDrinks: ["Gulab Jamun / Double Ka Meetha", "Fresh Lime Soda"]
    }
  },
  {
    id: "grand-wedding-celebration",
    name: "Grand Wedding & Reception Spread",
    tagline: "Lavish multi-course banquet with live buffet & starter service.",
    idealFor: "Weddings, receptions, engagement ceremonies & jubilee anniversaries",
    minGuests: 100,
    startingPrice: "₹499 / guest",
    popular: false,
    image: "/images/family-dining-spread.png",
    highlights: [
      "3 Appetizers + 2 Welcome Drinks",
      "Live Tandoor counter with Naans & Rotis",
      "2 Rich Curries (Butter Chicken / Kaju Paneer)",
      "Dual Biryani options + Curd Rice + Desserts"
    ],
    menuIncludes: {
      starters: ["Tandoori Chicken Tikka", "Apollo Fish", "Paneer Majestic"],
      mains: ["Butter Chicken Boneless", "Kaju Paneer Masala", "Dal Tadka"],
      riceAndBiryani: ["SR Grand Special Biryani", "Curd Rice (Daddojanam)", "Jeera Rice"],
      breads: ["Garlic Naan", "Butter Naan", "Tandoori Roti"],
      dessertAndDrinks: ["Special Ice Cream with Gulab Jamun", "Fresh Fruit Punch"]
    }
  },
  {
    id: "corporate-executive-buffet",
    name: "Corporate & Institutional Buffet",
    tagline: "Punctual, hygienic and balanced meals for conferences & team lunches.",
    idealFor: "Office lunches, conferences, seminar meets & institutional events",
    minGuests: 30,
    startingPrice: "₹249 / guest",
    popular: false,
    image: "/images/menu/chicken-fried-rice.jpg",
    highlights: [
      "Indo-Chinese Fried Rice & Hakka Noodles Combo",
      "Choice of Manchurian & Crispy Starters",
      "Comforting Curries & Fresh Breads",
      "Packed Bento Boxes or Buffet Setup Available"
    ],
    menuIncludes: {
      starters: ["Veg Manchurian", "Chilli Chicken / Chilli Paneer"],
      mains: ["Kadai Chicken / Mixed Veg Curry"],
      riceAndBiryani: ["Special Chicken Fried Rice", "Veg Fried Rice"],
      breads: ["Butter Roti"],
      dessertAndDrinks: ["Sweet Dessert", "Mineral Water 500ml"]
    }
  }
];

export const cateringOccasions = [
  { name: "Weddings & Receptions", icon: "HeartHandshake" },
  { name: "Birthday & Anniversary Parties", icon: "Cake" },
  { name: "Housewarming (Gruhapravesam)", icon: "Home" },
  { name: "Corporate Conferences & Team Meets", icon: "Briefcase" },
  { name: "Yadagirigutta Pilgrimage & Travel Groups", icon: "Bus" },
  { name: "Festivals & Cultural Gatherings", icon: "Sparkles" }
];
