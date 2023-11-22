import Image from "next/image";
import {Button} from "../ui/button";
import Link from "next/link";
import {LayoutList, X} from "lucide-react";

const CategoryLogoButton = ({active, setActive}: any) => {
	return (
		<div className='!z-[21] flex items-center gap-1 relative h-full'>
			{active ? (
				<Button
					onClick={() => setActive(false)}
					className='bg-sky-400 !py-6 !z-[21] no-focus p-0 w-12 h-12'
				>
					<X className='text-white h-6 w-6' />
				</Button>
			) : (
				<Button
					onClick={() => setActive(true)}
					className='bg-[#f4f5fa] hover:bg-[#fbf9f9] p-0 no-focus w-12 h-12'
				>
					<LayoutList className='text-sky-500 h-5 w-5' />
				</Button>
			)}
			<Link
				className='flex items-center'
				href='/'
			>
				<div className='relative h-12 w-12'>
					<Image
						className='object-cover object-center ml-0.5'
						src='/logo.png'
						alt='Shiney'
						fill
					/>
				</div>
			</Link>
		</div>
	);
};
export default CategoryLogoButton;
