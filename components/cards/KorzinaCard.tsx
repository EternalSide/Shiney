"use client";
import {Minus, Plus, X} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Input} from "../ui/input";
import {useState} from "react";

const KorzinaCard = () => {
	const [quantity, setQuantity] = useState(1);
	const price = 1022;
	const [totalProductPrice, setTotalProductPrice] = useState(price);

	return (
		<div className='flex justify-between w-full items-start border-b pb-3'>
			<div className='flex items-center gap-1.5'>
				<Link href={"/"}>
					<div className='h-14 w-14 relative'>
						<Image
							fill
							alt='фыв'
							className='object-cover object-center rounded-lg'
							src='https://i.pinimg.com/736x/f1/21/4c/f1214c288fe0f3c2b9c6da46220070e5.jpg'
						/>
					</div>
				</Link>
				<div>
					<Link href={"/"}>
						<h3 className='font-semibold hover:text-sky-500 transition'>
							Портрет Даши Каплан
						</h3>
					</Link>
					<p className='text-xs text-[#626d7a] font-medium line-clamp-1'>
						205f ( c подставкой для ног) - Белый
					</p>
				</div>
			</div>
			<div className='flex flex-col items-end'>
				<p className='font-bold text-sm'>{totalProductPrice} ₽</p>
				<div className='mt-3 flex items-center gap-3'>
					<div className='border px-2.5 py-1.5 rounded-lg flex items-center justify-center cursor-default'>
						<button
							onClick={() => {
								if (quantity !== 1) {
									setQuantity((prev) => prev - 1);
									setTotalProductPrice((prev) => totalProductPrice - price);
								}
							}}
							className='cursor-pointer'
						>
							<Minus className='h-5 w-5 text-[#caccd8] hover:text-blue-500 transition disabled:cursor-default' />
						</button>
						<Input
							className='bg-transparent border-none  !text-black h-4 w-[40px]'
							value={quantity}
						/>
						<button
							onClick={() => {
								setQuantity((prev) => prev + 1);
								setTotalProductPrice((prev) => totalProductPrice + price);
							}}
							className='cursor-pointer'
						>
							<Plus className='h-5 w-5 text-[#caccd8] hover:text-blue-500 transition' />
						</button>
					</div>
					<button>
						<X className='h-5 w-5 text-[#caccd8] hover:text-red-500 transition' />
					</button>
				</div>
			</div>
		</div>
	);
};
export default KorzinaCard;
