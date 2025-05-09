import Image from "next/image";
import Link from "next/link";

export function CategoriesSection({ categories }: { categories: any[] }) {
	return (
		<section id="categories" className="py-16 px-4">
			<div className="container">
				<h2 className="mb-8 text-center text-3xl font-bold">
					Shop by Category
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{categories.map((category, index) => (
						<Link
							key={index}
							href={`/app-router/category/${category.slug}`}
							className="group relative overflow-hidden rounded-lg"
						>
							<div className="relative h-[300px] w-full overflow-hidden">
								<Image
									src={category.image}
									alt={category.name}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
							</div>
							<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
								<h3 className="text-2xl font-bold text-white">
									{category.name}
								</h3>
								<button className="mt-4 text-white">
									Explore {category.name}
								</button>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
