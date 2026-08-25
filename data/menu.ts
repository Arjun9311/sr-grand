export type MenuCategoryId =
  | "all"
  | "specials"
  | "biryani"
  | "starters"
  | "curries"
  | "breads"
  | "chinese"
  | "rice"
  | "beverages";

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  description: string;
};

export type MenuItem = {
  id: string;
  category: MenuCategoryId;
  name: string;
  description: string;
  price: string;
  dietary: "veg" | "non-veg" | "egg";
  spice?: 0 | 1 | 2 | 3;
  image: string;
  bestseller?: boolean;
  featured?: boolean;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "all",
    label: "All",
    description: "Explore all authentic biryanis, starters, curries, breads, Chinese and beverages."
  },
  {
    id: "specials",
    label: "Specials",
    description: "House picks, signature gravies and family pack specials."
  },
  {
    id: "biryani",
    label: "Biryani",
    description: "Layered basmati rice, slow-cooked masala, paneer, egg, chicken and prawns."
  },
  {
    id: "starters",
    label: "Starters",
    description: "Crisp veg & non-veg starters, tandoori chicken, lollipops and apollo fish."
  },
  {
    id: "curries",
    label: "Main Course",
    description: "Rich gravies, paneer curries, spicy chicken curries and regional specials."
  },
  {
    id: "breads",
    label: "Breads",
    description: "Tandoori rotis, butter naans, garlic naans and stuffed kulchas."
  },
  {
    id: "chinese",
    label: "Fried Rice & Noodles",
    description: "Wok-tossed noodles, Indo-Chinese favourites and loaded fried rice."
  },
  {
    id: "rice",
    label: "Rice & Sides",
    description: "Tomato rice, curd rice and fresh accompaniments."
  },
  {
    id: "beverages",
    label: "Beverages",
    description: "Packaged mineral water and chilled refreshers."
  }
];

export const menuItems: MenuItem[] = [
  // ==========================================
  // RICE AND BIRYANI - BIRYANI
  // ==========================================
  {
    id: "special-paneer-biryani",
    category: "biryani",
    name: "Special Paneer Biryani",
    description: "[Serves 1-2] Basmati rice cooked with paneer cubes, spices and herbs.",
    price: "₹249",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/paneer-biryani.jpg",
    featured: true
  },
  {
    id: "paneer-biryani",
    category: "biryani",
    name: "Paneer Biryani",
    description: "[Serves 1-2] Basmati rice cooked with soft paneer cubes and biryani spices.",
    price: "₹219",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/paneer-biryani.jpg"
  },
  {
    id: "special-egg-biryani",
    category: "biryani",
    name: "Special Egg Biryani",
    description: "[Serves 1-2] Basmati rice layered with boiled eggs, spices and herbs.",
    price: "₹199",
    dietary: "egg",
    spice: 2,
    image: "/images/menu/egg-biryani.jpg"
  },
  {
    id: "egg-biryani-2-pieces",
    category: "biryani",
    name: "Egg Biryani [2 Pieces]",
    description: "[Serves 1-2] Biryani rice prepared with boiled eggs and biryani spices.",
    price: "₹179",
    dietary: "egg",
    spice: 2,
    image: "/images/menu/egg-biryani.jpg"
  },
  {
    id: "sr-grand-special-murgh-malai-biryani",
    category: "biryani",
    name: "SR Grand Special Murgh Malai Biryani",
    description: "[Serves 1-2] Biryani rice cooked with malai chicken and spices.",
    price: "₹289",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/murgh-malai-biryani.jpg",
    bestseller: true,
    featured: true
  },
  {
    id: "chicken-dum-biryani",
    category: "biryani",
    name: "Chicken Dum Biryani",
    description: "[Serves 1-2] Marinated chicken, Basmati rice, Indian spices and cooked together.",
    price: "₹229",
    dietary: "non-veg",
    spice: 2,
    image: "/images/hero-biryani.png",
    bestseller: true,
    featured: true
  },
  {
    id: "special-chicken-biryani",
    category: "biryani",
    name: "Special Chicken Biryani",
    description: "[Serves 1-2] Boneless chicken biryani medium spicy.",
    price: "₹269",
    dietary: "non-veg",
    spice: 2,
    image: "/images/hero-biryani.png",
    bestseller: true,
    featured: true
  },
  {
    id: "chicken-biryani",
    category: "biryani",
    name: "Chicken Biryani",
    description: "[Serves 1-2] Basmati rice cooked with tender chicken, spices and herbs.",
    price: "₹219",
    dietary: "non-veg",
    spice: 2,
    image: "/images/hero-biryani.png"
  },
  {
    id: "prawns-biryani",
    category: "biryani",
    name: "Prawns Biryani",
    description: "[Serves 1-2] Biryani rice cooked with prawns and biryani masala.",
    price: "₹299",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/prawns-biryani.jpg",
    featured: true
  },
  {
    id: "paneer-biryani-family-pack",
    category: "biryani",
    name: "Paneer Biryani [Family Pack]",
    description: "Yummy paneer biryani with fragrant basmati rice in a generous family portion.",
    price: "₹549",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/paneer-biryani.jpg"
  },
  {
    id: "chicken-dum-biryani-family-pack",
    category: "biryani",
    name: "Chicken Dum Biryani [Family Pack]",
    description: "Marinated chicken, Basmati rice, Indian spices cooked together for the whole family.",
    price: "₹599",
    dietary: "non-veg",
    spice: 2,
    image: "/images/family-dining-spread.png",
    bestseller: true
  },

  // ==========================================
  // RICE AND BIRYANI - RICE
  // ==========================================
  {
    id: "tomato-rice",
    category: "rice",
    name: "Tomato Rice",
    description: "Rice cooked in a spiced tomato based gravy.",
    price: "₹149",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/tomato-rice.jpg"
  },
  {
    id: "curd-rice",
    category: "rice",
    name: "Curd Rice",
    description: "Rice mixed with yogurt and mild seasoning.",
    price: "₹119",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/curd-rice.jpg"
  },
  {
    id: "plain-curd",
    category: "rice",
    name: "Plain Curd",
    description: "Fresh plain yogurt served as a refreshing side.",
    price: "₹40",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/curd-rice.jpg"
  },

  // ==========================================
  // STARTERS - VEG STARTERS
  // ==========================================
  {
    id: "paneer-ginger",
    category: "starters",
    name: "Paneer Ginger",
    description: "[Serves 1-2] Paneer pieces, ginger cooked in spiced gravy.",
    price: "₹209",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/paneer-tikka-masala.jpg"
  },
  {
    id: "paneer-majestic",
    category: "starters",
    name: "Paneer Majestic",
    description: "[Serves 1-2] Fried paneer cubes tossed in a spicy sauce with seasonings.",
    price: "₹219",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/gobi-65.jpg",
    featured: true
  },
  {
    id: "paneer-65",
    category: "starters",
    name: "Paneer 65",
    description: "[Serves 1-2] Paneer cubes marinated in spices, coated in batter and fried.",
    price: "₹199",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/gobi-65.jpg"
  },
  {
    id: "chilli-paneer",
    category: "starters",
    name: "Chilli Paneer",
    description: "[Serves 1-2] Paneer cubes tossed in a spicy sauces with veggies.",
    price: "₹209",
    dietary: "veg",
    spice: 2,
    image: "/images/chilli-starter.png"
  },
  {
    id: "gobi-65",
    category: "starters",
    name: "Gobi 65",
    description: "[Serves 1-2] Cauliflower marinated in spices, fried until crispy.",
    price: "₹179",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/gobi-65.jpg"
  },
  {
    id: "gobi-manchurian",
    category: "starters",
    name: "Gobi Manchurian",
    description: "[Serves 1-2] Cauliflower tossed in various sauces and spices.",
    price: "₹179",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/veg-manchurian.jpg"
  },

  // ==========================================
  // STARTERS - NON VEG STARTERS
  // ==========================================
  {
    id: "chicken-rajadhani",
    category: "starters",
    name: "Chicken Rajadhani",
    description: "[Serves 1-2] Chicken cooked with spices and herbs.",
    price: "₹239",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/chicken-majestic.jpg"
  },
  {
    id: "tandoori-chicken",
    category: "starters",
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, then cooked to smoky perfection.",
    price: "₹289",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/tandoori-chicken.jpg",
    bestseller: true,
    featured: true
  },
  {
    id: "chicken-manchurian",
    category: "starters",
    name: "Chicken Manchurian",
    description: "[Serves 1-2] Fried chicken pieces tossed in spices and sauces.",
    price: "₹229",
    dietary: "non-veg",
    spice: 2,
    image: "/images/chilli-starter.png"
  },
  {
    id: "chilli-chicken",
    category: "starters",
    name: "Chilli Chicken",
    description: "[Serves 1-2] Fried chicken cooked with veggies and spicy sauces.",
    price: "₹239",
    dietary: "non-veg",
    spice: 3,
    image: "/images/chilli-starter.png",
    bestseller: true
  },
  {
    id: "chicken-65",
    category: "starters",
    name: "Chicken 65",
    description: "[Serves 1-2] Chicken pieces marinated in masala, fried and tossed in sauces.",
    price: "₹219",
    dietary: "non-veg",
    spice: 3,
    image: "/images/chilli-starter.png",
    bestseller: true,
    featured: true
  },
  {
    id: "pepper-chicken",
    category: "starters",
    name: "Pepper Chicken",
    description: "[Serves 1-2] Chicken cooked with crushed black pepper and spices.",
    price: "₹229",
    dietary: "non-veg",
    spice: 3,
    image: "/images/menu/pepper-chicken.jpg"
  },
  {
    id: "chicken-majestic",
    category: "starters",
    name: "Chicken Majestic",
    description: "[Serves 1-2] Chicken strips tossed in yogurt, garlic and spices.",
    price: "₹239",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/chicken-majestic.jpg",
    featured: true
  },
  {
    id: "ginger-chicken",
    category: "starters",
    name: "Ginger Chicken",
    description: "[Serves 1-2] Chicken cooked with ginger and aromatic spices.",
    price: "₹229",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/chicken-majestic.jpg"
  },
  {
    id: "chicken-lollipop-6-pieces",
    category: "starters",
    name: "Chicken Lollipop [6 Pieces]",
    description: "[6 Pieces] Crispy chicken shaped in lollipop, coated in batter and fried.",
    price: "₹249",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/chicken-lollipop.jpg",
    bestseller: true
  },
  {
    id: "chicken-drumstick-6-pieces",
    category: "starters",
    name: "Chicken Drumstick [6 Pieces]",
    description: "[6 Pieces] Chicken legs marinated in spices and fried till crispy.",
    price: "₹249",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/tandoori-chicken.jpg"
  },
  {
    id: "chicken-tikka",
    category: "starters",
    name: "Chicken Tikka",
    description: "[8 Pieces] Chicken pieces marinated in spices and grilled in tandoor.",
    price: "₹259",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/tandoori-chicken.jpg"
  },
  {
    id: "apollo-fish",
    category: "starters",
    name: "Apollo Fish",
    description: "[Serves 1-2] Boneless fish pieces tossed in spicy South Indian style masala.",
    price: "₹279",
    dietary: "non-veg",
    spice: 3,
    image: "/images/menu/apollo-fish.jpg",
    featured: true
  },

  // ==========================================
  // MAIN COURSE - VEG MAIN COURSE (CURRIES)
  // ==========================================
  {
    id: "malai-kofta",
    category: "curries",
    name: "Malai Kofta",
    description: "[Serves 1-2] Soft paneer balls cooked in creamy, mild spiced gravy.",
    price: "₹229",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/shahi-paneer.jpg"
  },
  {
    id: "kaju-paneer",
    category: "curries",
    name: "Kaju Paneer",
    description: "[Serves 1-2] Curry made of rich cashews, fresh paneer and spices.",
    price: "₹249",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/kaju-paneer.jpg",
    featured: true
  },
  {
    id: "kaju-masala",
    category: "curries",
    name: "Kaju Masala",
    description: "[Serves 1-2] Cashews cooked in a creamy, mildly spiced gravy.",
    price: "₹239",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/kaju-paneer.jpg"
  },
  {
    id: "kaju-curry",
    category: "curries",
    name: "Kaju Curry",
    description: "[Serves 1-2] Creamy curry made with cashew nuts cooked in flavorful gravy.",
    price: "₹239",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/kaju-paneer.jpg"
  },
  {
    id: "shahi-paneer",
    category: "curries",
    name: "Shahi Paneer",
    description: "[Serves 1-2] Paneer cubes in creamy tomato and cashew gravy with royal spices.",
    price: "₹229",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/shahi-paneer.jpg"
  },
  {
    id: "mixed-veg-curry",
    category: "curries",
    name: "Mixed Veg Curry",
    description: "[Serves 1-2] Mix of seasonal vegetables cooked in flavorful gravy.",
    price: "₹189",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/paneer-tikka-masala.jpg"
  },
  {
    id: "paneer-tikka-masala",
    category: "curries",
    name: "Paneer Tikka Masala",
    description: "[Serves 1-2] Grilled paneer cubes cooked in spiced tomato gravy.",
    price: "₹229",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/paneer-tikka-masala.jpg"
  },
  {
    id: "kadhai-paneer",
    category: "curries",
    name: "Kadhai Paneer",
    description: "[Serves 1-2] Paneer pieces cooked in spiced kadhai gravy with capsicum.",
    price: "₹219",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/paneer-tikka-masala.jpg"
  },
  {
    id: "keema-paneer",
    category: "curries",
    name: "Keema Paneer",
    description: "[Serves 1-2] Paneer kheema cooked in spiced gravy with veggies.",
    price: "₹219",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/paneer-tikka-masala.jpg"
  },

  // ==========================================
  // MAIN COURSE - NON VEG MAIN COURSE (CURRIES)
  // ==========================================
  {
    id: "chicken-tikka-masala",
    category: "curries",
    name: "Chicken Tikka Masala",
    description: "[Serves 1-2] Grilled chicken pieces in a creamy spiced tomato gravy.",
    price: "₹269",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/butter-chicken.jpg"
  },
  {
    id: "tangdi-chicken-masala",
    category: "curries",
    name: "Tangdi Chicken Masala",
    description: "[Serves 1-2] Chicken drumsticks cooked in spicy gravy with Indian spices.",
    price: "₹279",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/kadai-chicken.jpg"
  },
  {
    id: "chicken-curry",
    category: "curries",
    name: "Chicken Curry",
    description: "[Serves 1-2] Chicken cooked in spiced onion and tomato gravy.",
    price: "₹239",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/telangana-chicken.jpg"
  },
  {
    id: "chicken-fry",
    category: "curries",
    name: "Chicken Fry",
    description: "[Serves 1-2] Chicken pieces dry fried with aromatic South Indian spices.",
    price: "₹229",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/pepper-chicken.jpg"
  },
  {
    id: "butter-chicken-boneless",
    category: "curries",
    name: "Butter Chicken Boneless",
    description: "[Serves 1-2] Tender boneless chicken pieces cooked in spiced gravy topped with butter.",
    price: "₹269",
    dietary: "non-veg",
    spice: 1,
    image: "/images/menu/butter-chicken.jpg",
    bestseller: true,
    featured: true
  },
  {
    id: "kadai-chicken",
    category: "curries",
    name: "Kadai Chicken",
    description: "[Serves 1-2] Chicken curry cooked with crunchy bell peppers and ground kadai spices.",
    price: "₹249",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/kadai-chicken.jpg"
  },
  {
    id: "chicken-kolhapuri",
    category: "curries",
    name: "Chicken Kolhapuri",
    description: "[Serves 1-2] Spicy Kolhapuri chicken curry made with rich spices and roasted coconut.",
    price: "₹259",
    dietary: "non-veg",
    spice: 3,
    image: "/images/menu/telangana-chicken.jpg"
  },
  {
    id: "telangana-chicken-curry",
    category: "curries",
    name: "Telangana Chicken Curry",
    description: "[Serves 1-2] Spicy rustic chicken curry prepared with authentic local Telangana spices.",
    price: "₹249",
    dietary: "non-veg",
    spice: 3,
    image: "/images/menu/telangana-chicken.jpg",
    featured: true
  },
  {
    id: "chicken-afghani",
    category: "curries",
    name: "Chicken Afghani",
    description: "[Serves 1-2] Creamy, velvety chicken curry simmered with mild spices.",
    price: "₹269",
    dietary: "non-veg",
    spice: 1,
    image: "/images/menu/chicken-afghani.jpg"
  },
  {
    id: "sr-grand-special-chicken-curry",
    category: "curries",
    name: "SR Grand Special Chicken Curry",
    description: "[Serves 1-2] Chef's signature chicken curry topped and wrapped with fluffy omelette.",
    price: "₹289",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/sr-grand-special-chicken-curry.jpg",
    bestseller: true,
    featured: true
  },

  // ==========================================
  // BREADS
  // ==========================================
  {
    id: "plain-naan",
    category: "breads",
    name: "Plain Naan",
    description: "[2 Pieces] Soft tandoori flatbread made of fine flour.",
    price: "₹49",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/naan-breads.jpg"
  },
  {
    id: "butter-naan",
    category: "breads",
    name: "Butter Naan",
    description: "[2 Pieces] Tandoor baked soft flatbread generously brushed with butter.",
    price: "₹59",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/naan-breads.jpg"
  },
  {
    id: "garlic-naan",
    category: "breads",
    name: "Garlic Naan",
    description: "[2 Pieces] Soft flatbread topped with minced garlic and herbs.",
    price: "₹69",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/naan-breads.jpg"
  },
  {
    id: "onion-kulcha",
    category: "breads",
    name: "Onion Kulcha",
    description: "[1 Piece] Fluffy flatbread stuffed with spiced, seasoned onions.",
    price: "₹55",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/naan-breads.jpg"
  },
  {
    id: "butter-roti",
    category: "breads",
    name: "Butter Roti",
    description: "Tandoori whole wheat roti brushed with butter.",
    price: "₹35",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/naan-breads.jpg"
  },
  {
    id: "tandoori-roti",
    category: "breads",
    name: "Tandoori Roti",
    description: "[1 Piece] Classic whole wheat flatbread baked in traditional tandoor.",
    price: "₹25",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/naan-breads.jpg"
  },
  {
    id: "paneer-kulcha",
    category: "breads",
    name: "Paneer Kulcha",
    description: "[1 Piece] Stuffed flatbread with spiced grated paneer.",
    price: "₹69",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/naan-breads.jpg"
  },
  {
    id: "parota",
    category: "breads",
    name: "Parota",
    description: "[1 Piece] Multi-layered flaky flatbread made with wheat flour.",
    price: "₹45",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/naan-breads.jpg"
  },
  {
    id: "chicken-kulcha",
    category: "breads",
    name: "Chicken Kulcha",
    description: "[1 Piece] Soft flatbread stuffed with spiced minced chicken.",
    price: "₹89",
    dietary: "non-veg",
    spice: 1,
    image: "/images/menu/naan-breads.jpg"
  },

  // ==========================================
  // FRIED RICE AND NOODLES (CHINESE)
  // ==========================================
  {
    id: "veg-noodles",
    category: "chinese",
    name: "Veg Noodles",
    description: "[Serves 1-2] Wok-tossed noodles with crunchy vegetables, spices and sauces.",
    price: "₹169",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/hakka-noodles.jpg"
  },
  {
    id: "egg-soft-noodles",
    category: "chinese",
    name: "Egg Soft Noodles",
    description: "[Serves 1-2] Noodles cooked with scrambled eggs, cabbage, carrots and spices.",
    price: "₹189",
    dietary: "egg",
    spice: 1,
    image: "/images/menu/hakka-noodles.jpg"
  },
  {
    id: "chicken-soft-noodles",
    category: "chinese",
    name: "Chicken Soft Noodles",
    description: "[Serves 1-2] Noodles wok-tossed with tender chicken, veggies and soy sauce.",
    price: "₹219",
    dietary: "non-veg",
    spice: 1,
    image: "/images/menu/hakka-noodles.jpg"
  },
  {
    id: "kaju-fried-rice",
    category: "chinese",
    name: "Kaju Fried Rice",
    description: "[Serves 1-2] Wok-tossed basmati rice with golden cashews and mild spices.",
    price: "₹219",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/veg-fried-rice.jpg"
  },
  {
    id: "paneer-fried-rice",
    category: "chinese",
    name: "Paneer Fried Rice",
    description: "[Serves 1-2] Fried rice with soft paneer cubes and mixed fresh vegetables.",
    price: "₹199",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/veg-fried-rice.jpg"
  },
  {
    id: "kaju-paneer-fried-rice",
    category: "chinese",
    name: "Kaju Paneer Fried Rice",
    description: "[Serves 1-2] Fried rice loaded with roasted cashews, paneer cubes and spices.",
    price: "₹239",
    dietary: "veg",
    spice: 1,
    image: "/images/menu/veg-fried-rice.jpg"
  },
  {
    id: "egg-fried-rice",
    category: "chinese",
    name: "Egg Fried Rice",
    description: "[Serves 1-2] Rice tossed in a wok with scrambled eggs and spring onions.",
    price: "₹189",
    dietary: "egg",
    spice: 1,
    image: "/images/menu/chicken-fried-rice.jpg"
  },
  {
    id: "special-chicken-fried-rice",
    category: "chinese",
    name: "Special Chicken Fried Rice",
    description: "Classic chicken fried rice topped with crispy, spicy Chicken 65 pieces.",
    price: "₹249",
    dietary: "non-veg",
    spice: 2,
    image: "/images/menu/chicken-fried-rice.jpg",
    bestseller: true,
    featured: true
  },
  {
    id: "veg-manchurian-fried-rice",
    category: "chinese",
    name: "Veg Manchurian Fried Rice",
    description: "Fragrant fried rice tossed with crispy veg manchurian balls in garlic sauce.",
    price: "₹209",
    dietary: "veg",
    spice: 2,
    image: "/images/menu/veg-manchurian.jpg"
  },

  // ==========================================
  // DRINKS (BEVERAGES)
  // ==========================================
  {
    id: "aquafina-mineral-water-1l",
    category: "beverages",
    name: "Aquafina Mineral Water [1 Liter]",
    description: "[1 Liter] Packaged drinking mineral water bottle.",
    price: "₹25",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/fresh-lime-soda.jpg"
  },
  {
    id: "fresh-lime-soda",
    category: "beverages",
    name: "Fresh Lime Soda",
    description: "Sweet, salted or mixed chilled lime soda.",
    price: "₹69",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/fresh-lime-soda.jpg"
  },
  {
    id: "soft-drinks",
    category: "beverages",
    name: "Soft Drinks",
    description: "Chilled bottled soft drinks (Thums Up, Sprite, Coke).",
    price: "₹40",
    dietary: "veg",
    spice: 0,
    image: "/images/menu/fresh-lime-soda.jpg"
  }
];

export const featuredMenuItems = menuItems.filter((item) => item.featured);
