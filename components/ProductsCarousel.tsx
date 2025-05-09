"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { ProductCard } from "./ProductCard";

export default function ProductCarousel({ products }: { products: any[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	const itemsToShow = isMobile ? 1 : 4;

	const maxIndex = products.length - itemsToShow;

	const goToPrev = () => {
		setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
	};

	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe) {
			goToNext();
		}

		if (isRightSwipe) {
			goToPrev();
		}

		setTouchStart(null);
		setTouchEnd(null);
	};

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 640);
		};

		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);

		return () => {
			window.removeEventListener("resize", checkIfMobile);
		};
	}, []);

	return (
		<section className="py-16 px-4 max-w-7xl mx-auto">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-gray-900 mb-4">
					Featured Products
				</h2>
				<div className="w-24 h-1 bg-gray-900 mx-auto" />
				<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
					Discover our handpicked selection of premium products, curated just
					for you.
				</p>
			</div>

			<div className="relative">
				<button
					onClick={goToPrev}
					disabled={currentIndex === 0}
					className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
						currentIndex === 0
							? "opacity-50 cursor-not-allowed"
							: "hover:bg-gray-100"
					}`}
					aria-label="Previous products"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M15 18l-6-6 6-6" />
					</svg>
				</button>

				<button
					onClick={goToNext}
					disabled={currentIndex >= maxIndex}
					className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
						currentIndex >= maxIndex
							? "opacity-50 cursor-not-allowed"
							: "hover:bg-gray-100"
					}`}
					aria-label="Next products"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M9 18l6-6-6-6" />
					</svg>
				</button>

				<div
					ref={carouselRef}
					className="overflow-hidden px-8"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					<div
						className="flex transition-transform duration-300 ease-out"
						style={{
							transform: `translateX(-${currentIndex * (isMobile ? 100 : 25)}%)`,
						}}
					>
						{products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-6 gap-2">
				{Array.from({ length: maxIndex + 1 }).map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-2 h-2 rounded-full transition-colors ${
							currentIndex === index ? "bg-gray-900" : "bg-gray-300"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
