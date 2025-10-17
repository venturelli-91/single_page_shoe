import CustomButton from "../button/CustomButton";
import CustomCard from "../card/CustomCard";
import ProductDetailsProps from "@/app/types/components/product/product";

import React, { useState } from "react";

const ProductDetails: React.FC<ProductDetailsProps> = ({
	title,
	description,
	highlights,
}) => {
	const [selectedSize, setSelectedSize] = useState<number | null>(null);
	return (
		<section className="flex flex-col gap-6">
			<header>
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-6">
					{title}
				</h1>
				<p className="text-xl text-gray-600">{description}</p>
			</header>
			<ul className="list-disc pl-5 space-y-1 text-gray-700 text-md">
				{highlights.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
			<div className="mt-4 flex flex-col gap-2">
				<h3 className="text-base font-semibold text-gray-700 mb-1">
					Tamanhos disponíveis:
				</h3>
				<div className="flex flex-row flex-wrap gap-1 ml-2 cursor-pointer hover-color:blue-600">
					{[36, 37, 38, 39, 40, 41, 42, 43].map((size) => (
						<CustomCard
							key={size}
							className={
								selectedSize === size
									? "bg-green-100 text-green-600 border-green-600"
									: ""
							}
							onClick={() => setSelectedSize(size)}>
							{size}
						</CustomCard>
					))}
				</div>
				<CustomButton className="px-6 py-3 ">
					<span className="inline-flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-7 h-7">
							<path d="M6 16a2 2 0 104 0 2 2 0 00-4 0zM16 16a2 2 0 104 0 2 2 0 00-4 0zM2 2a1 1 0 000 2h2l.4 2M6 6h9l-1.35 6.45a2 2 0 01-1.97 1.55H7.12a2 2 0 01-1.97-1.55L4 4H2" />
						</svg>
						Comprar agora
					</span>
				</CustomButton>
			</div>
		</section>
	);
};

export default ProductDetails;
