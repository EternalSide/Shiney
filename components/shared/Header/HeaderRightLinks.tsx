"use client";
import Korzina from "@/components/actions/Korzina";
import {Button} from "@/components/ui/button";
import {headerLinks} from "@/constants";
import {HeaderLinkType} from "@/constants/types";
import {SignedIn, SignedOut, UserButton, useAuth} from "@clerk/nextjs";
import {UserPlus} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

const HeaderRightLinks = () => {
	const [korzinaOpen, setKorzinaOpen] = useState(false);

	return (
		<div className='flex gap-3 max-lg:hidden'>
			{headerLinks.map((item: HeaderLinkType) => (
				<Link
					key={item.href}
					href={item.href}
				>
					<Button
						variant='mainPage'
						className='hover:border-sky-500'
					>
						<item.icon className='text-[#252525] h-5 w-5' />
					</Button>
				</Link>
			))}

			{/* Логин */}
			<SignedOut>
				<Link href='/login'>
					<Button
						variant='mainPage'
						className=' hover:border-sky-500'
					>
						<UserPlus className='text-[#252525] h-5 w-5' />
					</Button>
				</Link>
			</SignedOut>

			<SignedIn>
				<Korzina
					open={korzinaOpen}
					setOpen={setKorzinaOpen}
				/>
				<UserButton
					appearance={{
						elements: {
							userButtonAvatarBox: "h-10 w-10",
						},
					}}
					afterSignOutUrl='/'
				/>
			</SignedIn>
		</div>
	);
};
export default HeaderRightLinks;
