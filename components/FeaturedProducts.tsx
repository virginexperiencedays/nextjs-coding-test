"use client";

import { useEffect } from "react";

import { useState } from "react";
import ProductCarousel from "./ProductsCarousel";

export function FeaturedProducts() {
	const [featuredProducts, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("/api/getAllProducts");
			const { products } = await response.json();
			setProducts(products.slice(-5));
		};
		fetchProducts();
	}, []);

	return <ProductCarousel products={featuredProducts} />;
}
