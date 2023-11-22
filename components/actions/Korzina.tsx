"use client";
import {ShoppingCart} from "lucide-react";
import {Button} from "../ui/button";
import {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import OverlayMain from "../shared/OverlayMain";
import KorzinaCard from "../cards/KorzinaCard";
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

const KorzinaButton = ({setOpen, productsLength}: any) => {
	return (
		<Button
			onClick={() => (setOpen ? setOpen(true) : () => {})}
			variant='mainPage'
			className=' hover:border-sky-500 relative p-0 w-12 h-12'
		>
			{Boolean(productsLength) && (
				<div className='absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-sky-500 text-white text-sm'>
					{productsLength}
				</div>
			)}
			<ShoppingCart className='text-[#252525] h-5 w-5' />
		</Button>
	);
};

const Korzina = ({open, setOpen}: Props) => {
	const [hydration, setHydration] = useState(false);

	useEffect(() => {
		setHydration(true);
	}, []);

	const korzinaRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const {products, removeProduct, updateProduct, clearAllProducts, addProduct} =
		useKorzina();

	useClickOutside({
		ref: korzinaRef,
		setOpen,
		pathname,
		open,
	});

	const totalPrice = products?.reduce((total: number, product: any) => {
		return total + product.price * product.quantity;
	}, 0);

	if (!hydration) return <KorzinaButton setOpen={setOpen} />;

	if (!open)
		return (
			<KorzinaButton
				productsLength={products?.length}
				setOpen={setOpen}
			/>
		);

	return (
		<>
			<OverlayMain zIndex='z-[50]' />
			<KorzinaButton productsLength={products?.length} />
			<div className='z-[60] p-4 w-[500px] bg-white rounded-lg absolute top-0 right-[52px] mt-[91px]'>
				<div
					ref={korzinaRef}
					className='relative'
				>
					<div className='flex justify-between items-center'>
						<h3 className='font-semibold'>Корзина</h3>
						<button onClick={clearAllProducts}>
							<p className='font-semibold text-neutral-400 text-sm'>Очистить</p>
						</button>
					</div>

					<div className='mt-4 flex flex-col gap-4'>
						{products?.length === 0 ? (
							<div className='text-center text-zinc-400'>
								Товары отсутствуют
							</div>
						) : (
							products?.map((item: any) => {
								return (
									<KorzinaCard
										id={item.id}
										key={item.id}
										image={item.picture}
										title={item.title}
										description={item.description}
										quantity={item.quantity}
										price={item.price}
										removeProduct={removeProduct}
										updateProduct={updateProduct}
									/>
								);
							})
						)}
					</div>
					<div className='mt-6 flex flex-col items-end gap-3'>
						<h3 className='font-bold'>Итого: {totalPrice} ₽</h3>
						{/* <Link href='/'>
						<Button variant='blue'>В корзину</Button>
					</Link> */}
					</div>
				</div>
			</div>
		</>
	);
};
export default Korzina;
