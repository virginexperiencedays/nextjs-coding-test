/** ************************************************************
 * THIS FILE IS FOR FUNCTIONALITY DEMONSTRATION PURPOSES ONLY
 * NO NEED TO ASSESS THIS FILE OR ITS CONTENTS
 * ********************************************************** */

export const PRODUCTS = [
  {
    id: 1,
    title: "Gourmet Cooking Class",
    description:
      "Join a 3-hour hands-on cooking class with a professional chef and learn to make exquisite dishes from around the world. Ingredients and tools provided.",
    price: 89.99,
    slug: "gourmet-cooking-class",
    stock: 15,
    img: "https://picsum.photos/seed/1/600",
    categories: ["culinary-experiences", "entertainment-activities"]
  },
  {
    id: 2,
    title: "Hot Air Balloon Ride",
    description:
      "Experience breathtaking views from above with a 1-hour hot air balloon ride, followed by a champagne toast upon landing.",
    price: 249.99,
    slug: "hot-air-balloon-ride",
    stock: 10,
    img: "https://picsum.photos/seed/523/600",
    categories: ["adventure-experiences", "entertainment-activities"]
  },
  {
    id: 3,
    title: "Private Wine Tasting Tour",
    description:
      "Enjoy a 4-hour private tour of local vineyards with a sommelier, tasting fine wines and learning the art of wine pairing.",
    price: 149.99,
    slug: "private-wine-tasting-tour",
    stock: 0,
    img: "https://picsum.photos/seed/3/600",
    categories: ["entertainment-activities", "culinary-experiences"]
  },
  {
    id: 4,
    title: "Virtual Reality Escape Room",
    description:
      "Dive into a thrilling adventure with a 2-hour virtual reality escape room experience. Solve puzzles and challenges in an immersive digital world.",
    price: 39.99,
    slug: "virtual-reality-escape-room",
    stock: 20,
    img: "https://picsum.photos/seed/4/600",
    categories: ["entertainment-activities"]
  },
  {
    id: 5,
    title: "Guided Night Photography Tour",
    description:
      "Capture stunning night-time cityscapes and learn advanced photography techniques from a professional photographer in a 3-hour guided tour.",
    price: 59.99,
    slug: "guided-night-photography-tour",
    stock: 12,
    img: "https://picsum.photos/seed/5/600",
    categories: ["entertainment-activities", "arts-creativity"]
  },
  {
    id: 6,
    title: "Weekend Yoga Retreat",
    description:
      "Escape to a peaceful mountain resort for a weekend of yoga, meditation, and wellness workshops. Includes accommodation and healthy meals.",
    price: 299.99,
    slug: "weekend-yoga-retreat",
    stock: 8,
    img: "https://picsum.photos/seed/6/600",
    categories: ["wellness-relaxation", "adventure-experiences"]
  },
  {
    id: 7,
    title: "Scuba Diving Certification Course",
    description:
      "Get your PADI certification with our comprehensive 4-day course. Includes equipment rental, pool sessions, and open water dives.",
    price: 399.99,
    slug: "scuba-diving-certification",
    stock: 6,
    img: "https://picsum.photos/seed/7/600",
    categories: ["adventure-experiences"]
  },
  {
    id: 8,
    title: "Pottery Making Workshop",
    description:
      "Learn the art of pottery in this hands-on workshop. Create your own ceramic pieces using traditional wheel throwing techniques.",
    price: 79.99,
    slug: "pottery-making-workshop",
    stock: 15,
    img: "https://picsum.photos/seed/8/600",
    categories: ["arts-creativity", "wellness-relaxation"]
  },
  {
    id: 9,
    title: "City Food Tour",
    description:
      "Explore the city's culinary scene with a local guide. Sample signature dishes from 6 different restaurants and learn about local food culture.",
    price: 69.99,
    slug: "city-food-tour",
    stock: 20,
    img: "https://picsum.photos/seed/9/600",
    categories: ["culinary-experiences", "entertainment-activities"]
  },
  {
    id: 10,
    title: "Rock Climbing Adventure",
    description:
      "Experience the thrill of rock climbing with professional instructors. Suitable for beginners and includes all necessary equipment.",
    price: 89.99,
    slug: "rock-climbing-adventure",
    stock: 10,
    img: "https://picsum.photos/seed/10/600",
    categories: ["adventure-experiences"]
  },
  {
    id: 11,
    title: "Digital Art Masterclass",
    description:
      "Learn digital art techniques from professional artists. Master digital painting, illustration, and design using industry-standard software.",
    price: 129.99,
    slug: "digital-art-masterclass",
    stock: 15,
    img: "https://picsum.photos/seed/11/600",
    categories: ["arts-creativity"]
  },
  {
    id: 12,
    title: "Sunset Kayaking Tour",
    description:
      "Paddle through scenic waterways during the magical sunset hours. Includes kayak rental, safety equipment, and a light refreshment.",
    price: 49.99,
    slug: "sunset-kayaking-tour",
    stock: 12,
    img: "https://picsum.photos/seed/12/600",
    categories: ["adventure-experiences", "wellness-relaxation"]
  },
  {
    id: 13,
    title: "Meditation & Art Therapy Workshop",
    description:
      "Combine mindfulness meditation with creative expression in this unique workshop. Learn to channel emotions through art while practicing meditation techniques.",
    price: 79.99,
    slug: "meditation-art-therapy",
    stock: 15,
    img: "https://picsum.photos/seed/13/600",
    categories: ["wellness-relaxation", "arts-creativity"]
  },
  {
    id: 14,
    title: "Adventure Photography Expedition",
    description:
      "Embark on a thrilling photography expedition to capture stunning landscapes and wildlife. Perfect for both adventure seekers and photography enthusiasts.",
    price: 199.99,
    slug: "adventure-photography-expedition",
    stock: 8,
    img: "https://picsum.photos/seed/14/600",
    categories: ["adventure-experiences", "arts-creativity", "entertainment-activities"]
  },
  {
    id: 15,
    title: "Cooking & Wine Pairing Masterclass",
    description:
      "Learn to prepare gourmet dishes while mastering the art of wine pairing. Includes hands-on cooking and wine tasting sessions.",
    price: 149.99,
    slug: "cooking-wine-masterclass",
    stock: 12,
    img: "https://picsum.photos/seed/15/600",
    categories: ["culinary-experiences", "entertainment-activities"]
  },
  {
    id: 16,
    title: "Mindful Hiking & Nature Photography",
    description:
      "Combine the tranquility of mindful hiking with the art of nature photography. Learn meditation techniques while capturing stunning landscapes.",
    price: 89.99,
    slug: "mindful-hiking-photography",
    stock: 10,
    img: "https://picsum.photos/seed/16/600",
    categories: ["adventure-experiences", "wellness-relaxation", "arts-creativity"]
  }
];

export const CATEGORIES = [
  { 
    name: "Adventure & Experiences", 
    slug: "adventure-experiences",
    image: "https://picsum.photos/seed/adventure/800/600",
    description: "Thrilling outdoor adventures and unforgettable experiences that will get your heart racing",
    productIds: [2, 6, 7, 10, 12, 14, 16] 
  },
  { 
    name: "Entertainment & Activities", 
    slug: "entertainment-activities",
    image: "https://picsum.photos/seed/entertainment/800/600",
    description: "Fun and engaging activities perfect for groups and individuals looking for entertainment",
    productIds: [1, 2, 3, 4, 5, 9, 14, 15] 
  },
  { 
    name: "Wellness & Relaxation", 
    slug: "wellness-relaxation",
    image: "https://picsum.photos/seed/wellness/800/600",
    description: "Rejuvenating experiences focused on your physical and mental wellbeing",
    productIds: [6, 8, 12, 13, 16] 
  },
  { 
    name: "Culinary Experiences", 
    slug: "culinary-experiences",
    image: "https://picsum.photos/seed/culinary/800/600",
    description: "Delightful food and drink experiences that will tantalize your taste buds",
    productIds: [1, 3, 9, 15] 
  },
  { 
    name: "Arts & Creativity", 
    slug: "arts-creativity",
    image: "https://picsum.photos/seed/arts/800/600",
    description: "Creative workshops and classes to express your artistic side",
    productIds: [5, 8, 11, 13, 14] 
  },
];

export const REVIEWS = [
  {
    id: 1,
    productId: 1,
    text: "This product exceeded my expectations. The quality is outstanding and it's worth every penny.",
    author: "Emily Johnson",
    rating: 5,
  },
  {
    id: 2,
    productId: 2,
    text: "Decent product, but a bit overpriced. It does the job, but I've seen better alternatives for less.",
    author: "Michael Chen",
    rating: 3.5,
  },
  {
    id: 3,
    productId: 3,
    text: "Absolutely love this product! It's a game-changer for my daily routine and I can't imagine life without it now.",
    author: "Sarah Thompson",
    rating: 5,
  },
  {
    id: 4,
    productId: 4,
    text: "Not impressed with the build quality. It started showing signs of wear after just a few weeks of use.",
    author: "David Rodriguez",
    rating: 2,
  },
  {
    id: 5,
    productId: 5,
    text: "Good product overall, but the user manual could be clearer. Once I figured it out, it worked great.",
    author: "Lisa Patel",
    rating: 4,
  },
];
