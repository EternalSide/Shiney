"use client";
import {Home, ShoppingBag, Sparkles, User} from "lucide-react";
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
			icon: Sparkles,
			href: "/asd",
		},
		{
			icon: ShoppingBag,
			href: "/asd",
		},
		{
			icon: User,
			href: "/asd",
		},
	];
	return (
		<div className='hidden max-lg:flex bg-white w-full h-16 fixed bottom-0  justify-center items-center'>
			<div className='flex items-center justify-between w-full px-24'>
				{mobileLinks.map((item: any) => {
					const isActive =
						pathname === item.href || pathname.includes(item.href);
					return (
						<Link
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
