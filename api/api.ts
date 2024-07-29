import { CATEGORIES, PRODUCTS } from "./products";

/** ************************************************************
 * THIS FILE IS FOR FUNCTIONALITY DEMONSTRATION PURPOSES ONLY
 * NO NEED TO ASSESS THIS FILE OR ITS CONTENTS
 * ********************************************************** */

async function products(endpoint: string, apiKey: string) {
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

async function mimicNetworkDelay(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

export const api = {
  products,
  category,
};
