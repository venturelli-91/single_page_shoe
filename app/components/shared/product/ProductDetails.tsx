import CustomButton from "../button/CustomButton";
import ProductDetailsProps from "@/app/types/components/product/product";

const ProductDetails: React.FC<ProductDetailsProps> = ({
	title,
	description,
	highlights,
}) => {
	return (
		<section className="flex flex-col gap-6">
			<header>
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
					{title}
				</h1>
				<p className="text-2xl text-gray-600">{description}</p>
			</header>
			<ul className="list-disc pl-5 space-y-1 text-gray-700 text-xl">
				{highlights.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
			<div className="mt-4">
				<CustomButton className="w-full md:w-auto px-10 py-3">
					<span className="inline-flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.272 1.015M7.5 14.25A3.75 3.75 0 0 0 11.25 18h3a3.75 3.75 0 0 0 3.75-3.75V6.75A3.75 3.75 0 0 0 14.25 3h-3A3.75 3.75 0 0 0 7.5 6.75v7.5z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
							/>
						</svg>
						Comprar agora
					</span>
				</CustomButton>
			</div>
		</section>
	);
};

export default ProductDetails;
