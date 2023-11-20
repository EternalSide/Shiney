"use client";
import {Minus, Plus, X} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Input} from "../ui/input";
import {useState} from "react";
import {ILocalProduct} from "../actions/Korzina";

interface Props extends ILocalProduct {}

const KorzinaCard = ({
	image,
	title,
	description,
	quantity = 1,
	price = 1222,
}: Props) => {
	const [quantityS, setQuantityS] = useState(1);
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
					<p className='mt-0.5 text-xs text-[#626d7a] font-medium line-clamp-1 max-w-[250px]'>
						Какое-то описание товара
					</p>
				</div>
			</div>
			<div className='flex flex-col items-end'>
				<p className='font-bold text-sm'>{totalProductPrice} ₽</p>
				<div className='mt-3 flex items-center gap-3'>
					<div className='border px-2.5 py-1.5 rounded-lg flex items-center justify-center cursor-default'>
						<button
							onClick={() => {
								if (quantityS !== 1) {
									setQuantityS((prev) => prev - 1);
									setTotalProductPrice((prev) => totalProductPrice - price);
								}
							}}
							className='cursor-pointer'
						>
							<Minus className='h-5 w-5 text-[#caccd8] hover:text-blue-500 transition disabled:cursor-default' />
						</button>
						<Input
							className='px-0 text-center border-none  !text-black h-4 w-[40px]'
							value={quantityS}
						/>
						<button
							onClick={() => {
								setQuantityS((prev) => prev + 1);
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
