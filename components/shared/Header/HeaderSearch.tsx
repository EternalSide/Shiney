"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Search, ChevronRight, X} from "lucide-react";
import Image from "next/image";
import {useRef, useState} from "react";

const HeaderSearch = () => {
	const [searchValue, setSearchValue] = useState("");

	const searchRef = useRef(null);

	return (
		<>
			<div
				ref={searchRef}
				className={`flex-1 bg-[#f4f5fa] relative rounded-xl flex items-center justify-between lg:mr-4 ${
					searchValue && " z-[32]"
				}`}
			>
				<Button
					variant='mainPage'
					className='ml-1 flex items-center gap-1.5 w-40 !px-0 border-transparent'
				>
					<Image
						alt='header icon'
						width={24}
						height={24}
						src='/logo.png'
						className='object-cover rounded-full'
					/>
					<p className='text-sky-500 font-semibold max-md:hidden'>Везде</p>
					<ChevronRight className='text-neutral-700 h-4 w-4' />
				</Button>
				<Input
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
					value={searchValue}
					placeholder='Глобальный поиск в Shiney...'
					className='bg-transparent border-none placeholder:text-zinc-900 font-medium'
				/>
				<div className='flex items-center gap-1'>
					{searchValue ? (
						<Button
							onClick={() => setSearchValue("")}
							variant='mainPage'
							className='mr-1 border-transparent'
						>
							<X className='text-sky-500 h-4 w-4' />
						</Button>
					) : (
						<div className='bg-transparent w-[54px]' />
					)}
					<Button
						onClick={() => {
							if (searchValue) {
								// make search
							}
						}}
						variant='mainPage'
						className='mr-1 border-transparent'
					>
						<Search className='text-sky-500 h-4 w-4' />
					</Button>
				</div>
			</div>
		</>
	);
};
export default HeaderSearch;
