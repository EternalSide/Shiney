"use client";
import Link from "next/link";
import {Button} from "../ui/button";
import {MailQuestion, Star, Store} from "lucide-react";
import {usePathname} from "next/navigation";

const ShopLinks = ({shopLink}: {shopLink: string}) => {
	const links = [
		{
			label: "Товары",
			icon: Store,
			href: `/shop/${shopLink}/`,
			value: "/",
		},
		{
			label: "Отзывы",
			icon: Star,
			href: `/shop/${shopLink}/reviews`,
			value: "reviews",
		},
		{
			label: "О нас",
			icon: MailQuestion,
			href: `/shop/${shopLink}/about`,
			value: "about",
		},
	];

	const pathname = usePathname();

	return (
		<div className='flex gap-3'>
			{links.map((link: any) => {
				const isActive = () => {
					let status;
					if (link.value === "about" || link.value === "reviews") {
						status = pathname.includes(link.value);
					} else {
						status =
							!pathname.includes("about") && !pathname.includes("reviews");
					}
					return status;
				};

				return (
					<Link
						key={link.label}
						href={link.href}
					>
						<Button
							className={`font-semibold text-base bg-sky-100 text-sky-500 gap-2.5 px-6 py-3 min-w-[150px] ${
								isActive() && "bg-sky-400 text-white"
							}`}
						>
							<link.icon className='h-5 w-5' />
							{link.label}
						</Button>
					</Link>
				);
			})}
		</div>
	);
};
export default ShopLinks;
