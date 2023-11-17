import {Button} from "@/components/ui/button";
import HeaderTopContent from "./HeaderTopContent";
import {Sparkles, Heart, ShoppingCart, UserPlus} from "lucide-react";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
const Header = () => {
	return (
		<header>
			<HeaderTopContent />
			<div className='flex items-center gap-6 max-w-[1420px] w-full mx-auto px-4 py-5  shadow-md shadow-[#00000005]'>
				<div className='flex items-center gap-2'>
					<Button className='bg-[#f2f5fa] hover:bg-[#e2e4ee]'>
						<Sparkles className='text-indigo-700 h-5 w-5' />
					</Button>
					<Link href='/'>
						<h1 className='font-extrabold text-indigo-500 text-4xl'>
							ChillZone
						</h1>
					</Link>
				</div>
				<HeaderSearch />

				<div className='flex gap-3'>
					<Link href='/'>
						<Button
							variant='mainPage'
							className=' hover:border-indigo-700'
						>
							<Heart className='text-[#252525] h-5 w-5' />
						</Button>
					</Link>
					<Link href='/'>
						<Button
							variant='mainPage'
							className=' hover:border-indigo-700'
						>
							<ShoppingCart className='text-[#252525] h-5 w-5' />
						</Button>
					</Link>
					<Link href='/'>
						<Button
							variant='mainPage'
							className=' hover:border-indigo-700'
						>
							<UserPlus className='text-[#252525] h-5 w-5' />
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
};
export default Header;
