import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Search, ChevronRight} from "lucide-react";
import Image from "next/image";
const HeaderSearch = () => {
	return (
		<div className='flex-1 bg-[#f4f5fa] relative rounded-xl flex items-center justify-between'>
			<Button
				variant='mainPage'
				className='ml-1 flex items-center gap-1.5 w-40 !px-0'
			>
				<Image
					alt='header icon'
					width={24}
					height={24}
					src='/headericon.jfif'
					className='object-cover rounded-full'
				/>
				<p className='text-indigo-500 font-semibold'>Везде</p>
				<ChevronRight className='text-neutral-700 h-4 w-4' />
			</Button>
			<Input
				placeholder='Глобальный поиск в Peppe..'
				className='bg-transparent border-none placeholder:text-zinc-900 font-medium'
			/>
			<Button
				variant='mainPage'
				className='mr-1'
			>
				<Search className='text-indigo-700 h-4 w-4' />
			</Button>
		</div>
	);
};
export default HeaderSearch;
