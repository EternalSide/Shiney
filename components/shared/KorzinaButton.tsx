"use client";

import {ShoppingCart} from "lucide-react";
import {Button} from "../ui/button";

interface Props {
	setOpen?: (action: boolean) => void;
	productsLength?: number;
}

const KorzinaButton = ({setOpen, productsLength}: Props) => {
	return (
		<Button
			onClick={() => (setOpen ? setOpen(true) : () => {})}
			variant='mainPage'
			className=' hover:border-sky-500 relative p-0 header__button'
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
export default KorzinaButton;
