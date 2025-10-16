import React, { useState } from "react";
import Image from "next/image";
import images from "@/app/data/images";
import ProductCarouselProps from "@/app/types/components/carousel/carousel";
const ProductCarousel: React.FC<ProductCarouselProps> = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const prevSlide = () => {
		setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};
	const nextSlide = () => {
		setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto">
			<div className="relative h-56 overflow-hidden rounded-lg md:h-96 flex items-center justify-center bg-gray-100">
				<div className="w-full h-full relative">
					{images.map((img, idx) => (
						<Image
							key={img.src}
							src={img.src}
							alt={img.alt}
							width={600}
							height={600}
							priority={activeIndex === 0}
							className={`object-contain w-full h-full rounded-lg absolute top-0 left-0 transition-all duration-700 ease-in-out ${
								idx === activeIndex
									? "opacity-100 translate-x-0 z-10"
									: "opacity-0 -translate-x-10 z-0 pointer-events-none"
							}`}
						/>
					))}
				</div>
			</div>

			<button
				type="button"
				className="absolute top-1/2 left-2 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white/90 shadow focus:outline-none cursor-pointer"
				onClick={prevSlide}
				aria-label="Imagem anterior">
				<svg
					className="w-5 h-5 text-gray-700"
					fill="none"
					viewBox="0 0 6 10"
					xmlns="http://www.w3.org/2000/svg">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M5 1 1 5l4 4"
					/>
				</svg>
			</button>
			<button
				type="button"
				className="absolute top-1/2 right-2 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white/90 shadow focus:outline-none cursor-pointer"
				onClick={nextSlide}
				aria-label="Próxima imagem">
				<svg
					className="w-5 h-5 text-gray-700"
					fill="none"
					viewBox="0 0 6 10"
					xmlns="http://www.w3.org/2000/svg">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
			</button>

			<div className="flex justify-center gap-2 mt-4">
				{images.map((img, idx) => (
					<button
						key={img.src}
						className={`border-2 rounded-lg overflow-hidden w-16 h-16 focus:outline-none ${
							activeIndex === idx ? "border-blue-600" : "border-transparent"
						}`}
						onClick={() => setActiveIndex(idx)}
						aria-label={`Selecionar imagem ${idx + 1}`}>
						<Image
							src={img.src}
							alt={img.alt}
							width={64}
							height={64}
							className="object-contain w-full h-full"
						/>
					</button>
				))}
			</div>
		</div>
	);
};

export default ProductCarousel;
