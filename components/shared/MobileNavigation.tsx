"use client";
import {
	Home,
	ShoppingBag,
	ShoppingCart,
	Sparkles,
	Store,
	User,
} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const MobileNavigation = () => {
	const pathname = usePathname();
	const mobileLinks = [
		{
			icon: Home,
			href: "/",
		},

		{
			icon: Store,
			href: "/shops",
		},
		{
			icon: ShoppingCart,
			href: "/korzina",
		},
	];
	return (
		<div className='hidden max-lg:flex bg-white w-full h-16 fixed bottom-0  justify-center items-center'>
			<div className='flex items-center justify-between w-full px-20'>
				{mobileLinks.map((item: any) => {
					const isActive = pathname === item.href;
					return (
						<Link
							key={item.href}
							className='relative'
							href={item.href}
						>
							<item.icon
								className={`h-5 w-5 text-[#373737] ${
									isActive && "!text-blue-700"
								}`}
							/>
							{isActive && (
								<div className='absolute -bottom-4 bg-blue-700 h-0.5 w-full' />
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
export default MobileNavigation;
