"use client";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import OverlayMain from "./OverlayMain";
import KorzinaCard from "../cards/KorzinaCard";
import { useKorzina } from "@/hooks/useKorzina";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import KorzinaButton from "./KorzinaButton";
import { usePathname } from "next/navigation";
import { ILocalProduct } from "@/types";

const Korzina = () => {
	const [open, setOpen] = useState(false);
	const [hydration, setHydration] = useState(false);
	const korzinaRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const { products, removeProduct, updateProduct, clearAllProducts } = useKorzina();

	useEffect(() => {
		setHydration(true);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			// @ts-ignore
			if (
				korzinaRef &&
				korzinaRef.current &&
				// @ts-ignore
				!korzinaRef.current.contains(e.target) &&
				// @ts-ignore
				!e.target.closest(".KorzinaCard")
			) {
				return setOpen(false);
			}
		};

		const handleScroll = () => window.scrollTo(0, 0);

		const handleEscClick = (e: KeyboardEvent) => {
			if (e.key === "Escape") return setOpen(false);
		};

		document.addEventListener("click", handleOutsideClick);
		document.addEventListener("keydown", handleEscClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			document.removeEventListener("scroll", handleScroll);
			document.removeEventListener("keydown", handleEscClick);
		};
	}, [open, setOpen]);

	const totalPrice = products?.reduce(
		(total: number, product: ILocalProduct) => total + product.price * product.quantity,
		0
	);

	const zeroProducts = products?.length === 0;

	if (!hydration) return <KorzinaButton setOpen={setOpen} />;

	if (!open) return <KorzinaButton productsLength={products?.length} setOpen={setOpen} />;

	return (
		<>
			<OverlayMain zIndex="z-[50]" />
			<KorzinaButton productsLength={products?.length} setOpen={setOpen} />
			<div
				ref={korzinaRef}
				className="z-[60] w-[500px] absolute top-0 right-[52px] mt-[91px]"
			>
				<div className="relative py-6 bg-white  rounded-lg dark:bg-[#1d1f24]">
					<div className="flex justify-between items-center  px-6">
						<h3 className="font-semibold dark:text-white">Корзина</h3>
						<button onClick={clearAllProducts}>
							<p className="font-semibold text-neutral-400 text-sm dark:text-[#979797]">
								Очистить
							</p>
						</button>
					</div>
					<ScrollArea className={`${products?.length > 3 && "h-[412px]"}`}>
						<div className="flex flex-col gap-4 mt-6 px-6">
							{zeroProducts ? (
								<div className="flex py-4 text-center justify-center items-center text-zinc-400">
									<p> Товары отсутствуют...</p>
								</div>
							) : (
								products?.map((product: ILocalProduct) => (
									<KorzinaCard
										id={product.id}
										key={product.id}
										picture={product.picture!}
										title={product.title}
										description={product.description}
										quantity={1}
										price={product.price}
										removeProduct={removeProduct}
										updateProduct={updateProduct}
									/>
								))
							)}
						</div>
					</ScrollArea>
					<div className="mt-6 flex flex-col items-end gap-3 px-6">
						<h3 className="font-bold dark:text-white">Итого: {totalPrice} ₽</h3>
						{!zeroProducts && (
							<Link href="/cart">
								<Button variant="blue">В корзину</Button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Korzina;
