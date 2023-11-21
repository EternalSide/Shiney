"use client";
import {ShoppingCart} from "lucide-react";
import {Button} from "../ui/button";
import {useRef} from "react";
import {usePathname} from "next/navigation";
import OverlayMain from "../shared/OverlayMain";
import KorzinaCard from "../cards/KorzinaCard";
import Link from "next/link";
import useClickOutside from "@/hooks/useClickOutside";
import {useKorzina} from "@/hooks/useKorzina";

interface Props {
	open: boolean;
	setOpen: (action: boolean) => void;
}

export interface ILocalProduct {
	image: string;
	id: string;
	title: string;
	description: string;
	quantity: number;
	price: number;
}

const KorzinaButton = ({setOpen}: any) => {
	return (
		<Button
			onClick={() => (setOpen ? setOpen(true) : () => {})}
			variant='mainPage'
			className=' hover:border-sky-500 relative'
		>
			<div className='absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-sky-500 text-white text-sm'>
				0
			</div>
			<ShoppingCart className='text-[#252525] h-5 w-5' />
		</Button>
	);
};

const Korzina = ({open, setOpen}: Props) => {
	const korzinaRef = useRef(null);
	const pathname = usePathname();

	useClickOutside({ref: korzinaRef, setOpen, pathname, open});

	const {products} = useKorzina();
	// const emptyKorzina = products.length === 0;

	// const totalPrice = products.reduce((total: number, product: ILocalProduct) => {
	// 	return total + product.price * product.quantity;
	// }, 0);

	if (!open) return <KorzinaButton setOpen={setOpen} />;

	return (
		<>
			<OverlayMain zIndex='z-[50]' />
			<KorzinaButton />
			<div
				ref={korzinaRef}
				className='z-[60] p-4 w-[500px] bg-white rounded-lg absolute top-0 right-[52px] mt-[91px]'
			>
				<div className='flex justify-between items-center'>
					<h3 className='font-semibold'>Корзина</h3>
					<button>
						<p className='font-semibold text-neutral-400 text-sm'>Очистить</p>
					</button>
				</div>

				<div className='mt-4 flex flex-col gap-4'>
					{[0, 1, 2].map((_, item: any) => {
						return (
							<KorzinaCard
								id={item.id}
								key={item.id}
								image={item.image}
								title={item.title}
								description={item.description}
								quantity={item.quantity}
								price={item.price}
							/>
						);
					})}
				</div>

				<div className='mt-6 flex flex-col items-end gap-3'>
					{/* <h3 className='font-bold'>Итого: {totalPrice} ₽</h3> */}
					<h3 className='font-bold'>Итого: 2 000 ₽</h3>
					<Link href='/'>
						<Button variant='blue'>В корзину</Button>
					</Link>
				</div>
			</div>
		</>
	);
};
export default Korzina;
