"use client";
import {Button} from "../ui/button";
import {useEffect, useRef, useState} from "react";
import OverlayMain from "./OverlayMain";
import KorzinaCard from "../cards/KorzinaCard";
import useClickOutside from "@/hooks/useClickOutside";
import {useKorzina} from "@/hooks/useKorzina";
import Link from "next/link";
import {ScrollArea} from "@/components/ui/scroll-area";
import {ILocalProduct} from "@/types";
import KorzinaButton from "./KorzinaButton";
import {usePathname} from "next/navigation";

const Korzina = () => {
	const [hydration, setHydration] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setHydration(true);
	}, []);

	const korzinaRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const {products, removeProduct, updateProduct, clearAllProducts} =
		useKorzina();

	useClickOutside({
		ref: korzinaRef,
		setOpen,
		open,
		korzina: true,
	});

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	const totalPrice = products?.reduce((total: number, product: any) => {
		return total + product.price * product.quantity;
	}, 0);

	const zeroProducts = products?.length === 0;

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
			<div className='z-[60] w-[500px] bg-white rounded-lg absolute top-0 right-[52px] mt-[91px]'>
				<div
					ref={korzinaRef}
					className='relative py-6'
				>
					<div className='flex justify-between items-center  px-6'>
						<h3 className='font-semibold'>Корзина</h3>
						<button onClick={clearAllProducts}>
							<p className='font-semibold text-neutral-400 text-sm'>Очистить</p>
						</button>
					</div>
					<ScrollArea className={`${products?.length > 3 && "h-[412px]"}`}>
						<div className='flex flex-col gap-4 mt-6 px-6'>
							{zeroProducts ? (
								<div className='flex py-4 text-center justify-center items-center text-zinc-400'>
									<p> Товары отсутствуют...</p>
								</div>
							) : (
								products?.map((item: ILocalProduct | any) => (
									<KorzinaCard
										id={item.id}
										key={item.id}
										image={item.picture!}
										title={item.title}
										description={item.description}
										quantity={item.quantity}
										price={item.price}
										removeProduct={removeProduct}
										updateProduct={updateProduct}
									/>
								))
							)}
						</div>
					</ScrollArea>
					<div className='mt-6 flex flex-col items-end gap-3 px-6'>
						<h3 className='font-bold'>Итого: {totalPrice} ₽</h3>
						{!zeroProducts && (
							<Link href='/cart'>
								<Button variant='blue'>В корзину</Button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Korzina;
