import {HeaderLinkType} from "./types";
import {Heart, ShoppingBag} from "lucide-react";

export const headerLinks: HeaderLinkType[] = [
	{
		href: "/wishlist",
		icon: Heart,
	},
	{
		href: "/orders",
		icon: ShoppingBag,
	},
];

export const popularCategories = [
	{
		label: "Электроника",
		category: "electric",
		href: "/category/electric",
		imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/1.png",
	},
	{
		label: "Одежда",
		category: "clothes",
		href: "/category/clothes",
		imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/2.png",
	},
	{
		label: "Обувь",
		category: "shoes",
		href: "/category/shoes",
		imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/3.png",
	},
	{
		label: "Автотовары",
		category: "autoproducts",
		href: "/category/autoproducts",
		imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/4.png",
	},
	{
		label: "Строительство",
		category: "build",
		href: "/category/build",
		imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/5.png",
	},
	{
		label: "Аксессуары",
		category: "others",
		href: "/category/others",
		imgSrc: "https://wikkeo.com/assets/front/images/popularCategories/6.png",
	},
];
