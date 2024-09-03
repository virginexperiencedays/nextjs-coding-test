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
  },
];

export const CATEGORIES = [
  { name: "Category 1", productIds: [1, 2] },
  { name: "Category 2", productIds: [3, 4, 5] },
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
