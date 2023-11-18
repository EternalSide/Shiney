import {Button} from "@/components/ui/button";
import {Sparkles} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
	return (
		<div className='flex items-center gap-2 max-lg:hidden'>
			<Button className='bg-[#f2f5fa] hover:bg-[#e2e4ee]'>
				<Sparkles className='text-sky-500 h-5 w-5' />
			</Button>
			<Link
				className='flex items-center'
				href='/'
			>
				<div className='relative h-14 w-14'>
					<Image
						className='object-cover object-center'
						src='/favicon.png'
						alt='logo'
						fill
					/>
				</div>
				<h1 className='font-extrabold text-sky-500 text-5xl'>hiney</h1>
			</Link>
		</div>
	);
};
export default HeaderLogo;
