import {LucideIcon} from "lucide-react";

export type HeaderTopLinkType = {
	label: string;
	href: string;
};

export interface HeaderSupportLink extends HeaderTopLinkType {
	icon: LucideIcon;
}

export type HeaderLinkType = {
	href: string;
	icon: LucideIcon;
};

export interface PopularCategory extends HeaderTopLinkType {
	category: string;
	imgSrc: string;
}
