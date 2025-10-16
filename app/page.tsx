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

const productTitle = "Nike Total 90";
const productDescription =
	"Chuteira Futsal Nike Total 90 III – Precisão e Controle nas Quadras Eleve seu desempenho com a Chuteira Futsal Nike Total 90 III, desenvolvida para proporcionar máximo controle, precisão e conforto nas quadras indoor.";

const productHighlights = [
	"Ajuste perfeito e suporte premium para dribles rápidos.",
	"Sola de borracha non-marking com excelente aderência.",
	"Movimentação estável e segura em superfícies lisas.",
	"Design icônico e alta durabilidade para desempenho e estilo.",
];

const Home = () => {
	return (
		<main className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-2 font-family">
			<nav className="w-full max-w-4xl mb-6">
				<SiteBreadcrumb items={breadcrumbItems} />
			</nav>
			<section className="w-full max-w-7xl bg-white rounded-xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
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
