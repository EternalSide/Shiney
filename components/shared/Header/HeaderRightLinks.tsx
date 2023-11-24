"use client";
import Korzina from "@/components/shared/Korzina";
import {Button} from "@/components/ui/button";
import {headerLinks} from "@/constants";
import {HeaderLinkType} from "@/constants/types";
import {SignedIn, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {usePathname} from "next/navigation";

const HeaderRightLinks = () => {
	const pathname = usePathname();

	return (
		<div className='flex gap-3 max-lg:hidden'>
			{headerLinks.map((item: HeaderLinkType) => {
				const isActive = pathname === item.href;
				return (
					<Link
						key={item.href}
						href={item.href}
					>
						<Button
							variant='mainPage'
							className={`header__button p-0 hover:border-sky-300
							 ${isActive && "border-sky-300"}`}
						>
							<item.icon className='text-[#252525] h-5 w-5' />
						</Button>
					</Link>
				);
			})}
			<Korzina />
			<SignedIn>
				<UserButton
					appearance={{
						elements: {
							userButtonAvatarBox: "header__button no-focus",
						},
					}}
					afterSignOutUrl='/'
				/>
			</SignedIn>
		</div>
	);
};
export default HeaderRightLinks;
