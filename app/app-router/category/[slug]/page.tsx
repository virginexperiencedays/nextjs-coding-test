import { getCategoryBySlug, getProductsByCategory } from "@/lib/db";
import { Suspense } from "react";

/**
 * Your task is to analyze the given code and higlight areas of improvement
 * as well as the reasoning behind the changes.
 *
 * You're free to fix the issues you'll find along the way, here's a couple to get you started
 *
 *  ISSUES:
 * - This page revalidates more often than its defined
 * - Page doesn't render suspense fallback for category intro
 * - This page struggles with Core Web Vitals, specifically FCP and TTFB
 */

export const revalidate = 86400;

export default async function Page({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const category = await getCategoryBySlug(slug);
	const categoryProducts = await getProductsByCategory(slug);

	if (!category) {
		return <div>Category not found</div>;
	}
	return (
		<div className="container mx-auto py-16">
			<Suspense fallback={<div>Loading...</div>}>
				<CategoryIntro
					name={category.name}
					description={category.description}
				/>
			</Suspense>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-8">
				{categoryProducts.map((item, index) => (
					<li key={index}>
						<div className="flex flex-col gap-4 p-4 hover:bg-gray-50 rounded-md">
							<img
								src={(item as any).img}
								width={600}
								height={600}
								className="rounded-md bg-gray-300"
							/>
							<h3 className="font-semibold text-lg">{item.title}</h3>
							<div className="text-sm pr-8">{item.description}</div>
							<a
								href={`/product/${item.slug}`}
								className="bg-red-500 text-white text-xs uppercase rounded-full px-4 py-2 self-start"
							>
								More Details
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

const CategoryIntro = ({
	name,
	description,
}: { name: string; description: string }) => (
	<div className="px-4">
		<h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
			{name}
		</h1>
		<p className="text-lg text-muted-foreground">{description}</p>
	</div>
);
