import Image from "next/image";
import {Button} from "../ui/button";
import Link from "next/link";
import {LayoutList, X} from "lucide-react";

const CategoryLogoButton = ({active, setActive}: any) => {
	return (
		<div className='!z-[21] flex items-center gap-1 relative'>
			{active ? (
				<Button
					onClick={() => setActive(false)}
					className='bg-sky-400 !py-6 !z-[21] no-focus '
				>
					<X className='text-white h-6 w-6' />
				</Button>
			) : (
				<Button
					onClick={() => setActive(true)}
					className='bg-[#f4f5fa] hover:bg-[#fbf9f9] !py-6 no-focus '
				>
					<LayoutList className='text-sky-500 h-6 w-6' />
				</Button>
			)}
			<Link
				className='flex items-center'
				href='/'
			>
				<div className='relative h-14 w-14'>
					<Image
						className='object-cover object-center ml-0.5'
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
export default CategoryLogoButton;
