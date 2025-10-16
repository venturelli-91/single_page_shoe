"use client";
import React from "react";
import { BreadcrumbItem } from "./types/components/breadcrumb/breadcrumb";
import SiteBreadcrumb from "./components/shared/breadcrumb/SiteBreadcrumb";
import ProductCarousel from "./components/shared/carousel/ProductCarousel";
import ProductDetails from "./components/shared/product/ProductDetails";

const breadcrumbItems: BreadcrumbItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Tênis", href: "/#tenis" },
	{ label: "Total 90" },
];

const productTitle = "Tênis de Corrida Masculino";
const productDescription =
	"Performance, conforto e estilo para suas corridas urbanas e treinos diários.";
const productHighlights = [
	"Leveza e conforto para corridas urbanas",
	"Solado antiderrapante com alta durabilidade",
	"Design moderno e respirável",
	"Tecnologia de amortecimento avançada",
];

const Home = () => {
	return (
		<main className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-2">
			<nav className="w-full max-w-4xl mb-6">
				<SiteBreadcrumb items={breadcrumbItems} />
			</nav>
			<section className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
				{/* Imagem/carousel */}
				<div className="flex justify-center items-center">
					<ProductCarousel />
				</div>
				{/* Detalhes do produto */}
				<ProductDetails
					title={productTitle}
					description={productDescription}
					highlights={productHighlights}
				/>
			</section>
		</main>
	);
};

export default Home;
