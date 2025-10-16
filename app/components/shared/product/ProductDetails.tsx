import React from "react";
import ProductDetailsProps from "@/app/types/components/product/product";

const ProductDetails: React.FC<ProductDetailsProps> = ({
	title,
	description,
	highlights,
}) => {
	return (
		<section className="flex flex-col gap-6">
			<header>
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
					{title}
				</h1>
				<p className="text-lg text-gray-600">{description}</p>
			</header>
			<ul className="list-disc pl-5 space-y-1 text-gray-700">
				{highlights.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
		</section>
	);
};

export default ProductDetails;
