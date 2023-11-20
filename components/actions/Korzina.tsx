"use client";
import {ShoppingCart} from "lucide-react";
import {Button} from "../ui/button";
import {useEffect, useRef} from "react";
import {usePathname} from "next/navigation";
import OverlayMain from "../shared/OverlayMain";
import KorzinaCard from "../cards/KorzinaCard";
import Link from "next/link";

interface Props {
	open: boolean;
	setOpen: (action: boolean) => void;
}

const Korzina = ({open, setOpen}: Props) => {
	const korzinaRef = useRef(null);
	const pathname = usePathname();
	// const {} = useKorzina()

	useEffect(() => {
		const handleOutsideClick = (event: any) => {
			// @ts-ignore
			if (korzinaRef.current && !korzinaRef.current.contains(event.target)) {
				setOpen(false);
			}
		};
		const handleScroll = (e: any) => {
			window.scrollTo(0, 0);
		};

		document.addEventListener("click", handleOutsideClick);

		if (open) {
			document.addEventListener("scroll", handleScroll);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			document.removeEventListener("scroll", handleScroll);
		};
	}, [korzinaRef, pathname, open]);

	if (!open)
		return (
			<Button
				onClick={() => setOpen(true)}
				variant='mainPage'
				className=' hover:border-sky-500 relative'
			>
				<div className='absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-sky-500 text-white text-sm'>
					0
				</div>
				<ShoppingCart className='text-[#252525] h-5 w-5' />
			</Button>
		);

	return (
		<>
			<OverlayMain zIndex='z-[50]' />
			<Button
				variant='mainPage'
				className=' hover:border-sky-500 relative'
			>
				<div className='absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-sky-500 text-white text-sm'>
					0
				</div>
				<ShoppingCart className='text-[#252525] h-5 w-5' />
			</Button>
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
				<div className='mt-4'>
					<KorzinaCard />
				</div>
				<div className='mt-6 flex flex-col items-end gap-3'>
					{/* Сложить цену всех товаров. */}
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
