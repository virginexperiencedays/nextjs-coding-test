import { mimicNetworkDelay } from "@/utils/mimicNetworkDelay";
import { CATEGORIES, PRODUCTS, REVIEWS } from "./products";

/** ************************************************************
 * THIS FILE IS FOR FUNCTIONALITY DEMONSTRATION PURPOSES ONLY
 * NO NEED TO ASSESS THIS FILE OR ITS CONTENTS
 * ********************************************************** */

async function products() {
  return PRODUCTS;
}

async function category(endpoint: string, apiKey: string) {
  await mimicNetworkDelay();

  const split = endpoint.split("/");
  const id = split.at(-1);
  const category = CATEGORIES.find((c) => c.productIds.includes(Number(id)));

  if (!category) return null;
  return category;
}

async function reviews(endpoint: string) {
  await mimicNetworkDelay();

  const split = endpoint.split("/");
  const id = split.at(-1);
  const reviews = REVIEWS.filter((r) => r.productId === Number(id));

  if (!reviews) return null;
  return reviews;
}

export const api = {
  products,
  category,
  reviews,
};
