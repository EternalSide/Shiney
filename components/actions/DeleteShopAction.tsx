"use client";
import {useModal} from "@/hooks/useModal";
import {BookmarkX, X} from "lucide-react";
import {Button} from "../ui/button";

interface Props {
	shopLink: string;
	adminPage?: boolean;
}

const DeleteShopAction = ({shopLink, adminPage}: Props) => {
	const {onOpen} = useModal();

	if (adminPage) {
		return (
			<Button
				onClick={() => onOpen("deleteShop", shopLink)}
				className='h-20 bg-transparent text-black text-xl justify-start gap-5 font-semibold border border-sky-400'
			>
				<X className='h-9 w-9 text-red-500' />
				Удалить
			</Button>
		);
	}

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
