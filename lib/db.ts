import { CATEGORIES, PRODUCTS } from "@/api/products";
import { mimicNetworkDelay } from "@/utils/mimicNetworkDelay";
import { unstable_cache } from "next/cache";

export const getCategoryBySlug = unstable_cache(
	async (slug: string) => {
		await mimicNetworkDelay();

		return CATEGORIES.find((category: any) => category.slug === slug);
	},
	[],
	{
		revalidate: 5,
	},
);

export const getProductsByCategory = unstable_cache(
	async (slug: string) => {
		await mimicNetworkDelay();

		return PRODUCTS.filter((product: any) => product.categories.includes(slug));
	},
	[],
	{
		revalidate: 5,
	},
);
