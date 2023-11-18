"use client";
import {Check, Star} from "lucide-react";
import {Button} from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import {useModal} from "@/hooks/useModal";

interface Props {
	shopName: String;
}

const ShopHeader = ({shopName}: Props) => {
	const {onOpen} = useModal();
	return (
		<div className='p-6 flex justify-between max-lg:flex-col max-lg:gap-6 bg-white rounded-tr-none rounded-tl-none'>
			<div className='flex items-center gap-3 '>
				<button
					onClick={() => {
						onOpen(
							"shopAvatar",
							"https://i.pinimg.com/564x/eb/3b/46/eb3b46dbd475a0a01f0fa6ed15c36986.jpg"
						);
					}}
					className='h-28 w-28 relative -mt-24 border-[4px] border-white rounded-full'
				>
					<Image
						className='rounded-full object-cover object-center hover:scale-105 transition'
						src='https://i.pinimg.com/564x/eb/3b/46/eb3b46dbd475a0a01f0fa6ed15c36986.jpg'
						alt='bg'
						fill
					/>
				</button>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center gap-1'>
						<h1 className='font-bold text-2xl'>{shopName}</h1>
						<Check className='text-blue-500' />
					</div>
					<div className='flex items-center gap-1.5'>
						<Star
							className='h-4 w-4 text-orange-400 '
							fill='orange'
						/>
						<div className='flex items-center gap-3'>
							<p className='font-semibold text-gray-400 text-sm'>
								<span className='text-orange-400'>5.00 </span>
							</p>
							<Link href='/'>
								<p className='font-semibold text-sky-500 text-sm'>
									666 Отзывов
								</p>
							</Link>
						</div>
					</div>
					<p className='text-sm font-semibold'>
						На <span className='text-sky-500 font-bold'>Shiney</span> с января
						2022
					</p>
				</div>
			</div>
			<div className='flex items-start gap-10'>
				<div className='text-center mt-1'>
					<h3 className='font-bold'>32000 ~ </h3>
					<p className='text-zinc-600 text-xs font-semibold mt-1'>Покупок</p>
				</div>
				<div className='text-center  mt-1'>
					<h3 className='font-bold'>1M +</h3>
					<p className='text-zinc-600 text-xs font-semibold mt-1'>
						Подписчиков
					</p>
				</div>
				<Button
					variant='blue'
					className='!px-10'
				>
					Подписаться
				</Button>
			</div>
		</div>
	);
};
export default ShopHeader;
