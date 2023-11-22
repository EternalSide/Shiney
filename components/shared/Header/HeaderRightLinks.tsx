"use client";
import Korzina from "@/components/actions/Korzina";
import {Button} from "@/components/ui/button";
import {headerLinks} from "@/constants";
import {HeaderLinkType} from "@/constants/types";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {UserPlus} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

const HeaderRightLinks = () => {
	const [korzinaOpen, setKorzinaOpen] = useState(false);
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
							className={`w-12 h-12 p-0 ${
								!isActive && "hover:border-sky-300"
							} ${isActive && "border-sky-300"}`}
						>
							<item.icon className='text-[#252525] h-5 w-5' />
						</Button>
					</Link>
				);
			})}

			<Korzina
				open={korzinaOpen}
				setOpen={setKorzinaOpen}
			/>

			<SignedIn>
				<UserButton
					appearance={{
						elements: {
							userButtonAvatarBox: "h-12 w-12 no-focus",
						},
					}}
					afterSignOutUrl='/'
				/>
			</SignedIn>
		</div>
	);
};
export default HeaderRightLinks;
