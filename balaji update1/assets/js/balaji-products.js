// Balaji Namkeen — centralized product data
// Single source of truth for: homepage "Our Products" tabs, Categories mega-menu,
// product-details.html, related/featured products and the WhatsApp enquiry message.
// Every image below is one of the real Balaji Ghanshyam packet photos already
// present in this project at assets/img/product/balaji/ (1.webp - 35.webp).
// Do NOT swap these for generated/stock images.

var WHATSAPP_NUMBER = "919871902699"; // existing site contact number (+91 98719 02699), from header/footer/contact.html

var namkeenProducts = [
  {
    id: 1,
    name: "Boondi",
    image: "assets/img/product/balaji/1.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Boondi is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: ""
  },
  {
    id: 2,
    name: "Khari Pata Boondi",
    image: "assets/img/product/balaji/2.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Khari Pata Boondi is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: ""
  },
  {
    id: 3,
    name: "Khatta Meetha",
    image: "assets/img/product/balaji/3.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Khatta Meetha is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: "New"
  },
  {
    id: 4,
    name: "Aloo Bhujia",
    image: "assets/img/product/balaji/4.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Aloo Bhujia is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: "Bestseller"
  },
  {
    id: 5,
    name: "Tasty ",
    image: "assets/img/product/balaji/5.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Tasty is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 85,
    oldPrice: 110,
    category: "Namkeen",
    pack: "350 gm",
    badge: ""
  },
  {
    id: 6,
    name: "Daal Baaji",
    image: "assets/img/product/balaji/6.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Daal Baaji is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 85,
    oldPrice: 110,
    category: "Namkeen",
    pack: "350 gm",
    badge: ""
  },
  {
    id: 7,
    name: "Hotking Mix",
    image: "assets/img/product/balaji/7.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Hotking Mix is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: "Bestseller"
  },
  {
    id: 8,
    name: "Kanpuri Mix",
    image: "assets/img/product/balaji/8.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Kanpuri Mix is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: ""
  },
  {
    id: 9,
    name: "Kaju Mix",
    image: "assets/img/product/balaji/9.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Kaju Mix is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: "New"
  },
  {
    id: 10,
    name: "Mogra Mix",
    image: "assets/img/product/balaji/10.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Mogra Mix is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: ""
  },
  {
    id: 11,
    name: "Khatta Meetha",
    image: "assets/img/product/balaji/11.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Khatta Meetha is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: ""
  },
  {
    id: 12,
    name: "Moong Daal",
    image: "assets/img/product/balaji/12.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Moong Daal is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: ""
  },
  {
    id: 13,
    name: "Kashmiri Mix",
    image: "assets/img/product/balaji/13.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Kashmiri spices.",
    description: "A delicious and crispy blend of premium ingredients with authentic Kashmiri spices. Perfect for tea-time, snacking and family moments. Enjoy the real taste of Balaji Ghanshyam Namkeen.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: "New"
  },
  {
    id: 14,
    name: "Makhana Mix",
    image: "assets/img/product/balaji/14.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Makhana Mix is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 85,
    oldPrice: 110,
    category: "Namkeen",
    pack: "350 gm",
    badge: ""
  },
  {
    id: 15,
    name: "Navratan",
    image: "assets/img/product/balaji/15.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Navratan is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: "New"
  },
  {
    id: 16,
    name: "Khari Pata",
    image: "assets/img/product/balaji/16.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Khari Pata is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 85,
    oldPrice: 110,
    category: "Namkeen",
    pack: "350 gm",
    badge: ""
  },
  {
    id: 17,
    name: "Bikaneri Bhujia",
    image: "assets/img/product/balaji/17.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Bikaneri Bhujia is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 45,
    oldPrice: 60,
    category: "Namkeen",
    pack: "170 gm",
    badge: "Bestseller"
  },
  {
    id: 18,
    name: "Bhujia",
    image: "assets/img/product/balaji/18.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Bhujia is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    category: "Namkeen",
    pack: "500 gm",
    badge: ""
  },
  {
    id: 19,
    name: "Khurja Mixture",
    image: "assets/img/product/balaji/19.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Khurja Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    category: "Namkeen",
    pack: "500 gm",
    badge: ""
  },
  {
    id: 20,
    name: "Papdi Mixture",
    image: "assets/img/product/balaji/20.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Papdi Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    category: "Namkeen",
    pack: "500 gm",
    badge: ""
  },
  {
    id: 21,
    name: "Salimaar Mixture",
    image: "assets/img/product/balaji/21.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Salimaar Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    category: "Namkeen",
    pack: "500 gm",
    badge: ""
  },
  {
    id: 22,
    name: "Kanpuri Mixture",
    image: "assets/img/product/balaji/22.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Kanpuri Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 85,
    oldPrice: 110,
    category: "Namkeen",
    pack: "350 gm",
    badge: ""
  },
  {
    id: 23,
    name: "Salimaar Mixture",
    image: "assets/img/product/balaji/23.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Salimaar Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 24,
    name: "Chidchida Mixture",
    image: "assets/img/product/balaji/24.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Chidchida Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 25,
    name: "Aloo Bhujia",
    image: "assets/img/product/balaji/25.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Aloo Bhujia is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 26,
    name: "Punjabi Mixture",
    image: "assets/img/product/balaji/26.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Punjabi Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 27,
    name: "Garlic Mixture",
    image: "assets/img/product/balaji/27.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Garlic Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 28,
    name: "Khatta Meetha",
    image: "assets/img/product/balaji/28.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Khatta Meetha is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    category: "Namkeen",
    pack: "500 gm",
    badge: ""
  },
  {
    id: 29,
    name: "Ajwain Sev",
    image: "assets/img/product/balaji/29.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Ajwain Sev is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    category: "Namkeen",
    pack: "500 gm",
    badge: ""
  },
  {
    id: 30,
    name: "Khurja Mixture",
    image: "assets/img/product/balaji/30.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Khurja Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 31,
    name: "Hotking Mixture",
    image: "assets/img/product/balaji/31.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Hotking Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 32,
    name: "Navratan",
    image: "assets/img/product/balaji/32.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Navratan is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    category: "Namkeen",
    pack: "500 gm",
    badge: ""
  },
  {
    id: 33,
    name: "Papdi Mixture",
    image: "assets/img/product/balaji/33.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Papdi Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 34,
    name: "Dalsev",
    image: "assets/img/product/balaji/34.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Dalsev is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 220,
    oldPrice: 280,
    category: "Namkeen",
    pack: "1 kg",
    badge: ""
  },
  {
    id: 35,
    name: "Makhana Mixture",
    image: "assets/img/product/balaji/35.webp",
    shortDescription: "A delicious and crispy blend of premium ingredients with authentic Indian spices.",
    description: "A delicious and crispy blend of premium ingredients, Makhana Mixture is made fresh in the authentic Balaji Ghanshyam style. Perfect for tea-time, snacking and family moments.",
    rating: 5.0,
    price: 85,
    oldPrice: 110,
    category: "Namkeen",
    pack: "350 gm",
    badge: ""
  }
];

// Look up one product by id (as used in product-details.html?id=N)
function getBalajiProductById(id) {
  id = parseInt(id, 10);
  for (var i = 0; i < namkeenProducts.length; i++) {
    if (namkeenProducts[i].id === id) return namkeenProducts[i];
  }
  return null;
}

// Build the WhatsApp "Enquiry Now" link for a given product name
function getWhatsAppEnquiryUrl(productName) {
  var message = "Hello, I am interested in " + productName + ". Please share more details and availability.";
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
