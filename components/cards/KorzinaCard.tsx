"use client";
import {Minus, Plus, X} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Input} from "../ui/input";
import {useState} from "react";
import {ILocalProduct} from "@/types";

interface Props extends ILocalProduct {
	removeProduct: (id: string) => void;
	updateProduct: (productId: string, data: any) => void;
}

const KorzinaCard = ({
	image,
	title,
	description,
	quantity = 1,
	price,
	removeProduct,
	updateProduct,
	id,
}: Props) => {
	const [localQuantity, setLocalQuantity] = useState(quantity);
	const [totalProductPrice, setTotalProductPrice] = useState(price * quantity);

	const changeQuantity = (action: "plus" | "minus") => {
		setLocalQuantity((prev) => (action === "minus" ? prev - 1 : prev + 1));
		setTotalProductPrice(() =>
			action === "minus" ? totalProductPrice - price : totalProductPrice + price
		);
		updateProduct(id, {
			quantity: action === "minus" ? localQuantity - 1 : localQuantity + 1,
		});
	};

	return (
		<div className='flex justify-between w-full items-start border-b py-3'>
			<div className='flex items-center gap-1.5'>
				<Link href={"/"}>
					<div className='h-14 w-14 relative'>
						<Image
							fill
							alt={title}
							className='object-cover object-center rounded-lg'
							src={image || ""}
						/>
					</div>
				</Link>
				<div>
					<Link href={"/"}>
						<h3 className='font-semibold hover:text-sky-500 transition'>
							{title}
						</h3>
					</Link>
					<p className='mt-0.5 text-xs text-[#626d7a] font-medium line-clamp-1 max-w-[250px]'>
						{description}
					</p>
				</div>
			</div>
			<div className='flex flex-col items-end'>
				<p className='font-bold text-sm'>{totalProductPrice} ₽</p>
				<div className='mt-3 flex items-center gap-3'>
					<div className='border px-2.5 py-1.5 rounded-lg flex items-center justify-center cursor-default'>
						<button
							onClick={() => localQuantity !== 1 && changeQuantity("minus")}
						>
							<Minus className='h-5 w-5 text-[#caccd8] hover:text-blue-500 transition disabled:cursor-default' />
						</button>
						<Input
							className='px-0 text-center border-none !text-black h-4 w-[40px]'
							value={localQuantity}
						/>
						<button onClick={() => changeQuantity("plus")}>
							<Plus className='h-5 w-5 text-[#caccd8] hover:text-blue-500 transition' />
						</button>
					</div>
					<button onClick={() => removeProduct(id)}>
						<X className='h-5 w-5 text-[#caccd8] hover:text-red-500 transition' />
					</button>
				</div>
			</div>
		</div>
	);
};
export default KorzinaCard;
