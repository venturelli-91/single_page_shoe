export interface BreadcrumbItem {
	label: string;
	href?: string;
}
export interface SiteBreadcrumbProps {
	items?: BreadcrumbItem[];
	separator?: React.ReactNode;
	className?: string;
	ariaLabel?: string;
}
