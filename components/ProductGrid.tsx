"use client";

import Image from "next/image";
import Link from "next/link";

export function ProductGrid({ products }: { products: any[] }) {
	if (!products) return null;

	return (
		<section className="bg-muted py-16 px-4">
			<div className="container">
				<h2 className="mb-8 text-center text-3xl font-bold">All Products</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{products.map((product) => (
						<Link
							key={product.id}
							href={`/product/${product.slug}`}
							className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
						>
							<div className="relative h-48 w-full overflow-hidden bg-muted">
								<Image
									src={product.img || "/placeholder.svg"}
									alt={product.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="p-4">
								<h3 className="font-medium">{product.title}</h3>
								<div className="mt-1 flex items-center gap-2">
									<span className="font-bold">${product.price.toFixed(2)}</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
