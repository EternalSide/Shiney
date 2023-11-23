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
