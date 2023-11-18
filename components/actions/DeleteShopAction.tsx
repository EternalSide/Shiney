"use client";

import {useModal} from "@/hooks/useModal";
import {BookmarkX} from "lucide-react";

const DeleteShopAction = ({shopLink}: {shopLink: string}) => {
	const {onOpen} = useModal();
	return (
		<button
			onClick={() => onOpen("deleteShop", shopLink)}
			type='button'
		>
			<BookmarkX className='text-red-500' />
		</button>
	);
};
export default DeleteShopAction;
