export const RESTAURANT = {
  name: "The Dragon King",
  tagline: "Authentic Chinese Cuisine — Since 1990",
  legacy: 35,
  address: "Amrut Nagar, Ghatkopar (West), Mumbai 400086",
  phones: ["+91 81088 51993", "+91 79779 52708"],
  hours: [
    { day: "Mon – Fri", time: "12:00 PM – 11:30 PM" },
    { day: "Sat – Sun", time: "11:30 AM – 12:00 AM" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Amrut+Nagar+Ghatkopar+West+Mumbai&output=embed",
};

export const MEDIA = {
  hero: "https://static.prod-images.emergentagent.com/jobs/13f8edd9-2921-446b-b4a6-9d5bb0efa15d/images/92c1c6f51222b76c651e13bdf678c689f38d5bd10d70b19c8bf4557bb0a44975.png",
  texture:
    "https://static.prod-images.emergentagent.com/jobs/13f8edd9-2921-446b-b4a6-9d5bb0efa15d/images/8a612c6f0ef4fbbae2ac172175540e17c17325571a84069cd146b808e6109ab5.png",
  about:
    "https://static.prod-images.emergentagent.com/jobs/13f8edd9-2921-446b-b4a6-9d5bb0efa15d/images/c71acf8d081c18ee91b33d9cc0604797ae4f647a474208a81d33d1d76ae83203.png",
  gallery: [
    "https://images.unsplash.com/photo-1596463302369-e74d01db0c33?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMGRpbSUyMHN1bXxlbnwwfHx8fDE3Nzc5MDE5ODV8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1678026582164-24a5460c447a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxjaGluZXNlJTIwZm9vZCUyMGRpbSUyMHN1bXxlbnwwfHx8fDE3Nzc5MDE5ODV8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1759893497863-c90a6dfa7a86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjaGluZXNlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwbGFudGVybnN8ZW58MHx8fHwxNzc3OTAxOTg1fDA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
  ],
};

export const MENU = [
  {
    section: "Soups",
    items: [
      { name: "Manchow Soup", desc: "Spicy, dark broth with crispy noodles", price: 220 },
      { name: "Sweet Corn Soup", desc: "Veg / Chicken — silky, classic", price: 210 },
      { name: "Hot & Sour Soup", desc: "Tangy, peppery, slow-simmered", price: 230 },
      { name: "Wonton Soup", desc: "Hand-folded chicken wontons in clear broth", price: 280 },
    ],
  },
  {
    section: "Starters",
    items: [
      { name: "Chilli Paneer / Chicken", desc: "Wok-tossed in burnt-garlic chilli sauce", price: 320 },
      { name: "Crispy Honey Chilli Potato", desc: "House favourite — sweet, sticky, smoky", price: 260 },
      { name: "Drums of Heaven", desc: "Frenched chicken winglets in red chilli glaze", price: 360 },
      { name: "Crispy Lotus Stem", desc: "Honey, sesame, schezwan", price: 290 },
      { name: "Prawns Salt & Pepper", desc: "Crisp, peppery, scallion-tossed", price: 480 },
    ],
  },
  {
    section: "Main Course",
    items: [
      { name: "Kung Pao Chicken", desc: "Sichuan peppercorns, peanuts, dry chillies", price: 380 },
      { name: "Mapo Tofu", desc: "Silken tofu in spicy bean sauce", price: 320 },
      { name: "Sliced Fish in Black Bean Sauce", desc: "Steamed basa, fermented black beans", price: 460 },
      { name: "Shredded Lamb Hunan Style", desc: "Wok-fried with leeks and red chilli oil", price: 520 },
      { name: "Vegetables in Hot Garlic Sauce", desc: "Seasonal greens, garlic, soy", price: 290 },
    ],
  },
  {
    section: "Noodles & Rice",
    items: [
      { name: "Hakka Noodles", desc: "Veg / Chicken / Mixed", price: 240 },
      { name: "Schezwan Fried Rice", desc: "Fiery, smoky, wok-charred", price: 250 },
      { name: "Singapore Rice Noodles", desc: "Curry-spiced thin rice noodles", price: 290 },
      { name: "Chilli Garlic Noodles", desc: "Tossed with bird's-eye chilli & garlic", price: 270 },
    ],
  },
  {
    section: "Dim Sum & Desserts",
    items: [
      { name: "Steamed Veg Dim Sum (6 pcs)", desc: "Translucent skin, garden filling", price: 320 },
      { name: "Crystal Prawn Dumplings (6 pcs)", desc: "Hand-pleated, bamboo-steamed", price: 420 },
      { name: "Date Pancake", desc: "Honey-glazed, slow-fried", price: 220 },
      { name: "Darsaan with Ice Cream", desc: "Crispy honey noodles, vanilla", price: 260 },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Rohan Mehta",
    role: "Regular since 2003",
    quote:
      "Three generations of my family have celebrated here. The Manchow soup tastes exactly the way it did when I was eight.",
  },
  {
    name: "Ananya Shetty",
    role: "Food Writer, Mumbai Mirror",
    quote:
      "A rare neighbourhood gem where craft, consistency, and old-school hospitality survive untouched by trend.",
  },
  {
    name: "Vikram Iyer",
    role: "Local Resident, Ghatkopar",
    quote:
      "If you grew up in Amrut Nagar, Dragon King is not a restaurant — it is a memory you keep returning to.",
  },
  {
    name: "Priya Kulkarni",
    role: "Anniversary Diner",
    quote:
      "Warm lanterns, the sizzle of the wok, and the kindest staff. We come back every anniversary.",
  },
];
