import Image from "next/image";

type Product = {
	id: number;
	title: string;
	price: number;
	img: string;
	category: string;
};

export const ProductCard = ({ product }: { product: Product }) => {
	return (
		<div className="flex-shrink-0 w-full sm:w-64 md:w-72 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mx-2">
			<div className="relative h-48 overflow-hidden">
				<Image
					src={product.img || "/placeholder.svg"}
					alt={product.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			<div className="p-4">
				<div className="text-xs text-gray-500 mb-1">{product.category}</div>
				<h3 className="font-medium text-gray-900 mb-1 truncate">
					{product.title}
				</h3>

				<div className="mt-2 flex items-center">
					<span className="font-bold text-gray-900">
						${product.price.toFixed(2)}
					</span>
				</div>
			</div>
		</div>
	);
};
