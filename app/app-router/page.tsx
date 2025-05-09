import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ProductGrid } from "@/components/ProductGrid";
import { Suspense } from "react";

/**
 * Your task is to analyze the given code and higlight areas of improvement
 * as well as the reasoning behind the changes.
 *
 * You're free to fix the issues you'll find along the way, here's a couple to get you started
 *
 * - This page uses a lot of our bandwidth quota for some reason
 * - This page struggles with Core Web Vitals CLS
 * - RSC Payload for this page is large causing performance issues
 */

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default async function Page() {
	const productsData = await fetch(
		new URL("/api/getAllProducts", "http://localhost:3000"),
		{ next: { revalidate: 86400 } },
	);
	const { products } = await productsData.json();

	const categoriesData = await fetch(
		new URL("/api/getAllCategories", "http://localhost:3000"),
		{ next: { revalidate: 86400 } },
	);
	const { categories } = await categoriesData.json();

	return (
		<div className="container mx-auto">
			<Suspense fallback={<div>Loading...</div>}>
				<CategoriesSection categories={categories.slice(0, 3)} />
			</Suspense>
			<FeaturedProducts />
			<ProductGrid products={products} />
		</div>
	);
}
