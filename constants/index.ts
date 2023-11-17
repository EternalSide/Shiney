import {HeaderLinkType, HeaderTopLinkType} from "./types";
import {Heart, ShoppingBag, ShoppingCart, UserPlus} from "lucide-react";

export const headerTopLinks: HeaderTopLinkType[] = [
	{
		label: "Войти",
		href: "/login",
	},
	{
		label: "Управление магазинами",
		href: "/shops",
	},
	{
		label: "Новинки",
		href: "/new",
	},
	{
		label: "Для продавцов",
		href: "/for-sellers",
	},
	{
		label: "Помощь",
		href: "/help",
	},
];

export const headerLinks: HeaderLinkType[] = [
	{
		href: "/",
		icon: Heart,
	},
	{
		href: "/",
		icon: ShoppingBag,
	},
];
