import React from "react";
import {
	BreadcrumbItem,
	SiteBreadcrumbProps,
} from "@/app/types/components/breadcrumb/breadcrumb";

const defaultItems: BreadcrumbItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Tênis", href: "/#tenis" },
	{ label: "Total 90" },
];

const defaultSeparator = (
	<svg
		className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 6 10">
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="m1 9 4-4-4-4"
		/>
	</svg>
);

const SiteBreadcrumb: React.FC<SiteBreadcrumbProps> = ({
	items = defaultItems,
	separator = defaultSeparator,
	className = "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700",
	ariaLabel = "Breadcrumb",
}) => {
	return (
		<nav
			className={className}
			aria-label={ariaLabel}>
			<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
				{items.map((item, idx) => (
					<li
						key={item.label + idx}
						className="inline-flex items-center"
						aria-current={idx === items.length - 1 ? "page" : undefined}>
						{idx > 0 && <span>{separator}</span>}
						{item.href && idx !== items.length - 1 ? (
							<a
								href={item.href}
								className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
								{item.label}
							</a>
						) : (
							<span className="text-sm font-medium text-gray-500 dark:text-gray-400">
								{item.label}
							</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default SiteBreadcrumb;
