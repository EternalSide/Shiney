import Image from "next/image";
import {Button} from "../ui/button";
import Link from "next/link";
import {LayoutList, X} from "lucide-react";

interface Props {
	open: boolean;
	setOpen: (action: boolean) => void;
}

const CategoryLogoButton = ({open, setOpen}: Props) => {
	return (
		<div className='!z-[21] flex items-center gap-1 relative h-full'>
			<Link
				className='flex items-center'
				href='/'
			>
				<div className='relative header__button mr-0.5'>
					<Image
						className='object-cover object-center'
						src='/logo.png'
						alt='Shiney'
						fill
					/>
				</div>
			</Link>
			<Button
				onClick={() => (open ? setOpen(false) : setOpen(true))}
				className='bg-[#f4f5fa] hover:[#f2f5fa] py-0 no-focus h-12 gap-1'
			>
				<div className='w-[30px] relative flex justify-center items-center h-8'>
					{open ? (
						<X className='text-sky-500 h-6 w-6' />
					) : (
						<LayoutList className='text-sky-500 h-5 w-5' />
					)}
				</div>
				<p className='font-semibold text-base text-sky-500'>Категории</p>
			</Button>
		</div>
	);
};
export default CategoryLogoButton;
