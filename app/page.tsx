"use client";
import React from "react";
import SiteBreadcrumb from "./components/shared/breadcrumb/SiteBreadcrumb";
import ProductCarousel from "./components/shared/carousel/ProductCarousel";

const Home = () => {
	return (
		<>
			<main className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-2">
				<nav className="w-full max-w-4xl mb-6">
					<SiteBreadcrumb />
				</nav>
				<ProductCarousel />
			</main>
		</>
	);
};

export default Home;
