/* ─── MENU DATA ───────────────────────────────────────────── */
export const MENU_ITEMS = {
  starters: [
    { id: 1, name: "Edamame Gyoza", desc: "Pan-fried dumplings, soy-ginger dip, sesame crunch", price: 420, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=85", tag: "⭐ Popular" },
    { id: 2, name: "Sakura Sashimi", desc: "Chef's seasonal fish, pickled ginger, wasabi pearls", price: 780, img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=85", tag: "🌸 Seasonal" },
    { id: 3, name: "Miso Soup Deluxe", desc: "White miso, silken tofu, wakame, spring onion", price: 280, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=85", tag: "" },
    { id: 4, name: "Karaage Chicken", desc: "Crispy yuzu chicken, kewpie mayo, lemon zest", price: 520, img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=85", tag: "🔥 Hot" },
  ],
  mains: [
    { id: 5, name: "Tonkotsu Ramen", desc: "Rich pork broth, chashu, soft egg, nori, bamboo shoots", price: 880, img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=85", tag: "⭐ Best Seller" },
    { id: 6, name: "Salmon Teriyaki", desc: "Glazed Atlantic salmon, steamed rice, pickled daikon", price: 1100, img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=600&q=85", tag: "🌿 Healthy" },
    { id: 7, name: "Wagyu Donburi", desc: "A5 wagyu slices, truffle sauce, rice bowl, egg yolk", price: 1850, img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=85", tag: "💎 Premium" },
    { id: 8, name: "Vegetable Udon", desc: "Thick udon noodles, tempura veggies, dashi broth", price: 720, img: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&q=85", tag: "🌱 Vegan" },
  ],
  desserts: [
    { id: 9, name: "Matcha Parfait", desc: "Ceremonial matcha, anko, shiratama mochi, soft cream", price: 480, img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=85", tag: "🌸 Signature" },
    { id: 10, name: "Dorayaki Stack", desc: "Fluffy pancakes, red bean cream, sakura honey", price: 360, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=85", tag: "" },
    { id: 11, name: "Mochi Ice Cream", desc: "Assorted mochi: strawberry, matcha, black sesame", price: 420, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=85", tag: "❄️ Cold" },
    { id: 12, name: "Sakura Cheesecake", desc: "Cherry blossom cheesecake, yuzu curd, sesame base", price: 520, img: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&q=85", tag: "🌸 Limited" },
  ],
};

export const POPULAR_DISHES = [MENU_ITEMS.mains[0], MENU_ITEMS.starters[0], MENU_ITEMS.desserts[0], MENU_ITEMS.mains[2]];

export const FEATURED_DISHES = [
  { ...MENU_ITEMS.mains[0], highlight: "Most Loved" },
  { ...MENU_ITEMS.starters[1], highlight: "Chef's Pick" },
  { ...MENU_ITEMS.desserts[0], highlight: "Signature" },
];

/* ─── TEAM DATA ───────────────────────────────────────────── */
export const TEAM = [
  { name: "Chef Hiroshi Tanaka", role: "Head Chef", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=85", quote: "Every dish is a story of seasons" },
  { name: "Yuki Nakamura", role: "Pastry Chef", img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=85", quote: "Sweetness is the soul of hospitality" },
  { name: "Kenji Watanabe", role: "Sous Chef", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&q=85", quote: "Precision is love on the plate" },
];

/* ─── DELIVERY ZONES ──────────────────────────────────────── */
export const ZONES = [
  { name: "Sakura District", time: "20–30 min", fee: "Free", color: "#ff9eb5" },
  { name: "Fuji Heights", time: "30–45 min", fee: "₹49", color: "#87ceeb" },
  { name: "Anime Quarter", time: "40–55 min", fee: "₹79", color: "#ffd580" },
  { name: "Blossom Bay", time: "45–60 min", fee: "₹99", color: "#b8f0b8" },
];

/* ─── PAYMENT METHODS ─────────────────────────────────────── */
export const PAYMENT_METHODS = [
  { id: "upi", label: "UPI", icon: "⚡", desc: "Pay via Google Pay, PhonePe, Paytm" },
  { id: "card", label: "Card", icon: "💳", desc: "Visa, Mastercard, Amex accepted" },
  { id: "wallet", label: "Wallet", icon: "👛", desc: "Amazon Pay, Mobikwik, Airtel" },
  { id: "cod", label: "Cash on Delivery", icon: "💴", desc: "Pay when your order arrives" },
];