import { HeaderLinkType, PopularCategory } from "./types";
import { Heart, ShoppingBag } from "lucide-react";

export const headerLinks: HeaderLinkType[] = [
	{
		href: "/wishlist",
		icon: Heart,
	},
	{
		href: "/orders",
		icon: ShoppingBag,
	},
	// {
	// 	href: "/chat",
	// 	icon: MessageCircle,
	// },
];

export const popularCategories: PopularCategory[] = [
	{
		label: "Электроника",
		category: "electric",
		href: "/category/electric",
		imgSrc: "./categories/electronic.png",
	},
	{
		label: "Одежда",
		category: "clothes",
		href: "/category/clothes",
		imgSrc: "./categories/clothes.png",
	},
	{
		label: "Обувь",
		category: "shoes",
		href: "/category/shoes",
		imgSrc: "./categories/shoes.png",
	},
	{
		label: "Автотовары",
		category: "autoproducts",
		href: "/category/autoproducts",
		imgSrc: "./categories/acc.png",
	},
	{
		label: "Строительство",
		category: "build",
		href: "/category/build",
		imgSrc: "./categories/building.png",
	},
	{
		label: "Аксессуары",
		category: "others",
		href: "/category/others",
		imgSrc: "./categories/accses.png",
	},
];

export const noShopImage = "/noShopImage.jpg";
export const noShopBanner = "/defaultBg.jfif";

export const motionVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
