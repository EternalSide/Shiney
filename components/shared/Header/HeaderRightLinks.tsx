import {Button} from "@/components/ui/button";
import {headerLinks} from "@/constants";
import {HeaderLinkType} from "@/constants/types";
import {SignedIn, SignedOut, UserButton, auth} from "@clerk/nextjs";
import {ShoppingCart, UserPlus} from "lucide-react";
import Link from "next/link";

const HeaderRightLinks = () => {
	const {userId} = auth();

	return (
		<div className='flex gap-3 max-lg:hidden'>
			{headerLinks.map((item: HeaderLinkType) => (
				<Link
					key={item.href}
					href={item.href}
				>
					<Button
						variant='mainPage'
						className='hover:border-blue-700'
					>
						<item.icon className='text-[#252525] h-5 w-5' />
					</Button>
				</Link>
			))}
			<SignedOut>
				<Link href='/login'>
					<Button
						variant='mainPage'
						className=' hover:border-blue-700'
					>
						<UserPlus className='text-[#252525] h-5 w-5' />
					</Button>
				</Link>
			</SignedOut>
			<SignedIn>
				<Link href='/login'>
					<Button
						variant='mainPage'
						className=' hover:border-blue-700'
					>
						<ShoppingCart className='text-[#252525] h-5 w-5' />
					</Button>
				</Link>
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
