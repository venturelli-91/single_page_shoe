"use client";
import React from "react";
import SiteBreadcrumb from "./components/shared/breadcrumb/SiteBreadcrumb";
import Image from "next/image";

const highlights = [
	"Leveza e conforto para corridas urbanas",
	"Solado antiderrapante com alta durabilidade",
	"Design moderno e respirável",
	"Tecnologia de amortecimento avançada",
];

const Home = () => {
	return (
		<main className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-2">
			{/* Breadcrumb */}
			<nav className="w-full max-w-4xl mb-6">
				<SiteBreadcrumb />
			</nav>

			{/* Product Section */}
			<section className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
				{/* Product Image */}
				<div className="flex justify-center items-center">
					<Image
						src="/images/shoe-placeholder.png"
						alt="Tênis de Corrida Masculino - Running Shoe"
						className="w-72 h-72 object-contain rounded-lg shadow-sm bg-gray-100"
						loading="lazy"
						width={288}
						height={288}
					/>
				</div>

				{/* Product Details */}
				<div className="flex flex-col gap-6">
					<header>
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
							Tênis de Corrida Masculino
						</h1>
						<p className="text-lg text-gray-600">
							Performance, conforto e estilo para suas corridas urbanas e
							treinos diários.
						</p>
					</header>
					<ul className="list-disc pl-5 space-y-1 text-gray-700">
						{highlights.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
					<div className="flex gap-4 mt-2">
						<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
							Comprar agora
						</button>
						<button className="bg-white border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-50 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
							Adicionar ao carrinho
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
