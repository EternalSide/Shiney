import {Button} from "@/components/ui/button";
import {Sparkles} from "lucide-react";
import Link from "next/link";

const HeaderLogo = () => {
	return (
		<div className='flex items-center gap-3 max-lg:hidden'>
			<Button className='bg-[#f2f5fa] hover:bg-[#e2e4ee]'>
				<Sparkles className='text-blue-700 h-5 w-5' />
			</Button>
			<Link href='/'>
				<h1 className='font-extrabold text-blue-600 text-5xl'>
					<span className='text-green-500'>P</span>e
					<span className='text-green-500'>pp</span>e
				</h1>
			</Link>
		</div>
	);
};
export default HeaderLogo;
