import React from "react";

interface CustomCardProps {
	children: React.ReactNode;
	className?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
	children,
	className = "",
}) => {
	return (
		<div
			className={`custom-card cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm p-2 flex items-center justify-center text-sm font-semibold w-10 h-10 m-1 transition-all duration-200 ease-in-out z-0 hover:text-blue-600 hover:z-10 ${className}`}>
			{children}
		</div>
	);
};

export default CustomCard;
