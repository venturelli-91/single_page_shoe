import React from "react";

interface CustomButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

const baseClass =
	"text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-38 my-12 transition-all";

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	className = "",
	...props
}) => {
	return (
		<button
			type="button"
			className={`${baseClass} ${className}`}
			{...props}>
			{children}
		</button>
	);
};

export default CustomButton;
