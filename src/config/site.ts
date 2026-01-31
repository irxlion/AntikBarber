import { Facebook, Instagram, Twitter } from 'lucide-react';

export const siteConfig = {
  name: "A&B Premium",
  slogan: "Modern Cuts. Timeless Style.",
  description: "Experience the art of hair styling in a luxurious environment. Specialized in women's color and men's barbering.",

  contact: {
    phone: "0621 46097685",
    email: "info@ab-hair-salon.de",
    address: "R3 6, 68161 Mannheim",
    mapsLink: "https://goo.gl/maps/placeholder", // Replace with real link
    whatsapp: "https://wa.me/491234567890",
  },

  openingHours: [
    { day: "Mo - Fr", hours: "10:00 - 20:00 (Men from 09:00)" },
    { day: "Sa", hours: "10:00 - 20:00 (Women until 16:30)" },
    { day: "So", hours: "Closed" },
  ],

  socials: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
  ],

  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "2k+", label: "Happy Clients" },
    { value: "15+", label: "Awards Won" },
  ],

  pricing: {
    women: [
      { service: "Cut & Style", price: "from €65", description: "Consultation, wash, cut, and blow-dry" },
      { service: "Balayage", price: "from €140", description: "Hand-painted highlights for a natural look" },
      { service: "Full Color", price: "from €90", description: "Root to tip permanent color" },
      { service: "Glossing", price: "from €40", description: "Refresh your color and shine" },
    ],
    men: [
      { service: "Classic Cut", price: "€35", description: "Scissor over comb, wash and style" },
      { service: "Beard Trim", price: "€25", description: "Shape up with hot towel treatment" },
      { service: "Fade Cut", price: "€40", description: "Skin fade with precision detailing" },
      { service: "Grey Blending", price: "€30", description: "Natural looking grey reduction" },
    ]
  },



  testimonials: [
    { text: "The best salon experience I've ever had. The attention to detail is unmatched.", author: "Julia M." },
    { text: "Finally found a barber who understands exactly what I want. Highly recommended!", author: "Thomas K." },
    { text: "Incredible atmosphere and even better results. My balayage looks perfect.", author: "Sophia L." },
  ]
};